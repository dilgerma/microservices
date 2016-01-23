//sample located in https://raw.githubusercontent.com/grafana/grafana/master/src/config.sample.js
define(['settings'], function(Settings) {
  "use strict";

  return new Settings({

      datasources: {
          'metrics': {
              type: 'influxdb',
              url: 'http://influxdb:8086/db/metrics',
              username: 'root',
              password: 'root'
          },
          'collectd': {
              type: 'influxdb',
              url: 'http://influxdb:8086/db/collectd',
              username: 'root',
              password: 'root'
          },
          'grafana': {
              type: 'influxdb',
              url: 'http://influxdb:8086/db/grafana',
              username: 'root',
              password: 'root',
              grafanaDB: true
          }
          //In the above example you see two InfluxDB datasources,
         //one for metrics and a seperate used for dashboard storage.
         //You can use the same InfluxDB database for both.
         //But it is probably a good idea to keep them seperate.
         //The InfluxDB databases need to exist, grafana does not create them.
      },

      /* Global configuration options
      * ========================================================
      */

      // specify the limit for dashboard search results
      search: {
        max_results: 100
      },

      // default home dashboard
      default_route: '/dashboard/file/default.json',

      // set to false to disable unsaved changes warning
      unsaved_changes_warning: true,

      // set the default timespan for the playlist feature
      // Example: "1m", "1h"
      playlist_timespan: "1m",

      // If you want to specify password before saving, please specify it below
      // The purpose of this password is not security, but to stop some users from accidentally changing dashboards
      admin: {
        password: ''
      },

      // Change window title prefix from 'Grafana - <dashboard title>'
      window_title_prefix: 'FB Micro Services - ',

      // Add your own custom panels
      plugins: {
        // list of plugin panels
        panels: [],
        // requirejs modules in plugins folder that should be loaded
        // for example custom datasources
        dependencies: []
      }

    });
});



