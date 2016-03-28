FROM dilgerm/app-base
COPY /build/libs/fb-invoices-0.1.0.jar /sources/app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/sources/app.jar"]
