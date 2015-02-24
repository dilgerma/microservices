FROM dilgerm/app-base

COPY /build/libs/fb-customers-0.1.0.jar /sources/app.jar
#configure metrics
ADD metrics/hosts-customers-service.conf /opt/metrics/customers-service/
VOLUME /opt/metrics/customers-service/

# Install tools
CMD java -jar /sources/app.jar
