FROM dilgerm/app-base

COPY /build/libs/fb-expenses-0.1.0.jar /sources/app.jar
#configure metrics
ADD metrics/hosts-expense-service.conf /opt/metrics/expense-service/
VOLUME /opt/metrics/expense-service/

# Install tools
CMD java -jar /sources/app.jar
