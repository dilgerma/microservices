FROM jordan/icinga2
ADD database-ido.xml /etc/icinga-web/conf.d/database-ido.xml
ADD hosts.cfg /etc/icinga-web/conf.d/hosts.cfg
#ADD services.cfg
USER root
ADD run /opt/run2
RUN chmod u+x /opt/run2
ENTRYPOINT /opt/run2

