FROM dilgerm/app-base

COPY /build/libs/fb-invoices-0.1.0.jar /sources/app.jar
#configure metrics
ADD metrics/hosts-invoices-service.conf /opt/metrics/invoices-service/
VOLUME /opt/metrics/invoices-service/
# Install tools
CMD java -jar /sources/app.jar
