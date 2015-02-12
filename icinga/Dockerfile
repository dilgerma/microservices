FROM jordan/icinga2
#http alive check command zusätzlich konfiguriert
RUN apt-get install -y less
RUN apt-get install -y vim
ADD icinga2.conf /etc/icinga2/
ADD database-ido.xml /etc/icinga-web/conf.d/database-ido.xml
ADD hostgroups.conf /etc/icinga2/conf.d/
ADD services.conf /etc/icinga2/conf.d/services.conf
USER root
ADD run /opt/run2
RUN chmod u+x /opt/run2
ENTRYPOINT /opt/run2

