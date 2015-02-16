FROM dilgerm/app-base

COPY /build/libs/fb-repository-0.1.0.jar /sources/app.jar
#configure metrics
ADD metrics/hosts-fb-backend-proxy.conf /opt/metrics/repository/
VOLUME /opt/metrics/repository/
CMD java -jar /sources/app.jar
