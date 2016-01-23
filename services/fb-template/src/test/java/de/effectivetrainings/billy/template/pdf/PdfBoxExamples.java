package de.effectivetrainings.billy.template.pdf;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.common.PDMetadata;
import org.apache.pdfbox.pdmodel.edit.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.junit.Ignore;
import org.junit.Test;

/**
 *
 */
@Ignore
public class PdfBoxExamples {

    @Test
    public void renderDocument() throws Exception {

        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        // Create a new font object selecting one of the PDF base fonts
        PDFont font = PDType1Font.HELVETICA_BOLD;

        // Start a new content stream which will "hold" the to be created content
        PDPageContentStream contentStream = new PDPageContentStream(document, page);

        // Define a text content stream using the selected font, moving the cursor and drawing the text "Hello World"
        contentStream.beginText();
        contentStream.setFont(font, 12);
        contentStream.moveTextPositionByAmount(100, 700);
        contentStream.drawString("Hello World");
        contentStream.endText();

        // Make sure that the content stream is closed:
        contentStream.close();

        // Save the results and ensure that the document is properly closed:
        document.save("/tmp/test2.pdf");
        document.close();
    }

    @Test
    public void loadDocument() throws Exception {
        PDDocument document = PDDocument.load("/tmp/cert.pdf");
        PDDocumentCatalog catalog = document.getDocumentCatalog();
        PDMetadata metadata = catalog.getMetadata();

        PDFont font = PDType1Font.HELVETICA_BOLD;


        // Start a new content stream which will "hold" the to be created content
        PDPageContentStream contentStream = new PDPageContentStream(document, (PDPage) catalog.getAllPages().get(0), true, true);

        contentStream.beginText();
        contentStream.setFont(font, 24);
        contentStream.moveTextPositionByAmount(230, 520);
        contentStream.drawString("Hans Mueller");
        contentStream.endText();

        contentStream.beginText();
               contentStream.setFont(font, 24);
               contentStream.moveTextPositionByAmount(230, 420);
               contentStream.drawString("05.05.2014");
               contentStream.endText();

        // Make sure that the content stream is closed:
        contentStream.close();

        // Save the results and ensure that the document is properly closed:
        document.save("/tmp/cert2.pdf");
        document.close();
    }

}
