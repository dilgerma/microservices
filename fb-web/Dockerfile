FROM dilgerm/app-base

COPY /build/libs/fb-web-0.1.0.jar /sources/app.jar
#configure metrics
ADD metrics/hosts-invoices-ui.conf /opt/metrics/invoices-ui/
VOLUME /opt/metrics/invoices-ui
CMD java -jar /sources/app.jar
