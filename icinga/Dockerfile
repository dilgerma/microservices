FROM jordan/icinga2
ADD database-ido.xml /etc/icinga-web/conf.d/database-ido.xml
ADD hosts*.conf /etc/icinga2/conf.d/
USER root
ADD run /opt/run2
RUN chmod u+x /opt/run2
ENTRYPOINT /opt/run2

