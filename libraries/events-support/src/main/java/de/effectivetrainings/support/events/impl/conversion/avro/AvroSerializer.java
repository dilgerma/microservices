package de.effectivetrainings.support.events.impl.conversion.avro;

import lombok.SneakyThrows;
import org.apache.avro.file.DataFileReader;
import org.apache.avro.file.DataFileWriter;
import org.apache.avro.file.SeekableByteArrayInput;
import org.apache.avro.generic.GenericDatumWriter;
import org.apache.avro.generic.GenericRecord;
import org.apache.avro.io.DatumReader;
import org.apache.avro.io.DatumWriter;
import org.apache.avro.specific.SpecificDatumReader;

import java.io.ByteArrayOutputStream;

public class AvroSerializer {

    @SneakyThrows
    public <T> T from(byte[] content) {
        DatumReader<T> userDatumReader = new SpecificDatumReader<>();
        DataFileReader<T> dataFileReader = new DataFileReader<T>(new SeekableByteArrayInput(content), userDatumReader);
       return dataFileReader.next();
    }

    @SneakyThrows
    public <U extends GenericRecord> byte[] to(U source) {
        DatumWriter<GenericRecord> datumWriter = new GenericDatumWriter<>(source.getSchema());
        DataFileWriter<GenericRecord> dataFileWriter = new DataFileWriter<>(datumWriter);
        ByteArrayOutputStream bout = new ByteArrayOutputStream();
        dataFileWriter.create(source.getSchema(), bout);
        dataFileWriter.append(source);
        dataFileWriter.close();

        return bout.toByteArray();
    }
}
