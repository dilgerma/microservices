FROM jordan/icinga2
#http alive check command zusätzlich konfiguriert
CMD apt-get install less
#ADD nagios_plugins/http.cfg /etc/nagios-plugins/config/
ADD database-ido.xml /etc/icinga-web/conf.d/database-ido.xml
ADD hostgroups.conf /etc/icinga2/conf.d/
ADD hosts*.conf /etc/icinga2/conf.d/
ADD services.conf /etc/icinga2/conf.d/services.conf
USER root
ADD run /opt/run2
RUN chmod u+x /opt/run2
ENTRYPOINT /opt/run2

