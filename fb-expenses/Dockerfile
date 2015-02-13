FROM ubuntu:14.04
#make sure the package repository is up to date
run apt-get update
run apt-get install -y less
run apt-get install -y software-properties-common
run apt-get install -y software-properties-common python-software-properties
run add-apt-repository -y ppa:webupd8team/java
run apt-get update
run echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 boolean true" | debconf-set-selections
run apt-get install -y oracle-java8-installer
#run apt-get -y install tomcat7
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV PATH $PATH:$JAVA_HOME/bin
#ENV fastbill.apiKey xyz
#run apt-get install -y unzip
run apt-get install -y curl
COPY /build/libs/fb-expenses-0.1.0.jar /sources/app.jar

#configure metrics
ADD metrics/hosts-expense-service.conf /opt/metrics/expense-service/
VOLUME /opt/metrics/expense-service/

# Install tools
CMD java -jar /sources/app.jar
