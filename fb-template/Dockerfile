FROM dilgerm/app-base

COPY /build/libs/fb-template-0.1.0.jar /sources/app.jar
#configure metrics
ADD metrics/hosts-templates-service.conf /opt/metrics/templates-service/
VOLUME /opt/metrics/templates-service/
# Install tools
CMD java -jar /sources/app.jar
