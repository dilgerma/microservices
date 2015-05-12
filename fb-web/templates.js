angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/404.html',
    "<style>::-moz-selection {\n" +
    "                background: #b3d4fc;\n" +
    "                text-shadow: none;\n" +
    "            }\n" +
    "\n" +
    "            ::selection {\n" +
    "                background: #b3d4fc;\n" +
    "                text-shadow: none;\n" +
    "            }\n" +
    "\n" +
    "            html {\n" +
    "                padding: 30px 10px;\n" +
    "                font-size: 20px;\n" +
    "                line-height: 1.4;\n" +
    "                color: #737373;\n" +
    "                background: #f0f0f0;\n" +
    "                -webkit-text-size-adjust: 100%;\n" +
    "                -ms-text-size-adjust: 100%;\n" +
    "            }\n" +
    "\n" +
    "            html,\n" +
    "            input {\n" +
    "                font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
    "            }\n" +
    "\n" +
    "            body {\n" +
    "                max-width: 500px;\n" +
    "                _width: 500px;\n" +
    "                padding: 30px 20px 50px;\n" +
    "                border: 1px solid #b3b3b3;\n" +
    "                border-radius: 4px;\n" +
    "                margin: 0 auto;\n" +
    "                box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n" +
    "                background: #fcfcfc;\n" +
    "            }\n" +
    "\n" +
    "            h1 {\n" +
    "                margin: 0 10px;\n" +
    "                font-size: 50px;\n" +
    "                text-align: center;\n" +
    "            }\n" +
    "\n" +
    "            h1 span {\n" +
    "                color: #bbb;\n" +
    "            }\n" +
    "\n" +
    "            h3 {\n" +
    "                margin: 1.5em 0 0.5em;\n" +
    "            }\n" +
    "\n" +
    "            p {\n" +
    "                margin: 1em 0;\n" +
    "            }\n" +
    "\n" +
    "            ul {\n" +
    "                padding: 0 0 0 40px;\n" +
    "                margin: 1em 0;\n" +
    "            }\n" +
    "\n" +
    "            .container {\n" +
    "                max-width: 380px;\n" +
    "                _width: 380px;\n" +
    "                margin: 0 auto;\n" +
    "            }\n" +
    "\n" +
    "            /* google search */\n" +
    "\n" +
    "            #goog-fixurl ul {\n" +
    "                list-style: none;\n" +
    "                padding: 0;\n" +
    "                margin: 0;\n" +
    "            }\n" +
    "\n" +
    "            #goog-fixurl form {\n" +
    "                margin: 0;\n" +
    "            }\n" +
    "\n" +
    "            #goog-wm-qt,\n" +
    "            #goog-wm-sb {\n" +
    "                border: 1px solid #bbb;\n" +
    "                font-size: 16px;\n" +
    "                line-height: normal;\n" +
    "                vertical-align: top;\n" +
    "                color: #444;\n" +
    "                border-radius: 2px;\n" +
    "            }\n" +
    "\n" +
    "            #goog-wm-qt {\n" +
    "                width: 220px;\n" +
    "                height: 20px;\n" +
    "                padding: 5px;\n" +
    "                margin: 5px 10px 0 0;\n" +
    "                box-shadow: inset 0 1px 1px #ccc;\n" +
    "            }\n" +
    "\n" +
    "            #goog-wm-sb {\n" +
    "                display: inline-block;\n" +
    "                height: 32px;\n" +
    "                padding: 0 10px;\n" +
    "                margin: 5px 0 0;\n" +
    "                white-space: nowrap;\n" +
    "                cursor: pointer;\n" +
    "                background-color: #f5f5f5;\n" +
    "                background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "                background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "                background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "                background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "                -webkit-appearance: none;\n" +
    "                -moz-appearance: none;\n" +
    "                appearance: none;\n" +
    "                *overflow: visible;\n" +
    "                *display: inline;\n" +
    "                *zoom: 1;\n" +
    "            }\n" +
    "\n" +
    "            #goog-wm-sb:hover,\n" +
    "            #goog-wm-sb:focus {\n" +
    "                border-color: #aaa;\n" +
    "                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n" +
    "                background-color: #f8f8f8;\n" +
    "            }\n" +
    "\n" +
    "            #goog-wm-qt:hover,\n" +
    "            #goog-wm-qt:focus {\n" +
    "                border-color: #105cb6;\n" +
    "                outline: 0;\n" +
    "                color: #222;\n" +
    "            }\n" +
    "            \n" +
    "            input::-moz-focus-inner {\n" +
    "                padding: 0;\n" +
    "                border: 0;\n" +
    "            }</style><div class=container><h1>Not found\n" +
    "                    <span>:(</span></h1><p>Sorry, but the page you were trying\n" +
    "                to view does not exist.</p><p>It looks like this was the result\n" +
    "                of either:</p><ul><li>a mistyped address</li><li>an out-of-date\n" +
    "                link</li></ul></div>\n"
  );


  $templateCache.put('app/bower_components/modernizr/test/basic.html',
    "<!DOCTYPE html>\n" +
    "<html class=\"+no-js no-js- no-js i-has-no-js\">\n" +
    "<head>\n" +
    "  <meta charset=\"UTF-8\">\n" +
    "  <title>Modernizr Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"qunit/qunit.css\">\n" +
    "  <style>\n" +
    "     body { margin-bottom: 150px;}\n" +
    "     #testbed { font-family: Helvetica; color: #444; padding-bottom: 100px;}\n" +
    "     #testbed button { margin: 30px; font-size: 13px;}\n" +
    "     .data-notes, .offScreen { display:none;}\n" +
    "     table { width: 100%;}\n" +
    "     tbody tr:nth-child(even) td, tbody tr:nth-child(even) th {  border: 1px solid #ccc; border-left: 0; border-right: 0;}\n" +
    "     table td:nth-child(even), table th:nth-child(even) { background: #e6e6e6;}\n" +
    "     table tbody tr:hover td, table tbody tr:hover th { background: #e1e100!important;}\n" +
    "     td.wrong { background:red!important;}\n" +
    "     #html5section { visibility: hidden; }\n" +
    "     h1 label { display:none;}\n" +
    "     .output { padding: 0 0 0 16px;}\n" +
    "     .output ul { margin: 0;}\n" +
    "     .output li { color: #854747; }\n" +
    "     .output li.yes{color:#090;}\n" +
    "     .output li b{color:#000;}\n" +
    "     .output {font:14px/1.3 Inconsolata,Consolas,monospace;\n" +
    "                    -webkit-column-count: 5;\n" +
    "                       -moz-column-count: 5;\n" +
    "                            column-count: 5;}\n" +
    "      .output + .output { border-top: 5px solid #ccc; }\n" +
    "      textarea { width: 100%; min-height: 75px;}\n" +
    "      #caniusetrigger { font-size: 38px; font-family: monospace; display:block; }\n" +
    "  </style>\n" +
    "\n" +
    "  <script src=\"https://raw.github.com/Modernizr/Modernizr/master/modernizr.js\"></script>\n" +
    "\n" +
    "  <script>window.Modernizr || document.write('<script src=\"../modernizr.js\"><\\/script>')</script>\n" +
    "\n" +
    "  <script src=\"js/lib/polyfills.js\"></script>\n" +
    "  <script src=\"js/lib/detect-global.js\"></script>\n" +
    "  \n" +
    "  <script src=\"qunit/qunit.js\"></script>\n" +
    "  <script src=\"js/lib/jquery-1.7b2.js\"></script>\n" +
    "  \n" +
    "  <script src=\"js/setup.js\"></script>\n" +
    "  \n" +
    "  <script src=\"js/unit.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 id=\"qunit-header\">Modernizr Test Suite</h1>\n" +
    "  <h2 id=\"qunit-banner\"></h2>\n" +
    "  <div id=\"qunit-testrunner-toolbar\"></div>\n" +
    "  <h2 id=\"qunit-userAgent\"></h2>\n" +
    "\n" +
    "  <ol id=\"qunit-tests\"></ol>\n" +
    "\n" +
    "  <div id=\"mod-output\" class=output></div>\n" +
    "  <div id=\"mod-feattest-output\" class=output></div>\n" +
    "\n" +
    "\n" +
    "  <br>\n" +
    " \n" +
    "  <section><aside>this is an aside within a section</aside></section>\n" +
    "  \n" +
    "  \n" +
    "</body>\n" +
    "</html> \n"
  );


  $templateCache.put('app/bower_components/modernizr/test/caniuse.html',
    "<!DOCTYPE html>\n" +
    "<!-- saved from url=(0025)http://tests.caniuse.com/ -->\n" +
    "<html class=\" no-js\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><title>WCIU test page</title>\n" +
    "<meta charset=\"utf-8\">\n" +
    "\n" +
    "<!-- pull in latest modernizr -->\n" +
    "<script src=\"../modernizr.js\"></script>\n" +
    "\n" +
    "<script src=\"./caniuse_files/jquery.min.js\"></script>\n" +
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"./caniuse_files/style.css\">\n" +
    "\n" +
    "<script>\n" +
    "\n" +
    "function setResult(id, result) {\n" +
    "\t$('#' + id).addClass(result ? 'pass' : 'fail');\n" +
    "}\n" +
    "\n" +
    "</script>\n" +
    "\n" +
    "</head><body><h2>The <a href=\"http://caniuse.com/\">When can I use...</a> test suite... <small>(originally from <a href=\"http://tests.caniuse.com/\">tests.caniuse.com</a>)</small></h2> \n" +
    "<div id=\"intro\">\n" +
    "\t<p>This is a basic test suite of various web technologies for the <a href=\"./caniuse_files/caniuse.html\">When Can I Use</a> website.</p>\n" +
    "\t<p>It is used to quickly test basic support for features in upcoming browsers, rather than any full support of the feature's specification.</p>\n" +
    "\t<p>Results on this page generally match the results as they appear on the When Can I Use site, but <strong>may not always</strong> due to a variety of circumstances (test may pass but support is actually buggy, not tested well enough, has alternative method, etc).</p>\n" +
    "\t\n" +
    "\t<p>Four different types of tests are used:</p>\n" +
    "\t<dl>\n" +
    "\t\t<dt>Auto</dt>\n" +
    "\t\t<dd>Automated JS-based tests. (m) means <a href=\"http://modernizr.com/\">Modernizr</a> is used.</dd>\n" +
    "\t\n" +
    "\t\t<dt>Visual</dt>\n" +
    "\t\t<dd>Requires visual confirmation/comparison to confirm</dd>\n" +
    "\t\n" +
    "\t\t<dt>Visual-square</dt>\n" +
    "\t\t<dd>Test must create a 30x30px green (lime) square</dd>\n" +
    "\t\n" +
    "\t\t<dt>Interactive</dt>\n" +
    "\t\t<dd>Requires interaction to confirm support</dd>\n" +
    "\t</dl>\n" +
    "\t\n" +
    "\t<p>If you are interested in contributing tests you can contact me at: when (at) caniuse (dotcom).</p>\n" +
    "\t\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div id=\"options\">\n" +
    "<form action=\"http://tests.caniuse.com/?\" method=\"get\"><label for=\"browser_list\">Select browser to compare results with: </label><select id=\"ua\" name=\"ua\" autocomplete=\"false\"><option value=\"\">(none)</option><option value=\"and2.1\">Android Browser 2.1</option><option value=\"and2.2\">Android Browser 2.2</option><option value=\"and2.3\">Android Browser 2.3</option><option value=\"and3\">Android Browser 3</option><option value=\"chr10\">Chrome 10</option><option value=\"chr11\">Chrome 11</option><option value=\"chr12\">Chrome 12</option><option value=\"chr13\" selected=\"\">Chrome 13</option><option value=\"chr4\">Chrome 4</option><option value=\"chr5\">Chrome 5</option><option value=\"chr6\">Chrome 6</option><option value=\"chr7\">Chrome 7</option><option value=\"chr8\">Chrome 8</option><option value=\"chr9\">Chrome 9</option><option value=\"ff2\">Firefox 2</option><option value=\"ff3\">Firefox 3</option><option value=\"ff3.5\">Firefox 3.5</option><option value=\"ff3.6\">Firefox 3.6</option><option value=\"ff4\">Firefox 4</option><option value=\"ff5\">Firefox 5</option><option value=\"ff6\">Firefox 6</option><option value=\"ie10\">IE 10</option><option value=\"ie5.5\">IE 5.5</option><option value=\"ie6\">IE 6</option><option value=\"ie7\">IE 7</option><option value=\"ie8\">IE 8</option><option value=\"ie9\">IE 9</option><option value=\"ios3.2\">iOS Safari 3.2</option><option value=\"ios4.1\">iOS Safari 4.0-4.1</option><option value=\"ios4.2\">iOS Safari 4.2-4.3</option><option value=\"op10.1\">Opera 10.0-10.1</option><option value=\"op10.5\">Opera 10.5</option><option value=\"op10.6\">Opera 10.6</option><option value=\"op11\">Opera 11</option><option value=\"op11.1\">Opera 11.1</option><option value=\"op11.5\">Opera 11.5</option><option value=\"op12\">Opera 12</option><option value=\"op9\">Opera 9</option><option value=\"op9.6\">Opera 9.5-9.6</option><option value=\"omini5\">Opera Mini 5.0-6.0</option><option value=\"omob10\">Opera Mobile 10</option><option value=\"omob11\">Opera Mobile 11</option><option value=\"saf3.1\">Safari 3.1</option><option value=\"saf3.2\">Safari 3.2</option><option value=\"saf4\">Safari 4</option><option value=\"saf5\">Safari 5</option><option value=\"saf6\">Safari 6</option></select><div><label for=\"prefix\">Select CSS prefix to use (does not affect modernizr or non-CSS tests): </label><select id=\"prefix\" name=\"prefix\" autocomplete=\"false\"><option value=\"all\" selected=\"\">All combinations</option><option value=\"-webkit-\">-webkit-</option><option value=\"-moz-\">-moz-</option><option value=\"-ms-\">-ms-</option><option value=\"-o-\">-o-</option><option value=\"none\">(no prefix)</option></select><input id=\"opt_submit\" type=\"submit\" value=\"Go\"></div></form></div><table><caption>Tests</caption><thead><tr><th>Feature</th><th>chr13</th><th>Tests</th></tr></thead><tbody><tr><th><h3>Toolbar/context menu</h3><span class=\"links\">[<a href=\"http://caniuse.com/menu\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=menu&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Audio element</h3><span class=\"links\">[<a href=\"http://caniuse.com/audio\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=audio&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"audio0\" class=\"auto pass\"></div><script>\n" +
    "setResult('audio0', !!document.createElement('audio').canPlayType);\n" +
    "</script><div class=\"info\">document.createElement('audio').canPlayType</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"audio1\" class=\"interact\"></div><audio controls=\"\">\n" +
    " <source src=\"mimeaud.php?type=.wav\">\n" +
    " <source src=\"mimeaud.php?type=.mp3\">\n" +
    " <source src=\"mimeaud.php?type=.ogg\">\n" +
    " <source src=\"mimeaud.php?type=.aac\">\n" +
    " <source src=\"mimeaud.php?type=.flac\">\n" +
    " <source src=\"mimeaud.php?type=.wma\">\n" +
    " Audio fail\n" +
    "</audio>\n" +
    "<div class=\"info\">Audio element with 6 different sources (with MIME set)</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"audio2\" class=\"interact\"></div><audio controls=\"\">\n" +
    " <source src=\"mimeaud.php?nomime=1&amp;type=.wav\">\n" +
    " <source src=\"mimeaud.php?nomime=1&amp;type=.mp3\">\n" +
    " <source src=\"mimeaud.php?nomime=1&amp;type=.ogg\">\n" +
    " <source src=\"mimeaud.php?nomime=1&amp;type=.aac\">\n" +
    " <source src=\"mimeaud.php?nomime=1&amp;type=.flac\">\n" +
    " <source src=\"mimeaud.php?nomime=1&amp;type=.wma\">\n" +
    "--&gt;\n" +
    " Audio fail\n" +
    "</audio>\n" +
    "\n" +
    "<div class=\"info\">Audio element with 6 different sources (no MIME set)</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Background-image options</h3><span class=\"links\">[<a href=\"http://caniuse.com/background-img-opts\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=background-img-opts&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"background-img-opts0\" class=\"auto pass\"></div><script>setResult('background-img-opts0', Modernizr.backgroundsize);</script><div class=\"info\">Modernizr test for: \"backgroundsize\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"background-img-opts1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;background:lime\">\n" +
    "<div style=\"-webkit-background-clip:content-box;-moz-background-clip:content-box;-ms-background-clip:content-box;-o-background-clip:content-box;background-clip:content-box;padding:30px 30px 0 0;background-color:red\"></div>\n" +
    "</div>\n" +
    "</div><div class=\"info\">background-clip: content-box;</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"background-img-opts2\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;background:lime\">\n" +
    "<div style=\"-webkit-background-origin:content-box;-moz-background-origin:content-box;-ms-background-origin:content-box;-o-background-origin:content-box;background-origin:content-box;padding:30px 30px 0 0;background-image:url(caniuse_files/red30x30.png);background-repeat: no-repeat;\"></div>\n" +
    "</div>\n" +
    "</div><div class=\"info\">background-origin: content-box;</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"background-img-opts2\" class=\"visual-square\"></div><div class=\"square\"><div style=\"-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-ms-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px;background-image:url(caniuse_files/green5x5.png);background-repeat: no-repeat;width:30px;height:30px;\"></div>\n" +
    "</div><div class=\"info\">background-size: 30px 30px;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Border images</h3><span class=\"links\">[<a href=\"http://caniuse.com/border-image\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=border-image&prefix=all\">Single feat</a>]</span></th><td class=\"current partial\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"border-image0\" class=\"auto pass\"></div><script>setResult('border-image0', Modernizr.borderimage);</script><div class=\"info\">Modernizr test for: \"borderimage\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"border-image1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"border-width: 15px;\t-webkit-border-image-source: url(caniuse_files/green5x5.png);-moz-border-image-source: url(caniuse_files/green5x5.png);-ms-border-image-source: url(caniuse_files/green5x5.png);-o-border-image-source: url(caniuse_files/green5x5.png);border-image-source: url(caniuse_files/green5x5.png);-webkit-border-image-slice: 2;-moz-border-image-slice: 2;-ms-border-image-slice: 2;-o-border-image-slice: 2;border-image-slice: 2; width:0; height: 0;\"></div></div><div class=\"info\">Separate properties:\n" +
    "border-image-source: url(caniuse_files/green5x5.png);\n" +
    "border-image-slice: 2;</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"border-image3\" class=\"visual-square\"></div><div class=\"square\"><div style=\"border-width: 15px;\t-webkit-border-image: url(caniuse_files/green5x5.png) 2;-moz-border-image: url(caniuse_files/green5x5.png) 2;-ms-border-image: url(caniuse_files/green5x5.png) 2;-o-border-image: url(caniuse_files/green5x5.png) 2;border-image: url(caniuse_files/green5x5.png) 2; width:0; height: 0;\"></div></div><div class=\"info\">Shorthand syntax: border-image: url(caniuse_files/green5x5.png) 2;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Border-radius (rounded corners)</h3><span class=\"links\">[<a href=\"http://caniuse.com/border-radius\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=border-radius&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"border-radius0\" class=\"auto pass\"></div><script>setResult('border-radius0', Modernizr.borderradius);</script><div class=\"info\">Modernizr test for: \"borderradius\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"border-radius1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px; height:30px; overflow:hidden; position:relative;\">\n" +
    "  <div style=\"background:lime; height: 40px; \"></div>\n" +
    "  <div style=\"background:red; position:absolute; z-index:10; top: 0;\n" +
    "              height: 400px; width: 400px;\n" +
    "              -webkit-border-radius: 150px;\n" +
    "-moz-border-radius: 150px;\n" +
    "-ms-border-radius: 150px;\n" +
    "-o-border-radius: 150px;\n" +
    "border-radius: 150px;\n" +
    "\n" +
    "\"></div>\n" +
    "</div></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Canvas (basic support)</h3><span class=\"links\">[<a href=\"http://caniuse.com/canvas\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=canvas&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"canvas0\" class=\"auto pass\"></div><script>setResult('canvas0', Modernizr.canvas);</script><div class=\"info\">Modernizr test for: \"canvas\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"canvas1\" class=\"visual-square\"></div><div class=\"square\"><canvas width=\"30\" height=\"30\" style=\"background:red;\" id=\"canv_test\"></canvas>\n" +
    "\n" +
    "<script>\n" +
    "var canvas = $('#canv_test')[0], \n" +
    "    ctx    = canvas.getContext && canvas.getContext('2d');\n" +
    "\n" +
    "if (ctx){\n" +
    "  ctx.fillStyle = '#00ff00';\n" +
    "  ctx.fillRect(0,0,100,40);\n" +
    "}\n" +
    "</script></div><div class=\"info\">Draw rect on canvas using fillStyle and fillRect</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>classList (DOMTokenList )</h3><span class=\"links\">[<a href=\"http://caniuse.com/classlist\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=classlist&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"classlist0\" class=\"auto pass\"></div><script>\n" +
    "setResult('classlist0', \"classList\" in document.body);\n" +
    "</script><div class=\"info\">\"classList\" in document.body</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"classlist1\" class=\"visual-square\"></div><div class=\"square\"><div id=\"classlisttest\" class=\"pass\" style=\"width:30px;height:30px;\"></div>\n" +
    "<script>\n" +
    "try{\n" +
    "  document.getElementById('classlisttest').classList.remove('fail');\n" +
    "  document.getElementById('classlisttest').classList.add('pass');\n" +
    "}catch(e){}\n" +
    "\n" +
    "\n" +
    "</script></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Cross-Origin Resource Sharing</h3><span class=\"links\">[<a href=\"http://caniuse.com/cors\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=cors&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"cors0\" class=\"auto pass\"></div><script>\n" +
    "$(function() {\n" +
    "\t$.get('http://a.deveria.com/tests/cors/true.php', function(data) {\n" +
    "\t\tsetResult('cors0', data);\n" +
    "\t});\n" +
    "});\n" +
    "\n" +
    "</script><div class=\"info\">Instant XHR request on page that should permit it.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Animation</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-animation\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-animation&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css-animation0\" class=\"auto pass\"></div><script>setResult('css-animation0', Modernizr.cssanimations);</script><div class=\"info\">Modernizr test for: \"cssanimations\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-animation1\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    " #css-animation1test {\n" +
    "\t-webkit-animation: staylime 60s infinite;\n" +
    "-moz-animation: staylime 60s infinite;\n" +
    "-ms-animation: staylime 60s infinite;\n" +
    "-o-animation: staylime 60s infinite;\n" +
    "animation: staylime 60s infinite;\n" +
    "}\n" +
    "\n" +
    "@-webkit-keyframes staylime {\n" +
    "\tfrom { background-color: lime; }\n" +
    "\tto   { background-color: lime; }\n" +
    " }\n" +
    "@-moz-keyframes staylime {\n" +
    "\tfrom { background-color: lime; }\n" +
    "\tto   { background-color: lime; }\n" +
    " }\n" +
    "@-ms-keyframes staylime {\n" +
    "\tfrom { background-color: lime; }\n" +
    "\tto   { background-color: lime; }\n" +
    " }\n" +
    "@-o-keyframes staylime {\n" +
    "\tfrom { background-color: lime; }\n" +
    "\tto   { background-color: lime; }\n" +
    " }\n" +
    "@keyframes staylime {\n" +
    "\tfrom { background-color: lime; }\n" +
    "\tto   { background-color: lime; }\n" +
    " }\n" +
    "\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"css-animation1test\" style=\"width:30px;height:30px;\"></div></div><div class=\"info\">animation: staylime 60s infinite; \n" +
    "\n" +
    "@keyframes staylime {\n" +
    "\tfrom { background-color: lime; }\n" +
    "\tto   { background-color: lime; }\n" +
    " }</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Box-shadow</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-boxshadow\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-boxshadow&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css-boxshadow0\" class=\"auto pass\"></div><script>setResult('css-boxshadow0', Modernizr.boxshadow);</script><div class=\"info\">Modernizr test for: \"boxshadow\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-boxshadow1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"background:red; width: 30px; height: 30px;\n" +
    "            -webkit-box-shadow: inset lime 0px 0px 150px;\n" +
    "-moz-box-shadow: inset lime 0px 0px 150px;\n" +
    "-ms-box-shadow: inset lime 0px 0px 150px;\n" +
    "-o-box-shadow: inset lime 0px 0px 150px;\n" +
    "box-shadow: inset lime 0px 0px 150px;\n" +
    " \"></div>\n" +
    "</div><div class=\"info\">Must be greenish, may not be entirely lime depending on the implementation.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS position:fixed</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-fixed\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-fixed&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"css-fixed1\" class=\"interact\"></div><a href=\"http://tests.caniuse.com/fixed.html\">Test here</a></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS Gradients</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-gradients\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-gradients&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css-gradients0\" class=\"auto pass\"></div><script>setResult('css-gradients0', Modernizr.cssgradients);</script><div class=\"info\">Modernizr test for: \"cssgradients\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-gradients1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;background-image: -webkit-linear-gradient(lime, lime);background-image: -moz-linear-gradient(lime, lime);background-image: -ms-linear-gradient(lime, lime);background-image: -o-linear-gradient(lime, lime);background-image: linear-gradient(lime, lime);\"></div></div><div class=\"info\">linear-gradient(lime, lime);</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-gradients2\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;background-image:-webkit-radial-gradient(lime, lime);background-image:-moz-radial-gradient(lime, lime);background-image:-ms-radial-gradient(lime, lime);background-image:-o-radial-gradient(lime, lime);background-image:radial-gradient(lime, lime);\"></div></div><div class=\"info\">radial-gradient(lime, lime)</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Opacity</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-opacity\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-opacity&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css-opacity0\" class=\"auto pass\"></div><script>setResult('css-opacity0', Modernizr.opacity);</script><div class=\"info\">Modernizr test for: \"opacity\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-opacity1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;position:relative;background:lime\">\n" +
    "\t<div style=\"width:30px;height:30px;background:red;-webkit-opacity:0;-moz-opacity:0;-ms-opacity:0;-o-opacity:0;opacity:0;\"></div></div>\n" +
    "</div>\n" +
    "</div><div class=\"info\">Test for opacity: 0</div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Text-shadow</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-textshadow\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-textshadow&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css-textshadow0\" class=\"auto pass\"></div><script>setResult('css-textshadow0', Modernizr.textshadow);</script><div class=\"info\">Modernizr test for: \"textshadow\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"css-textshadow1\" class=\"visual\"></div><div class=\"vis_test\"><div style=\"width:30px;height:30px;overflow:hidden\" id=\"css-textshadow1\">\n" +
    " \n" +
    "<div style=\"font:25px/25px Times New Roman, Times; color:white;-webkit-text-shadow:25px 0 3px lime;-moz-text-shadow:25px 0 3px lime;-ms-text-shadow:25px 0 3px lime;-o-text-shadow:25px 0 3px lime;text-shadow:25px 0 3px lime;position:relative; left:-25px;\">A</div>\n" +
    "\n" +
    "</div></div><div class=\"vis_ref\"><img src=\"./caniuse_files/text-shadow1.png\"></div><div class=\"info\">font-size: 25px;\n" +
    "color: white;\n" +
    "text-shadow: 25px 0 3px lime; position: relative;\n" +
    "left: -25px;</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"css-textshadow2\" class=\"visual\"></div><div class=\"vis_test\"><div style=\"width:40px;height:30px;overflow:hidden\" id=\"css-textshadow2\">\n" +
    " <div style=\"font:25px/25px Times New Roman, Times; color:white; -webkit-text-shadow:25px 0 3px #0F0, 35px 0 3px #0C0, 45px 0 3px #090;-moz-text-shadow:25px 0 3px #0F0, 35px 0 3px #0C0, 45px 0 3px #090;-ms-text-shadow:25px 0 3px #0F0, 35px 0 3px #0C0, 45px 0 3px #090;-o-text-shadow:25px 0 3px #0F0, 35px 0 3px #0C0, 45px 0 3px #090;text-shadow:25px 0 3px #0F0, 35px 0 3px #0C0, 45px 0 3px #090; position:relative; left:-35px;\">A</div>\n" +
    "</div>\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/text-shadow2.png\"></div><div class=\"info\">Multiple shadow test</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Transitions</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-transitions\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-transitions&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css-transitions0\" class=\"auto pass\"></div><script>setResult('css-transitions0', Modernizr.csstransitions);</script><div class=\"info\">Modernizr test for: \"csstransitions\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"css-transitions1\" class=\"interact\"></div><style>\n" +
    "#css-transitions1wrap {\n" +
    "\twidth: 30px;\n" +
    "\theight: 30px;\n" +
    "\tborder: 1px solid;\n" +
    "\toverflow: hidden;\n" +
    "\tmargin: 0 auto;\n" +
    "}\n" +
    "\n" +
    "#css-transitions1test {\n" +
    "\t-webkit-transition-property: left;\n" +
    "\t-webkit-transition-duration: 3s;\n" +
    "\t-webkit-transition-timing-function: cubic-bezier(0, 1, 1, 0);\n" +
    "-moz-transition-property: left;\n" +
    "\t-moz-transition-duration: 3s;\n" +
    "\t-moz-transition-timing-function: cubic-bezier(0, 1, 1, 0);\n" +
    "-ms-transition-property: left;\n" +
    "\t-ms-transition-duration: 3s;\n" +
    "\t-ms-transition-timing-function: cubic-bezier(0, 1, 1, 0);\n" +
    "-o-transition-property: left;\n" +
    "\t-o-transition-duration: 3s;\n" +
    "\t-o-transition-timing-function: cubic-bezier(0, 1, 1, 0);\n" +
    "transition-property: left;\n" +
    "\ttransition-duration: 3s;\n" +
    "\ttransition-timing-function: cubic-bezier(0, 1, 1, 0);\n" +
    "\tbackground-color: lime;\n" +
    "\tposition: relative;\n" +
    "\tleft: -30px;\n" +
    "\ttop: 0;\n" +
    "}\n" +
    "\n" +
    "#css-transitions1wrap:hover #css-transitions1test {\n" +
    "\tleft: 30px;\n" +
    "}\n" +
    "\n" +
    "</style>\n" +
    "<div id=\"css-transitions1wrap\">\n" +
    "\t<div id=\"css-transitions1test\" style=\"width:30px;height:30px;\"></div>\n" +
    "</div><p class=\"condition\">Green square must (briefly) appear on hover</p><div class=\"info\">5 second transition from left to right using cubic-bezier(0, 1, 1, 0); </div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Colors</h3><span class=\"links\">[<a href=\"http://caniuse.com/css3-colors\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css3-colors&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css3-colors0\" class=\"auto pass\"></div><script>setResult('css3-colors0', Modernizr.hsla);</script><div class=\"info\">Modernizr test for: \"hsla\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css3-colors1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"background-color: red;      width: 30px; height: 30px; background-color: hsl(120, 100%, 50%);\"></div></div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css3-colors2\" class=\"visual-square\"></div><div class=\"square\"><div style=\"background-color: red;      width: 30px; height: 30px; background-color: rgba(0, 255, 0, 1);\"></div></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>dataset &amp; data-* attributes</h3><span class=\"links\">[<a href=\"http://caniuse.com/dataset\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=dataset&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"dataset0\" class=\"auto pass\" data-foo=\"bar\"></div><script>\n" +
    "var result = 'dataset' in document.body;\n" +
    "if(result) {\n" +
    "var elem = document.getElementById('dataset0'); elem.setAttribute('data-foo', 'bar');\n" +
    "result = elem.dataset.foo == 'bar';\n" +
    "}\n" +
    "setResult('dataset0', result);\n" +
    "</script><div class=\"info\">Test for 'dataset' in document.body and getting the correct value returned from a data-foo attribute.</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"dataset1\" class=\"interact\"></div><a href=\"http://trac.webkit.org/export/66582/trunk/LayoutTests/fast/dom/dataset.html\">Test here</a></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Details &amp; Summary elements</h3><span class=\"links\">[<a href=\"http://caniuse.com/details\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=details&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"details0\" class=\"auto pass\"></div><script>\n" +
    "setResult('details0', 'open' in document.createElement('details'));\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"details1\" class=\"interact\"></div><details>\n" +
    "    <summary>(summary button)</summary>\n" +
    "    <p>(detail contents)</p>\n" +
    "</details><p class=\"condition\">\"(detail contents)\" should be visible ONLY after clicking summary</p><div class=\"info\">Basic details element with summary and paragraph as children.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Server-sent DOM events</h3><span class=\"links\">[<a href=\"http://caniuse.com/eventsource\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=eventsource&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"eventsource0\" class=\"auto pass\"></div><script>\n" +
    "setResult('eventsource0', typeof EventSource !== 'undefined');\n" +
    "</script></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>File API</h3><span class=\"links\">[<a href=\"http://caniuse.com/fileapi\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=fileapi&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"fileapi0\" class=\"auto pass\"></div><script>\n" +
    "setResult('fileapi0', !!window.FileReader);\n" +
    "</script></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Flexible Box Layout Module</h3><span class=\"links\">[<a href=\"http://caniuse.com/flexbox\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=flexbox&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"flexbox0\" class=\"auto pass\"></div><script>setResult('flexbox0', Modernizr.flexbox);</script><div class=\"info\">Modernizr test for: \"flexbox\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>@font-face Web fonts</h3><span class=\"links\">[<a href=\"http://caniuse.com/fontface\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=fontface&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"fontface0\" class=\"auto pass\"></div><script>setResult('fontface0', Modernizr.fontface);</script><div class=\"info\">Modernizr test for: \"fontface\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Geolocation</h3><span class=\"links\">[<a href=\"http://caniuse.com/geolocation\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=geolocation&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"geolocation0\" class=\"auto pass\"></div><script>setResult('geolocation0', Modernizr.geolocation);</script><div class=\"info\">Modernizr test for: \"geolocation\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"geolocation1\" class=\"auto pass\"></div><script>\n" +
    "(function() {\n" +
    "\tvar result = false;\n" +
    "\tvar geo = navigator.geolocation;\n" +
    "\tif(geo) {\n" +
    "\t\tresult = (\n" +
    "\t\t\t\"getCurrentPosition\" in geo\n" +
    "\t\t\t&& \"watchPosition\" in geo\n" +
    "\t\t\t&& \"clearWatch\" in geo\n" +
    "\t\t);\n" +
    "\t}\n" +
    "\tsetResult('geolocation1', result);\n" +
    "}());\n" +
    "</script><div class=\"info\">Test for getCurrentPosition, watchPosition and clearWatch in navigator.geolocation</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"geolocation2\" class=\"interact\"></div><button id=\"geolocation2test\">Get location</button>\n" +
    "<script>\n" +
    "(function() {\n" +
    "\tvar btn = document.getElementById('geolocation2test');\n" +
    "\tif(!navigator.geolocation && !navigator.geolocation.getCurrentPosition) return false;\n" +
    "\tbtn.onclick = function() {\n" +
    "\t\tvar feat = document.getElementById('geolocation2');\n" +
    "\t\tnavigator.geolocation.getCurrentPosition(function(pos) {\n" +
    "\t\t\tfeat.innerHTML = '<p>Result:<br>LAT: ' + pos.coords.latitude + '<br>LON: ' + pos.coords.longitude + '</p>';\n" +
    "\t\t}, function(error) {\n" +
    "\t\t\tfeat.innerHTML = '<p>Error:' + error.message + '</p>';\n" +
    "\t\t});\n" +
    "\t\t\n" +
    "\t\tfeat.innerHTML = '<p>Waiting for response...</p>';\n" +
    "\t\t\n" +
    "\t\treturn false;\n" +
    "\t}\n" +
    "})();\n" +
    "\n" +
    "</script><p class=\"condition\">Must provide LAT and LON info (may need to give permission first)</p><div class=\"info\">Test for navigator.geolocation.getCurrentPosition on which position.coords.latitude and position.coords.longitude are expected. </div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>getElementsByClassName</h3><span class=\"links\">[<a href=\"http://caniuse.com/getelementsbyclassname\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=getelementsbyclassname&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"getelementsbyclassname0\" class=\"auto pass\"></div><script>\n" +
    "setResult('getelementsbyclassname0', typeof document.getElementsByClassName === 'function')\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"getelementsbyclassname1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width: 30px; height: 30px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: lime; background-position: initial initial; background-repeat: initial initial; \" id=\"getelementsbyclassname1container\">\n" +
    "\t<div id=\"getelementsbyclassname1test\">\n" +
    "\t\t<div class=\"getelementsbyclassname1test\"></div>\n" +
    "\t\t<div class=\"getelementsbyclassname1test altgetelementsbyclassname1test\"></div>\n" +
    "\t\t<div class=\"altgetelementsbyclassname1test\"></div>\n" +
    "\t</div>\n" +
    "<script>\n" +
    "(function() {\n" +
    "\tif(document.getElementsByClassName) {\n" +
    "\t\tvar elems = document.getElementsByClassName('getelementsbyclassname1test');\n" +
    "\t\tvar from_id = document.getElementById('getelementsbyclassname1test').getElementsByTagName('*');\n" +
    "\t\tif(elems.length && elems.length === 2) {\n" +
    "\t\t\tif(elems[0] === from_id[0] && elems[1] === from_id[1]) {\n" +
    "\t\t\t\tdocument.getElementById('getelementsbyclassname1container').style.background = 'lime';\n" +
    "\t\t\t}\n" +
    "\t\t}\n" +
    "\t}\n" +
    "}());\n" +
    "</script></div><div class=\"info\">Test if two divs were correctly retrieved using getElementsByClassName</div></div>\n" +
    "\n" +
    "</div></td></tr>\n" +
    "<tr><th><h3>Hashchange event</h3><span class=\"links\">[<a href=\"http://caniuse.com/hashchange\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=hashchange&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"hashchange0\" class=\"auto pass\"></div><script>setResult('hashchange0', Modernizr.hashchange);</script><div class=\"info\">Modernizr test for: \"hashchange\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"hashchange1\" class=\"visual-square\"></div><div class=\"square\"><iframe style=\"width:30px;height:30px;border:0\" src=\"./caniuse_files/hashchange.html\"></iframe></div><div class=\"info\">iframe with addEventListener('hashchange', function() {\n" +
    "\tdocument.body.style.background = 'lime';\n" +
    "}, false);\n" +
    "</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Session history management</h3><span class=\"links\">[<a href=\"http://caniuse.com/history\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=history&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"history0\" class=\"auto pass\"></div><script>setResult('history0', Modernizr.history);</script><div class=\"info\">Modernizr test for: \"history\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"history1\" class=\"auto\"></div><iframe src=\"./caniuse_files/pushstate.html#history1\"  style=\"display:none\"></iframe><div class=\"info\">Test if history.pushState was successful</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>IndexedDB</h3><span class=\"links\">[<a href=\"http://caniuse.com/indexeddb\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=indexeddb&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"indexeddb0\" class=\"auto pass\"></div><script>setResult('indexeddb0', Modernizr.indexeddb);</script><div class=\"info\">Modernizr test for: \"indexeddb\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>JSON parsing</h3><span class=\"links\">[<a href=\"http://caniuse.com/json\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=json&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"json0\" class=\"auto pass\"></div><script>\n" +
    "setResult('json0', 'JSON' in window)\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"json1\" class=\"auto pass\"></div><script>\n" +
    "(function() {\n" +
    "try {\n" +
    "var obj = {\n" +
    "\tkey1: 'my_str',\n" +
    "\tkey2: ['my', 'array'],\n" +
    "\tkey3: {\n" +
    "\t\tmy: 'object',\n" +
    "\t\twith_numbers: [1, 2, 3, 4.5678],\n" +
    "\t\tand_also: 9\n" +
    "\t}\n" +
    "};\n" +
    "\n" +
    "var str = JSON.stringify(obj);\n" +
    "if(typeof str === 'string') {\n" +
    "\tvar new_obj = JSON.parse(str);\n" +
    "\tif(\n" +
    "\t\tnew_obj.key1 === 'my_str'\n" +
    "\t\t&& new_obj.key2.length === 2\n" +
    "\t\t&& new_obj.key2[1] === 'array'\n" +
    "\t\t&& new_obj.key3.with_numbers[3] === 4.5678\n" +
    "\t\t&& new_obj.key3.and_also === 9\n" +
    "\t) {\n" +
    "\t\tsetResult('json1', true);\n" +
    "\t} else {\n" +
    "\t\tsetResult('json1', false);\n" +
    "\t}\n" +
    "} else {\n" +
    "\tsetResult('json1', false);\n" +
    "}\n" +
    "} catch(e){\n" +
    "setResult('json1', false);\n" +
    "}\n" +
    "}());\n" +
    "</script><div class=\"info\">Create a JS object, convert to JSON string, convert back to object and compare.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Multiple backgrounds</h3><span class=\"links\">[<a href=\"http://caniuse.com/multibackgrounds\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=multibackgrounds&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"multibackgrounds0\" class=\"auto pass\"></div><script>setResult('multibackgrounds0', Modernizr.multiplebgs);</script><div class=\"info\">Modernizr test for: \"multiplebgs\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"multibackgrounds1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"background-repeat: repeat-x; background-image: url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png); background-position: 0 0, 0 5px, 0 10px, 0 15px, 0 20px, 0 25px; width:30px;height:30px;\"></div></div><div class=\"info\">background-repeat: repeat-x;\n" +
    "background-image: url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png), url(caniuse_files/green5x5.png);\n" +
    "background-position: 0 0, 0 5px, 0 10px, 0 15px, 0 20px, 0 25px;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Multiple column layout</h3><span class=\"links\">[<a href=\"http://caniuse.com/multicolumn\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=multicolumn&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"multicolumn0\" class=\"auto pass\"></div><script>setResult('multicolumn0', Modernizr.csscolumns);</script><div class=\"info\">Modernizr test for: \"csscolumns\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"multicolumn1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"-webkit-column-width: 15px; -webkit-column-gap: 0;-moz-column-width: 15px; -moz-column-gap: 0;-ms-column-width: 15px; -ms-column-gap: 0;-o-column-width: 15px; -o-column-gap: 0;column-width: 15px; column-gap: 0; width:30px;height:30px;background:red;\">\n" +
    "\t<div style=\"inline-block;width:15px;height:30px;background:lime;\"></div>\n" +
    "\t<div style=\"inline-block;width:15px;height:30px;background:lime;\"></div>\n" +
    "</div>\n" +
    "</div><div class=\"info\">column-width: 15px;\n" +
    "column-gap: 0;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Web Storage - name/value pairs</h3><span class=\"links\">[<a href=\"http://caniuse.com/namevalue-storage\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=namevalue-storage&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"namevalue-storage0\" class=\"auto pass\"></div><script>setResult('namevalue-storage0', Modernizr.localstorage);</script><div class=\"info\">Modernizr test for: \"localstorage\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"namevalue-storage1\" class=\"auto pass\"></div><script>\n" +
    "(function() {\n" +
    "\tvar result = false;\n" +
    "\tif(window.localStorage) {\n" +
    "\t\ttry {\n" +
    "\t\t\tlocalStorage.setItem('foo', 'bar');\n" +
    "\t\t\tif(localStorage.getItem('foo') === 'bar'\n" +
    "\t\t\t\t&& localStorage['foo'] === 'bar'\n" +
    "\t\t\t\t&& localStorage.foo === 'bar'\n" +
    "\t\t\t) {\n" +
    "\t\t\t\tlocalStorage.removeItem('foo');\n" +
    "\t\t\t\tif(localStorage.getItem('foo') === null) {\n" +
    "\t\t\t\t\tresult = true;\n" +
    "\t\t\t\t}\n" +
    "\t\t\t}\n" +
    "\t\t} catch(e) {}\n" +
    "\t}\n" +
    "\tsetResult('namevalue-storage1', result);\n" +
    "})();\n" +
    "\n" +
    "</script><div class=\"info\">Test if getItem, setItem and removeItem work.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Web Notifications</h3><span class=\"links\">[<a href=\"http://caniuse.com/notifications\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=notifications&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"notifications0\" class=\"auto pass\"></div><script>\n" +
    "setResult('notifications0',\n" +
    "\"webkitNotifications\" in window\n" +
    "|| \"mozNotifications\" in window\n" +
    "|| \"oNotifications\" in window\n" +
    "|| \"msNotifications\" in window\n" +
    "|| \"khtmlNotifications\" in window\n" +
    "|| \"notifications\" in window\n" +
    ");\n" +
    "</script></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Offline web applications</h3><span class=\"links\">[<a href=\"http://caniuse.com/offline-apps\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=offline-apps&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"offline-apps0\" class=\"auto pass\"></div><script>setResult('offline-apps0', Modernizr.applicationcache);</script><div class=\"info\">Modernizr test for: \"applicationcache\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>querySelector/querySelectorAll</h3><span class=\"links\">[<a href=\"http://caniuse.com/queryselector\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=queryselector&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"queryselector0\" class=\"auto pass\"></div><script>\n" +
    "setResult('queryselector0', !!document.querySelectorAll && !!document.querySelector)\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"queryselector1\" class=\"auto pass\"></div>\t<div id=\"queryselector1test\">\n" +
    "\t\t<div data-foo=\"queryselector1\"></div>\n" +
    "\t\t<div id=\"queryselector1target\"></div>\n" +
    "\t\t<div class=\"altqueryselector1test\"></div>\n" +
    "\t</div>\n" +
    "<script>\n" +
    "(function() {\n" +
    "\tif(document.querySelector) {\n" +
    "\t\tvar elem = document.querySelector('[data-foo=queryselector1] + *');\n" +
    "\t\tvar target = document.getElementById('queryselector1target');\n" +
    "\t\tsetResult('queryselector1', elem === target);\n" +
    "\t}\n" +
    "}());\n" +
    "</script><div class=\"info\">querySelector test on selector '[data-foo=bar] + *'</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"queryselector2\" class=\"auto pass\"></div>\t<div id=\"queryselector2test\">\n" +
    "\t\t<div data-foo=\"queryselector2\"></div>\n" +
    "\t\t<div id=\"queryselector2target\"></div>\n" +
    "\t\t<div class=\"altqueryselector2test\"></div>\n" +
    "\t</div>\n" +
    "<script>\n" +
    "(function() {\n" +
    "\tif(document.querySelector) {\n" +
    "\t\tvar elem = document.querySelector('[data-foo=queryselector2] + *');\n" +
    "\t\tvar target = document.getElementById('queryselector2target');\n" +
    "\t\tsetResult('queryselector2', elem === target);\n" +
    "\t}\n" +
    "}());\n" +
    "</script><div class=\"info\">querySelectorAll test on selector '[data-foo=bar] + *'</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>SVG (basic support)</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"svg0\" class=\"auto pass\"></div><script>setResult('svg0', Modernizr.svg);</script><div class=\"info\">Modernizr test for: \"svg\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"svg1\" class=\"visual-square\"></div><div class=\"square\"><object type=\"image/svg+xml\" width=\"30\" height=\"30\" data=\"./caniuse_files/svg-img.svg\" style=\"overflow:visible\"> SVG fail\n" +
    "</object></div><div class=\"info\">SVG in &lt;object&gt;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>SVG effects for HTML</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg-html\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg-html&prefix=all\">Single feat</a>]</span></th><td class=\"current partial\">&nbsp;</td><td>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"svg-html1\" class=\"visual\"></div><div class=\"vis_test\"> <object type=\"image/svg+xml\" width=\"60\" height=\"30\" data=\"http://tests.caniuse.com/blur-html.svg\"> SVG fail\n" +
    " </object></div><div class=\"vis_ref\"><img src=\"./caniuse_files/svg-html-blur.png\"></div><p class=\"condition\">Text must appear blurry</p><div class=\"info\">SVG with feGaussianBlur filter on foreignObject</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Inline SVG in HTML5</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg-html5\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg-html5&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"svg-html50\" class=\"auto pass\"></div><script>setResult('svg-html50', Modernizr.inlinesvg);</script><div class=\"info\">Modernizr test for: \"inlinesvg\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"svg-html51\" class=\"visual-square\"></div><div class=\"square\"><svg width=\"30\" height=\"30\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:red;\"> \n" +
    "    <rect height=\"30\" width=\"30\" y=\"0\" x=\"0\" fill=\"#00ff00\"></rect> \n" +
    "</svg>\n" +
    "</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>SVG SMIL animation</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg-smil\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg-smil&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"svg-smil0\" class=\"auto pass\"></div><script>setResult('svg-smil0', Modernizr.smil);</script><div class=\"info\">Modernizr test for: \"smil\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"svg-smil1\" class=\"visual-square\"></div><div class=\"square\"><object type=\"image/svg+xml\" width=\"30\" height=\"30\" data=\"http://tests.caniuse.com/svg-animate.svg\" style=\"overflow:visible\"> SVG fail\n" +
    "</object></div><div class=\"info\">SVG with animate element inside a rect</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Touch events</h3><span class=\"links\">[<a href=\"http://caniuse.com/touch\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=touch&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"touch0\" class=\"auto fail\"></div><script>setResult('touch0', Modernizr.touch);</script><div class=\"info\">Modernizr test for: \"touch\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Transforms</h3><span class=\"links\">[<a href=\"http://caniuse.com/transforms2d\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=transforms2d&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"transforms2d0\" class=\"auto pass\"></div><script>setResult('transforms2d0', Modernizr.csstransforms);</script><div class=\"info\">Modernizr test for: \"csstransforms\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"transforms2d1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;background:red;overflow:hidden\">\n" +
    "\t<div style=\"background:lime;width:30px;height:30px;position:relative;left:-30px;-webkit-transform: translate(30px);-moz-transform: translate(30px);-ms-transform: translate(30px);-o-transform: translate(30px);transform: translate(30px); \"></div>\n" +
    "</div>\n" +
    "</div><div class=\"info\">transform: translate(30px);</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 3D Transforms</h3><span class=\"links\">[<a href=\"http://caniuse.com/transforms3d\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=transforms3d&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"transforms3d0\" class=\"auto pass\"></div><script>setResult('transforms3d0', Modernizr.csstransforms3d);</script><div class=\"info\">Modernizr test for: \"csstransforms3d\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"transforms3d1\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#transforms3d1container {\n" +
    "\tbackground: red;\n" +
    "\twidth: 30px;\n" +
    "\theight: 30px;\n" +
    "\toverflow: hidden;\n" +
    "\t-webkit-perspective: 600;\n" +
    "\t-webkit-perspective-origin: 0 200px;\n" +
    "\t-moz-perspective: 600;\n" +
    "\t-moz-perspective-origin: 0 200px;\n" +
    "\t-ms-perspective: 600;\n" +
    "\t-ms-perspective-origin: 0 200px;\n" +
    "\t-o-perspective: 600;\n" +
    "\t-o-perspective-origin: 0 200px;\n" +
    "\tperspective: 600;\n" +
    "\tperspective-origin: 0 200px;\n" +
    "\n" +
    "}\n" +
    "\n" +
    "#transforms3d1test { \n" +
    "\twidth:400px; height:100px;\n" +
    "\tbackground: lime;\n" +
    "\tposition: relative;\n" +
    "\ttop: 30px;\n" +
    "\t-webkit-transform: translate3d(-234px, 0, 0) rotate3d(0, 1, 0, -70deg);\n" +
    "\t-moz-transform: translate3d(-234px, 0, 0) rotate3d(0, 1, 0, -70deg);\n" +
    "\t-ms-transform: translate3d(-234px, 0, 0) rotate3d(0, 1, 0, -70deg);\n" +
    "\t-o-transform: translate3d(-234px, 0, 0) rotate3d(0, 1, 0, -70deg);\n" +
    "\ttransform: translate3d(-234px, 0, 0) rotate3d(0, 1, 0, -70deg);\n" +
    "\n" +
    "}\n" +
    "</style>\n" +
    "<div id=\"transforms3d1container\">\n" +
    "\t<div id=\"transforms3d1test\"></div>\n" +
    "</div></div><div class=\"info\">Parent:\n" +
    "perspective: 600;\n" +
    "perspective-origin: 0 200px;\n" +
    "\n" +
    "Child:\n" +
    "\n" +
    "transform: translate3d(-234px, 0, 0) rotate3d(0, 1, 0, -70deg);</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Video element</h3><span class=\"links\">[<a href=\"http://caniuse.com/video\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=video&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"video0\" class=\"auto pass\"></div><script>\n" +
    "setResult('video0', !!document.createElement('video').canPlayType);\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"video1\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    "\t<source src=\"video.mp4\" type=\"video/mp4\">\n" +
    "\t<source src=\"video.ogv\" type=\"video/ogv\">\n" +
    "\t<source src=\"video.webm\" type=\"video/webm\">\n" +
    "</video><div class=\"info\">Video with controls and all three formats available.</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"video2\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    "\t<source src=\"mimevid.php?type=.mp4\" type=\"video/mp4\">\n" +
    "\t<source src=\"mimevid.php?type=.ogv\" type=\"video/ogg\">\n" +
    "\t<source src=\"mimevid.php?type=.webm\" type=\"video/webm\">\n" +
    "</video><div class=\"info\">Video with controls and all three formats available (with MIME).</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Web Sockets</h3><span class=\"links\">[<a href=\"http://caniuse.com/websockets\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=websockets&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"websockets0\" class=\"auto pass\"></div><script>setResult('websockets0', Modernizr.websockets);</script><div class=\"info\">Modernizr test for: \"websockets\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Web Workers</h3><span class=\"links\">[<a href=\"http://caniuse.com/webworkers\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=webworkers&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"webworkers0\" class=\"auto pass\"></div><script>setResult('webworkers0', Modernizr.webworkers);</script><div class=\"info\">Modernizr test for: \"webworkers\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"webworkers1\" class=\"auto pass\"></div><script>\n" +
    "(function() {\n" +
    "\n" +
    "try {\n" +
    "\n" +
    "\tvar w = new Worker('worker.js');\n" +
    "\t\n" +
    "\tw.onmessage = function (event) {\n" +
    "\t  var success = (event.data && event.data === 'worker works');\n" +
    "\t  setResult('webworkers1', success);\n" +
    "\t}\n" +
    "\t\n" +
    "\tw.postMessage('');\n" +
    "\n" +
    "} catch(e) {\n" +
    "\tsetResult('webworkers1', false);\n" +
    "}\n" +
    "\n" +
    "}());\n" +
    "</script><div class=\"info\">Create a new Worker using new Worker('worker.js');\n" +
    "\n" +
    "Then, test postMessage and onmessage event.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Cross-document messaging</h3><span class=\"links\">[<a href=\"http://caniuse.com/x-doc-messaging\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=x-doc-messaging&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"x-doc-messaging0\" class=\"auto pass\"></div><script>setResult('x-doc-messaging0', Modernizr.postmessage);</script><div class=\"info\">Modernizr test for: \"postmessage\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>XMLHttpRequest 2</h3><span class=\"links\">[<a href=\"http://caniuse.com/xhr2\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=xhr2&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"xhr20\" class=\"auto pass\"></div><script>\n" +
    "var progEv = !!(window.ProgressEvent);\n" +
    "var fdata = !!(window.FormData);\n" +
    "setResult('xhr20', (progEv && fdata));\n" +
    "</script></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>XHTML served as application/xhtml+xml</h3><span class=\"links\">[<a href=\"http://caniuse.com/xhtml\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=xhtml&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"xhtml0\" class=\"auto pass\"></div><iframe src=\"./caniuse_files/xhtml.html\" width=\"15\" height=\"15\" style=\"display:none\"></iframe></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS Generated content</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-gencontent\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-gencontent&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"css-gencontent0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "#gencontent:before {\n" +
    " content: 'A';\n" +
    "}\n" +
    "#gencontent:after {\n" +
    " content: 'Z';\n" +
    "}\n" +
    "</style>\n" +
    "<span id=\"gencontent\">-</span></div><div class=\"vis_ref\"><img src=\"./caniuse_files/before-after.png\"></div><div class=\"info\">Element with CSS: \n" +
    "#gencontent:before {\n" +
    " content: 'A';\n" +
    "}\n" +
    "#gencontent:after {\n" +
    " content: 'Z';\n" +
    "}</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS Table display</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-table\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-table&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"css-table0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "#table-test { display: table; }\n" +
    "#table-test .table-tr { display: table-row; }\n" +
    "#table-test .table-td { display: table-cell;border:1px solid; }\n" +
    "</style>\n" +
    "<div style=\"display:inline-block;vertical-align:middle\">\n" +
    "<div id=\"table-test\">\n" +
    "\t<div class=\"table-tr\">\n" +
    "\t\t<div class=\"table-td\">topleft</div>\n" +
    "\t\t<div class=\"table-td\">topright</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"table-tr\">\n" +
    "\t\t<div class=\"table-td\">bottomleft</div>\n" +
    "\t\t<div class=\"table-td\">bottomright</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "</div></div><div class=\"vis_ref\"><img src=\"./caniuse_files/table.png\"></div><p class=\"condition\">Should be 2x2 table</p></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>HTML5 form features</h3><span class=\"links\">[<a href=\"http://caniuse.com/forms\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=forms&prefix=all\">Single feat</a>]</span></th><td class=\"current partial\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"forms0\" class=\"visual\"></div><div class=\"vis_test\"><input type=\"date\"><br><input type=\"time\"><br><input type=\"range\"><br><input type=\"number\"></div><p class=\"condition\">date/time/range/number widgets</p></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>MathML</h3><span class=\"links\">[<a href=\"http://caniuse.com/mathml\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=mathml&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"mathml0\" class=\"visual\"></div><div class=\"vis_test\"><iframe src=\"./caniuse_files/mathml.html\" width=\"210\" height=\"110\" style=\"border:0;\"></iframe></div><div class=\"vis_ref\"><img src=\"./caniuse_files/mathml_ref.png\"></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>PNG alpha transparency</h3><span class=\"links\">[<a href=\"http://caniuse.com/png-alpha\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=png-alpha&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"png-alpha0\" class=\"visual\"></div><div class=\"vis_test\"><img src=\"./caniuse_files/alpha.png\" style=\"background-color:lime\"></div><div class=\"vis_ref\"><img src=\"./caniuse_files/png_alpha_result.png\"></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Ruby annotation</h3><span class=\"links\">[<a href=\"http://caniuse.com/ruby\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=ruby&prefix=all\">Single feat</a>]</span></th><td class=\"current partial\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"ruby0\" class=\"visual\"></div><div class=\"vis_test\">\n" +
    "<div style=\"display:inline-block;vertical-align:middle\">\n" +
    "<ruby>(bottom1)<rt>(top1)</rt>(bottom2)<rt>(top2)</rt></ruby>\n" +
    "</div></div><div class=\"vis_ref\"><img src=\"./caniuse_files/ruby.png\"></div><p class=\"condition\">Elements should be stacked on top of each other</p></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>SVG filters</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg-filters\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg-filters&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"svg-filters0\" class=\"visual\"></div><div class=\"vis_test\"><object data=\"http://tests.caniuse.com/blur.svg\" type=\"image/svg+xml\" height=\"70\" width=\"70\">\n" +
    "\tobject SVG not supported\n" +
    "</object>\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/svg_blur.png\"></div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"svg-filters1\" class=\"visual-square\"></div><div class=\"square\"><object type=\"image/svg+xml\" width=\"30\" height=\"30\" data=\"http://tests.caniuse.com/fecolormatrix.svg\" style=\"overflow:visible\"> SVG fail\n" +
    "</object></div><p class=\"condition\">Must be green (not lime)</p><div class=\"info\">SVG with &lt;feColorMatrix type=\"hueRotate\" values=\"120\"/&gt;</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"svg-filters2\" class=\"visual-square\"></div><div class=\"square\"><object type=\"image/svg+xml\" width=\"30\" height=\"30\" data=\"http://tests.caniuse.com/feflood.svg\" style=\"overflow:visible\"> SVG fail\n" +
    "</object></div><div class=\"info\">SVG with &lt;feFlood flood-color=\"lime\"/&gt;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Word-wrap</h3><span class=\"links\">[<a href=\"http://caniuse.com/wordwrap\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=wordwrap&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"wordwrap0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "#wordwraptest {\n" +
    "  display: inline-block;\n" +
    "  width: 30px;\n" +
    "  word-wrap: break-word;\n" +
    "}\n" +
    "\n" +
    "</style>\n" +
    "<div id=\"wordwraptest\">abcdefghijklmnopqrstuvwxyz</div>\n" +
    "\n" +
    "\n" +
    "</div><p class=\"condition\">Text should wrap</p></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"wordwrap1\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "#wordwraptest2 {\n" +
    "  display: inline-block;\n" +
    "  width: 30px;\n" +
    "  word-wrap: normal;\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"wordwraptest2\">abcdefghijklmnopqrstuvwxyz</div>\n" +
    "</div><p class=\"condition\">Text should overflow box</p></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"wordwrap2\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;background:red;overflow:hidden\">\n" +
    "\t<div style=\"color:lime;font-size:10px;line-height:10px;word-wrap:break-word;background:lime;\">abcdefghijklmnop</div>\n" +
    "</div>\n" +
    "</div><div class=\"info\">word-wrap: break-word;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>calc() as CSS unit value</h3><span class=\"links\">[<a href=\"http://caniuse.com/calc\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=calc&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"calc0\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#calc0test {\n" +
    "\twidth: 0px;\n" +
    "\twidth: -webkit-calc(10px + 20px);\n" +
    "\twidth: -moz-calc(10px + 20px);\n" +
    "\twidth: -ms-calc(10px + 20px);\n" +
    "\twidth: -o-calc(10px + 20px);\n" +
    "\twidth: calc(10px + 20px);\n" +
    "\theight: 30px;\n" +
    "\tbackground: lime;\n" +
    "}\n" +
    "</style>\n" +
    "<div id=\"calc0test\"></div>\n" +
    "</div><div class=\"info\">width: calc(10px + 20px);</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"calc2\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#calc2test {\n" +
    "height:-webkit-calc(60px - 100%); width:-webkit-calc((100% / 2) + 15px - 0.5em); border-right:-webkit-calc(0.5em) solid lime;\n" +
    "height:-moz-calc(60px - 100%); width:-moz-calc((100% / 2) + 15px - 0.5em); border-right:-moz-calc(0.5em) solid lime;\n" +
    "height:-ms-calc(60px - 100%); width:-ms-calc((100% / 2) + 15px - 0.5em); border-right:-ms-calc(0.5em) solid lime;\n" +
    "height:-o-calc(60px - 100%); width:-o-calc((100% / 2) + 15px - 0.5em); border-right:-o-calc(0.5em) solid lime;\n" +
    "height:calc(60px - 100%); width:calc((100% / 2) + 15px - 0.5em); border-right:calc(0.5em) solid lime;\n" +
    "\n" +
    "background: lime;\n" +
    "}\n" +
    "</style>\n" +
    "<div id=\"calc2test\"></div>\n" +
    "</div><div class=\"info\">height: calc(60px - 100%);\n" +
    "width: calc((100% / 2) + 15px - 0.5em);\n" +
    "border-right: calc(0.5em) solid lime;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS Grid Layout</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-grid\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-grid&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-grid0\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#css-grid0grid {\n" +
    "\tdisplay: -webkit-grid; \tdisplay: -moz-grid; \tdisplay: -ms-grid; \tdisplay: -o-grid; \tdisplay: grid; \n" +
    "\t-webkit-grid-columns: 15px 1fr; \t-moz-grid-columns: 15px 1fr; \t-ms-grid-columns: 15px 1fr; \t-o-grid-columns: 15px 1fr; \tgrid-columns: 15px 1fr; \n" +
    "\t-webkit-grid-rows: 15px 15px; \t-moz-grid-rows: 15px 15px; \t-ms-grid-rows: 15px 15px; \t-o-grid-rows: 15px 15px; \tgrid-rows: 15px 15px; \n" +
    "\n" +
    "}\n" +
    "\n" +
    "#css-grid0grid > div {\n" +
    "\tbackground: lime;\n" +
    "}\n" +
    "\n" +
    "#css-grid0a {\n" +
    "\t-webkit-grid-row: 1; \t-moz-grid-row: 1; \t-ms-grid-row: 1; \t-o-grid-row: 1; \tgrid-row: 1; \n" +
    "\t-webkit-grid-column: 1; \t-moz-grid-column: 1; \t-ms-grid-column: 1; \t-o-grid-column: 1; \tgrid-column: 1; \n" +
    "}\n" +
    "\n" +
    "#css-grid0b {\n" +
    "\t-webkit-grid-row: 1; \t-moz-grid-row: 1; \t-ms-grid-row: 1; \t-o-grid-row: 1; \tgrid-row: 1; \n" +
    "\t-webkit-grid-column: 2; \t-moz-grid-column: 2; \t-ms-grid-column: 2; \t-o-grid-column: 2; \tgrid-column: 2; \n" +
    "}\n" +
    "\n" +
    "#css-grid0c {\n" +
    "\t-webkit-grid-row: 2; \t-moz-grid-row: 2; \t-ms-grid-row: 2; \t-o-grid-row: 2; \tgrid-row: 2; \n" +
    "\t-webkit-grid-column: 1; \t-moz-grid-column: 1; \t-ms-grid-column: 1; \t-o-grid-column: 1; \tgrid-column: 1; \n" +
    "\t-webkit-grid-column-span: 2; \t-moz-grid-column-span: 2; \t-ms-grid-column-span: 2; \t-o-grid-column-span: 2; \tgrid-column-span: 2; \n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"css-grid0grid\">\n" +
    "\t <div id=\"css-grid0a\"></div>\n" +
    "\t <div id=\"css-grid0b\"></div>\n" +
    "\t <div id=\"css-grid0c\"></div>\n" +
    "</div>\n" +
    "\n" +
    "</div><div class=\"info\">Grid with two columns, two rows and three elements taking up space.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Media Queries</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-mediaqueries\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-mediaqueries&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-mediaqueries0\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#mediaq1,#mediaq2,#mediaq3,#mediaq4 {\n" +
    " background: red;\n" +
    " float: left;\n" +
    " width: 15px;\n" +
    " height: 15px;\n" +
    "}\n" +
    "\n" +
    "#mediaq3 {\n" +
    "\tclear: left;\n" +
    "}\n" +
    "\n" +
    "@media all and (min-width: 0px) {\n" +
    " #mediaq1, #mediaq3 { background: lime; }\n" +
    "}\n" +
    "\n" +
    "@media all and (max-width: 999999px) {\n" +
    " #mediaq2, #mediaq4 { background: lime; }\n" +
    "}\n" +
    "\n" +
    "\n" +
    "@media all and (min-width: 999999px) {\n" +
    " #mediaq3 { background: red; }\n" +
    "}\n" +
    "\n" +
    "@media all and (max-width: 0px) {\n" +
    " #mediaq4 { background: red; }\n" +
    "}\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"mediaq1\"></div>\n" +
    "<div id=\"mediaq2\"></div>\n" +
    "<div id=\"mediaq3\"></div>\n" +
    "<div id=\"mediaq4\"></div></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS 2.1 selectors</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-sel2\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-sel2&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-sel20\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#css-sel20test div {\n" +
    "\twidth: 30px;\n" +
    "\theight: 30px;\n" +
    "\tbackground: red;\n" +
    "}\n" +
    "\n" +
    "#css-sel20test > div {\n" +
    "\tbackground: lime;\n" +
    "}\n" +
    "</style>\n" +
    "<div id=\"css-sel20test\">\n" +
    "\t<div></div>\n" +
    "</div>\n" +
    "</div><div class=\"info\">Test for child ( &gt; )selector</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-sel21\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#css-sel21test + div { background: lime; width:30px; height:30px;}\n" +
    "</style>\n" +
    "<div id=\"css-sel21test\"></div>\n" +
    "<div></div>\n" +
    "</div><div class=\"info\">Adjacent sibling selector test ( + )</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css-sel22\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#css-sel22test[role=\"none\"] { background: lime; width:30px; height:30px;}\n" +
    "</style>\n" +
    "<div id=\"css-sel22test\" role=\"none\"></div></div><div class=\"info\">Attribute selector ( [role=\"none\"] )</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Box-sizing</h3><span class=\"links\">[<a href=\"http://caniuse.com/css3-boxsizing\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css3-boxsizing&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"css3-boxsizing0\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#boxsizetest {\n" +
    "   -webkit-box-sizing: border-box;\n" +
    "-moz-box-sizing: border-box;\n" +
    "-ms-box-sizing: border-box;\n" +
    "-o-box-sizing: border-box;\n" +
    "box-sizing: border-box;\n" +
    "    background: red;\n" +
    "    border-left: 30px solid lime;\n" +
    "    display: inline-block;\n" +
    "    height: 30px;\n" +
    "    width: 30px;\n" +
    "}\n" +
    "</style>\n" +
    "<div id=\"boxsizetest\"></div>\n" +
    "</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Data URLs</h3><span class=\"links\">[<a href=\"http://caniuse.com/datauri\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=datauri&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"datauri0\" class=\"visual-square\"></div><div class=\"square\"><div style=\"background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAP8AAAAAbwN%2BQwAAAAxJREFUeNpiYAAIMAAAAgABT21Z4QAAAABJRU5ErkJggg%3D%3D&#39;);width:30px;height:30px;\"></div></div><div class=\"info\">div with data URL as background image</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>New semantic elements</h3><span class=\"links\">[<a href=\"http://caniuse.com/html5semantic\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=html5semantic&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"html5semantic0\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#html5semantic0test {\n" +
    "\twidth: 30px;\n" +
    "\theight: 30px;\n" +
    "\tbackground: red;\n" +
    "}\n" +
    "\n" +
    "#html5semantic0test * {\n" +
    "\tbackground: lime;\n" +
    "\theight: 4px;\n" +
    "}\n" +
    "\n" +
    "#html5semantic0test section {\n" +
    "\theight: 6px;\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"html5semantic0test\">\n" +
    "\t<section></section>\n" +
    "\t<article></article>\n" +
    "\t<aside></aside>\n" +
    "\t<hgroup></hgroup>\n" +
    "\t<header></header>\n" +
    "\t<footer></footer>\n" +
    "\t<nav></nav>\n" +
    "</div></div><div class=\"info\">section, article, aside, hgroup, header, footer, nav tested for default \"block\" style.</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS inline-block</h3><span class=\"links\">[<a href=\"http://caniuse.com/inline-block\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=inline-block&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"inline-block0\" class=\"visual-square\"></div><div class=\"square\"><div style=\"background:lime;display:inline-block;width:15px;height:30px;\"></div><div style=\"background:lime;display:inline-block;width:15px;height:30px;\"></div></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS min/max-width/height</h3><span class=\"links\">[<a href=\"http://caniuse.com/minmaxwh\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=minmaxwh&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"minmaxwh0\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:200%;max-width:30px;height:30px;overflow:visible;background:lime\"></div></div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"minmaxwh1\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:0;min-width:30px;height:30px;background:lime\"></div></div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"minmaxwh2\" class=\"visual-square\"></div><div class=\"square\"><div style=\"height:100px;max-height:30px;width:30px;background:lime\"></div></div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"minmaxwh3\" class=\"visual-square\"></div><div class=\"square\"><div style=\"height:0;min-height:30px;width:30px;background:lime\"></div></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 object-fit/object-position</h3><span class=\"links\">[<a href=\"http://caniuse.com/object-fit\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=object-fit&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"object-fit0\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#object-fit0test {\n" +
    "\twidth: 30px;\n" +
    "\theight: 30px;\n" +
    "\tbackground: lime;\n" +
    "\toverflow: hidden;\n" +
    "}\n" +
    "\n" +
    "#object-fit0test img {\n" +
    "\t-webkit-object-fit: contain;\n" +
    "-moz-object-fit: contain;\n" +
    "-ms-object-fit: contain;\n" +
    "-o-object-fit: contain;\n" +
    "object-fit: contain;\n" +
    "\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"object-fit0test\">\n" +
    "\t<img src=\"./caniuse_files/red30x30.png\" width=\"90\" height=\"30\">\n" +
    "</div></div><div class=\"info\">object-fit: contain</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"object-fit2\" class=\"visual-square\"></div><div class=\"square\"><style>\n" +
    "#object-fit2test {\n" +
    "\twidth: 30px;\n" +
    "\theight: 30px;\n" +
    "\tbackground: lime;\n" +
    "\toverflow: hidden;\n" +
    "}\n" +
    "\n" +
    "#object-fit2test img {\n" +
    "\t-webkit-object-position: 30px 30px;\n" +
    "-moz-object-position: 30px 30px;\n" +
    "-ms-object-position: 30px 30px;\n" +
    "-o-object-position: 30px 30px;\n" +
    "object-position: 30px 30px;\n" +
    "\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"object-fit2test\">\n" +
    "\t<img src=\"./caniuse_files/red30x30.png\" width=\"30\" height=\"30\">\n" +
    "</div>\n" +
    "</div><div class=\"info\">object-position: 30px 30px;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>rem (root em) units</h3><span class=\"links\">[<a href=\"http://caniuse.com/rem\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=rem&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"rem0\" class=\"visual-square\"></div><div class=\"square\"><div style=\"background:red;width:30px;height:30px;position:relative;overflow:hidden;text-align:left\">\n" +
    "\t<span style=\"font-size:1px;background:lime;color:lime;position:relative;left:-6px;line-height:30px;font-size:5rem;\">A</span>\n" +
    "</div></div><div class=\"info\">span with single character and font-size: 5rem;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>SVG in CSS backgrounds</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg-css\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg-css&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"svg-css0\" class=\"visual-square\"></div><div class=\"square\"><div style=\"width:30px;height:30px;background-image: url(caniuse_files/svg-img.svg)\"></div>\n" +
    "\n" +
    "</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>SVG in HTML img element</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg-img\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg-img&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"svg-img0\" class=\"visual-square\"></div><div class=\"square\"><img src=\"./caniuse_files/svg-img.svg\" width=\"30\" height=\"30\"></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>contenteditable attribute (basic support)</h3><span class=\"links\">[<a href=\"http://caniuse.com/contenteditable\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=contenteditable&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"contenteditable0\" class=\"interact\"></div><div contenteditable=\"true\">\n" +
    "<p>This element should be editable.</p>\n" +
    "</div><div class=\"info\">Div element with attribute  contenteditable=\"true\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 selectors</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-sel3\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-sel3&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"css-sel30\" class=\"interact\"></div><a href=\"http://tools.css3.info/selectors-test/test.html\" target=\"_blank\">Test here</a></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Drag and Drop</h3><span class=\"links\">[<a href=\"http://caniuse.com/dragndrop\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=dragndrop&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"dragndrop0\" class=\"interact\"></div><a href=\"http://html5demos.com/drag\">Test here</a></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>WAI-ARIA Accessibility features</h3><span class=\"links\">[<a href=\"http://caniuse.com/wai-aria\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=wai-aria&prefix=all\">Single feat</a>]</span></th><td class=\"current partial\">&nbsp;</td><td>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Text API for Canvas</h3><span class=\"links\">[<a href=\"http://caniuse.com/canvas-text\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=canvas-text&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"canvas-text0\" class=\"auto pass\"></div><script>setResult('canvas-text0', Modernizr.canvastext);</script><div class=\"info\">Modernizr test for: \"canvastext\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>WebGL - 3D Canvas graphics</h3><span class=\"links\">[<a href=\"http://caniuse.com/webgl\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=webgl&prefix=all\">Single feat</a>]</span></th><td class=\"current partial\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"webgl0\" class=\"auto pass\"></div><script>setResult('webgl0', Modernizr.webgl);</script><div class=\"info\">Modernizr test for: \"webgl\"</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"webgl1\" class=\"visual-square\"></div><div class=\"square\"><canvas width=\"30\" height=\"30\" style=\"background:red;\" id=\"webgl_canvas\"></canvas>\n" +
    "<script>\n" +
    "var elem  = $('#webgl_canvas')[0], g;\n" +
    "try {\n" +
    "    g     = elem.getContext && elem.getContext('experimental-webgl');\n" +
    "} catch(e){};\n" +
    "\n" +
    "if (g){    \n" +
    "  g.clearColor(0,1,0,1);\n" +
    "  g.clear(g.COLOR_BUFFER_BIT);\n" +
    "}\n" +
    "</script>\n" +
    "</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>SVG fonts</h3><span class=\"links\">[<a href=\"http://caniuse.com/svg-fonts\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=svg-fonts&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"svg-fonts0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "@font-face { \n" +
    "  font-family: Windsong_svg; \n" +
    "  src: url(caniuse_files/Windsong-webfont.svg#webfontuOn4Eelr) format(\"svg\");\n" +
    "}\n" +
    "#windsong_svg {\n" +
    "\tfont: 18px Windsong_svg;\n" +
    "\tmargin: 5px;\n" +
    "}\n" +
    "</style>\n" +
    "<p id=\"windsong_svg\">Windsong font</p>\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/windsong_font.png\"></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>TTF/OTF - TrueType and OpenType font support</h3><span class=\"links\">[<a href=\"http://caniuse.com/ttf\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=ttf&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"ttf0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "@font-face {\n" +
    "\tfont-family: 'Windsong_otf';\n" +
    "\tsrc: url('caniuse_files/Windsong-webfont.otf');\n" +
    "}\n" +
    "\n" +
    "#windsong_otf {\n" +
    "\tfont: 18px Windsong_otf;\n" +
    "\tmargin: 5px;\n" +
    "}\n" +
    "</style>\n" +
    "<p id=\"windsong_otf\">Windsong font</p>\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/windsong_font.png\"></div><div class=\"info\">OTF font test</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"ttf1\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "@font-face {\n" +
    "\tfont-family: 'Windsong_ttf';\n" +
    "\tsrc: url('caniuse_files/Windsong-webfont.ttf');\n" +
    "}\n" +
    "\n" +
    "#windsong_ttf {\n" +
    "\tfont: 18px Windsong_ttf;\n" +
    "\tmargin: 5px;\n" +
    "}\n" +
    "</style>\n" +
    "<p id=\"windsong_ttf\">Windsong font</p>\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/windsong_font.png\"></div><div class=\"info\">TTF font test</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>WOFF - Web Open Font Format</h3><span class=\"links\">[<a href=\"http://caniuse.com/woff\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=woff&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"woff0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "@font-face {\n" +
    "\tfont-family: 'Windsong_woff';\n" +
    "\tsrc: url('caniuse_files/Windsong-webfont.woff');\n" +
    "}\n" +
    "\n" +
    "#windsong_woff {\n" +
    "\tfont: 18px Windsong_woff;\n" +
    "\tmargin: 5px;\n" +
    "}\n" +
    "</style>\n" +
    "<p id=\"windsong_woff\">Windsong font</p>\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/windsong_font.png\"></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Progress &amp; Meter</h3><span class=\"links\">[<a href=\"http://caniuse.com/progressmeter\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=progressmeter&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"progressmeter0\" class=\"visual\"></div><div class=\"vis_test\"><div style=\"display:inline-block;vertical-align:middle\">\n" +
    "<progress value=\"5\" max=\"10\">fail</progress>\n" +
    "<meter value=\"5\" max=\"10\">fail</meter>\n" +
    "</div></div><p class=\"condition\">Progress and meter widgets at 50%</p></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Datalist element</h3><span class=\"links\">[<a href=\"http://caniuse.com/datalist\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=datalist&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"datalist0\" class=\"interact\"></div><input type=\"text\" list=\"mydatalist\">\n" +
    "<datalist id=\"mydatalist\">\n" +
    "<option value=\"foo\">foo</option>\n" +
    "<option value=\"bar\">bar</option>\n" +
    "<option value=\"foobar\">foobar</option>\n" +
    "</datalist><p class=\"condition\">Show \"foo\" and \"foobar\" as options when \"f\" is entered</p></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Form validation</h3><span class=\"links\">[<a href=\"http://caniuse.com/form-validation\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=form-validation&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"form-validation0\" class=\"interact\"></div><iframe src=\"./caniuse_files/form_validation.html\" width=\"300\" height=\"80\"></iframe><p class=\"condition\">Form should show warning and NOT submit</p></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>MPEG-4/H.264 video format</h3><span class=\"links\">[<a href=\"http://caniuse.com/mpeg4\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=mpeg4&prefix=all\">Single feat</a>]</span></th><td class=\"current fail\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"mpeg40\" class=\"auto pass\"></div><script>\n" +
    "var v = document.createElement('video'); \n" +
    "setResult('mpeg40', !!(v.canPlayType && v.canPlayType('video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"').replace(/no/, '')));\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"mpeg41\" class=\"interact\"></div><video src=\"video.mp4\" width=\"160\" height=\"120\" controls=\"\">fail</video><div class=\"info\">Video, no MIME, no type attribute.</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"mpeg42\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    " <source src=\"video.mp4\" type=\"video/ogg; codecs=&quot;theora, vorbis&quot;\">\n" +
    "</video><div class=\"info\">Video with source element</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"mpeg43\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    " <source src=\"mimevid.php?type=.mp4\" type=\"video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;\">\n" +
    "</video><div class=\"info\">Video with source element and MIME set</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Ogg/Theora video format</h3><span class=\"links\">[<a href=\"http://caniuse.com/ogv\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=ogv&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"ogv0\" class=\"auto pass\"></div><script>\n" +
    "var v = document.createElement('video'); \n" +
    "setResult('ogv0', !!(v.canPlayType && v.canPlayType('video/ogg; codecs=\"theora\"').replace(/no/, '')));\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"ogv1\" class=\"interact\"></div><video src=\"video.ogv\" width=\"160\" height=\"120\" controls=\"\">fail</video><div class=\"info\">Video, no MIME, no type attribute.</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"ogv2\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    " <source src=\"mimevid.php?type=.ogv\" type=\"video/ogg; codecs=&quot;theora, vorbis&quot;\">\n" +
    "</video><div class=\"info\">Video with source element and MIME set</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"ogv3\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    " <source src=\"video.ogv\" type=\"video/ogg; codecs=&quot;theora, vorbis&quot;\">\n" +
    "</video><div class=\"info\">Video with source element</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>WebM/VP8 video format</h3><span class=\"links\">[<a href=\"http://caniuse.com/webm\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=webm&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"webm0\" class=\"auto pass\"></div><script>\n" +
    "var v = document.createElement('video'); \n" +
    "setResult('webm0', !!(v.canPlayType && v.canPlayType('video/webm; codecs=\"vp8, vorbis\"').replace(/no/, '')));\n" +
    "</script></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"webm1\" class=\"interact\"></div><video src=\"video.webm\" width=\"160\" height=\"120\" controls=\"\">fail</video><div class=\"info\">Video, no MIME, no type attribute.</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"webm2\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    " <source src=\"video.webm\" type=\"video/ogg; codecs=&quot;theora, vorbis&quot;\">\n" +
    "</video><div class=\"info\">Video with source element</div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Interact</h3><div id=\"webm3\" class=\"interact\"></div><video width=\"160\" height=\"120\" controls=\"\">\n" +
    " <source src=\"mimevid.php?type=.webm\" type=\"video/webm; codecs=&quot;vp8, vorbis&quot;\">\n" +
    "</video><div class=\"info\">Video with source element and MIME set</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Animated PNG (APNG) [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/apng\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=apng&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"apng0\" class=\"auto fail\"></div><script>\n" +
    "(function() {\n" +
    "\t// From: http://eligrey.com/blog/post/apng-feature-detection\n" +
    "\tvar apngTest = new Image();\n" +
    "\tvar canv = document.createElement(\"canvas\");\n" +
    "\tvar apng_supported = null;\n" +
    "\tif(canv.getContext && canv.getContext(\"2d\").drawImage) {\n" +
    "\t\tvar ctx = canv.getContext(\"2d\");\n" +
    "\t\tvar apng_supported = false;\n" +
    "\t\tapngTest.onload = function () {\n" +
    "\t\t\tctx.drawImage(apngTest, 0, 0);\n" +
    "\t\t\tapng_supported = ( ctx.getImageData(0, 0, 1, 1).data[3] === 0 );\n" +
    "\t\t\tsetResult('apng0', apng_supported);\n" +
    "\t\t};\n" +
    "\t\tapngTest.src = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==\";\n" +
    "\t} else {\n" +
    "\t\tsetResult('apng0', false);\n" +
    "\t}\n" +
    "}());\n" +
    "\n" +
    "\n" +
    "</script><div class=\"info\">Test for second frame using Canvas element </div></div>\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"apng1\" class=\"visual\"></div><div class=\"vis_test\"><img src=\"./caniuse_files/apng_test.png\" width=\"16\" height=\"16\"></div><p class=\"condition\">Must animate</p></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS Canvas Drawings [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-canvas\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-canvas&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"css-canvas0\" class=\"auto pass\"></div><script>\n" +
    "setResult('css-canvas0', 'getCSSCanvasContext' in document)\n" +
    "</script><div class=\"info\">'getCSSCanvasContext' in document</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS Reflections [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-reflections\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-reflections&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"css-reflections0\" class=\"auto pass\"></div><script>setResult('css-reflections0', Modernizr.cssreflections);</script><div class=\"info\">Modernizr test for: \"cssreflections\"</div></div>\n" +
    "\n" +
    "\n" +
    "<div class=\"test_wrap\"><h3>Visual-square</h3><div id=\"reflections1\" class=\"visual-square\"></div><div class=\"square\">\n" +
    "\n" +
    "  <div style=\"width:30px; height:30px; overflow:hidden; position:relative; background:red;\">\n" +
    " <div style=\"background: lime;\n" +
    "            height: 30px;\n" +
    "            position: relative;\n" +
    "            top: -30px;\n" +
    "            width: 30px;\n" +
    "            -webkit-box-reflect: below 0;\n" +
    "               -moz-box-reflect: below 0;\n" +
    "                -ms-box-reflect: below 0;\n" +
    "                 -o-box-reflect: below 0;\n" +
    "                    box-reflect: below 0;\n" +
    "            \"></div>\n" +
    "\n" +
    "</div></div></div>\n" +
    "\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Web SQL Database [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/sql-storage\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=sql-storage&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto (m)</h3><div id=\"sql-storage0\" class=\"auto pass\"></div><script>setResult('sql-storage0', Modernizr.websqldatabase);</script><div class=\"info\">Modernizr test for: \"websqldatabase\"</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>Stream API [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/stream\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=stream&prefix=all\">Single feat</a>]</span></th><td class=\"current unknown\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Auto</h3><div id=\"stream0\" class=\"auto fail\"></div><script>\n" +
    "setResult('stream0', \"getUserMedia\" in navigator);\n" +
    "</script><div class=\"info\">Test for \"getUserMedia\" in navigator object</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS Masks [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/css-masks\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=css-masks&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"css-masks0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "#masktest {\n" +
    "\t-webkit-mask-image: url(caniuse_files/alpha.png);\n" +
    "-moz-mask-image: url(caniuse_files/alpha.png);\n" +
    "-ms-mask-image: url(caniuse_files/alpha.png);\n" +
    "-o-mask-image: url(caniuse_files/alpha.png);\n" +
    "mask-image: url(caniuse_files/alpha.png);\n" +
    "    background: black;\n" +
    "    height: 16px;\n" +
    "    width: 32px;\n" +
    "    display: inline-block;\n" +
    "    margin-left: -32px;\n" +
    "}\n" +
    "#masktestbg {\n" +
    "    display: inline-block;\n" +
    "\tbackground: lime;\n" +
    "    height: 16px;\n" +
    "    width: 32px;\n" +
    "\tleft: -32px;\n" +
    "}\n" +
    "\n" +
    "</style>\n" +
    "<div id=\"masktestbg\"></div><div id=\"masktest\"></div>\n" +
    "\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/png_alpha_result.png\"></div><div class=\"info\">mask-image: url(caniuse_files/alpha.png);</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS3 Text-overflow [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/text-overflow\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=text-overflow&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"text-overflow0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "#textof {\n" +
    " width: 4em;\n" +
    " display: inline-block;\n" +
    " overflow: hidden;\n" +
    " font: 16px courier, monospace;\n" +
    "-webkit-text-overflow: ellipsis; \n" +
    "-moz-text-overflow: ellipsis; \n" +
    "-ms-text-overflow: ellipsis; \n" +
    "-o-text-overflow: ellipsis; \n" +
    "text-overflow: ellipsis; \n" +
    "\n" +
    " text-overflow: ellipsis; \n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"textof\">\n" +
    "abcdefghijklmnopqrstuvwxyz\n" +
    "</div></div><p class=\"condition\">Should end with ellipsis</p><div class=\"info\">text-overflow: ellipsis;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>CSS text-stroke [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/text-stroke\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=text-stroke&prefix=all\">Single feat</a>]</span></th><td class=\"current pass\">&nbsp;<span>-pre-</span></td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"text-stroke0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "#textstroke {\n" +
    "-webkit-text-stroke: 2px lime;\n" +
    "-moz-text-stroke: 2px lime;\n" +
    "-ms-text-stroke: 2px lime;\n" +
    "-o-text-stroke: 2px lime;\n" +
    "text-stroke: 2px lime;\n" +
    "\n" +
    "color: #000;\n" +
    "font-size: 15px;\n" +
    "padding: 5px;\n" +
    "font-family: Times New Roman, Times, serif;\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"textstroke\">\n" +
    "green stroked text\n" +
    "</div></div><div class=\"vis_ref\"><img src=\"./caniuse_files/stroked-text.png\"></div><div class=\"info\">text-stroke: 2px lime;</div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>EOT - Embedded OpenType fonts [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/eot\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=eot&prefix=all\">Single feat</a>]</span></th><td class=\"current fail\">&nbsp;</td><td>\n" +
    "<div class=\"test_wrap\"><h3>Visual</h3><div id=\"eot0\" class=\"visual\"></div><div class=\"vis_test\"><style>\n" +
    "@font-face {\n" +
    "\tfont-family: 'Windsong_eot';\n" +
    "\tsrc: url('caniuse_files/Windsong-webfont.eot');\n" +
    "}\n" +
    "\n" +
    "#windsong_eot {\n" +
    "\tfont: 18px Windsong_eot;\n" +
    "\tmargin: 5px;\n" +
    "}\n" +
    "</style>\n" +
    "<p id=\"windsong_eot\">Windsong font</p>\n" +
    "</div><div class=\"vis_ref\"><img src=\"./caniuse_files/windsong_font.png\"></div></div>\n" +
    "\n" +
    "</td></tr>\n" +
    "<tr><th><h3>XHTML+SMIL animation [unoff]</h3><span class=\"links\">[<a href=\"http://caniuse.com/xhtmlsmil\">Table</a>] [<a href=\"http://tests.caniuse.com/?feat=xhtmlsmil&prefix=all\">Single feat</a>]</span></th><td class=\"current fail\">&nbsp;</td><td>\n" +
    "\n" +
    "</td></tr>\n" +
    "</tbody></table>\n" +
    "<p>Most tests by <a href=\"http://a.deveria.com/\">Alexis Deveria</a>, additional contributions by <a href=\"http://paulirish.com/\">Paul Irish</a></p>\n" +
    "\n" +
    "<script>\n" +
    "(function() {\n" +
    "var gaJsHost = ((\"https:\" == document.location.protocol) ? \"https://ssl.\" : \"http://www.\");\n" +
    "document.write(unescape(\"%3Cscript src='\" + gaJsHost + \"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E\"));\n" +
    "}());\n" +
    "</script><script src=\"./caniuse_files/ga.js\" type=\"text/javascript\"></script>\n" +
    "<script>\n" +
    "(function() {\n" +
    "try {\n" +
    "var pageTracker = _gat._getTracker(\"UA-16085010-1\");\n" +
    "pageTracker._trackPageview();\n" +
    "} catch(err) {}\n" +
    "}());\n" +
    "</script></body></html>"
  );


  $templateCache.put('app/bower_components/modernizr/test/caniuse_files/form_validation.html',
    "<!DOCTYPE html>\n" +
    "<!-- saved from url=(0045)http://tests.caniuse.com/form_validation.html -->\n" +
    "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script>\n" +
    "if(location.href.indexOf('?') >= 0) {\n" +
    "\tdocument.write('FAIL');\n" +
    "}\n" +
    "</script>\n" +
    "\n" +
    "</head><body><form action=\"http://tests.caniuse.com/form_validation.html?\" method=\"post\">\n" +
    "\n" +
    "<input type=\"url\" name=\"foo\" required=\"\">\n" +
    "<input type=\"submit\" value=\"submit me!\">\n" +
    "\n" +
    "</form>\n" +
    "</body></html>"
  );


  $templateCache.put('app/bower_components/modernizr/test/caniuse_files/hashchange.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<meta charset=\"utf-8\" />\n" +
    "\t<title>hashchange test</title>\n" +
    "</head>\n" +
    "<body style=\"background:red;overflow:hidden;\">\n" +
    "<script>\n" +
    "addEventListener('hashchange', function() {\n" +
    "\tdocument.body.style.background = 'lime';\n" +
    "}, false);\n" +
    "\n" +
    "location.hash = Math.random();\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/modernizr/test/caniuse_files/mathml.html',
    "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN\" \"http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:html=\"http://www.w3.org/1999/xhtml\">\n" +
    "<head>\n" +
    "\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n" +
    "\t<title>Untitled</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\">\n" +
    "<mrow>\n" +
    "  <mi>k</mi>\n" +
    "  <mo>=</mo>\n" +
    "  <mfrac>\n" +
    "    <mrow>\n" +
    "      <mfrac>\n" +
    "         <mrow>\n" +
    "          <msup>\n" +
    "            <mo>∂</mo>\n" +
    "            <mn>2</mn>\n" +
    "          </msup>\n" +
    "          <mi>z</mi>\n" +
    "        </mrow>\n" +
    "        <mrow>\n" +
    "          <mo>∂</mo>\n" +
    "          <msup>\n" +
    "            <mi>x</mi>\n" +
    "            <mn>2</mn>\n" +
    "          </msup>\n" +
    "        </mrow>\n" +
    "      </mfrac>\n" +
    "      <mfrac>\n" +
    "        <mrow>\n" +
    "          <msup>\n" +
    "            <mo>∂</mo>\n" +
    "            <mn>2</mn>\n" +
    "          </msup>\n" +
    "          <mi>z</mi>\n" +
    "        </mrow>\n" +
    "        <mrow>\n" +
    "          <mo>∂</mo>\n" +
    "          <msup>\n" +
    "            <mi>y</mi>\n" +
    "            <mn>2</mn>\n" +
    "          </msup>\n" +
    "        </mrow>\n" +
    "      </mfrac>\n" +
    "      <mo>-</mo>\n" +
    "      <msup>\n" +
    "        <mrow>\n" +
    "          <mo>(</mo>\n" +
    "          <mfrac>\n" +
    "            <mrow>\n" +
    "              <msup>\n" +
    "                <mo>∂</mo>\n" +
    "                <mn>2</mn>\n" +
    "              </msup>\n" +
    "              <mi>z</mi>\n" +
    "            </mrow>\n" +
    "            <mrow>\n" +
    "              <mo>∂</mo>\n" +
    "              <mi>x</mi>\n" +
    "              <mo>∂</mo>\n" +
    "              <mi>y</mi>\n" +
    "              </mrow>\n" +
    "          </mfrac>\n" +
    "          <mo>)</mo>\n" +
    "        </mrow>\n" +
    "        <mn>2</mn>\n" +
    "      </msup>\n" +
    "    </mrow>\n" +
    "    <mrow>\n" +
    "      <msup>\n" +
    "        <mrow>\n" +
    "          <mo>(</mo>\n" +
    "          <mn>1</mn>\n" +
    "          <mo>+</mo>\n" +
    "          <msup>\n" +
    "            <mrow>\n" +
    "              <mo>(</mo>\n" +
    "              <mfrac>\n" +
    "                <mrow>\n" +
    "                  <mo>∂</mo>\n" +
    "                  <mi>z</mi>\n" +
    "                </mrow>\n" +
    "                <mrow>\n" +
    "                  <mo>∂</mo>\n" +
    "                  <mi>x</mi>\n" +
    "                </mrow>\n" +
    "              </mfrac>\n" +
    "              <mo>)</mo>\n" +
    "            </mrow>\n" +
    "            <mn>2</mn>\n" +
    "          </msup>\n" +
    "          <mo>+</mo>\n" +
    "          <msup>\n" +
    "            <mrow>\n" +
    "              <mo>(</mo>\n" +
    "              <mfrac>\n" +
    "                <mrow>\n" +
    "                  <mo>∂</mo>\n" +
    "                  <mi>z</mi>\n" +
    "                </mrow>\n" +
    "                <mrow>\n" +
    "                  <mo>∂</mo>\n" +
    "                  <mi>y</mi>\n" +
    "                </mrow>\n" +
    "              </mfrac>\n" +
    "              <mo>)</mo>\n" +
    "            </mrow>\n" +
    "            <mn>2</mn>\n" +
    "          </msup>\n" +
    "          <mo>)</mo>\n" +
    "        </mrow>\n" +
    "        <mn>2</mn>\n" +
    "      </msup>\n" +
    "    </mrow>\n" +
    "  </mfrac>\n" +
    "</mrow>\n" +
    "</math>\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('app/bower_components/modernizr/test/caniuse_files/pushstate.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<meta charset=\"utf-8\" />\n" +
    "\t<title>popstate event test</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "<script>\n" +
    "\n" +
    "(function() {\n" +
    "\tvar test_id;\n" +
    "\t\n" +
    "\tfunction showResult(r) {\n" +
    "\t\tif(test_id && window.parent.setResult) {\n" +
    "\t\t\tparent.setResult(test_id, r);\n" +
    "\t\t} else {\n" +
    "\t\t\talert(r);\n" +
    "\t\t}\n" +
    "\t}\n" +
    "\t\n" +
    "\tif(location.hash.length) {\n" +
    "\t\ttest_id = location.hash.substr(1);\n" +
    "\t}\n" +
    "\t\n" +
    "\tif(history.pushState) {\n" +
    "\t\tvar rand = Math.random();\n" +
    "\t\tsetTimeout(function() {\n" +
    "\t\t\thistory.pushState({foo: 'bar'}, \"title\", './' + rand);\n" +
    "\t\t\tvar result = (location.href.indexOf(rand) > -1);\n" +
    "\t\t\tshowResult(result);\n" +
    "\t\t}, 100);\n" +
    "\t} \n" +
    "\t\n" +
    "})();\n" +
    "\n" +
    "</script>\n" +
    "\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/modernizr/test/caniuse_files/xhtml.html',
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
    "<head>\n" +
    "\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n" +
    "\t<title>Untitled</title>\n" +
    "</head>\n" +
    "<body><p>true</p>\t\n" +
    "\t<script>\n" +
    "\t<![CDATA[\n" +
    "\twindow.parent.setResult('xhtml0', document.body.firstChild.textContent == 'true');\n" +
    "\t]]>\n" +
    "\t</script>\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('app/bower_components/modernizr/test/index.html',
    "<!DOCTYPE html>\n" +
    "<html class=\"+no-js no-js- no-js i-has-no-js\">\n" +
    "<head>\n" +
    "  <meta charset=\"UTF-8\">\n" +
    "  <title>Modernizr Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"qunit/qunit.css\">\n" +
    "  <style>\n" +
    "     body { margin-bottom: 150px;}\n" +
    "     #testbed { font-family: Helvetica; color: #444; padding-bottom: 100px;}\n" +
    "     #testbed button { margin: 30px; font-size: 13px;}\n" +
    "     .data-notes, .offScreen { display:none;}\n" +
    "     table { width: 100%;}\n" +
    "     tbody tr:nth-child(even) td, tbody tr:nth-child(even) th {  border: 1px solid #ccc; border-left: 0; border-right: 0;}\n" +
    "     table td:nth-child(even), table th:nth-child(even) { background: #e6e6e6;}\n" +
    "     table tbody tr:hover td, table tbody tr:hover th { background: #e1e100!important;}\n" +
    "     td.wrong { background:red!important;}\n" +
    "     #html5section { visibility: hidden; }\n" +
    "     h1 label { display:none;}\n" +
    "     .output { padding: 0 0 0 16px;}\n" +
    "     .output ul { margin: 0;}\n" +
    "     .output li { color: #854747; }\n" +
    "     .output li.yes{color:#090;}\n" +
    "     .output li b{color:#000;}\n" +
    "     .output {font:14px/1.3 Inconsolata,Consolas,monospace;\n" +
    "                    -webkit-column-count: 5;\n" +
    "                       -moz-column-count: 5;\n" +
    "                            column-count: 5;}\n" +
    "      .output + .output { border-top: 5px solid #ccc; }\n" +
    "      textarea { width: 100%; min-height: 75px;}\n" +
    "      #caniusetrigger { font-size: 38px; font-family: monospace; display:block; }\n" +
    "  </style>\n" +
    "\n" +
    "\n" +
    "  <script>window.Modernizr || document.write('<script src=\"../modernizr.js\"><\\/script>')</script>\n" +
    "\n" +
    "  <script src=\"https://raw.github.com/Modernizr/Modernizr/master/modernizr.js\"></script>\n" +
    "\n" +
    "  <script src=\"js/lib/polyfills.js\"></script>\n" +
    "  <script src=\"js/lib/detect-global.js\"></script>\n" +
    "\n" +
    "  <script src=\"qunit/qunit.js\"></script>\n" +
    "  <script src=\"js/lib/jquery-1.7b2.js\"></script>\n" +
    "\n" +
    "  <script src=\"js/lib/jsonselect.js\"></script>\n" +
    "  <script src=\"js/lib/uaparser.js\"></script>\n" +
    "  <script src=\"js/lib/github.js\"></script>\n" +
    "\n" +
    "  <script src=\"js/setup.js\"></script>\n" +
    "\n" +
    "  <script src=\"js/unit.js\"></script>\n" +
    "  <script src=\"js/unit-caniuse.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 id=\"qunit-header\">Modernizr Test Suite</h1>\n" +
    "  <h2 id=\"qunit-banner\"></h2>\n" +
    "  <div id=\"qunit-testrunner-toolbar\"></div>\n" +
    "  <h2 id=\"qunit-userAgent\"></h2>\n" +
    "\n" +
    "  <ol id=\"qunit-tests\"></ol>\n" +
    "\n" +
    "  <div id=\"mod-output\" class=output></div>\n" +
    "  <div id=\"mod-feattest-output\" class=output></div>\n" +
    "\n" +
    "\n" +
    "  <br>\n" +
    "\n" +
    "  <section><aside>this is an aside within a section</aside></section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <h5>JSON.stringify(Modernizr)</h5>\n" +
    "  <textarea></textarea>\n" +
    "  <a href=\"#\"   id=\"caniusetrigger\"\n" +
    "                onclick=\"return revealreftests(this)\"\n" +
    "                title=\"add a #caniuse hash to this page to make this automatic\"\n" +
    "                >Show the Ref Tests from Caniuse and Modernizr</a>\n" +
    "\n" +
    "\n" +
    "  <script src=\"js/dumpdata.js\"></script>\n" +
    "  <script>\n" +
    "    function revealreftests(a){\n" +
    "\n" +
    "        if (!a) a = document.getElementById('caniusetrigger');\n" +
    "        a.parentNode && a.parentNode.removeChild(a);\n" +
    "\n" +
    "        var iframe = document.createElement('iframe');\n" +
    "        iframe.src = 'caniuse.html';\n" +
    "        iframe.style.cssText = 'width: 100%; height: 7000px; border: 15px double #F0C; \\\n" +
    "                                -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; ';\n" +
    "        document.body.appendChild(iframe);\n" +
    "\n" +
    "        return false;\n" +
    "    }\n" +
    "\n" +
    "    if (location.hash.replace(/^#/,'') == 'caniuse'){\n" +
    "        setTimeout(revealreftests, 100);\n" +
    "    }\n" +
    "\n" +
    "  </script>\n" +
    "\n" +
    "\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/modernizr/test/js/basic.html',
    "<!DOCTYPE html>\n" +
    "<html class=\"+no-js no-js- no-js i-has-no-js\">\n" +
    "<head>\n" +
    "  <meta charset=\"UTF-8\">\n" +
    "  <title>Modernizr Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"qunit/qunit.css\">\n" +
    "  <style>\n" +
    "     body { margin-bottom: 150px;}\n" +
    "     #testbed { font-family: Helvetica; color: #444; padding-bottom: 100px;}\n" +
    "     #testbed button { margin: 30px; font-size: 13px;}\n" +
    "     .data-notes, .offScreen { display:none;}\n" +
    "     table { width: 100%;}\n" +
    "     tbody tr:nth-child(even) td, tbody tr:nth-child(even) th {  border: 1px solid #ccc; border-left: 0; border-right: 0;}\n" +
    "     table td:nth-child(even), table th:nth-child(even) { background: #e6e6e6;}\n" +
    "     table tbody tr:hover td, table tbody tr:hover th { background: #e1e100!important;}\n" +
    "     td.wrong { background:red!important;}\n" +
    "     #html5section { visibility: hidden; }\n" +
    "     h1 label { display:none;}\n" +
    "     .output { padding: 0 0 0 16px;}\n" +
    "     .output ul { margin: 0;}\n" +
    "     .output li { color: #854747; }\n" +
    "     .output li.yes{color:#090;}\n" +
    "     .output li b{color:#000;}\n" +
    "     .output {font:14px/1.3 Inconsolata,Consolas,monospace;\n" +
    "                    -webkit-column-count: 5;\n" +
    "                       -moz-column-count: 5;\n" +
    "                            column-count: 5;}\n" +
    "      .output + .output { border-top: 5px solid #ccc; }\n" +
    "      textarea { width: 100%; min-height: 75px;}\n" +
    "      #caniusetrigger { font-size: 38px; font-family: monospace; display:block; }\n" +
    "  </style>\n" +
    "\n" +
    "  <script src=\"https://raw.github.com/Modernizr/Modernizr/master/modernizr.js\"></script>\n" +
    "\n" +
    "  <script>window.Modernizr || document.write('<script src=\"../modernizr.js\"><\\/script>'); console.log(\"Loading in the /js folder *trollface*\")</script>\n" +
    "\n" +
    "  <script src=\"js/lib/polyfills.js\"></script>\n" +
    "  <script src=\"js/lib/detect-global.js\"></script>\n" +
    "  \n" +
    "  <script src=\"qunit/qunit.js\"></script>\n" +
    "  <script src=\"js/lib/jquery-1.7b2.js\"></script>\n" +
    "  \n" +
    "  <script src=\"js/setup.js\"></script>\n" +
    "  \n" +
    "  <script src=\"js/unit.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 id=\"qunit-header\">Modernizr Test Suite</h1>\n" +
    "  <h2 id=\"qunit-banner\"></h2>\n" +
    "  <div id=\"qunit-testrunner-toolbar\"></div>\n" +
    "  <h2 id=\"qunit-userAgent\"></h2>\n" +
    "\n" +
    "  <ol id=\"qunit-tests\"></ol>\n" +
    "\n" +
    "  <div id=\"mod-output\" class=output></div>\n" +
    "  <div id=\"mod-feattest-output\" class=output></div>\n" +
    "\n" +
    "\n" +
    "  <br>\n" +
    " \n" +
    "  <section><aside>this is an aside within a section</aside></section>\n" +
    "  \n" +
    "  \n" +
    "</body>\n" +
    "</html> \n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/ads.html',
    "<div id=\"carbonads-container\"><div class=\"carbonad\"><div id=\"azcarbon\"></div><script>var z = document.createElement(\"script\"); z.async = true; z.src = \"http://engine.carbonads.com/z/32341/azcarbon_2_1_0_HORIZ\"; var s = document.getElementsByTagName(\"script\")[0]; s.parentNode.insertBefore(z, s);</script></div></div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/footer.html',
    "<!-- Bootstrap core JavaScript\n" +
    "================================================== -->\n" +
    "<!-- Placed at the end of the document so the pages load faster -->\n" +
    "<script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "<script src=\"{{ page.base_url }}dist/js/bootstrap.js\"></script>\n" +
    "\n" +
    "<script src=\"http://platform.twitter.com/widgets.js\"></script>\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/holder.js\"></script>\n" +
    "\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/application.js\"></script>\n" +
    "\n" +
    "{% if page.slug == \"customize\" %}\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/less.js\"></script>\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/jszip.js\"></script>\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/uglify.js\"></script>\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/filesaver.js\"></script>\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/raw-files.js\"></script>\n" +
    "<script src=\"{{ page.base_url }}docs-assets/js/customizer.js\"></script>\n" +
    "{% endif %}\n" +
    "\n" +
    "<!-- Analytics\n" +
    "================================================== -->\n" +
    "<script>\n" +
    "  var _gauges = _gauges || [];\n" +
    "  (function() {\n" +
    "    var t   = document.createElement('script');\n" +
    "    t.async = true;\n" +
    "    t.id    = 'gauges-tracker';\n" +
    "    t.setAttribute('data-site-id', '4f0dc9fef5a1f55508000013');\n" +
    "    t.src = '//secure.gaug.es/track.js';\n" +
    "    var s = document.getElementsByTagName('script')[0];\n" +
    "    s.parentNode.insertBefore(t, s);\n" +
    "  })();\n" +
    "</script>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/header.html',
    "<meta charset=\"utf-8\">\n" +
    "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "<meta name=\"description\" content=\"\">\n" +
    "<meta name=\"author\" content=\"\">\n" +
    "\n" +
    "<title>\n" +
    "  {% if page.title == \"Bootstrap\" %}\n" +
    "    {{ page.title }}\n" +
    "  {% else %}\n" +
    "    {{ page.title }} &middot; Bootstrap\n" +
    "  {% endif %}\n" +
    "</title>\n" +
    "\n" +
    "<!-- Bootstrap core CSS -->\n" +
    "<link href=\"{{ page.base_url }}dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "<!-- Documentation extras -->\n" +
    "<link href=\"{{ page.base_url }}docs-assets/css/docs.css\" rel=\"stylesheet\">\n" +
    "<link href=\"{{ page.base_url }}docs-assets/css/pygments-manni.css\" rel=\"stylesheet\">\n" +
    "<!--[if lt IE 9]><script src=\"{{ page.base_url }}docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "<!--[if lt IE 9]>\n" +
    "  <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "  <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "<![endif]-->\n" +
    "\n" +
    "<!-- Favicons -->\n" +
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"{{ page.base_url }}docs-assets/ico/apple-touch-icon-144-precomposed.png\">\n" +
    "                               <link rel=\"shortcut icon\" href=\"{{ page.base_url }}docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "<script>\n" +
    "  var _gaq = _gaq || [];\n" +
    "  _gaq.push(['_setAccount', 'UA-146052-10']);\n" +
    "  _gaq.push(['_trackPageview']);\n" +
    "  (function() {\n" +
    "    var ga = document.createElement('script'); ga.async = true;\n" +
    "    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n" +
    "    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n" +
    "  })();\n" +
    "</script>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/nav-about.html',
    "<li>\n" +
    "  <a href=\"#history\">History</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#team\">Core team</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#community\">Community</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#translations\">Translations</a>\n" +
    "</li>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/nav-components.html',
    "<li>\n" +
    "  <a href=\"#glyphicons\">Glyphicons</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#glyphicons-glyphs\">Available glyphs</a></li>\n" +
    "    <li><a href=\"#glyphicons-how-to-use\">How to use</a></li>\n" +
    "    <li><a href=\"#glyphicons-examples\">Examples</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#dropdowns\">Dropdowns</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#dropdowns-example\">Example</a></li>\n" +
    "    <li><a href=\"#dropdowns-alignment\">Alignment options</a></li>\n" +
    "    <li><a href=\"#dropdowns-headers\">Headers</a></li>\n" +
    "    <li><a href=\"#dropdowns-disabled\">Disabled menu items</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#btn-groups\">Button groups</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#btn-groups-single\">Basic example</a></li>\n" +
    "    <li><a href=\"#btn-groups-toolbar\">Button toolbar</a></li>\n" +
    "    <li><a href=\"#btn-groups-sizing\">Sizing</a></li>\n" +
    "    <li><a href=\"#btn-groups-nested\">Nesting</a></li>\n" +
    "    <li><a href=\"#btn-groups-vertical\">Vertical variation</a></li>\n" +
    "    <li><a href=\"#btn-groups-justified\">Justified link variation</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#btn-dropdowns\">Button dropdowns</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#btn-dropdowns-single\">Single button dropdowns</a></li>\n" +
    "    <li><a href=\"#btn-dropdowns-split\">Split button dropdowns</a></li>\n" +
    "    <li><a href=\"#btn-dropdowns-sizing\">Sizing</a></li>\n" +
    "    <li><a href=\"#btn-dropdowns-dropup\">Dropup variation</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#input-groups\">Input groups</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#input-groups-basic\">Basic example</a></li>\n" +
    "    <li><a href=\"#input-groups-sizing\">Sizing</a></li>\n" +
    "    <li><a href=\"#input-groups-checkboxes-radios\">Checkbox and radios addons</a></li>\n" +
    "    <li><a href=\"#input-groups-buttons\">Button addons</a></li>\n" +
    "    <li><a href=\"#input-groups-buttons-dropdowns\">Buttons with dropdowns</a></li>\n" +
    "    <li><a href=\"#input-groups-buttons-segmented\">Segmented buttons</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#nav\">Navs</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#nav-tabs\">Tabs</a></li>\n" +
    "    <li><a href=\"#nav-pills\">Pills</a></li>\n" +
    "    <li><a href=\"#nav-justified\">Justified nav</a></li>\n" +
    "    <li><a href=\"#nav-disabled-links\">Disabled links</a></li>\n" +
    "    <li><a href=\"#nav-dropdowns\">Using dropdowns</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#navbar\">Navbar</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#navbar-default\">Default navbar</a></li>\n" +
    "    <li><a href=\"#navbar-forms\">Forms</a></li>\n" +
    "    <li><a href=\"#navbar-buttons\">Buttons</a></li>\n" +
    "    <li><a href=\"#navbar-text\">Text</a></li>\n" +
    "    <li><a href=\"#navbar-links\">Non-nav links</a></li>\n" +
    "    <li><a href=\"#navbar-component-alignment\">Component alignment</a></li>\n" +
    "    <li><a href=\"#navbar-fixed-top\">Fixed to top</a></li>\n" +
    "    <li><a href=\"#navbar-fixed-bottom\">Fixed to bottom</a></li>\n" +
    "    <li><a href=\"#navbar-static-top\">Static top</a></li>\n" +
    "    <li><a href=\"#navbar-inverted\">Inverted navbar</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li><a href=\"#breadcrumbs\">Breadcrumbs</a></li>\n" +
    "<li>\n" +
    "  <a href=\"#pagination\">Pagination</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#pagination-default\">Default pagination</a></li>\n" +
    "    <li><a href=\"#pagination-pager\">Pager</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li><a href=\"#labels\">Labels</a></li>\n" +
    "<li><a href=\"#badges\">Badges</a></li>\n" +
    "<li><a href=\"#jumbotron\">Jumbotron</a></li>\n" +
    "<li><a href=\"#page-header\">Page header</a></li>\n" +
    "<li>\n" +
    "  <a href=\"#thumbnails\">Thumbnails</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#thumbnails-default\">Default example</a></li>\n" +
    "    <li><a href=\"#thumbnails-custom-content\">Custom content</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#alerts\">Alerts</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#alerts-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#alerts-dismissable\">Dismissable alerts</a></li>\n" +
    "    <li><a href=\"#alerts-links\">Links in alerts</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#progress\">Progress bars</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#progress-basic\">Basic example</a></li>\n" +
    "    <li><a href=\"#progress-alternatives\">Contextual alternatives</a></li>\n" +
    "    <li><a href=\"#progress-striped\">Striped</a></li>\n" +
    "    <li><a href=\"#progress-animated\">Animated</a></li>\n" +
    "    <li><a href=\"#progress-stacked\">Stacked</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#media\">Media object</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#media-default\">Default media</a></li>\n" +
    "    <li><a href=\"#media-list\">Media list</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#list-group\">List group</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#list-group-basic\">Basic example</a></li>\n" +
    "    <li><a href=\"#list-group-badges\">Badges</a></li>\n" +
    "    <li><a href=\"#list-group-linked\">Linked items</a></li>\n" +
    "    <li><a href=\"#list-group-custom-content\">Custom content</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#panels\">Panels</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#panels-basic\">Basic example</a></li>\n" +
    "    <li><a href=\"#panels-heading\">Panel with heading</a></li>\n" +
    "    <li><a href=\"#panels-alternatives\">Contextual alternatives</a></li>\n" +
    "    <li><a href=\"#panels-tables\">With tables</a>\n" +
    "    <li><a href=\"#panels-list-group\">With list groups</a>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li><a href=\"#wells\">Wells</a></li>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/nav-css.html',
    "<li>\n" +
    "  <a href=\"#overview\">Overview</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#overview-doctype\">HTML5 doctype</a></li>\n" +
    "    <li><a href=\"#overview-mobile\">Mobile first</a></li>\n" +
    "    <li><a href=\"#overview-responsive-images\">Responsive images</a></li>\n" +
    "    <li><a href=\"#overview-type-links\">Typography and links</a></li>\n" +
    "    <li><a href=\"#overview-normalize\">Normalize</a></li>\n" +
    "    <li><a href=\"#overview-container\">Containers</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#grid\">Grid system</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#grid-intro\">Introduction</a></li>\n" +
    "    <li><a href=\"#grid-media-queries\">Media queries</a></li>\n" +
    "    <li><a href=\"#grid-options\">Grid options</a></li>\n" +
    "    <li><a href=\"#grid-example-basic\">Ex: Stacked-to-horizonal</a></li>\n" +
    "    <li><a href=\"#grid-example-mixed\">Ex: Mobile and desktops</a></li>\n" +
    "    <li><a href=\"#grid-example-mixed-complete\">Ex: Mobile, tablet, desktops</a></li>\n" +
    "    <li><a href=\"#grid-responsive-resets\">Responsive column resets</a></li>\n" +
    "    <li><a href=\"#grid-offsetting\">Offsetting columns</a></li>\n" +
    "    <li><a href=\"#grid-nesting\">Nesting columns</a></li>\n" +
    "    <li><a href=\"#grid-column-ordering\">Column ordering</a></li>\n" +
    "    <li><a href=\"#grid-less\">LESS mixins and variables</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#type\">Typography</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#type-headings\">Headings</a></li>\n" +
    "    <li><a href=\"#type-body-copy\">Body copy</a></li>\n" +
    "    <li><a href=\"#type-emphasis\">Emphasis</a></li>\n" +
    "    <li><a href=\"#type-abbreviations\">Abbreviations</a></li>\n" +
    "    <li><a href=\"#type-addresses\">Addresses</a></li>\n" +
    "    <li><a href=\"#type-blockquotes\">Blockquotes</a></li>\n" +
    "    <li><a href=\"#type-lists\">Lists</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li><a href=\"#code\">Code</a></li>\n" +
    "<li>\n" +
    "  <a href=\"#tables\">Tables</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#tables-example\">Basic example</a></li>\n" +
    "    <li><a href=\"#tables-striped\">Striped rows</a></li>\n" +
    "    <li><a href=\"#tables-bordered\">Bordered table</a></li>\n" +
    "    <li><a href=\"#tables-hover-rows\">Hover rows</a></li>\n" +
    "    <li><a href=\"#tables-condensed\">Condensed table</a></li>\n" +
    "    <li><a href=\"#tables-contextual-classes\">Contextual classes</a></li>\n" +
    "    <li><a href=\"#tables-responsive\">Responsive tables</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#forms\">Forms</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#forms-example\">Basic example</a></li>\n" +
    "    <li><a href=\"#forms-inline\">Inline form</a></li>\n" +
    "    <li><a href=\"#forms-horizontal\">Horizontal form</a></li>\n" +
    "    <li><a href=\"#forms-controls\">Supported controls</a></li>\n" +
    "    <li><a href=\"#forms-controls-static\">Static control</a></li>\n" +
    "    <li><a href=\"#forms-control-states\">Control states</a></li>\n" +
    "    <li><a href=\"#forms-control-sizes\">Control sizing</a></li>\n" +
    "    <li><a href=\"#forms-help-text\">Help text</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#buttons\">Buttons</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#buttons-options\">Options</a></li>\n" +
    "    <li><a href=\"#buttons-sizes\">Sizes</a></li>\n" +
    "    <li><a href=\"#buttons-active\">Active state</a></li>\n" +
    "    <li><a href=\"#buttons-disabled\">Disabled state</a></li>\n" +
    "    <li><a href=\"#buttons-tags\">Button tags</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#images\">Images</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#helper-classes\">Helper classes</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#helper-classes-close\">Close icon</a></li>\n" +
    "    <li><a href=\"#helper-classes-carets\">Carets</a></li>\n" +
    "    <li><a href=\"#helper-classes-floats\">Quick floats</a></li>\n" +
    "    <li><a href=\"#helper-classes-center\">Center content blocks</a></li>\n" +
    "    <li><a href=\"#helper-classes-clearfix\">Clearfix</a></li>\n" +
    "    <li><a href=\"#helper-classes-show-hide\">Showing and hiding content</a></li>\n" +
    "    <li><a href=\"#helper-classes-screen-readers\">Screen reader content</a></li>\n" +
    "    <li><a href=\"#helper-classes-image-replacement\">Image replacement</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#responsive-utilities\">Responsive utilities</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#responsive-utilities-classes\">Available classes</a></li>\n" +
    "    <li><a href=\"#responsive-utilities-print\">Print classes</a></li>\n" +
    "    <li><a href=\"#responsive-utilities-tests\">Test cases</a></li>\n" +
    "  </ul>\n" +
    "</li>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/nav-customize.html',
    "<li>\n" +
    "  <a href=\"#less\">LESS components</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#plugins\">jQuery plugins</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#less-variables\">LESS variables</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#variables-basics\">Basics</a></li>\n" +
    "    <li><a href=\"#variables-buttons\">Buttons</a></li>\n" +
    "    <li><a href=\"#variables-form-states\">Form states</a></li>\n" +
    "    <li><a href=\"#variables-alerts\">Alerts</a></li>\n" +
    "    <li><a href=\"#variables-navbar\">Navbar</a></li>\n" +
    "    <li><a href=\"#variables-nav\">Nav</a></li>\n" +
    "    <li><a href=\"#variables-tables\">Tables</a></li>\n" +
    "    <li><a href=\"#variables-forms\">Forms</a></li>\n" +
    "    <li><a href=\"#variables-dropdowns\">Dropdowns</a></li>\n" +
    "    <li><a href=\"#variables-panels-wells\">Panels and wells</a></li>\n" +
    "    <li><a href=\"#variables-accordion\">Accordion</a></li>\n" +
    "    <li><a href=\"#variables-badges\">Badges</a></li>\n" +
    "    <li><a href=\"#variables-breadcrumbs\">Breadcrumbs</a></li>\n" +
    "    <li><a href=\"#variables-jumbotron\">Jumbotron</a></li>\n" +
    "    <li><a href=\"#variables-modals\">Modals</a></li>\n" +
    "    <li><a href=\"#variables-carousel\">Carousel</a></li>\n" +
    "    <li><a href=\"#variables-list-group\">List group</a></li>\n" +
    "    <li><a href=\"#variables-thumbnails\">Thumbnails</a></li>\n" +
    "    <li><a href=\"#variables-progress\">Progress bars</a></li>\n" +
    "    <li><a href=\"#variables-pagination\">Pagination</a></li>\n" +
    "    <li><a href=\"#variables-pager\">Pager</a></li>\n" +
    "    <li><a href=\"#variables-labels\">Labels</a></li>\n" +
    "    <li><a href=\"#variables-tooltips-popovers\">Tooltips and popovers</a></li>\n" +
    "    <li><a href=\"#variables-close\">Close button</a></li>\n" +
    "    <li><a href=\"#variables-type\">Type</a></li>\n" +
    "    <li><a href=\"#variables-other\">Other</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#download\">Download</a>\n" +
    "</li>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/nav-getting-started.html',
    "<li>\n" +
    "  <a href=\"#download\">Download Bootstrap</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#download-compiled\">Compiled CSS, JS, and fonts</a></li>\n" +
    "    <li><a href=\"#download-additional\">Additional downloads</a></li>\n" +
    "    <li><a href=\"#download-cdn\">Bootstrap CDN</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#whats-included\">What's included</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#template\">Basic template</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#examples\">Examples</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#disable-responsive\">Disabling responsiveness</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#migration\">Migrating from 2.x to 3.0</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#migration-classes\">Major class changes</a></li>\n" +
    "    <li><a href=\"#migration-new\">What's new</a></li>\n" +
    "    <li><a href=\"#migration-dropped\">What's removed</a></li>\n" +
    "    <li><a href=\"#migration-notes\">Additional notes</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#browsers\">Browser support</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#third-parties\">Third party support</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#accessibility\">Accessibility</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#license-faqs\">License FAQs</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#customizing\">Customizing Bootstrap</a>\n" +
    "</li>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/nav-javascript.html',
    "<li>\n" +
    "  <a href=\"#js-overview\">Overview</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#js-individual-compiled\">Individual or compiled</a></li>\n" +
    "    <li><a href=\"#js-data-attrs\">Data attributes</a></li>\n" +
    "    <li><a href=\"#js-programmatic-api\">Programmatic API</a></li>\n" +
    "    <li><a href=\"#js-noconflict\">No conflict</a></li>\n" +
    "    <li><a href=\"#js-events\">Events</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li><a href=\"#transitions\">Transitions</a></li>\n" +
    "<li>\n" +
    "  <a href=\"#modals\">Modal</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#modals-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#modals-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#dropdowns\">Dropdown</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#dropdowns-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#dropdowns-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#scrollspy\">Scrollspy</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#scrollspy-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#scrollspy-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#tabs\">Tab</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#tabs-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#tabs-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#tooltips\">Tooltip</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#tooltips-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#tooltips-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#popovers\">Popover</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#popovers-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#popovers-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#alerts\">Alert</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#alerts-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#alerts-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#buttons\">Button</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#buttons-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#buttons-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#collapse\">Collapse</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#collapse-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#collapse-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#carousel\">Carousel</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#carousel-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#carousel-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n" +
    "<li>\n" +
    "  <a href=\"#affix\">Affix</a>\n" +
    "  <ul class=\"nav\">\n" +
    "    <li><a href=\"#affix-examples\">Examples</a></li>\n" +
    "    <li><a href=\"#affix-usage\">Usage</a></li>\n" +
    "  </ul>\n" +
    "</li>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/nav-main.html',
    "<header class=\"navbar navbar-inverse navbar-fixed-top bs-docs-nav\" role=\"banner\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a href=\"{{ page.base_url }}\" class=\"navbar-brand\">Bootstrap</a>\n" +
    "    </div>\n" +
    "    <nav class=\"collapse navbar-collapse bs-navbar-collapse\" role=\"navigation\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li{% if page.slug == \"getting-started\" %} class=\"active\"{% endif %}>\n" +
    "          <a href=\"{{ page.base_url }}getting-started\">Getting started</a>\n" +
    "        </li>\n" +
    "        <li{% if page.slug == \"css\" %} class=\"active\"{% endif %}>\n" +
    "          <a href=\"{{ page.base_url }}css\">CSS</a>\n" +
    "        </li>\n" +
    "        <li{% if page.slug == \"components\" %} class=\"active\"{% endif %}>\n" +
    "          <a href=\"{{ page.base_url }}components\">Components</a>\n" +
    "        </li>\n" +
    "        <li{% if page.slug == \"js\" %} class=\"active\"{% endif %}>\n" +
    "          <a href=\"{{ page.base_url }}javascript\">JavaScript</a>\n" +
    "        </li>\n" +
    "        <li{% if page.slug == \"customize\" %} class=\"active\"{% endif %}>\n" +
    "          <a href=\"{{ page.base_url }}customize\">Customize</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li{% if page.slug == \"about\" %} class=\"active\"{% endif %}>\n" +
    "          <a href=\"{{ page.base_url }}about\">About</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </nav>\n" +
    "  </div>\n" +
    "</header>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/old-bs-docs.html',
    "<div class=\"bs-old-docs\">\n" +
    "  <div class=\"container\">\n" +
    "    <strong>\n" +
    "      <a href=\"{{ page.base_url }}2.3.2/\">Looking for Bootstrap 2.3.2 docs?</a>\n" +
    "    </strong>\n" +
    "    We've moved it to a new home while we push forward with Bootstrap 3. <a href=\"http://blog.getbootstrap.com/\">Read the blog</a> for details.\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_includes/social-buttons.html',
    "<div class=\"bs-social\">\n" +
    "  <ul class=\"bs-social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=twbs&amp;repo=bootstrap&amp;type=watch&amp;count=true\" width=\"100\" height=\"20\" title=\"Star on GitHub\"></iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=twbs&amp;repo=bootstrap&amp;type=fork&amp;count=true\" width=\"102\" height=\"20\" title=\"Fork on GitHub\"></iframe>\n" +
    "    </li>\n" +
    "    <li class=\"follow-btn\">\n" +
    "      <a href=\"https://twitter.com/twbootstrap\" class=\"twitter-follow-button\" data-link-color=\"#0069D6\" data-show-count=\"true\">Follow @twbootstrap</a>\n" +
    "    </li>\n" +
    "    <li class=\"tweet-btn\">\n" +
    "      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://getbootstrap.com/\" data-count=\"horizontal\" data-via=\"twbootstrap\" data-related=\"mdo:Creator of Twitter Bootstrap\">Tweet</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_layouts/default.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <!-- Meta, title, CSS, favicons, etc. -->\n" +
    "    {% include header.html %}\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <a class=\"sr-only\" href=\"#content\">Skip to main content</a>\n" +
    "\n" +
    "    <!-- Docs master nav -->\n" +
    "    {% include nav-main.html %}\n" +
    "\n" +
    "    <!-- Docs page layout -->\n" +
    "    <div class=\"bs-header\" id=\"content\">\n" +
    "      <div class=\"container\">\n" +
    "        <h1>{{ page.title }}</h1>\n" +
    "        <p>{{ page.lead }}</p>\n" +
    "        {% include ads.html %}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Callout for the old docs link -->\n" +
    "    {% include old-bs-docs.html %}\n" +
    "\n" +
    "    <div class=\"container bs-docs-container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-3\">\n" +
    "          <div class=\"bs-sidebar hidden-print\" role=\"complementary\">\n" +
    "            <ul class=\"nav bs-sidenav\">\n" +
    "              {% if page.slug == \"getting-started\" %}\n" +
    "                {% include nav-getting-started.html %}\n" +
    "              {% elsif page.slug == \"css\" %}\n" +
    "                {% include nav-css.html %}\n" +
    "              {% elsif page.slug == \"components\" %}\n" +
    "                {% include nav-components.html %}\n" +
    "              {% elsif page.slug == \"js\" %}\n" +
    "                {% include nav-javascript.html %}\n" +
    "              {% elsif page.slug == \"customize\" %}\n" +
    "                {% include nav-customize.html %}\n" +
    "              {% elsif page.slug == \"about\" %}\n" +
    "                {% include nav-about.html %}\n" +
    "              {% endif %}\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-9\" role=\"main\">\n" +
    "          {{ content }}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Footer\n" +
    "    ================================================== -->\n" +
    "    <footer class=\"bs-footer\" role=\"contentinfo\">\n" +
    "      <div class=\"container\">\n" +
    "        {% include social-buttons.html %}\n" +
    "\n" +
    "        <p>Designed and built with all the love in the world by <a href=\"http://twitter.com/mdo\" target=\"_blank\">@mdo</a> and <a href=\"http://twitter.com/fat\" target=\"_blank\">@fat</a>.</p>\n" +
    "        <p>Code licensed under <a href=\"http://www.apache.org/licenses/LICENSE-2.0\" target=\"_blank\">Apache License v2.0</a>, documentation under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC BY 3.0</a>.</p>\n" +
    "        <ul class=\"footer-links\">\n" +
    "          <li>Currently v{{ site.current_version }}</li>\n" +
    "          <li class=\"muted\">&middot;</li>\n" +
    "          <li><a href=\"{{ page.base_url }}2.3.2/\">Bootstrap 2.3.2 docs</a></li>\n" +
    "          <li class=\"muted\">&middot;</li>\n" +
    "          <li><a href=\"{{ site.blog }}\">Blog</a></li>\n" +
    "          <li class=\"muted\">&middot;</li>\n" +
    "          <li><a href=\"{{ site.repo }}/issues?state=open\">Issues</a></li>\n" +
    "          <li class=\"muted\">&middot;</li>\n" +
    "          <li><a href=\"{{ site.repo }}/releases\">Releases</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </footer>\n" +
    "\n" +
    "    <!-- JS and analytics only. -->\n" +
    "    {% include footer.html %}\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/_layouts/home.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <!-- Meta, title, CSS, favicons, etc. -->\n" +
    "    {% include header.html %}\n" +
    "  </head>\n" +
    "  <body class=\"bs-docs-home\">\n" +
    "    <a class=\"sr-only\" href=\"#content\">Skip to main content</a>\n" +
    "\n" +
    "    <!-- Docs master nav -->\n" +
    "    {% include nav-main.html %}\n" +
    "\n" +
    "    <!-- Page content of course! -->\n" +
    "    {{ content }}\n" +
    "\n" +
    "    <footer class=\"container\" role=\"contentinfo\">\n" +
    "      {% include ads.html %}\n" +
    "\n" +
    "      {% include social-buttons.html %}\n" +
    "\n" +
    "      <ul class=\"bs-masthead-links\">\n" +
    "        <li class=\"current-version\">\n" +
    "          Currently v{{ site.current_version }}\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a href=\"{{ page.base_url }}2.3.2/\">Bootstrap 2.3.2 docs</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a href=\"{{ site.repo }}\" onclick=\"_gaq.push(['_trackEvent', 'Jumbotron actions', 'Jumbotron links', 'GitHub project']);\">GitHub project</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a href=\"{{ page.base_url }}getting-started/#examples\" onclick=\"_gaq.push(['_trackEvent', 'Jumbotron actions', 'Jumbotron links', 'Examples']);\">Examples</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a href=\"{{ site.expo }}\" onclick=\"_gaq.push(['_trackEvent', 'Jumbotron actions', 'Jumbotron links', 'Expo']);\">Expo</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a href=\"{{ site.blog }}\" onclick=\"_gaq.push(['_trackEvent', 'Jumbotron actions', 'Jumbotron links', 'Blog']);\">Blog</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </footer>\n" +
    "\n" +
    "    <!-- JS and analytics only. -->\n" +
    "    {% include footer.html %}\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/about.html',
    "---\n" +
    "layout: default\n" +
    "title: About\n" +
    "slug: about\n" +
    "lead: \"Learn about the history of Bootstrap, meet the core team, and check out the ever-growing community resources.\"\n" +
    "base_url: \"../\"\n" +
    "---\n" +
    "\n" +
    "\n" +
    "<!-- History\n" +
    "================================================== -->\n" +
    "<div class=\"bs-docs-section\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h1 id=\"history\">History</h1>\n" +
    "  </div>\n" +
    "  <p class=\"lead\">Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.</p>\n" +
    "  <p>Bootstrap was created at Twitter in mid-2010 by <a href=\"https://twitter.com/mdo\">@mdo</a> and <a href=\"https://twitter.com/fat\">@fat</a>. Prior to being an open-sourced framework, Bootstrap was known as <em>Twitter Blueprint</em>. A few months into development, Twitter held its <a href=\"https://blog.twitter.com/2010/hack-week\">first Hack Week</a> and the project exploded as developers of all skill levels jumped in without any external guidance. It served as the style guide for internal tools development at the company for over a year before its public release, and continues to do so today.</p>\n" +
    "  <p>Originally <a href=\"https://dev.twitter.com/blog/bootstrap-twitter\">released</a> on <a href=\"https://twitter.com/mdo/statuses/104620039650557952\"><time datetime=\"2011-08-19 11:25\">Friday, August 19, 2011</time></a>, we've since had over <a href=\"https://github.com/twbs/bootstrap/releases\">twenty releases</a>, including two major rewrites with v2 and v3. With Bootstrap 2, we added responsive functionality to the entire framework as an optional stylesheet. Building on that with Bootstrap 3, we rewrote the library once more to make it responsive by default with a mobile first approach.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- Team\n" +
    "================================================== -->\n" +
    "<div class=\"bs-docs-section\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h1 id=\"team\">Core team</h1>\n" +
    "  </div>\n" +
    "  <p class=\"lead\">Bootstrap is maintained by the founding team and a small group of invaluable core contributors, with the massive support and involvement of our community.</p>\n" +
    "  <div class=\"list-group bs-team\">\n" +
    "    <div class=\"list-group-item\">\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=mdo&amp;type=follow\"></iframe>\n" +
    "      <a class=\"team-member\" href=\"https://github.com/mdo\">\n" +
    "        <img src=\"http://www.gravatar.com/avatar/bc4ab438f7a4ce1c406aadc688427f2c\" alt=\"@mdo\">\n" +
    "        <strong>Mark Otto</strong> <small>@mdo</small>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"list-group-item\">\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=fat&amp;type=follow\"></iframe>\n" +
    "      <a class=\"team-member\" href=\"https://github.com/fat\">\n" +
    "        <img src=\"http://www.gravatar.com/avatar/a98244cbdacaf1c0b55499466002f7a8\" alt=\"@fat\">\n" +
    "        <strong>Jacob Thornton</strong> <small>@fat</small>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"list-group-item\">\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=cvrebert&amp;type=follow\"></iframe>\n" +
    "      <a class=\"team-member\" href=\"https://github.com/cvrebert\">\n" +
    "        <img src=\"http://www.gravatar.com/avatar/edec428c425453955f770095a7d26c50\" alt=\"@cvrebert\">\n" +
    "        <strong>Chris Rebert</strong> <small>@cvrebert</small>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"list-group-item\">\n" +
    "      <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=juthilo&amp;type=follow\"></iframe>\n" +
    "      <a class=\"team-member\" href=\"https://github.com/juthilo\">\n" +
    "        <img src=\"http://www.gravatar.com/avatar/0f7dd3ce58a416be5685ea6194f82b11\" alt=\"@juthilo\">\n" +
    "        <strong>Julian Thilo</strong> <small>@juthilo</small>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <p>Get involved with Bootstrap development by <a href=\"https://github.com/twbs/bootstrap/issues/new\">opening an issue</a> or submitting a pull request. Read our <a href=\"https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md\">contributing guidelines</a> for information on how we develop.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- Community\n" +
    "================================================== -->\n" +
    "<div class=\"bs-docs-section\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h1 id=\"community\">Community</h1>\n" +
    "  </div>\n" +
    "  <p class=\"lead\">Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.</p>\n" +
    "  <ul>\n" +
    "    <li>Read and subscribe to <a href=\"http://blog.getbootstrap.com/\">The Official Bootstrap Blog</a>.</li>\n" +
    "    <li>Have a question that's not a feature request or bug report? <a href=\"http://groups.google.com/group/twitter-bootstrap\">Ask on the mailing list.</a></li>\n" +
    "    <li>Chat with fellow Bootstrappers using IRC in the <code>irc.freenode.net</code> server, in the <a href=\"irc://irc.freenode.net/#twitter-bootstrap\">##twitter-bootstrap channel</a>.</li>\n" +
    "    <li>Find inspiring examples of people building with Bootstrap at the <a href=\"http://expo.getbootstrap.com\">Bootstrap Expo</a>.</li>\n" +
    "  </ul>\n" +
    "  <p>You can also follow <a href=\"https://twitter.com/twbootstrap\">@twbootstrap on Twitter</a> for the latest gossip and awesome music videos.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- Translations\n" +
    "================================================== -->\n" +
    "<div class=\"bs-docs-section\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h1 id=\"translations\">Translations</h1>\n" +
    "  </div>\n" +
    "  <p class=\"lead\">Community members have translated Bootstrap's documentation into various langauges. None are officially supported and may not always be up to date.</p>\n" +
    "  <ul>\n" +
    "    <li><a href=\"http://v3.bootcss.com/\">Bootstrap 中文文档 (Chinese)</a></li>\n" +
    "    <li><a href=\"http://www.oneskyapp.com/docs/bootstrap/ru\">Bootstrap по-русски (Russian)</a></li>\n" +
    "    <li><a href=\"http://www.oneskyapp.com/docs/bootstrap/es\">Bootstrap en Español (Spanish)</a></li>\n" +
    "  </ul>\n" +
    "  <p>Have another language to add, or perhaps a different or better translation? Let us know by <a href=\"https://github.com/twbs/bootstrap/issues/new\">opening an issue</a>.</p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/components.html',
    "---\n" +
    "layout: default\n" +
    "title: Components\n" +
    "slug: components\n" +
    "lead: \"Over a dozen reusable components built to provide iconography, dropdowns, navigation, alerts, popovers, and much more.\"\n" +
    "base_url: \"../\"\n" +
    "---\n" +
    "\n" +
    "\n" +
    "  <!-- Glyphicons\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"glyphicons\">Glyphicons</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"glyphicons-glyphs\">Available glyphs</h2>\n" +
    "    <p>Includes 200 glyphs in font format from the Glyphicon Halflings set. <a href=\"http://glyphicons.com/\">Glyphicons</a> Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you to include a link back to <a href=\"http://glyphicons.com/\">Glyphicons</a> whenever possible.</p>\n" +
    "    <ul class=\"bs-glyphicons\">\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-adjust\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-adjust</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-align-center\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-align-center</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-align-justify\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-align-justify</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-align-left\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-align-left</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-align-right\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-align-right</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-arrow-down\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-arrow-down</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-arrow-left\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-arrow-left</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-arrow-right\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-arrow-right</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-arrow-up\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-arrow-up</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-asterisk\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-asterisk</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-backward\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-backward</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-ban-circle\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-ban-circle</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-barcode\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-barcode</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-bell\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-bell</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-bold\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-bold</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-book\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-book</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-bookmark\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-bookmark</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-briefcase\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-briefcase</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-bullhorn\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-bullhorn</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-calendar\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-calendar</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-camera\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-camera</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-certificate\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-certificate</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-check\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-check</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-chevron-down\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-chevron-down</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-chevron-left</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-chevron-right</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-chevron-up\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-chevron-up</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-circle-arrow-down\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-circle-arrow-down</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-circle-arrow-left\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-circle-arrow-left</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-circle-arrow-right\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-circle-arrow-right</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-circle-arrow-up\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-circle-arrow-up</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-cloud\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-cloud</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-cloud-download\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-cloud-download</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-cloud-upload\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-cloud-upload</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-cog\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-cog</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-collapse-down\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-collapse-down</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-collapse-up\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-collapse-up</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-comment\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-comment</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-compressed\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-compressed</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-copyright-mark\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-copyright-mark</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-credit-card\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-credit-card</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-cutlery\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-cutlery</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-dashboard\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-dashboard</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-download\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-download</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-download-alt\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-download-alt</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-earphone\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-earphone</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-edit\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-edit</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-eject\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-eject</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-envelope\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-envelope</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-euro\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-euro</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-exclamation-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-expand\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-expand</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-export\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-export</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-eye-close\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-eye-close</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-eye-open\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-eye-open</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-facetime-video\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-facetime-video</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-fast-backward\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-fast-backward</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-fast-forward\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-fast-forward</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-file\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-file</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-film\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-film</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-filter\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-filter</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-fire\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-fire</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-flag\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-flag</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-flash\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-flash</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-floppy-disk\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-floppy-disk</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-floppy-open\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-floppy-open</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-floppy-remove\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-floppy-remove</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-floppy-save\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-floppy-save</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-floppy-saved\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-floppy-saved</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-folder-close\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-folder-close</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-folder-open\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-folder-open</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-font\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-font</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-forward\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-forward</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-fullscreen\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-fullscreen</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-gbp\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-gbp</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-gift\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-gift</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-glass\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-glass</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-globe\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-globe</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-hand-down\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-hand-down</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-hand-left\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-hand-left</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-hand-right\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-hand-right</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-hand-up\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-hand-up</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-hd-video\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-hd-video</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-hdd\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-hdd</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-header\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-header</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-headphones\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-headphones</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-heart\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-heart</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-heart-empty\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-heart-empty</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-home\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-home</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-import\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-import</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-inbox\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-inbox</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-indent-left\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-indent-left</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-indent-right\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-indent-right</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-info-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-info-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-italic\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-italic</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-leaf\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-leaf</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-link\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-link</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-list\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-list</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-list-alt\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-list-alt</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-lock\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-lock</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-log-in\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-log-in</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-log-out\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-log-out</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-magnet\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-magnet</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-map-marker\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-map-marker</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-minus\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-minus</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-minus-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-minus-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-move\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-move</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-music\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-music</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-new-window\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-new-window</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-off\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-off</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-ok\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-ok</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-ok-circle\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-ok-circle</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-ok-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-ok-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-open\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-open</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-paperclip\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-paperclip</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-pause\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-pause</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-pencil\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-pencil</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-phone\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-phone</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-phone-alt\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-phone-alt</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-picture\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-picture</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-plane\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-plane</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-play\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-play</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-play-circle\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-play-circle</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-plus</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-plus-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-plus-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-print\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-print</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-pushpin\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-pushpin</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-qrcode\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-qrcode</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-question-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-question-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-random\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-random</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-record\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-record</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-refresh\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-refresh</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-registration-mark\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-registration-mark</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-remove</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-remove-circle\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-remove-circle</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-remove-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-remove-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-repeat\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-repeat</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-resize-full\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-resize-full</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-resize-horizontal\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-resize-horizontal</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-resize-small\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-resize-small</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-resize-vertical\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-resize-vertical</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-retweet\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-retweet</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-road\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-road</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-save\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-save</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-saved\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-saved</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-screenshot\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-screenshot</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sd-video\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sd-video</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-search</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-send\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-send</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-share\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-share</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-share-alt\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-share-alt</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-shopping-cart\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-shopping-cart</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-signal\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-signal</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sort</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sort-by-alphabet\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sort-by-alphabet</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sort-by-alphabet-alt\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sort-by-alphabet-alt</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sort-by-attributes\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sort-by-attributes</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sort-by-attributes-alt\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sort-by-attributes-alt</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sort-by-order\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sort-by-order</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sort-by-order-alt\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sort-by-order-alt</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sound-5-1\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sound-5-1</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sound-6-1\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sound-6-1</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sound-7-1\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sound-7-1</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sound-dolby\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sound-dolby</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-sound-stereo\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-sound-stereo</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-star\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-star</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-star-empty\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-star-empty</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-stats\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-stats</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-step-backward\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-step-backward</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-step-forward\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-step-forward</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-stop\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-stop</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-subtitles\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-subtitles</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-tag\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-tag</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-tags\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-tags</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-tasks\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-tasks</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-text-height\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-text-height</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-text-width\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-text-width</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-th\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-th</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-th-large\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-th-large</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-th-list\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-th-list</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-thumbs-down\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-thumbs-down</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-thumbs-up</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-time\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-time</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-tint\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-tint</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-tower\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-tower</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-transfer\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-transfer</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-trash\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-trash</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-tree-conifer\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-tree-conifer</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-tree-deciduous\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-tree-deciduous</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-unchecked\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-unchecked</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-upload\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-upload</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-usd\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-usd</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-user\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-user</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-volume-down\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-volume-down</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-volume-off\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-volume-off</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-volume-up\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-volume-up</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-warning-sign\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-warning-sign</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-wrench\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-wrench</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-zoom-in\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-zoom-in</span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <span class=\"glyphicon glyphicon-zoom-out\"></span>\n" +
    "        <span class=\"glyphicon-class\">.glyphicon .glyphicon-zoom-out</span>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"glyphicons-how-to-use\">How to use</h2>\n" +
    "    <p>For performance reasons, all icons require a base class and individual icon class. To use, place the following code just about anywhere. Be sure to leave a space between the icon and text for proper padding.</p>\n" +
    "{% highlight html %}\n" +
    "<span class=\"glyphicon glyphicon-search\"></span>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"glyphicons-examples\">Examples</h2>\n" +
    "    <p>Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-align-left\"></span></button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-align-center\"></span></button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-align-right\"></span></button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-align-justify\"></span></button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-star\"></span> Star</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-star\"></span> Star</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-sm\"><span class=\"glyphicon glyphicon-star\"></span> Star</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-xs\"><span class=\"glyphicon glyphicon-star\"></span> Star</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-default btn-lg\">\n" +
    "  <span class=\"glyphicon glyphicon-star\"></span> Star\n" +
    "</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Dropdowns\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"dropdowns\">Dropdowns</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Toggleable, contextual menu for displaying lists of links. Made interactive with the <a href=\"../javascript/#dropdowns\">dropdown JavaScript plugin</a>.</p>\n" +
    "\n" +
    "    <h3 id=\"dropdowns-example\">Example</h3>\n" +
    "    <p>Wrap the dropdown's trigger and the dropdown menu within <code>.dropdown</code>, or another element that declares <code>position: relative;</code>. Then add the menu's HTML.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"dropdown clearfix\">\n" +
    "        <button class=\"btn dropdown-toggle sr-only\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\">\n" +
    "          Dropdown\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\n" +
    "          <li role=\"presentation\" class=\"divider\"></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"dropdown\">\n" +
    "  <button class=\"btn dropdown-toggle sr-only\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\">\n" +
    "    Dropdown\n" +
    "    <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\n" +
    "    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\n" +
    "    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\n" +
    "    <li role=\"presentation\" class=\"divider\"></li>\n" +
    "    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"dropdowns-alignment\">Alignment options</h3>\n" +
    "    <p>Add <code>.pull-right</code> to a <code>.dropdown-menu</code> to right align the dropdown menu.</p>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"dropdown-menu pull-right\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"dropdowns-headers\">Headers</h3>\n" +
    "    <p>Add a header to label sections of actions in any dropdown menu.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"dropdown clearfix\">\n" +
    "        <button class=\"btn dropdown-toggle sr-only\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\">\n" +
    "          Dropdown\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu2\">\n" +
    "          <li role=\"presentation\" class=\"dropdown-header\">Dropdown header</li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\n" +
    "          <li role=\"presentation\" class=\"divider\"></li>\n" +
    "          <li role=\"presentation\" class=\"dropdown-header\">Dropdown header</li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu2\">\n" +
    "  <li role=\"presentation\" class=\"dropdown-header\">Dropdown header</li>\n" +
    "  ...\n" +
    "  <li role=\"presentation\" class=\"divider\"></li>\n" +
    "  <li role=\"presentation\" class=\"dropdown-header\">Dropdown header</li>\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"dropdowns-disabled\">Disabled menu items</h3>\n" +
    "    <p>Add <code>.disabled</code> to a <code>&lt;li&gt;</code> in the dropdown to disable the link.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"dropdown clearfix\">\n" +
    "        <button class=\"btn dropdown-toggle sr-only\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\">\n" +
    "          Dropdown\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu3\">\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Regular link</a></li>\n" +
    "          <li role=\"presentation\" class=\"disabled\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Disabled link</a></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another link</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu3\">\n" +
    "  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Regular link</a></li>\n" +
    "  <li role=\"presentation\" class=\"disabled\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Disabled link</a></li>\n" +
    "  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another link</a></li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Button Groups\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"btn-groups\">Button groups</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with <a href=\"../javascript/#buttons\">our buttons plugin</a>.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Tooltips &amp; popovers in button groups require special setting</h4>\n" +
    "      <p>When using tooltips or popovers on elements within a <code>.btn-group</code>, you'll have to specify the option <code>container: 'body'</code> to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3 id=\"btn-groups-single\">Basic example</h3>\n" +
    "    <p>Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-group\" style=\"margin: 9px 0 5px;\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group\">\n" +
    "  <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-groups-toolbar\">Button toolbar</h3>\n" +
    "    <p>Combine sets of <code>&lt;div class=\"btn-group\"&gt;</code> into a <code>&lt;div class=\"btn-toolbar\"&gt;</code> for more complex components.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">1</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">2</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">3</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">4</button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">5</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">6</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">7</button>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">8</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "  <div class=\"btn-group\">...</div>\n" +
    "  <div class=\"btn-group\">...</div>\n" +
    "  <div class=\"btn-group\">...</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-groups-sizing\">Sizing</h3>\n" +
    "    <p>Instead of applying button sizing classes to every button in a group, just add <code>.btn-group-*</code> to the <code>.btn-group</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group btn-group-lg\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group btn-group-sm\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group btn-group-xs\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Left</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Middle</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Right</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group btn-group-lg\">...</div>\n" +
    "<div class=\"btn-group\">...</div>\n" +
    "<div class=\"btn-group btn-group-sm\">...</div>\n" +
    "<div class=\"btn-group btn-group-xs\">...</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-groups-nested\">Nesting</h3>\n" +
    "    <p>Place a <code>.btn-group</code> within another <code>.btn-group</code> when you want dropdown menus mixed with a series of buttons.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\">1</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">2</button>\n" +
    "\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            Dropdown\n" +
    "            <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btnGroupDrop1\">\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group\">\n" +
    "  <button type=\"button\" class=\"btn btn-default\">1</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default\">2</button>\n" +
    "\n" +
    "  <div class=\"btn-group\">\n" +
    "    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "      Dropdown\n" +
    "      <span class=\"caret\"></span>\n" +
    "    </button>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      <li><a href=\"#\">Dropdown link</a></li>\n" +
    "      <li><a href=\"#\">Dropdown link</a></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-groups-vertical\">Vertical variation</h3>\n" +
    "    <p>Make a set of buttons appear vertically stacked rather than horizontally.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-group-vertical\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Button</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Button</button>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button id=\"btnGroupVerticalDrop1\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            Dropdown\n" +
    "            <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btnGroupVerticalDrop1\">\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Button</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Button</button>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button id=\"btnGroupVerticalDrop2\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            Dropdown\n" +
    "            <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btnGroupVerticalDrop2\">\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button id=\"btnGroupVerticalDrop3\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            Dropdown\n" +
    "            <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btnGroupVerticalDrop3\">\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button id=\"btnGroupVerticalDrop4\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            Dropdown\n" +
    "            <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btnGroupVerticalDrop4\">\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "            <li><a href=\"#\">Dropdown link</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group-vertical\">\n" +
    "  ...\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-groups-justified\">Justified link variation</h3>\n" +
    "    <p>Make a group of buttons stretch at the same size to span the entire width of its parent.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Element-specific usage</h4>\n" +
    "      <p>This only works with <code>&lt;a&gt;</code> elements as the <code>&lt;button&gt;</code> doesn't pick up these styles.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-group btn-group-justified\">\n" +
    "        <a class=\"btn btn-default\" role=\"button\">Left</a>\n" +
    "        <a class=\"btn btn-default\" role=\"button\">Middle</a>\n" +
    "        <a class=\"btn btn-default\" role=\"button\">Right</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group btn-group-justified\">\n" +
    "  ...\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Split button dropdowns\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"btn-dropdowns\">Button dropdowns</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Use any button to trigger a dropdown menu by placing it within a <code>.btn-group</code> and providing the proper menu markup.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Plugin dependency</h4>\n" +
    "      <p>Button dropdowns require the <a href=\"../javascript/#dropdowns\">dropdown plugin</a> to be included in your version of Bootstrap.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3 id=\"btn-dropdowns-single\">Single button dropdowns</h3>\n" +
    "    <p>Turn a button into a dropdown toggle with some basic markup changes.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">Default <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">Primary <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">Success <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\">Info <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\">Warning <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">Danger <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<!-- Single button -->\n" +
    "<div class=\"btn-group\">\n" +
    "  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "    Action <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "    <li><a href=\"#\">Action</a></li>\n" +
    "    <li><a href=\"#\">Another action</a></li>\n" +
    "    <li><a href=\"#\">Something else here</a></li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li><a href=\"#\">Separated link</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-dropdowns-split\">Split button dropdowns</h3>\n" +
    "    <p>Similarly, create split button dropdowns with the same markup changes, only with a separate button.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Default</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          <span class=\"caret\"></span>\n" +
    "          <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n" +
    "        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          <span class=\"caret\"></span>\n" +
    "          <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-success\">Success</button>\n" +
    "        <button type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          <span class=\"caret\"></span>\n" +
    "          <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-info\">Info</button>\n" +
    "        <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          <span class=\"caret\"></span>\n" +
    "          <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n" +
    "        <button type=\"button\" class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          <span class=\"caret\"></span>\n" +
    "          <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n" +
    "        <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          <span class=\"caret\"></span>\n" +
    "          <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<!-- Split button -->\n" +
    "<div class=\"btn-group\">\n" +
    "  <button type=\"button\" class=\"btn btn-danger\">Action</button>\n" +
    "  <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "    <span class=\"caret\"></span>\n" +
    "    <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "    <li><a href=\"#\">Action</a></li>\n" +
    "    <li><a href=\"#\">Another action</a></li>\n" +
    "    <li><a href=\"#\">Something else here</a></li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li><a href=\"#\">Separated link</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-dropdowns-sizing\">Sizing</h3>\n" +
    "    <p>Button dropdowns work with buttons of all sizes.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button class=\"btn btn-default btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "            Large button <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "      </div><!-- /btn-toolbar -->\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "            Small button <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "      </div><!-- /btn-toolbar -->\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "            Extra small button <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "      </div><!-- /btn-toolbar -->\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<!-- Large button group -->\n" +
    "<div class=\"btn-group\">\n" +
    "  <button class=\"btn btn-default btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "    Large button <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\">\n" +
    "    ...\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Small button group -->\n" +
    "<div class=\"btn-group\">\n" +
    "  <button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "    Small button <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\">\n" +
    "    ...\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Extra small button group -->\n" +
    "<div class=\"btn-group\">\n" +
    "  <button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "    Extra small button <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\">\n" +
    "    ...\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"btn-dropdowns-dropup\">Dropup variation</h3>\n" +
    "    <p>Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"btn-toolbar\" role=\"toolbar\">\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Dropup</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <span class=\"caret\"></span>\n" +
    "            <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button type=\"button\" class=\"btn btn-primary\">Right dropup</button>\n" +
    "          <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <span class=\"caret\"></span>\n" +
    "            <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /btn-group -->\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group dropup\">\n" +
    "  <button type=\"button\" class=\"btn btn-default\">Dropup</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "    <span class=\"caret\"></span>\n" +
    "    <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\">\n" +
    "    <!-- Dropdown menu links -->\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Input groups\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"input-groups\">Input groups</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Extend form controls by adding text or buttons before, after, or on both sides of any text-based input. Use <code>.input-group</code> with an <code>.input-group-addon</code> to prepend or append elements to a <code>.form-control</code>.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p>Avoid using <code>&lt;select&gt;</code> elements here as they cannot be fully styled in WebKit browsers.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Tooltips &amp; popovers in input groups require special setting</h4>\n" +
    "      <p>When using tooltips or popovers on elements within an <code>.input-group</code>, you'll have to specify the option <code>container: 'body'</code> to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Don't mix with form groups</h4>\n" +
    "      <p>Do not apply input group classes directly to form groups. An input group is an isolated component.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"input-groups-basic\">Basic example</h2>\n" +
    "    <form class=\"bs-example bs-example-form\" role=\"form\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\">@</span>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"text\" class=\"form-control\">\n" +
    "        <span class=\"input-group-addon\">.00</span>\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\">$</span>\n" +
    "        <input type=\"text\" class=\"form-control\">\n" +
    "        <span class=\"input-group-addon\">.00</span>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "{% highlight html %}\n" +
    "<div class=\"input-group\">\n" +
    "  <span class=\"input-group-addon\">@</span>\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"input-group\">\n" +
    "  <input type=\"text\" class=\"form-control\">\n" +
    "  <span class=\"input-group-addon\">.00</span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"input-group\">\n" +
    "  <span class=\"input-group-addon\">$</span>\n" +
    "  <input type=\"text\" class=\"form-control\">\n" +
    "  <span class=\"input-group-addon\">.00</span>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"input-groups-sizing\">Sizing</h2>\n" +
    "    <p>Add the relative form sizing classes to the <code>.input-group</code> itself and contents within will automatically resize—no need for repeating the form control size classes on each element.</p>\n" +
    "    <form class=\"bs-example bs-example-form\" role=\"form\">\n" +
    "      <div class=\"input-group input-group-lg\">\n" +
    "        <span class=\"input-group-addon\">@</span>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\">@</span>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div class=\"input-group input-group-sm\">\n" +
    "        <span class=\"input-group-addon\">@</span>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "      </div>\n" +
    "    </form>\n" +
    "{% highlight html %}\n" +
    "<div class=\"input-group input-group-lg\">\n" +
    "  <span class=\"input-group-addon\">@</span>\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"input-group\">\n" +
    "  <span class=\"input-group-addon\">@</span>\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"input-group input-group-sm\">\n" +
    "  <span class=\"input-group-addon\">@</span>\n" +
    "  <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"input-groups-checkboxes-radios\">Checkboxes and radio addons</h2>\n" +
    "    <p>Place any checkbox or radio option within an input group's addon instead of text.</p>\n" +
    "    <form class=\"bs-example bs-example-form\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <span class=\"input-group-addon\">\n" +
    "              <input type=\"checkbox\">\n" +
    "            </span>\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "          </div><!-- /input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <span class=\"input-group-addon\">\n" +
    "              <input type=\"radio\">\n" +
    "            </span>\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "          </div><!-- /input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "      </div><!-- /.row -->\n" +
    "    </form>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-lg-6\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <span class=\"input-group-addon\">\n" +
    "        <input type=\"checkbox\">\n" +
    "      </span>\n" +
    "      <input type=\"text\" class=\"form-control\">\n" +
    "    </div><!-- /input-group -->\n" +
    "  </div><!-- /.col-lg-6 -->\n" +
    "  <div class=\"col-lg-6\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <span class=\"input-group-addon\">\n" +
    "        <input type=\"radio\">\n" +
    "      </span>\n" +
    "      <input type=\"text\" class=\"form-control\">\n" +
    "    </div><!-- /input-group -->\n" +
    "  </div><!-- /.col-lg-6 -->\n" +
    "</div><!-- /.row -->\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"input-groups-buttons\">Button addons</h2>\n" +
    "    <p>Buttons in input groups are a bit different and require one extra level of nesting. Instead of <code>.input-group-addon</code>, you'll need to use <code>.input-group-btn</code> to wrap the buttons. This is required due to default browser styles that cannot be overridden.</p>\n" +
    "    <form class=\"bs-example bs-example-form\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button class=\"btn btn-default\" type=\"button\">Go!</button>\n" +
    "            </span>\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "          </div><!-- /input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button class=\"btn btn-default\" type=\"button\">Go!</button>\n" +
    "            </span>\n" +
    "          </div><!-- /input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "      </div><!-- /.row -->\n" +
    "    </form>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-lg-6\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "        <button class=\"btn btn-default\" type=\"button\">Go!</button>\n" +
    "      </span>\n" +
    "      <input type=\"text\" class=\"form-control\">\n" +
    "    </div><!-- /input-group -->\n" +
    "  </div><!-- /.col-lg-6 -->\n" +
    "  <div class=\"col-lg-6\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "        <button class=\"btn btn-default\" type=\"button\">Go!</button>\n" +
    "      </span>\n" +
    "    </div><!-- /input-group -->\n" +
    "  </div><!-- /.col-lg-6 -->\n" +
    "</div><!-- /.row -->\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h2 id=\"input-groups-buttons-dropdowns\">Buttons with dropdowns</h2>\n" +
    "    <p></p>\n" +
    "    <form class=\"bs-example bs-example-form\" role=\"form\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-btn\">\n" +
    "              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">Action <span class=\"caret\"></span></button>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </div><!-- /btn-group -->\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "          </div><!-- /input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "            <div class=\"input-group-btn\">\n" +
    "              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">Action <span class=\"caret\"></span></button>\n" +
    "              <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </div><!-- /btn-group -->\n" +
    "          </div><!-- /input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "      </div><!-- /.row -->\n" +
    "    </form>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-lg-6\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <div class=\"input-group-btn\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">Action <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "      <input type=\"text\" class=\"form-control\">\n" +
    "    </div><!-- /input-group -->\n" +
    "  </div><!-- /.col-lg-6 -->\n" +
    "  <div class=\"col-lg-6\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\">\n" +
    "      <div class=\"input-group-btn\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">Action <span class=\"caret\"></span></button>\n" +
    "        <ul class=\"dropdown-menu pull-right\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /btn-group -->\n" +
    "    </div><!-- /input-group -->\n" +
    "  </div><!-- /.col-lg-6 -->\n" +
    "</div><!-- /.row -->\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h2 id=\"input-groups-buttons-segmented\">Segmented buttons</h2>\n" +
    "    <form class=\"bs-example bs-example-form\" role=\"form\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-btn\">\n" +
    "              <button type=\"button\" class=\"btn btn-default\" tabindex=\"-1\">Action</button>\n" +
    "              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" tabindex=\"-1\">\n" +
    "                <span class=\"caret\"></span>\n" +
    "                <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "              </button>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "          </div><!-- /.input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <input type=\"text\" class=\"form-control\">\n" +
    "            <div class=\"input-group-btn\">\n" +
    "              <button type=\"button\" class=\"btn btn-default\" tabindex=\"-1\">Action</button>\n" +
    "              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" tabindex=\"-1\">\n" +
    "                <span class=\"caret\"></span>\n" +
    "                <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "              </button>\n" +
    "              <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div><!-- /.input-group -->\n" +
    "        </div><!-- /.col-lg-6 -->\n" +
    "      </div><!-- /.row -->\n" +
    "    </form>\n" +
    "{% highlight html %}\n" +
    "<div class=\"input-group\">\n" +
    "  <div class=\"input-group-btn\">\n" +
    "    <!-- Button and dropdown menu -->\n" +
    "  </div>\n" +
    "  <input type=\"text\" class=\"form-control\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"input-group\">\n" +
    "  <input type=\"text\" class=\"form-control\">\n" +
    "  <div class=\"input-group-btn\">\n" +
    "    <!-- Button and dropdown menu -->\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Navs\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"nav\">Navs</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <p class=\"lead\">Navs available in Bootstrap have shared markup, starting with the base <code>.nav</code> class, as well as shared states. Swap modifier classes to switch between each style.</p>\n" +
    "\n" +
    "    <h2 id=\"nav-tabs\">Tabs</h2>\n" +
    "    <p>Note the <code>.nav-tabs</code> class requires the <code>.nav</code> base class.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-tabs\">\n" +
    "        <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li><a href=\"#\">Messages</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-tabs\">\n" +
    "  <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "  <li><a href=\"#\">Profile</a></li>\n" +
    "  <li><a href=\"#\">Messages</a></li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Requires JavaScript tabs plugin</h4>\n" +
    "      <p>For tabs with tabbable areas, you must use the <a href=\"../javascript/#tabs\">tabs JavaScript plugin</a>.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"nav-pills\">Pills</h2>\n" +
    "    <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-pills\">\n" +
    "        <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li><a href=\"#\">Messages</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-pills\">\n" +
    "  <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "  <li><a href=\"#\">Profile</a></li>\n" +
    "  <li><a href=\"#\">Messages</a></li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "    <p>Pills are also vertically stackable. Just add <code>.nav-stacked</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-pills nav-stacked\" style=\"max-width: 300px;\">\n" +
    "        <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li><a href=\"#\">Messages</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-pills nav-stacked\">\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"nav-justified\">Justified</h2>\n" +
    "    <p>Easily make tabs or pills equal widths of their parent at screens wider than 768px with <code>.nav-justified</code>. On smaller screens, the nav links are stacked.</p>\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>WebKit and responsive justified navs</h4>\n" +
    "      <p>Chrome and Safari both exhibit a bug in which resizing your browser horizontally causes rendering errors in the justified nav that are cleared upon refreshing. This bug is also shown in the <a href=\"../examples/justified-nav/\">justified nav example</a>.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-tabs nav-justified\">\n" +
    "        <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li><a href=\"#\">Messages</a></li>\n" +
    "      </ul>\n" +
    "      <br>\n" +
    "      <ul class=\"nav nav-pills nav-justified\">\n" +
    "        <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li><a href=\"#\">Messages</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-tabs nav-justified\">\n" +
    "  ...\n" +
    "</ul>\n" +
    "<ul class=\"nav nav-pills nav-justified\">\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"nav-disabled-links\">Disabled links</h2>\n" +
    "    <p>For any nav component (tabs, pills, or list), add <code>.disabled</code> for <strong>gray links and no hover effects</strong>.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Link functionality not impacted</h4>\n" +
    "      <p>This class will only change the <code>&lt;a&gt;</code>'s appearance, not its functionality. Use custom JavaScript to disable links here.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-pills\">\n" +
    "        <li><a href=\"#\">Clickable link</a></li>\n" +
    "        <li><a href=\"#\">Clickable link</a></li>\n" +
    "        <li class=\"disabled\"><a href=\"#\">Disabled link</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-pills\">\n" +
    "  ...\n" +
    "  <li class=\"disabled\"><a href=\"#\">Disabled link</a></li>\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"nav-dropdowns\">Using dropdowns</h2>\n" +
    "    <p>Add dropdown menus with a little extra HTML and the <a href=\"../javascript/#dropdowns\">dropdowns JavaScript plugin</a>.</p>\n" +
    "\n" +
    "    <h3>Tabs with dropdowns</h3>\n" +
    "    <div class=\"bs-example\">\n" +
    "  <ul class=\"nav nav-tabs\">\n" +
    "    <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "    <li><a href=\"#\">Help</a></li>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "        Dropdown <span class=\"caret\"></span>\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li><a href=\"#\">Action</a></li>\n" +
    "        <li><a href=\"#\">Another action</a></li>\n" +
    "        <li><a href=\"#\">Something else here</a></li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li><a href=\"#\">Separated link</a></li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-tabs\">\n" +
    "  ...\n" +
    "  <li class=\"dropdown\">\n" +
    "    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "      Dropdown <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      ...\n" +
    "    </ul>\n" +
    "  </li>\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Pills with dropdowns</h3>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-pills\">\n" +
    "        <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "        <li><a href=\"#\">Help</a></li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "            Dropdown <span class=\"caret\"></span>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-pills\">\n" +
    "  ...\n" +
    "  <li class=\"dropdown\">\n" +
    "    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "      Dropdown <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      ...\n" +
    "    </ul>\n" +
    "  </li>\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Navbar\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"navbar\">Navbar</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"navbar-default\">Default navbar</h2>\n" +
    "    <p>Navbars are responsive meta components that serve as navigation headers for your application or site. They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Customize the collapsing point</h4>\n" +
    "      <p>Depending on the content in your navbar, you might need to change the point at which your navbar switches between collapsed and horizontal mode. Customize the <code>@grid-float-breakpoint</code> variable or add your own media query.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Requires JavaScript</h4>\n" +
    "      <p>If JavaScript is disabled and the viewport is narrow enough that the navbar collapses, it will be impossible to expand the navbar and view the content within the <code>.navbar-collapse</code>.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">One more separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <form class=\"navbar-form navbar-left\" role=\"search\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "          </form>\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "      </nav>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "  <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "  <div class=\"navbar-header\">\n" +
    "    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "      <span class=\"sr-only\">Toggle navigation</span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "    </button>\n" +
    "    <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li class=\"active\"><a href=\"#\">Link</a></li>\n" +
    "      <li><a href=\"#\">Link</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">One more separated link</a></li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <form class=\"navbar-form navbar-left\" role=\"search\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "    </form>\n" +
    "    <ul class=\"nav navbar-nav navbar-right\">\n" +
    "      <li><a href=\"#\">Link</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a href=\"#\">Action</a></li>\n" +
    "          <li><a href=\"#\">Another action</a></li>\n" +
    "          <li><a href=\"#\">Something else here</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div><!-- /.navbar-collapse -->\n" +
    "</nav>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Plugin dependency</h4>\n" +
    "      <p>The responsive navbar requires the <a href=\"../javascript/#collapse\">collapse plugin</a> to be included in your version of Bootstrap.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Make navbars accessible</h4>\n" +
    "      <p>Be sure to add a <code>role=\"navigation\"</code> to every navbar to help with accessibility.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-forms\">Forms</h2>\n" +
    "    <p>Place form content within <code>.navbar-form</code> for proper vertical alignment and collapsed behavior in narrow viewports. Use the alignment options to decide where it resides within the navbar content.</p>\n" +
    "    <p>As a heads up, <code>.navbar-form</code> shares much of its code with <code>.form-inline</code> via mixin.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\">\n" +
    "          <form class=\"navbar-form navbar-left\" role=\"search\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<form class=\"navbar-form navbar-left\" role=\"search\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "</form>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Always add labels</h4>\n" +
    "      <p>Screen readers will have trouble with your forms if you don't include a label for every input. For these inline navbar forms, you can hide the labels using the <code>.sr-only</code> class.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-buttons\">Buttons</h2>\n" +
    "    <p>Add the <code>.navbar-btn</code> class to <code>&lt;button&gt;</code> elements not residing in a <code>&lt;form&gt;</code> to vertically center them in the navbar.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-3\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-3\">\n" +
    "          <button type=\"button\" class=\"btn btn-default navbar-btn\">Sign in</button>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-default navbar-btn\">Sign in</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Context-specific usage</h4>\n" +
    "      <p>Like the standard <a href=\"{{ page.base_url }}css#buttons\">button classes</a>, <code>.navbar-btn</code> can be used on <code>&lt;a&gt;</code> and <code>&lt;input&gt;</code> elements. However, neither <code>.navbar-btn</code> nor the standard button classes should be used on <code>&lt;a&gt;</code> elements within <code>.navbar-nav</code>.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"navbar-text\">Text</h2>\n" +
    "    <p>Wrap strings of text in an element with <code>.navbar-text</code>, usually on a <code>&lt;p&gt;</code> tag for proper leading and color.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-4\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-4\">\n" +
    "          <p class=\"navbar-text\">Signed in as Mark Otto</p>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<p class=\"navbar-text\">Signed in as Mark Otto</p>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-links\">Non-nav links</h2>\n" +
    "    <p>For folks using standard links that are not within the regular navbar navigation component, use the <code>.navbar-link</code> class to add the proper colors for the default and inverse navbar options.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-5\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-5\">\n" +
    "          <p class=\"navbar-text navbar-right\">Signed in as <a href=\"#\" class=\"navbar-link\">Mark Otto</a></p>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<p class=\"navbar-text navbar-right\">Signed in as <a href=\"#\" class=\"navbar-link\">Mark Otto</a></p>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-component-alignment\">Component alignment</h2>\n" +
    "    <p>Align nav links, forms, buttons, or text, using the <code>.navbar-left</code> or <code>.navbar-right</code> utility classes. Both classes will add a CSS float in the specified direction. For example, to align nav links, put them in a separate <code>&lt;ul&gt;</code> with the respective utility class applied.</p>\n" +
    "    <p>These classes are mixin-ed versions of <code>.pull-left</code> and <code>.pull-right</code>, but they're scoped to media queries for easier handling of navbar components across device sizes.</p>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-fixed-top\">Fixed to top</h2>\n" +
    "    <p>Add <code>.navbar-fixed-top</code>.</p>\n" +
    "    <div class=\"bs-example bs-navbar-top-example\">\n" +
    "      <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-6\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-6\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "      </nav>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "  ...\n" +
    "</nav>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Body padding required</h4>\n" +
    "      <p>The fixed navbar will overlay your other content, unless you add <code>padding</code> to the top of the <code>&lt;body&gt;</code>. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.</p>\n" +
    "{% highlight css %}\n" +
    "body { padding-top: 70px; }\n" +
    "{% endhighlight %}\n" +
    "      <p>Make sure to include this <strong>after</strong> the core Bootstrap CSS.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-fixed-bottom\">Fixed to bottom</h2>\n" +
    "    <p>Add <code>.navbar-fixed-bottom</code> instead.</p>\n" +
    "    <div class=\"bs-example bs-navbar-bottom-example\">\n" +
    "      <nav class=\"navbar navbar-default navbar-fixed-bottom\" role=\"navigation\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-7\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-7\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "      </nav>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<nav class=\"navbar navbar-default navbar-fixed-bottom\" role=\"navigation\">\n" +
    "  ...\n" +
    "</nav>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Body padding required</h4>\n" +
    "      <p>The fixed navbar will overlay your other content, unless you add <code>padding</code> to the bottom of the <code>&lt;body&gt;</code>. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.</p>\n" +
    "{% highlight css %}\n" +
    "body { padding-bottom: 70px; }\n" +
    "{% endhighlight %}\n" +
    "      <p>Make sure to include this <strong>after</strong> the core Bootstrap CSS.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-static-top\">Static top</h2>\n" +
    "    <p>Create a full-width navbar that scrolls away with the page by adding <code>.navbar-static-top</code>. Unlike the <code>.navbar-fixed-*</code> classes, you do not need to change any padding on the <code>body</code>.</p>\n" +
    "    <div class=\"bs-example bs-navbar-top-example\">\n" +
    "      <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-8\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-8\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "      </nav>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n" +
    "  ...\n" +
    "</nav>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"navbar-inverted\">Inverted navbar</h2>\n" +
    "    <p>Modify the look of the navbar by adding <code>.navbar-inverse</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n" +
    "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-9\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Brand</a>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-9\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "      </nav>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n" +
    "  ...\n" +
    "</nav>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Breadcrumbs\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"breadcrumbs\">Breadcrumbs <small></small></h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Indicate the current page's location within a navigational hierarchy.</p>\n" +
    "    <p>Separators are automatically added in CSS through <code>:before</code> and <code>content</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ol class=\"breadcrumb\">\n" +
    "        <li class=\"active\">Home</li>\n" +
    "      </ol>\n" +
    "      <ol class=\"breadcrumb\">\n" +
    "        <li><a href=\"#\">Home</a></li>\n" +
    "        <li class=\"active\">Library</li>\n" +
    "      </ol>\n" +
    "      <ol class=\"breadcrumb\" style=\"margin-bottom: 5px;\">\n" +
    "        <li><a href=\"#\">Home</a></li>\n" +
    "        <li><a href=\"#\">Library</a></li>\n" +
    "        <li class=\"active\">Data</li>\n" +
    "      </ol>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ol class=\"breadcrumb\">\n" +
    "  <li><a href=\"#\">Home</a></li>\n" +
    "  <li><a href=\"#\">Library</a></li>\n" +
    "  <li class=\"active\">Data</li>\n" +
    "</ol>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Pagination\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"pagination\">Pagination</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Provide pagination links for your site or app with the multi-page pagination component, or the simpler <a href=\"#pagination-pager\">pager alternative</a>.</p>\n" +
    "\n" +
    "    <h2 id=\"pagination-default\">Default pagination</h2>\n" +
    "    <p>Simple pagination inspired by Rdio, great for apps and search results. The large block is hard to miss, easily scalable, and provides large click areas.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"pagination\">\n" +
    "        <li><a href=\"#\">&laquo;</a></li>\n" +
    "        <li><a href=\"#\">1</a></li>\n" +
    "        <li><a href=\"#\">2</a></li>\n" +
    "        <li><a href=\"#\">3</a></li>\n" +
    "        <li><a href=\"#\">4</a></li>\n" +
    "        <li><a href=\"#\">5</a></li>\n" +
    "        <li><a href=\"#\">&raquo;</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"pagination\">\n" +
    "  <li><a href=\"#\">&laquo;</a></li>\n" +
    "  <li><a href=\"#\">1</a></li>\n" +
    "  <li><a href=\"#\">2</a></li>\n" +
    "  <li><a href=\"#\">3</a></li>\n" +
    "  <li><a href=\"#\">4</a></li>\n" +
    "  <li><a href=\"#\">5</a></li>\n" +
    "  <li><a href=\"#\">&raquo;</a></li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Disabled and active states</h3>\n" +
    "    <p>Links are customizable for different circumstances. Use <code>.disabled</code> for unclickable links and <code>.active</code> to indicate the current page.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"pagination\">\n" +
    "        <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "        <li class=\"active\"><a href=\"#\">1 <span class=\"sr-only\">(current)</span></a></li>\n" +
    "        <li><a href=\"#\">2</a></li>\n" +
    "        <li><a href=\"#\">3</a></li>\n" +
    "        <li><a href=\"#\">4</a></li>\n" +
    "        <li><a href=\"#\">5</a></li>\n" +
    "        <li><a href=\"#\">&raquo;</a></li>\n" +
    "     </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"pagination\">\n" +
    "  <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "  <li class=\"active\"><a href=\"#\">1 <span class=\"sr-only\">(current)</span></a></li>\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "    <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code> to remove click functionality while retaining intended styles.</p>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"pagination\">\n" +
    "  <li class=\"disabled\"><span>&laquo;</span></li>\n" +
    "  <li class=\"active\"><span>1 <span class=\"sr-only\">(current)</span></span></li>\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3>Sizing</h3>\n" +
    "    <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div>\n" +
    "        <ul class=\"pagination pagination-lg\">\n" +
    "          <li><a href=\"#\">&laquo;</a></li>\n" +
    "          <li><a href=\"#\">1</a></li>\n" +
    "          <li><a href=\"#\">2</a></li>\n" +
    "          <li><a href=\"#\">3</a></li>\n" +
    "          <li><a href=\"#\">4</a></li>\n" +
    "          <li><a href=\"#\">5</a></li>\n" +
    "          <li><a href=\"#\">&raquo;</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <ul class=\"pagination\">\n" +
    "          <li><a href=\"#\">&laquo;</a></li>\n" +
    "          <li><a href=\"#\">1</a></li>\n" +
    "          <li><a href=\"#\">2</a></li>\n" +
    "          <li><a href=\"#\">3</a></li>\n" +
    "          <li><a href=\"#\">4</a></li>\n" +
    "          <li><a href=\"#\">5</a></li>\n" +
    "          <li><a href=\"#\">&raquo;</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <ul class=\"pagination pagination-sm\">\n" +
    "          <li><a href=\"#\">&laquo;</a></li>\n" +
    "          <li><a href=\"#\">1</a></li>\n" +
    "          <li><a href=\"#\">2</a></li>\n" +
    "          <li><a href=\"#\">3</a></li>\n" +
    "          <li><a href=\"#\">4</a></li>\n" +
    "          <li><a href=\"#\">5</a></li>\n" +
    "          <li><a href=\"#\">&raquo;</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"pagination pagination-lg\">...</ul>\n" +
    "<ul class=\"pagination\">...</ul>\n" +
    "<ul class=\"pagination pagination-sm\">...</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"pagination-pager\">Pager</h2>\n" +
    "    <p>Quick previous and next links for simple pagination implementations with light markup and styles. It's great for simple sites like blogs or magazines.</p>\n" +
    "\n" +
    "    <h3>Default example</h3>\n" +
    "    <p>By default, the pager centers links.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"pager\">\n" +
    "        <li><a href=\"#\">Previous</a></li>\n" +
    "        <li><a href=\"#\">Next</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"pager\">\n" +
    "  <li><a href=\"#\">Previous</a></li>\n" +
    "  <li><a href=\"#\">Next</a></li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Aligned links</h3>\n" +
    "    <p>Alternatively, you can align each link to the sides:</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"pager\">\n" +
    "        <li class=\"previous\"><a href=\"#\">&larr; Older</a></li>\n" +
    "        <li class=\"next\"><a href=\"#\">Newer &rarr;</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"pager\">\n" +
    "  <li class=\"previous\"><a href=\"#\">&larr; Older</a></li>\n" +
    "  <li class=\"next\"><a href=\"#\">Newer &rarr;</a></li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3>Optional disabled state</h3>\n" +
    "    <p>Pager links also use the general <code>.disabled</code> utility class from the pagination.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"pager\">\n" +
    "        <li class=\"previous disabled\"><a href=\"#\">&larr; Older</a></li>\n" +
    "        <li class=\"next\"><a href=\"#\">Newer &rarr;</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"pager\">\n" +
    "  <li class=\"previous disabled\"><a href=\"#\">&larr; Older</a></li>\n" +
    "  <li class=\"next\"><a href=\"#\">Newer &rarr;</a></li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Labels\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"labels\">Labels</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\"></p>\n" +
    "\n" +
    "    <h3>Example</h3>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <h1>Example heading <span class=\"label label-default\">New</span></h1>\n" +
    "      <h2>Example heading <span class=\"label label-default\">New</span></h2>\n" +
    "      <h3>Example heading <span class=\"label label-default\">New</span></h3>\n" +
    "      <h4>Example heading <span class=\"label label-default\">New</span></h4>\n" +
    "      <h5>Example heading <span class=\"label label-default\">New</span></h5>\n" +
    "      <h6>Example heading <span class=\"label label-default\">New</span></h6>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<h3>Example heading <span class=\"label label-default\">New</span></h3>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Available variations</h3>\n" +
    "    <p>Add any of the below mentioned modifier classes to change the appearance of a label.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <span class=\"label label-default\">Default</span>\n" +
    "      <span class=\"label label-primary\">Primary</span>\n" +
    "      <span class=\"label label-success\">Success</span>\n" +
    "      <span class=\"label label-info\">Info</span>\n" +
    "      <span class=\"label label-warning\">Warning</span>\n" +
    "      <span class=\"label label-danger\">Danger</span>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<span class=\"label label-default\">Default</span>\n" +
    "<span class=\"label label-primary\">Primary</span>\n" +
    "<span class=\"label label-success\">Success</span>\n" +
    "<span class=\"label label-info\">Info</span>\n" +
    "<span class=\"label label-warning\">Warning</span>\n" +
    "<span class=\"label label-danger\">Danger</span>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Badges\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"badges\">Badges</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Easily highlight new or unread items by adding a <code>&lt;span class=\"badge\"&gt;</code> to links, Bootstrap navs, and more.</p>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <a href=\"#\">Inbox <span class=\"badge\">42</span></a>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<a href=\"#\">Inbox <span class=\"badge\">42</span></a>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Self collapsing</h4>\n" +
    "    <p>When there are no new or unread items, badges will simply collapse (via CSS's <code>:empty</code> selector) provided no content exists within.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p>Badges won't self collapse in Internet Explorer 8 because it lacks support for the <code>:empty</code> selector.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>Adapts to active nav states</h4>\n" +
    "    <p>Built-in styles are included for placing badges in active states in pill and list navigations.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-pills\">\n" +
    "        <li class=\"active\"><a href=\"#\">Home <span class=\"badge\">42</span></a></li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li><a href=\"#\">Messages <span class=\"badge\">3</span></a></li>\n" +
    "      </ul>\n" +
    "      <br>\n" +
    "      <ul class=\"nav nav-pills nav-stacked\" style=\"max-width: 260px;\">\n" +
    "        <li class=\"active\">\n" +
    "          <a href=\"#\">\n" +
    "            <span class=\"badge pull-right\">42</span>\n" +
    "            Home\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li>\n" +
    "          <a href=\"#\">\n" +
    "            <span class=\"badge pull-right\">3</span>\n" +
    "            Messages\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-pills nav-stacked\">\n" +
    "  <li class=\"active\">\n" +
    "    <a href=\"#\">\n" +
    "      <span class=\"badge pull-right\">42</span>\n" +
    "      Home\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  ...\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Jumbotron\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"jumbotron\">Jumbotron</h1>\n" +
    "    </div>\n" +
    "    <p>A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Hello, world!</h1>\n" +
    "        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n" +
    "        <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more</a></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"jumbotron\">\n" +
    "  <h1>Hello, world!</h1>\n" +
    "  <p>...</p>\n" +
    "  <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more</a></p>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "    <p>To make the jumbotron full width, and without rounded corners, place it outside all <code>.container</code>s and instead add a <code>.container</code> within.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"jumbotron\">\n" +
    "  <div class=\"container\">\n" +
    "    ...\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Page header\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"page-header\">Page header</h1>\n" +
    "    </div>\n" +
    "    <p>A simple shell for an <code>h1</code> to appropriately space out and segment sections of content on a page. It can utilize the <code>h1</code>'s default <code>small</code> element, as well as most other components (with additional styles).</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Example page header <small>Subtext for header</small></h1>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"page-header\">\n" +
    "  <h1>Example page header <small>Subtext for header</small></h1>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Thumbnails\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"thumbnails\">Thumbnails</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Extend Bootstrap's <a href=\"../css/#grid\">grid system</a> with the thumbnail component to easily display grids of images, videos, text, and more.</p>\n" +
    "\n" +
    "    <h3 id=\"thumbnails-default\">Default example</h3>\n" +
    "    <p>By default, Bootstrap's thumbnails are designed to showcase linked images with minimal required markup.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-3\">\n" +
    "          <a href=\"#\" class=\"thumbnail\">\n" +
    "            <img data-src=\"holder.js/100%x180\" alt=\"Generic placeholder thumbnail\">\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-3\">\n" +
    "          <a href=\"#\" class=\"thumbnail\">\n" +
    "            <img data-src=\"holder.js/100%x180\" alt=\"Generic placeholder thumbnail\">\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-3\">\n" +
    "          <a href=\"#\" class=\"thumbnail\">\n" +
    "            <img data-src=\"holder.js/100%x180\" alt=\"Generic placeholder thumbnail\">\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-3\">\n" +
    "          <a href=\"#\" class=\"thumbnail\">\n" +
    "            <img data-src=\"holder.js/100%x180\" alt=\"Generic placeholder thumbnail\">\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-6 col-md-3\">\n" +
    "    <a href=\"#\" class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/100%x180\" alt=\"...\">\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  ...\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"thumbnails-custom-content\">Custom content</h3>\n" +
    "    <p>With a bit of extra markup, it's possible to add any kind of HTML content like headings, paragraphs, or buttons into thumbnails.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-4\">\n" +
    "          <div class=\"thumbnail\">\n" +
    "            <img data-src=\"holder.js/300x200\" alt=\"Generic placeholder thumbnail\">\n" +
    "            <div class=\"caption\">\n" +
    "              <h3>Thumbnail label</h3>\n" +
    "              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "              <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-4\">\n" +
    "          <div class=\"thumbnail\">\n" +
    "            <img data-src=\"holder.js/300x200\" alt=\"Generic placeholder thumbnail\">\n" +
    "            <div class=\"caption\">\n" +
    "              <h3>Thumbnail label</h3>\n" +
    "              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "              <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6 col-md-4\">\n" +
    "          <div class=\"thumbnail\">\n" +
    "            <img data-src=\"holder.js/300x200\" alt=\"Generic placeholder thumbnail\">\n" +
    "            <div class=\"caption\">\n" +
    "              <h3>Thumbnail label</h3>\n" +
    "              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "              <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-6 col-md-4\">\n" +
    "    <div class=\"thumbnail\">\n" +
    "      <img data-src=\"holder.js/300x200\" alt=\"...\">\n" +
    "      <div class=\"caption\">\n" +
    "        <h3>Thumbnail label</h3>\n" +
    "        <p>...</p>\n" +
    "        <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Alerts\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"alerts\">Alerts</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. For inline dismissal, use the <a href=\"../javascript/#alerts\">alerts jQuery plugin</a>.</p>\n" +
    "\n" +
    "    <h2 id=\"alerts-examples\">Examples</h2>\n" +
    "    <p>Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual classes (e.g., <code>.alert-success</code>) for basic alert messages.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>No default class</h4>\n" +
    "      <p>Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"alert alert-success\">\n" +
    "        <strong>Well done!</strong> You successfully read this important alert message.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-info\">\n" +
    "        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-warning\">\n" +
    "        <strong>Warning!</strong> Best check yo self, you're not looking too good.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-danger\">\n" +
    "        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"alert alert-success\">...</div>\n" +
    "<div class=\"alert alert-info\">...</div>\n" +
    "<div class=\"alert alert-warning\">...</div>\n" +
    "<div class=\"alert alert-danger\">...</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h2 id=\"alerts-dismissable\">Dismissable alerts</h2>\n" +
    "    <p>Build on any alert by adding an optional <code>.alert-dismissable</code> and close button.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"alert alert-warning alert-dismissable\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "        <strong>Warning!</strong> Best check yo self, you're not looking too good.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"alert alert-warning alert-dismissable\">\n" +
    "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "  <strong>Warning!</strong> Best check yo self, you're not looking too good.\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Ensure proper behavior across all devices</h4>\n" +
    "      <p>Be sure to use the <code>&lt;button&gt;</code> element with the <code>data-dismiss=\"alert\"</code> data attribute.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"alerts-links\">Links in alerts</h2>\n" +
    "    <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"alert alert-success\">\n" +
    "        <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-info\">\n" +
    "        <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-warning\">\n" +
    "        <strong>Warning!</strong> Best check yo self, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-danger\">\n" +
    "        <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"alert alert-success\">\n" +
    "  <a href=\"#\" class=\"alert-link\">...</a>\n" +
    "</div>\n" +
    "<div class=\"alert alert-info\">\n" +
    "  <a href=\"#\" class=\"alert-link\">...</a>\n" +
    "</div>\n" +
    "<div class=\"alert alert-warning\">\n" +
    "  <a href=\"#\" class=\"alert-link\">...</a>\n" +
    "</div>\n" +
    "<div class=\"alert alert-danger\">\n" +
    "  <a href=\"#\" class=\"alert-link\">...</a>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Progress bars\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"progress\">Progress bars</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p>Progress bars use CSS3 transitions and animations to achieve some of their effects. These features are not supported in Internet Explorer 9 and below or older versions of Firefox. Opera 12 does not support animations.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3 id=\"progress-basic\">Basic example</h3>\n" +
    "    <p>Default progress bar.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n" +
    "          <span class=\"sr-only\">60% Complete</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n" +
    "    <span class=\"sr-only\">60% Complete</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"progress-alternatives\">Contextual alternatives</h3>\n" +
    "    <p>Progress bars use some of the same button and alert classes for consistent styles.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n" +
    "          <span class=\"sr-only\">40% Complete (success)</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n" +
    "          <span class=\"sr-only\">20% Complete</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
    "          <span class=\"sr-only\">60% Complete (warning)</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n" +
    "          <span class=\"sr-only\">80% Complete (danger)</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n" +
    "    <span class=\"sr-only\">40% Complete (success)</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n" +
    "    <span class=\"sr-only\">20% Complete</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
    "    <span class=\"sr-only\">60% Complete (warning)</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n" +
    "    <span class=\"sr-only\">80% Complete</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"progress-striped\">Striped</h3>\n" +
    "    <p>Uses a gradient to create a striped effect. Not available in IE8.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"progress progress-striped\" >\n" +
    "        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n" +
    "          <span class=\"sr-only\">40% Complete (success)</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"progress progress-striped\">\n" +
    "        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n" +
    "          <span class=\"sr-only\">20% Complete</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"progress progress-striped\">\n" +
    "        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
    "          <span class=\"sr-only\">60% Complete (warning)</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"progress progress-striped\">\n" +
    "        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n" +
    "          <span class=\"sr-only\">80% Complete (danger)</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"progress progress-striped\">\n" +
    "  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n" +
    "    <span class=\"sr-only\">40% Complete (success)</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"progress progress-striped\">\n" +
    "  <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n" +
    "    <span class=\"sr-only\">20% Complete</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"progress progress-striped\">\n" +
    "  <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
    "    <span class=\"sr-only\">60% Complete (warning)</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"progress progress-striped\">\n" +
    "  <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n" +
    "    <span class=\"sr-only\">80% Complete (danger)</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"progress-animated\">Animated</h3>\n" +
    "    <p>Add <code>.active</code> to <code>.progress-striped</code> to animate the stripes right to left. Not available in all versions of IE.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"progress progress-striped active\">\n" +
    "        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\"><span class=\"sr-only\">45% Complete</span></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"progress progress-striped active\">\n" +
    "  <div class=\"progress-bar\"  role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n" +
    "    <span class=\"sr-only\">45% Complete</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"progress-stacked\">Stacked</h3>\n" +
    "    <p>Place multiple bars into the same <code>.progress</code> to stack them.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n" +
    "          <span class=\"sr-only\">35% Complete (success)</span>\n" +
    "        </div>\n" +
    "        <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n" +
    "          <span class=\"sr-only\">20% Complete (warning)</span>\n" +
    "        </div>\n" +
    "        <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n" +
    "          <span class=\"sr-only\">10% Complete (danger)</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n" +
    "    <span class=\"sr-only\">35% Complete (success)</span>\n" +
    "  </div>\n" +
    "  <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n" +
    "    <span class=\"sr-only\">20% Complete (warning)</span>\n" +
    "  </div>\n" +
    "  <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n" +
    "    <span class=\"sr-only\">10% Complete (danger)</span>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Media object\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"media\">Media object</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content.</p>\n" +
    "\n" +
    "    <h3 id=\"media-default\">Default media</h3>\n" +
    "    <p>The default media allow to float a media object (images, video, audio) to the left or right of a content block.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"media\">\n" +
    "        <a class=\"pull-left\" href=\"#\">\n" +
    "          <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "        </a>\n" +
    "        <div class=\"media-body\">\n" +
    "          <h4 class=\"media-heading\">Media heading</h4>\n" +
    "          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"media\">\n" +
    "        <a class=\"pull-left\" href=\"#\">\n" +
    "          <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "        </a>\n" +
    "        <div class=\"media-body\">\n" +
    "          <h4 class=\"media-heading\">Media heading</h4>\n" +
    "          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n" +
    "          <div class=\"media\">\n" +
    "            <a class=\"pull-left\" href=\"#\">\n" +
    "              <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "            </a>\n" +
    "            <div class=\"media-body\">\n" +
    "              <h4 class=\"media-heading\">Media heading</h4>\n" +
    "              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"media\">\n" +
    "  <a class=\"pull-left\" href=\"#\">\n" +
    "    <img class=\"media-object\" src=\"...\" alt=\"...\">\n" +
    "  </a>\n" +
    "  <div class=\"media-body\">\n" +
    "    <h4 class=\"media-heading\">Media heading</h4>\n" +
    "    ...\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"media-list\">Media list</h3>\n" +
    "    <p>With a bit of extra markup, you can use media inside list (useful for comment threads or articles lists).</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"media-list\">\n" +
    "        <li class=\"media\">\n" +
    "          <a class=\"pull-left\" href=\"#\">\n" +
    "            <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "          </a>\n" +
    "          <div class=\"media-body\">\n" +
    "            <h4 class=\"media-heading\">Media heading</h4>\n" +
    "            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\n" +
    "            <!-- Nested media object -->\n" +
    "            <div class=\"media\">\n" +
    "              <a class=\"pull-left\" href=\"#\">\n" +
    "                <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "              </a>\n" +
    "              <div class=\"media-body\">\n" +
    "                <h4 class=\"media-heading\">Nested media heading</h4>\n" +
    "                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n" +
    "                <!-- Nested media object -->\n" +
    "                <div class=\"media\">\n" +
    "                  <a class=\"pull-left\" href=\"#\">\n" +
    "                    <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "                  </a>\n" +
    "                  <div class=\"media-body\">\n" +
    "                    <h4 class=\"media-heading\">Nested media heading</h4>\n" +
    "                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <!-- Nested media object -->\n" +
    "            <div class=\"media\">\n" +
    "              <a class=\"pull-left\" href=\"#\">\n" +
    "                <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "              </a>\n" +
    "              <div class=\"media-body\">\n" +
    "                <h4 class=\"media-heading\">Nested media heading</h4>\n" +
    "                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li class=\"media\">\n" +
    "          <a class=\"pull-right\" href=\"#\">\n" +
    "            <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"Generic placeholder image\">\n" +
    "          </a>\n" +
    "          <div class=\"media-body\">\n" +
    "            <h4 class=\"media-heading\">Media heading</h4>\n" +
    "            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"media-list\">\n" +
    "  <li class=\"media\">\n" +
    "    <a class=\"pull-left\" href=\"#\">\n" +
    "      <img class=\"media-object\" src=\"...\" alt=\"...\">\n" +
    "    </a>\n" +
    "    <div class=\"media-body\">\n" +
    "      <h4 class=\"media-heading\">Media heading</h4>\n" +
    "      ...\n" +
    "    </div>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- List group\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"list-group\">List group</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</p>\n" +
    "\n" +
    "    <h3 id=\"list-group-basic\">Basic example</h3>\n" +
    "    <p>The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS as needed.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"list-group\">\n" +
    "        <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "        <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "        <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"list-group\">\n" +
    "  <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "  <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "  <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "  <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "  <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"list-group-badges\">Badges</h3>\n" +
    "    <p>Add the badges component to any list group item and it will automatically be positioned on the right.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"list-group\">\n" +
    "        <li class=\"list-group-item\">\n" +
    "          <span class=\"badge\">14</span>\n" +
    "          Cras justo odio\n" +
    "        </li>\n" +
    "        <li class=\"list-group-item\">\n" +
    "          <span class=\"badge\">2</span>\n" +
    "          Dapibus ac facilisis in\n" +
    "        </li>\n" +
    "        <li class=\"list-group-item\">\n" +
    "          <span class=\"badge\">1</span>\n" +
    "          Morbi leo risus\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"list-group\">\n" +
    "  <li class=\"list-group-item\">\n" +
    "    <span class=\"badge\">14</span>\n" +
    "    Cras justo odio\n" +
    "  </li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"list-group-linked\">Linked items</h3>\n" +
    "    <p>Linkify list group items by using anchor tags instead of list items (that also means a parent <code>&lt;div&gt;</code> instead of an <code>&lt;ul&gt;</code>). No need for individual parents around each element.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"list-group\">\n" +
    "        <a href=\"#\" class=\"list-group-item active\">\n" +
    "          Cras justo odio\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">Morbi leo risus</a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac</a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">Vestibulum at eros</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"list-group\">\n" +
    "  <a href=\"#\" class=\"list-group-item active\">\n" +
    "    Cras justo odio\n" +
    "  </a>\n" +
    "  <a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n" +
    "  <a href=\"#\" class=\"list-group-item\">Morbi leo risus</a>\n" +
    "  <a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac</a>\n" +
    "  <a href=\"#\" class=\"list-group-item\">Vestibulum at eros</a>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"list-group-custom-content\">Custom content</h3>\n" +
    "    <p>Add nearly any HTML within, even for linked list groups like the one below.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"list-group\">\n" +
    "        <a href=\"#\" class=\"list-group-item active\">\n" +
    "          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n" +
    "          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n" +
    "          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n" +
    "        </a>\n" +
    "        <a href=\"#\" class=\"list-group-item\">\n" +
    "          <h4 class=\"list-group-item-heading\">List group item heading</h4>\n" +
    "          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"list-group\">\n" +
    "  <a href=\"#\" class=\"list-group-item active\">\n" +
    "    <h4 class=\"list-group-item-heading\">List group item heading</h4>\n" +
    "    <p class=\"list-group-item-text\">...</p>\n" +
    "  </a>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Panels\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"panels\">Panels</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.</p>\n" +
    "\n" +
    "    <h3 id=\"panels-basic\">Basic example</h3>\n" +
    "    <p>By default, all the <code>.panel</code> does is apply some basic border and padding to contain some content.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-body\">\n" +
    "          Basic panel example\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-body\">\n" +
    "    Basic panel example\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"panels-heading\">Panel with heading</h3>\n" +
    "    <p>Easily add a heading container to your panel with <code>.panel-heading</code>. You may also include any <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> with a <code>.panel-title</code> class to add a pre-styled heading.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">Panel heading without title</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Panel title</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">Panel heading without title</div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    Panel content\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">Panel title</h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    Panel content\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"panels-footer\">Panel with footer</h3>\n" +
    "    <p>Wrap buttons or secondary text in <code>.panel-footer</code>. Note that panel footers <strong>do not</strong> inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer\">Panel footer</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-body\">\n" +
    "    Panel content\n" +
    "  </div>\n" +
    "  <div class=\"panel-footer\">Panel footer</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"panels-alternatives\">Contextual alternatives</h3>\n" +
    "    <p>Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel panel-primary\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Panel title</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel panel-success\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Panel title</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel panel-info\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Panel title</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel panel-warning\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Panel title</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel panel-danger\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">Panel title</h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          Panel content\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel panel-primary\">...</div>\n" +
    "<div class=\"panel panel-success\">...</div>\n" +
    "<div class=\"panel panel-info\">...</div>\n" +
    "<div class=\"panel panel-warning\">...</div>\n" +
    "<div class=\"panel panel-danger\">...</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"panels-tables\">With tables</h3>\n" +
    "    <p>Add any non-bordered <code>.table</code> within a panel for a seamless design. If there is a <code>.panel-body</code>, we add an extra border to the top of the table for separation.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <!-- Default panel contents -->\n" +
    "        <div class=\"panel-heading\">Panel heading</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Table -->\n" +
    "        <table class=\"table\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th>#</th>\n" +
    "              <th>First Name</th>\n" +
    "              <th>Last Name</th>\n" +
    "              <th>Username</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>1</td>\n" +
    "              <td>Mark</td>\n" +
    "              <td>Otto</td>\n" +
    "              <td>@mdo</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>2</td>\n" +
    "              <td>Jacob</td>\n" +
    "              <td>Thornton</td>\n" +
    "              <td>@fat</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>3</td>\n" +
    "              <td>Larry</td>\n" +
    "              <td>the Bird</td>\n" +
    "              <td>@twitter</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <!-- Default panel contents -->\n" +
    "  <div class=\"panel-heading\">Panel heading</div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <p>...</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Table -->\n" +
    "  <table class=\"table\">\n" +
    "    ...\n" +
    "  </table>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>If there is no panel body, the component moves from panel header to table without interruption.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <!-- Default panel contents -->\n" +
    "        <div class=\"panel-heading\">Panel heading</div>\n" +
    "\n" +
    "        <!-- Table -->\n" +
    "        <table class=\"table\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th>#</th>\n" +
    "              <th>First Name</th>\n" +
    "              <th>Last Name</th>\n" +
    "              <th>Username</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>1</td>\n" +
    "              <td>Mark</td>\n" +
    "              <td>Otto</td>\n" +
    "              <td>@mdo</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>2</td>\n" +
    "              <td>Jacob</td>\n" +
    "              <td>Thornton</td>\n" +
    "              <td>@fat</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>3</td>\n" +
    "              <td>Larry</td>\n" +
    "              <td>the Bird</td>\n" +
    "              <td>@twitter</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <!-- Default panel contents -->\n" +
    "  <div class=\"panel-heading\">Panel heading</div>\n" +
    "\n" +
    "  <!-- Table -->\n" +
    "  <table class=\"table\">\n" +
    "    ...\n" +
    "  </table>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"panels-list-group\">With list groups</h3>\n" +
    "    <p>Easily include full-width <a href=\"#list-group\">list groups</a> within any panel.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <!-- Default panel contents -->\n" +
    "        <div class=\"panel-heading\">Panel heading</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- List group -->\n" +
    "        <ul class=\"list-group\">\n" +
    "          <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "          <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "          <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "          <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "          <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <!-- Default panel contents -->\n" +
    "  <div class=\"panel-heading\">Panel heading</div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <p>...</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- List group -->\n" +
    "  <ul class=\"list-group\">\n" +
    "    <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "    <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "    <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "    <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Wells\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"wells\">Wells</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Default well</h3>\n" +
    "    <p>Use the well as a simple effect on an element to give it an inset effect.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"well\">\n" +
    "        Look, I'm in a well!\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"well\">...</div>\n" +
    "{% endhighlight %}\n" +
    "    <h3>Optional classes</h3>\n" +
    "    <p>Control padding and rounded corners with two optional modifier classes.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"well well-lg\">\n" +
    "        Look, I'm in a large well!\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"well well-lg\">...</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"well well-sm\">\n" +
    "        Look, I'm in a small well!\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"well well-sm\">...</div>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/css.html',
    "---\n" +
    "layout: default\n" +
    "title: CSS\n" +
    "slug: css\n" +
    "lead: \"Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system.\"\n" +
    "base_url: \"../\"\n" +
    "---\n" +
    "\n" +
    "\n" +
    "  <!-- Global Bootstrap settings\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"overview\">Overview</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Get the lowdown on the key pieces of Bootstrap's infrastructure, including our approach to better, faster, stronger web development.</p>\n" +
    "\n" +
    "    <h3 id=\"overview-doctype\">HTML5 doctype</h3>\n" +
    "    <p>Bootstrap makes use of certain HTML elements and CSS properties that require the use of the HTML5 doctype. Include it at the beginning of all your projects.</p>\n" +
    "{% highlight html %}\n" +
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  ...\n" +
    "</html>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"overview-mobile\">Mobile first</h3>\n" +
    "    <p>With Bootstrap 2, we added optional mobile friendly styles for key aspects of the framework. With Bootstrap 3, we've rewritten the project to be mobile friendly from the start. Instead of adding on optional mobile styles, they're baked right into the core. In fact, <strong>Bootstrap is mobile first</strong>. Mobile first styles can be found throughout the entire library instead of in separate files.</p>\n" +
    "    <p>To ensure proper rendering and touch zooming, <strong>add the viewport meta tag</strong> to your <code>&lt;head&gt;</code>.</p>\n" +
    "{% highlight html %}\n" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "{% endhighlight %}\n" +
    "    <p>You can disable zooming capabilities on mobile devices by adding <code>user-scalable=no</code> to the viewport meta tag. This disables zooming, meaning users are only able to scroll, and results in your site feeling a bit more like a native application. Overall we don't recommend this on every site, so use caution!</p>\n" +
    "{% highlight html %}\n" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"overview-responsive-images\">Responsive images</h3>\n" +
    "    <p>Images in Bootstrap 3 can be made responsive-friendly via the addition of the <code>.img-responsive</code> class. This applies <code>max-width: 100%;</code> and <code>height: auto;</code> to the image so that it scales nicely to the parent element.</p>\n" +
    "{% highlight html %}\n" +
    "<img src=\"...\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"overview-type-links\">Typography and links</h3>\n" +
    "    <p>Bootstrap sets basic global display, typography, and link styles. Specifically, we:</p>\n" +
    "    <ul>\n" +
    "      <li>Set <code>background-color: #fff;</code> on the <code>body</code></li>\n" +
    "      <li>Use the <code>@font-family-base</code>, <code>@font-size-base</code>, and <code>@line-height-base</code> attributes as our typographic base</li>\n" +
    "      <li>Set the global link color via <code>@link-color</code> and apply link underlines only on <code>:hover</code></li>\n" +
    "    </ul>\n" +
    "    <p>These styles can be found within <code>scaffolding.less</code>.</p>\n" +
    "\n" +
    "    <h3 id=\"overview-normalize\">Normalize</h3>\n" +
    "    <p>For improved cross-browser rendering, we use <a href=\"http://necolas.github.io/normalize.css/\" target=\"_blank\">Normalize</a>, a project by <a href=\"http://twitter.com/necolas\" target=\"_blank\">Nicolas Gallagher</a> and <a href=\"http://twitter.com/jon_neal\" target=\"_blank\">Jonathan Neal</a>.</p>\n" +
    "\n" +
    "    <h3 id=\"overview-container\">Containers</h3>\n" +
    "    <p>Easily center a page's contents by wrapping its contents in a <code>.container</code>. Containers set <code>max-width</code> at various media query breakpoints to match our grid system.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"container\">\n" +
    "  ...\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Grid system\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"grid\">Grid system</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. It includes <a href=\"#grid-example-basic\">predefined classes</a> for easy layout options, as well as powerful <a href=\"#grid-less\">mixins for generating more semantic layouts</a>.</p>\n" +
    "\n" +
    "    <h3 id=\"grid-intro\">Introduction</h3>\n" +
    "    <p>Grid systems are used for creating page layouts through a series of rows and columns that house your content. Here's how the Bootstrap grid system works:</p>\n" +
    "    <ul>\n" +
    "      <li>Rows must be placed within a <code>.container</code> for proper alignment and padding.</li>\n" +
    "      <li>Use rows to create horizontal groups of columns.</li>\n" +
    "      <li>Content should be placed within columns, and only columns may be immediate children of rows.</li>\n" +
    "      <li>Predefined grid classes like <code>.row</code> and <code>.col-xs-4</code> are available for quickly making grid layouts. LESS mixins can also be used for more semantic layouts.</li>\n" +
    "      <li>Columns create gutters (gaps between column content) via <code>padding</code>. That padding is offset in rows for the first and last column via negative margin on <code>.row</code>s.</li>\n" +
    "      <li>Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three <code>.col-xs-4</code>.</li>\n" +
    "    </ul>\n" +
    "    <p>Look to the examples for applying these principles to your code.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Grids and full-width layouts</h4>\n" +
    "      <p>Folks looking to create fully fluid layouts (meaning your site stretches the entire width of the viewport) must wrap their grid content in a containing element with <code>padding: 0 15px;</code> to offset the <code>margin: 0 -15px;</code> used on <code>.row</code>s.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3 id=\"grid-media-queries\">Media queries</h3>\n" +
    "    <p>We use the following media queries in our LESS files to create the key breakpoints in our grid system.</p>\n" +
    "{% highlight css %}\n" +
    "/* Extra small devices (phones, less than 768px) */\n" +
    "/* No media query since this is the default in Bootstrap */\n" +
    "\n" +
    "/* Small devices (tablets, 768px and up) */\n" +
    "@media (min-width: @screen-sm-min) { ... }\n" +
    "\n" +
    "/* Medium devices (desktops, 992px and up) */\n" +
    "@media (min-width: @screen-md-min) { ... }\n" +
    "\n" +
    "/* Large devices (large desktops, 1200px and up) */\n" +
    "@media (min-width: @screen-lg-min) { ... }\n" +
    "{% endhighlight %}\n" +
    "    <p>We occasionally expand on these media queries to include a <code>max-width</code> to limit CSS to a narrower set of devices.</p>\n" +
    "{% highlight css %}\n" +
    "@media (max-width: @screen-xs-max) { ... }\n" +
    "@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }\n" +
    "@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }\n" +
    "@media (min-width: @screen-lg-min) { ... }\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"grid-options\">Grid options</h3>\n" +
    "    <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th></th>\n" +
    "            <th>\n" +
    "              Extra small devices\n" +
    "              <small>Phones (&lt;768px)</small>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              Small devices\n" +
    "              <small>Tablets (&ge;768px)</small>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              Medium devices\n" +
    "              <small>Desktops (&ge;992px)</small>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              Large devices\n" +
    "              <small>Desktops (&ge;1200px)</small>\n" +
    "            </th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <th>Grid behavior</th>\n" +
    "            <td>Horizontal at all times</td>\n" +
    "            <td colspan=\"3\">Collapsed to start, horizontal above breakpoints</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>Max container width</th>\n" +
    "            <td>None (auto)</td>\n" +
    "            <td>750px</td>\n" +
    "            <td>970px</td>\n" +
    "            <td>1170px</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>Class prefix</th>\n" +
    "            <td><code>.col-xs-</code></td>\n" +
    "            <td><code>.col-sm-</code></td>\n" +
    "            <td><code>.col-md-</code></td>\n" +
    "            <td><code>.col-lg-</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th># of columns</th>\n" +
    "            <td colspan=\"4\">12</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>Max column width</th>\n" +
    "            <td class=\"text-muted\">Auto</td>\n" +
    "            <td>60px</td>\n" +
    "            <td>78px</td>\n" +
    "            <td>95px</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>Gutter width</th>\n" +
    "            <td colspan=\"4\">30px (15px on each side of a column)</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>Nestable</th>\n" +
    "            <td colspan=\"4\">Yes</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>Offsets</th>\n" +
    "            <td colspan=\"1\" class=\"text-muted\">N/A</td>\n" +
    "            <td colspan=\"3\">Yes</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>Column ordering</th>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "            <td colspan=\"3\">Yes</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <p>Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any <code>.col-md-</code> class to an element will not only affect its styling on medium devices but also on large devices if a <code>.col-lg-</code> class is not present.</p>\n" +
    "\n" +
    "    <h3 id=\"grid-example-basic\">Example: Stacked-to-horizontal</h3>\n" +
    "    <p>Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any <code>.row</code>.</p>\n" +
    "    <div class=\"bs-docs-grid\">\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "        <div class=\"col-md-1\">.col-md-1</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-md-8\">.col-md-8</div>\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-md-6\">.col-md-6</div>\n" +
    "        <div class=\"col-md-6\">.col-md-6</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "  <div class=\"col-md-1\">.col-md-1</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-8\">.col-md-8</div>\n" +
    "  <div class=\"col-md-4\">.col-md-4</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-4\">.col-md-4</div>\n" +
    "  <div class=\"col-md-4\">.col-md-4</div>\n" +
    "  <div class=\"col-md-4\">.col-md-4</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-6\">.col-md-6</div>\n" +
    "  <div class=\"col-md-6\">.col-md-6</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"grid-example-mixed\">Example: Mobile and desktop</h3>\n" +
    "    <p>Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding <code>.col-xs-*</code> <code>.col-md-*</code> to your columns. See the example below for a better idea of how it all works.</p>\n" +
    "    <div class=\"bs-docs-grid\">\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-xs-12 col-md-8\">.col-xs-12 .col-md-8</div>\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-xs-6\">.col-xs-6</div>\n" +
    "        <div class=\"col-xs-6\">.col-xs-6</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<!-- Stack the columns on mobile by making one full-width and the other half-width -->\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12 col-md-8\">.col-xs-12 .col-md-8</div>\n" +
    "  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Columns are always 50% wide, on mobile and desktop -->\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-6\">.col-xs-6</div>\n" +
    "  <div class=\"col-xs-6\">.col-xs-6</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"grid-example-mixed-complete\">Example: Mobile, tablet, desktops</h3>\n" +
    "    <p>Build on the previous example by creating even more dynamic and powerful layouts with tablet <code>.col-sm-*</code> classes.</p>\n" +
    "    <div class=\"bs-docs-grid\">\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-8\">.col-xs-12 .col-sm-6 .col-md-8</div>\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "        <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "        <!-- Optional: clear the XS cols if their content doesn't match in height -->\n" +
    "        <div class=\"clearfix visible-xs\"></div>\n" +
    "        <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12 col-sm-6 col-md-8\">.col-xs-12 .col-sm-6 .col-md-8</div>\n" +
    "  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "  <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "  <!-- Optional: clear the XS cols if their content doesn't match in height -->\n" +
    "  <div class=\"clearfix visible-xs\"></div>\n" +
    "  <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"grid-responsive-resets\">Responsive column resets</h3>\n" +
    "    <p>With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a <code>.clearfix</code> and our <a href=\"#responsive-utilities\">responsive utility classes</a>.</p>\n" +
    "<div class=\"bs-docs-grid\">\n" +
    "  <div class=\"row show-grid\">\n" +
    "    <div class=\"col-xs-6 col-sm-3\">\n" +
    "      .col-xs-6 .col-sm-3\n" +
    "      <br>\n" +
    "      Resize your viewport or check it out on your phone for an example.\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "\n" +
    "    <!-- Add the extra clearfix for only the required viewport -->\n" +
    "    <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "    <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "    <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "\n" +
    "  <!-- Add the extra clearfix for only the required viewport -->\n" +
    "  <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "    <p>In addition to column clearing at responsive breakpoints, you may need to <strong>reset offsets, pushes, or pulls</strong>. Those resets are available for medium and large grid tiers only, since they start only at the (second) small grid tier. See this in action in <a href=\"../examples/grid/\">the grid example</a>.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-5 col-md-6\">.col-sm-5 .col-md-6</div>\n" +
    "  <div class=\"col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0\">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-6 col-md-5 col-lg-6\">.col-sm-6 .col-md-5 .col-lg-6</div>\n" +
    "  <div class=\"col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0\">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"grid-offsetting\">Offsetting columns</h3>\n" +
    "    <p>Move columns to the right using <code>.col-md-offset-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.col-md-offset-4</code> moves <code>.col-md-4</code> over four columns.</p>\n" +
    "    <div class=\"bs-docs-grid\">\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "        <div class=\"col-md-4 col-md-offset-4\">.col-md-4 .col-md-offset-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-md-3 col-md-offset-3\">.col-md-3 .col-md-offset-3</div>\n" +
    "        <div class=\"col-md-3 col-md-offset-3\">.col-md-3 .col-md-offset-3</div>\n" +
    "      </div>\n" +
    "      <div class=\"row show-grid\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3\">.col-md-6 .col-md-offset-3</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-4\">.col-md-4</div>\n" +
    "  <div class=\"col-md-4 col-md-offset-4\">.col-md-4 .col-md-offset-4</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-3 col-md-offset-3\">.col-md-3 .col-md-offset-3</div>\n" +
    "  <div class=\"col-md-3 col-md-offset-3\">.col-md-3 .col-md-offset-3</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-6 col-md-offset-3\">.col-md-6 .col-md-offset-3</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"grid-nesting\">Nesting columns</h3>\n" +
    "    <p>To nest your content with the default grid, add a new <code>.row</code> and set of <code>.col-md-*</code> columns within an existing <code>.col-md-*</code> column. Nested rows should include a set of columns that add up to 12.</p>\n" +
    "    <div class=\"row show-grid\">\n" +
    "      <div class=\"col-md-9\">\n" +
    "        Level 1: .col-md-9\n" +
    "        <div class=\"row show-grid\">\n" +
    "          <div class=\"col-md-6\">\n" +
    "            Level 2: .col-md-6\n" +
    "          </div>\n" +
    "          <div class=\"col-md-6\">\n" +
    "            Level 2: .col-md-6\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-9\">\n" +
    "    Level 1: .col-md-9\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        Level 2: .col-md-6\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        Level 2: .col-md-6\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"grid-column-ordering\">Column ordering</h3>\n" +
    "    <p>Easily change the order of our built-in grid columns with <code>.col-md-push-*</code> and <code>.col-md-pull-*</code> modifier classes.</p>\n" +
    "    <div class=\"row show-grid\">\n" +
    "      <div class=\"col-md-9 col-md-push-3\">.col-md-9 .col-md-push-3</div>\n" +
    "      <div class=\"col-md-3 col-md-pull-9\">.col-md-3 .col-md-pull-9</div>\n" +
    "    </div>\n" +
    "\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-md-9 col-md-push-3\">.col-md-9 .col-md-push-3</div>\n" +
    "  <div class=\"col-md-3 col-md-pull-9\">.col-md-3 .col-md-pull-9</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"grid-less\">LESS mixins and variables</h3>\n" +
    "    <p>In addition to <a href=\"#grid-example-basic\">prebuilt grid classes</a> for fast layouts, Bootstrap includes LESS variables and mixins for quickly generating your own simple, semantic layouts.</p>\n" +
    "\n" +
    "    <h4>Variables</h4>\n" +
    "    <p>Variables determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.</p>\n" +
    "{% highlight css %}\n" +
    "@grid-columns:              12;\n" +
    "@grid-gutter-width:         30px;\n" +
    "@grid-float-breakpoint:     768px;\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Mixins</h4>\n" +
    "    <p>Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.</p>\n" +
    "{% highlight css %}\n" +
    "// Creates a wrapper for a series of columns\n" +
    ".make-row(@gutter: @grid-gutter-width) {\n" +
    "  // Then clear the floated columns\n" +
    "  .clearfix();\n" +
    "\n" +
    "  @media (min-width: @screen-sm-min) {\n" +
    "    margin-left:  (@gutter / -2);\n" +
    "    margin-right: (@gutter / -2);\n" +
    "  }\n" +
    "\n" +
    "  // Negative margin nested rows out to align the content of columns\n" +
    "  .row {\n" +
    "    margin-left:  (@gutter / -2);\n" +
    "    margin-right: (@gutter / -2);\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Generate the extra small columns\n" +
    ".make-xs-column(@columns; @gutter: @grid-gutter-width) {\n" +
    "  position: relative;\n" +
    "  // Prevent columns from collapsing when empty\n" +
    "  min-height: 1px;\n" +
    "  // Inner gutter via padding\n" +
    "  padding-left:  (@gutter / 2);\n" +
    "  padding-right: (@gutter / 2);\n" +
    "\n" +
    "  // Calculate width based on number of columns available\n" +
    "  @media (min-width: @grid-float-breakpoint) {\n" +
    "    float: left;\n" +
    "    width: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Generate the small columns\n" +
    ".make-sm-column(@columns; @gutter: @grid-gutter-width) {\n" +
    "  position: relative;\n" +
    "  // Prevent columns from collapsing when empty\n" +
    "  min-height: 1px;\n" +
    "  // Inner gutter via padding\n" +
    "  padding-left:  (@gutter / 2);\n" +
    "  padding-right: (@gutter / 2);\n" +
    "\n" +
    "  // Calculate width based on number of columns available\n" +
    "  @media (min-width: @screen-sm-min) {\n" +
    "    float: left;\n" +
    "    width: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Generate the small column offsets\n" +
    ".make-sm-column-offset(@columns) {\n" +
    "  @media (min-width: @screen-sm-min) {\n" +
    "    margin-left: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    ".make-sm-column-push(@columns) {\n" +
    "  @media (min-width: @screen-sm-min) {\n" +
    "    left: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    ".make-sm-column-pull(@columns) {\n" +
    "  @media (min-width: @screen-sm-min) {\n" +
    "    right: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Generate the medium columns\n" +
    ".make-md-column(@columns; @gutter: @grid-gutter-width) {\n" +
    "  position: relative;\n" +
    "  // Prevent columns from collapsing when empty\n" +
    "  min-height: 1px;\n" +
    "  // Inner gutter via padding\n" +
    "  padding-left:  (@gutter / 2);\n" +
    "  padding-right: (@gutter / 2);\n" +
    "\n" +
    "  // Calculate width based on number of columns available\n" +
    "  @media (min-width: @screen-md-min) {\n" +
    "    float: left;\n" +
    "    width: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Generate the medium column offsets\n" +
    ".make-md-column-offset(@columns) {\n" +
    "  @media (min-width: @screen-md-min) {\n" +
    "    margin-left: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    ".make-md-column-push(@columns) {\n" +
    "  @media (min-width: @screen-md-min) {\n" +
    "    left: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    ".make-md-column-pull(@columns) {\n" +
    "  @media (min-width: @screen-md-min) {\n" +
    "    right: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Generate the large columns\n" +
    ".make-lg-column(@columns; @gutter: @grid-gutter-width) {\n" +
    "  position: relative;\n" +
    "  // Prevent columns from collapsing when empty\n" +
    "  min-height: 1px;\n" +
    "  // Inner gutter via padding\n" +
    "  padding-left:  (@gutter / 2);\n" +
    "  padding-right: (@gutter / 2);\n" +
    "\n" +
    "  // Calculate width based on number of columns available\n" +
    "  @media (min-width: @screen-lg-min) {\n" +
    "    float: left;\n" +
    "    width: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Generate the large column offsets\n" +
    ".make-lg-column-offset(@columns) {\n" +
    "  @media (min-width: @screen-lg-min) {\n" +
    "    margin-left: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    ".make-lg-column-push(@columns) {\n" +
    "  @media (min-width: @screen-lg-min) {\n" +
    "    left: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    ".make-lg-column-pull(@columns) {\n" +
    "  @media (min-width: @screen-lg-min) {\n" +
    "    right: percentage((@columns / @grid-columns));\n" +
    "  }\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Example usage</h4>\n" +
    "    <p>You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.</p>\n" +
    "{% highlight css %}\n" +
    ".wrapper {\n" +
    "  .make-row();\n" +
    "}\n" +
    ".content-main {\n" +
    "  .make-lg-column(8);\n" +
    "}\n" +
    ".content-secondary {\n" +
    "  .make-lg-column(3);\n" +
    "  .make-lg-column-offset(1);\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "{% highlight html %}\n" +
    "<div class=\"wrapper\">\n" +
    "  <div class=\"content-main\">...</div>\n" +
    "  <div class=\"content-secondary\">...</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Typography\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"type\">Typography</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Headings -->\n" +
    "    <h2 id=\"type-headings\">Headings</h2>\n" +
    "    <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.</p>\n" +
    "    <div class=\"bs-example bs-example-type\">\n" +
    "      <table class=\"table\">\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td><h1>h1. Bootstrap heading</h1></td>\n" +
    "            <td class=\"info\">Semibold 36px</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h2>h2. Bootstrap heading</h2></td>\n" +
    "            <td class=\"info\">Semibold 30px</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h3>h3. Bootstrap heading</h3></td>\n" +
    "            <td class=\"info\">Semibold 24px</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h4>h4. Bootstrap heading</h4></td>\n" +
    "            <td class=\"info\">Semibold 18px</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h5>h5. Bootstrap heading</h5></td>\n" +
    "            <td class=\"info\">Semibold 14px</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h6>h6. Bootstrap heading</h6></td>\n" +
    "            <td class=\"info\">Semibold 12px</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<h1>h1. Bootstrap heading</h1>\n" +
    "<h2>h2. Bootstrap heading</h2>\n" +
    "<h3>h3. Bootstrap heading</h3>\n" +
    "<h4>h4. Bootstrap heading</h4>\n" +
    "<h5>h5. Bootstrap heading</h5>\n" +
    "<h6>h6. Bootstrap heading</h6>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>Create lighter, secondary text in any heading with a generic <code>&lt;small&gt;</code> tag or the <code>.small</code> class.</p>\n" +
    "    <div class=\"bs-example bs-example-type\">\n" +
    "      <table class=\"table\">\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td><h1>h1. Bootstrap heading <small>Secondary text</small></h1></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h2>h2. Bootstrap heading <small>Secondary text</small></h2></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h3>h3. Bootstrap heading <small>Secondary text</small></h3></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h4>h4. Bootstrap heading <small>Secondary text</small></h4></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h5>h5. Bootstrap heading <small>Secondary text</small></h5></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><h6>h6. Bootstrap heading <small>Secondary text</small></h6></td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<h1>h1. Bootstrap heading <small>Secondary text</small></h1>\n" +
    "<h2>h2. Bootstrap heading <small>Secondary text</small></h2>\n" +
    "<h3>h3. Bootstrap heading <small>Secondary text</small></h3>\n" +
    "<h4>h4. Bootstrap heading <small>Secondary text</small></h4>\n" +
    "<h5>h5. Bootstrap heading <small>Secondary text</small></h5>\n" +
    "<h6>h6. Bootstrap heading <small>Secondary text</small></h6>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <!-- Body copy -->\n" +
    "    <h2 id=\"type-body-copy\">Body copy</h2>\n" +
    "    <p>Bootstrap's global default <code>font-size</code> is <strong>14px</strong>, with a <code>line-height</code> of <strong>1.428</strong>. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In addition, <code>&lt;p&gt;</code> (paragraphs) receive a bottom margin of half their computed line-height (10px by default).</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>\n" +
    "      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>\n" +
    "      <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<p>...</p>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <!-- Body copy .lead -->\n" +
    "    <h3>Lead body copy</h3>\n" +
    "    <p>Make a paragraph stand out by adding <code>.lead</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p class=\"lead\">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<p class=\"lead\">...</p>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <!-- Using LESS -->\n" +
    "    <h3>Built with Less</h3>\n" +
    "    <p>The typographic scale is based on two LESS variables in <strong>variables.less</strong>: <code>@font-size-base</code> and <code>@line-height-base</code>. The first is the base font-size used throughout and the second is the base line-height. We use those variables and some simple math to create the margins, paddings, and line-heights of all our type and more. Customize them and Bootstrap adapts.</p>\n" +
    "\n" +
    "\n" +
    "    <!-- Emphasis -->\n" +
    "    <h2 id=\"type-emphasis\">Emphasis</h2>\n" +
    "    <p>Make use of HTML's default emphasis tags with lightweight styles.</p>\n" +
    "\n" +
    "    <h3>Small text</h3>\n" +
    "    <p>For de-emphasizing inline or blocks of text, use the <code>&lt;small&gt;</code> tag to set text at 85% the size of the parent. Heading elements receive their own <code>font-size</code> for nested <code>&lt;small&gt;</code> elements.</p>\n" +
    "    <p>You may alternatively use an inline element with <code>.small</code> in place of any <code>&lt;small&gt;</code></p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p><small>This line of text is meant to be treated as fine print.</small></p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<small>This line of text is meant to be treated as fine print.</small>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3>Bold</h3>\n" +
    "    <p>For emphasizing a snippet of text with a heavier font-weight.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<strong>rendered as bold text</strong>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Italics</h3>\n" +
    "    <p>For emphasizing a snippet of text with italics.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p>The following snippet of text is <em>rendered as italicized text</em>.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<em>rendered as italicized text</em>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Alternate elements</h4>\n" +
    "      <p>Feel free to use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> in HTML5. <code>&lt;b&gt;</code> is meant to highlight words or phrases without conveying additional importance while <code>&lt;i&gt;</code> is mostly for voice, technical terms, etc.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Alignment classes</h3>\n" +
    "    <p>Easily realign text to components with text alignment classes.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p class=\"text-left\">Left aligned text.</p>\n" +
    "      <p class=\"text-center\">Center aligned text.</p>\n" +
    "      <p class=\"text-right\">Right aligned text.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<p class=\"text-left\">Left aligned text.</p>\n" +
    "<p class=\"text-center\">Center aligned text.</p>\n" +
    "<p class=\"text-right\">Right aligned text.</p>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Emphasis classes</h3>\n" +
    "    <p>Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n" +
    "      <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "      <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n" +
    "      <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n" +
    "      <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n" +
    "      <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<p class=\"text-muted\">...</p>\n" +
    "<p class=\"text-primary\">...</p>\n" +
    "<p class=\"text-success\">...</p>\n" +
    "<p class=\"text-info\">...</p>\n" +
    "<p class=\"text-warning\">...</p>\n" +
    "<p class=\"text-danger\">...</p>\n" +
    "{% endhighlight %}\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Dealing with specificity</h4>\n" +
    "      <p>Sometimes emphasis classes cannot be applied due to the specificity of another selector. In most cases, a sufficient workaround is to wrap your text in a <code>&lt;span&gt;</code> with the class.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- Abbreviations -->\n" +
    "    <h2 id=\"type-abbreviations\">Abbreviations</h2>\n" +
    "    <p>Stylized implementation of HTML's <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a <code>title</code> attribute have a light dotted bottom border and a help cursor on hover, providing additional context on hover.</p>\n" +
    "\n" +
    "    <h3>Basic abbreviation</h3>\n" +
    "    <p>For expanded text on long hover of an abbreviation, include the <code>title</code> attribute with the <code>&lt;abbr&gt;</code> element.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p>An abbreviation of the word attribute is <abbr title=\"attribute\">attr</abbr>.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<abbr title=\"attribute\">attr</abbr>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Initialism</h3>\n" +
    "    <p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p><abbr title=\"HyperText Markup Language\" class=\"initialism\">HTML</abbr> is the best thing since sliced bread.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<abbr title=\"HyperText Markup Language\" class=\"initialism\">HTML</abbr>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <!-- Addresses -->\n" +
    "    <h2 id=\"type-addresses\">Addresses</h2>\n" +
    "    <p>Present contact information for the nearest ancestor or the entire body of work. Preserve formatting by ending all lines with <code>&lt;br&gt;</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <address>\n" +
    "        <strong>Twitter, Inc.</strong><br>\n" +
    "        795 Folsom Ave, Suite 600<br>\n" +
    "        San Francisco, CA 94107<br>\n" +
    "        <abbr title=\"Phone\">P:</abbr> (123) 456-7890\n" +
    "      </address>\n" +
    "      <address>\n" +
    "        <strong>Full Name</strong><br>\n" +
    "        <a href=\"mailto:#\">first.last@example.com</a>\n" +
    "      </address>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<address>\n" +
    "  <strong>Twitter, Inc.</strong><br>\n" +
    "  795 Folsom Ave, Suite 600<br>\n" +
    "  San Francisco, CA 94107<br>\n" +
    "  <abbr title=\"Phone\">P:</abbr> (123) 456-7890\n" +
    "</address>\n" +
    "\n" +
    "<address>\n" +
    "  <strong>Full Name</strong><br>\n" +
    "  <a href=\"mailto:#\">first.last@example.com</a>\n" +
    "</address>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <!-- Blockquotes -->\n" +
    "    <h2 id=\"type-blockquotes\">Blockquotes</h2>\n" +
    "    <p>For quoting blocks of content from another source within your document.</p>\n" +
    "\n" +
    "    <h3>Default blockquote</h3>\n" +
    "    <p>Wrap <code>&lt;blockquote&gt;</code> around any <abbr title=\"HyperText Markup Language\">HTML</abbr> as the quote. For straight quotes, we recommend a <code>&lt;p&gt;</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <blockquote>\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
    "      </blockquote>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<blockquote>\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
    "</blockquote>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Blockquote options</h3>\n" +
    "    <p>Style and content changes for simple variations on a standard <code>&lt;blockquote&gt;</code>.</p>\n" +
    "\n" +
    "    <h4>Naming a source</h4>\n" +
    "    <p>Add <code>&lt;small&gt;</code> tag for identifying the source. Wrap the name of the source work in <code>&lt;cite&gt;</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <blockquote>\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
    "        <small>Someone famous in <cite title=\"Source Title\">Source Title</cite></small>\n" +
    "      </blockquote>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<blockquote>\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
    "  <small>Someone famous in <cite title=\"Source Title\">Source Title</cite></small>\n" +
    "</blockquote>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Alternate displays</h4>\n" +
    "    <p>Use <code>.pull-right</code> for a floated, right-aligned blockquote.</p>\n" +
    "    <div class=\"bs-example\" style=\"overflow: hidden;\">\n" +
    "      <blockquote class=\"pull-right\">\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n" +
    "        <small>Someone famous in <cite title=\"Source Title\">Source Title</cite></small>\n" +
    "      </blockquote>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<blockquote class=\"pull-right\">\n" +
    "  ...\n" +
    "</blockquote>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <!-- Lists -->\n" +
    "    <h2 id=\"type-lists\">Lists</h2>\n" +
    "\n" +
    "    <h3>Unordered</h3>\n" +
    "    <p>A list of items in which the order does <em>not</em> explicitly matter.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul>\n" +
    "        <li>Lorem ipsum dolor sit amet</li>\n" +
    "        <li>Consectetur adipiscing elit</li>\n" +
    "        <li>Integer molestie lorem at massa</li>\n" +
    "        <li>Facilisis in pretium nisl aliquet</li>\n" +
    "        <li>Nulla volutpat aliquam velit\n" +
    "          <ul>\n" +
    "            <li>Phasellus iaculis neque</li>\n" +
    "            <li>Purus sodales ultricies</li>\n" +
    "            <li>Vestibulum laoreet porttitor sem</li>\n" +
    "            <li>Ac tristique libero volutpat at</li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li>Faucibus porta lacus fringilla vel</li>\n" +
    "        <li>Aenean sit amet erat nunc</li>\n" +
    "        <li>Eget porttitor lorem</li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul>\n" +
    "  <li>...</li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Ordered</h3>\n" +
    "    <p>A list of items in which the order <em>does</em> explicitly matter.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ol>\n" +
    "        <li>Lorem ipsum dolor sit amet</li>\n" +
    "        <li>Consectetur adipiscing elit</li>\n" +
    "        <li>Integer molestie lorem at massa</li>\n" +
    "        <li>Facilisis in pretium nisl aliquet</li>\n" +
    "        <li>Nulla volutpat aliquam velit</li>\n" +
    "        <li>Faucibus porta lacus fringilla vel</li>\n" +
    "        <li>Aenean sit amet erat nunc</li>\n" +
    "        <li>Eget porttitor lorem</li>\n" +
    "      </ol>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ol>\n" +
    "  <li>...</li>\n" +
    "</ol>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Unstyled</h3>\n" +
    "    <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"list-unstyled\">\n" +
    "        <li>Lorem ipsum dolor sit amet</li>\n" +
    "        <li>Consectetur adipiscing elit</li>\n" +
    "        <li>Integer molestie lorem at massa</li>\n" +
    "        <li>Facilisis in pretium nisl aliquet</li>\n" +
    "        <li>Nulla volutpat aliquam velit\n" +
    "          <ul>\n" +
    "            <li>Phasellus iaculis neque</li>\n" +
    "            <li>Purus sodales ultricies</li>\n" +
    "            <li>Vestibulum laoreet porttitor sem</li>\n" +
    "            <li>Ac tristique libero volutpat at</li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li>Faucibus porta lacus fringilla vel</li>\n" +
    "        <li>Aenean sit amet erat nunc</li>\n" +
    "        <li>Eget porttitor lorem</li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"list-unstyled\">\n" +
    "  <li>...</li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Inline</h3>\n" +
    "    <p>Place all list items on a single line with <code>display: inline-block;</code> and some light padding.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"list-inline\">\n" +
    "        <li>Lorem ipsum</li>\n" +
    "        <li>Phasellus iaculis</li>\n" +
    "        <li>Nulla volutpat</li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"list-inline\">\n" +
    "  <li>...</li>\n" +
    "</ul>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Description</h3>\n" +
    "    <p>A list of terms with their associated descriptions.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <dl>\n" +
    "        <dt>Description lists</dt>\n" +
    "        <dd>A description list is perfect for defining terms.</dd>\n" +
    "        <dt>Euismod</dt>\n" +
    "        <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n" +
    "        <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n" +
    "        <dt>Malesuada porta</dt>\n" +
    "        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n" +
    "      </dl>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<dl>\n" +
    "  <dt>...</dt>\n" +
    "  <dd>...</dd>\n" +
    "</dl>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Horizontal description</h4>\n" +
    "    <p>Make terms and descriptions in <code>&lt;dl&gt;</code> line up side-by-side. Starts off stacked like default <code>&lt;dl&gt;</code>s, but when the navbar expands, so do these.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <dl class=\"dl-horizontal\">\n" +
    "        <dt>Description lists</dt>\n" +
    "        <dd>A description list is perfect for defining terms.</dd>\n" +
    "        <dt>Euismod</dt>\n" +
    "        <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n" +
    "        <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n" +
    "        <dt>Malesuada porta</dt>\n" +
    "        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n" +
    "        <dt>Felis euismod semper eget lacinia</dt>\n" +
    "        <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n" +
    "      </dl>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<dl class=\"dl-horizontal\">\n" +
    "  <dt>...</dt>\n" +
    "  <dd>...</dd>\n" +
    "</dl>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Auto-truncating</h4>\n" +
    "      <p>Horizontal description lists will truncate terms that are too long to fit in the left column with <code>text-overflow</code>. In narrower viewports, they will change to the default stacked layout.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Code\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"code\">Code</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2>Inline</h2>\n" +
    "    <p>Wrap inline snippets of code with <code>&lt;code&gt;</code>.</p>\n" +
    "<div class=\"bs-example\">\n" +
    "  For example, <code>&lt;section&gt;</code> should be wrapped as inline.\n" +
    "</div>\n" +
    "{% highlight html %}\n" +
    "For example, <code>&lt;section&gt;</code> should be wrapped as inline.\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h2>Basic block</h2>\n" +
    "    <p>Use <code>&lt;pre&gt;</code> for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering.</p>\n" +
    "<div class=\"bs-example\">\n" +
    "  <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>\n" +
    "</div>\n" +
    "{% highlight html %}\n" +
    "<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>You may optionally add the <code>.pre-scrollable</code> class, which will set a max-height of 350px and provide a y-axis scrollbar.</p>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Tables\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"tables\">Tables</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"tables-example\">Basic example</h2>\n" +
    "    <p>For basic styling&mdash;light padding and only horizontal dividers&mdash;add the base class <code>.table</code> to any <code>&lt;table&gt;</code>. It may seem super redundant, but given the widespread use of tables for other plugins like calendars and date pickers, we've opted to isolate our custom table styles.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <table class=\"table\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>First Name</th>\n" +
    "            <th>Last Name</th>\n" +
    "            <th>Username</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>Mark</td>\n" +
    "            <td>Otto</td>\n" +
    "            <td>@mdo</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>Jacob</td>\n" +
    "            <td>Thornton</td>\n" +
    "            <td>@fat</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td>Larry</td>\n" +
    "            <td>the Bird</td>\n" +
    "            <td>@twitter</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<table class=\"table\">\n" +
    "  ...\n" +
    "</table>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"tables-striped\">Striped rows</h2>\n" +
    "    <p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p>Striped tables are styled via the <code>:nth-child</code> CSS selector, which is not available in Internet Explorer 8.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <table class=\"table table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>First Name</th>\n" +
    "            <th>Last Name</th>\n" +
    "            <th>Username</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>Mark</td>\n" +
    "            <td>Otto</td>\n" +
    "            <td>@mdo</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>Jacob</td>\n" +
    "            <td>Thornton</td>\n" +
    "            <td>@fat</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td>Larry</td>\n" +
    "            <td>the Bird</td>\n" +
    "            <td>@twitter</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<table class=\"table table-striped\">\n" +
    "  ...\n" +
    "</table>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"tables-bordered\">Bordered table</h2>\n" +
    "    <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <table class=\"table table-bordered\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>First Name</th>\n" +
    "            <th>Last Name</th>\n" +
    "            <th>Username</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td rowspan=\"2\">1</td>\n" +
    "            <td>Mark</td>\n" +
    "            <td>Otto</td>\n" +
    "            <td>@mdo</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Mark</td>\n" +
    "            <td>Otto</td>\n" +
    "            <td>@TwBootstrap</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>Jacob</td>\n" +
    "            <td>Thornton</td>\n" +
    "            <td>@fat</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td colspan=\"2\">Larry the Bird</td>\n" +
    "            <td>@twitter</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<table class=\"table table-bordered\">\n" +
    "  ...\n" +
    "</table>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"tables-hover-rows\">Hover rows</h2>\n" +
    "    <p>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <table class=\"table table-hover\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>First Name</th>\n" +
    "            <th>Last Name</th>\n" +
    "            <th>Username</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>Mark</td>\n" +
    "            <td>Otto</td>\n" +
    "            <td>@mdo</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>Jacob</td>\n" +
    "            <td>Thornton</td>\n" +
    "            <td>@fat</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td colspan=\"2\">Larry the Bird</td>\n" +
    "            <td>@twitter</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<table class=\"table table-hover\">\n" +
    "  ...\n" +
    "</table>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"tables-condensed\">Condensed table</h2>\n" +
    "    <p>Add <code>.table-condensed</code> to make tables more compact by cutting cell padding in half.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <table class=\"table table-condensed\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>First Name</th>\n" +
    "            <th>Last Name</th>\n" +
    "            <th>Username</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>1</td>\n" +
    "            <td>Mark</td>\n" +
    "            <td>Otto</td>\n" +
    "            <td>@mdo</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>Jacob</td>\n" +
    "            <td>Thornton</td>\n" +
    "            <td>@fat</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>3</td>\n" +
    "            <td colspan=\"2\">Larry the Bird</td>\n" +
    "            <td>@twitter</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<table class=\"table table-condensed\">\n" +
    "  ...\n" +
    "</table>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"tables-contextual-classes\">Contextual classes</h2>\n" +
    "    <p>Use contextual classes to color table rows or individual cells.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <colgroup>\n" +
    "          <col class=\"col-xs-1\">\n" +
    "          <col class=\"col-xs-7\">\n" +
    "        </colgroup>\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Class</th>\n" +
    "            <th>Description</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>.active</code>\n" +
    "            </td>\n" +
    "            <td>Applies the hover color to a particular row or cell</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>.success</code>\n" +
    "            </td>\n" +
    "            <td>Indicates a successful or positive action</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>.warning</code>\n" +
    "            </td>\n" +
    "            <td>Indicates a warning that might need attention</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>.danger</code>\n" +
    "            </td>\n" +
    "            <td>Indicates a dangerous or potentially negative action</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <table class=\"table\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>#</th>\n" +
    "            <th>Column heading</th>\n" +
    "            <th>Column heading</th>\n" +
    "            <th>Column heading</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr class=\"active\">\n" +
    "            <td>1</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>2</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "          </tr>\n" +
    "          <tr class=\"success\">\n" +
    "            <td>3</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>4</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "          </tr>\n" +
    "          <tr class=\"warning\">\n" +
    "            <td>5</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>6</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "          </tr>\n" +
    "          <tr class=\"danger\">\n" +
    "            <td>7</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "            <td>Column content</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<!-- On rows -->\n" +
    "<tr class=\"active\">...</tr>\n" +
    "<tr class=\"success\">...</tr>\n" +
    "<tr class=\"warning\">...</tr>\n" +
    "<tr class=\"danger\">...</tr>\n" +
    "\n" +
    "<!-- On cells (`td` or `th`) -->\n" +
    "<tr>\n" +
    "  <td class=\"active\">...</td>\n" +
    "  <td class=\"success\">...</td>\n" +
    "  <td class=\"warning\">...</td>\n" +
    "  <td class=\"danger\">...</td>\n" +
    "</tr>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"tables-responsive\">Responsive tables</h2>\n" +
    "    <p>Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code> to make them scroll horizontally up to small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"table-responsive\">\n" +
    "        <table class=\"table\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th>#</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>1</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>2</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>3</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div><!-- /.table-responsive -->\n" +
    "\n" +
    "      <div class=\"table-responsive\">\n" +
    "        <table class=\"table table-bordered\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th>#</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "              <th>Table heading</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>1</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>2</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>3</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "              <td>Table cell</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div><!-- /.table-responsive -->\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"table-responsive\">\n" +
    "  <table class=\"table\">\n" +
    "    ...\n" +
    "  </table>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Forms\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"forms\">Forms</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"forms-example\">Basic example</h2>\n" +
    "    <p>Individual form controls automatically receive some global styling. All textual <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code> elements with <code>.form-control</code> are set to <code>width: 100%;</code> by default. Wrap labels and controls in <code>.form-group</code> for optimum spacing.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"exampleInputEmail1\">Email address</label>\n" +
    "          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"exampleInputPassword1\">Password</label>\n" +
    "          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"exampleInputFile\">File input</label>\n" +
    "          <input type=\"file\" id=\"exampleInputFile\">\n" +
    "          <p class=\"help-block\">Example block-level help text here.</p>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\"> Check me out\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "      </form>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<form role=\"form\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"exampleInputEmail1\">Email address</label>\n" +
    "    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"exampleInputPassword1\">Password</label>\n" +
    "    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"exampleInputFile\">File input</label>\n" +
    "    <input type=\"file\" id=\"exampleInputFile\">\n" +
    "    <p class=\"help-block\">Example block-level help text here.</p>\n" +
    "  </div>\n" +
    "  <div class=\"checkbox\">\n" +
    "    <label>\n" +
    "      <input type=\"checkbox\"> Check me out\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "</form>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"forms-inline\">Inline form</h2>\n" +
    "    <p>Add <code>.form-inline</code> for left-aligned and inline-block controls for a compact layout.</p>\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Requires custom widths</h4>\n" +
    "      <p>Inputs, selects, and textareas are 100% wide by default in Bootstrap. To use the inline form, you'll have to set a width on the form controls used within.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Always add labels</h4>\n" +
    "      <p>Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the <code>.sr-only</code> class.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form class=\"form-inline\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n" +
    "          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n" +
    "          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\"> Remember me\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "      </form>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<form class=\"form-inline\" role=\"form\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n" +
    "    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n" +
    "    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n" +
    "  </div>\n" +
    "  <div class=\"checkbox\">\n" +
    "    <label>\n" +
    "      <input type=\"checkbox\"> Remember me\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "</form>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"forms-horizontal\">Horizontal form</h2>\n" +
    "    <p>Use Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding <code>.form-horizontal</code> to the form. Doing so changes <code>.form-group</code>s to behave as grid rows, so no need for <code>.row</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\"> Remember me\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "            <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<form class=\"form-horizontal\" role=\"form\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "    <div class=\"col-sm-10\">\n" +
    "      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "    <div class=\"col-sm-10\">\n" +
    "      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "      <div class=\"checkbox\">\n" +
    "        <label>\n" +
    "          <input type=\"checkbox\"> Remember me\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "      <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"forms-controls\">Supported controls</h2>\n" +
    "    <p>Examples of standard form controls supported in an example form layout.</p>\n" +
    "\n" +
    "    <h3>Inputs</h3>\n" +
    "    <p>Most common form control, text-based input fields. Includes support for all HTML5 types: <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>, <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>, <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.</p>\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Type declaration required</h4>\n" +
    "      <p>Inputs will only be fully styled if their <code>type</code> is properly declared.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Text input\">\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<input type=\"text\" class=\"form-control\" placeholder=\"Text input\">\n" +
    "{% endhighlight %}\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Input groups</h4>\n" +
    "      <p>To add integrated text or buttons before and/or after any text-based <code>&lt;input&gt;</code>, <a href=\"../components/#input-groups\">check out the input group component</a>.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Textarea</h3>\n" +
    "    <p>Form control which supports multiple lines of text. Change <code>rows</code> attribute as necessary.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <textarea class=\"form-control\" rows=\"3\"></textarea>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<textarea class=\"form-control\" rows=\"3\"></textarea>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Checkboxes and radios</h3>\n" +
    "    <p>Checkboxes are for selecting one or several options in a list while radios are for selecting one option from many.</p>\n" +
    "    <h4>Default (stacked)</h4>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" value=\"\">\n" +
    "            Option one is this and that&mdash;be sure to include why it's great\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"radio\">\n" +
    "          <label>\n" +
    "            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked>\n" +
    "            Option one is this and that&mdash;be sure to include why it's great\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"radio\">\n" +
    "          <label>\n" +
    "            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n" +
    "            Option two can be something else and selecting it will deselect option one\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"checkbox\">\n" +
    "  <label>\n" +
    "    <input type=\"checkbox\" value=\"\">\n" +
    "    Option one is this and that&mdash;be sure to include why it's great\n" +
    "  </label>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"radio\">\n" +
    "  <label>\n" +
    "    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked>\n" +
    "    Option one is this and that&mdash;be sure to include why it's great\n" +
    "  </label>\n" +
    "</div>\n" +
    "<div class=\"radio\">\n" +
    "  <label>\n" +
    "    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n" +
    "    Option two can be something else and selecting it will deselect option one\n" +
    "  </label>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Inline checkboxes</h4>\n" +
    "    <p>Use <code>.checkbox-inline</code> or <code>.radio-inline</code> class to a series of checkboxes or radios for controls appear on the same line.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "          <input type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\"> 1\n" +
    "        </label>\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "          <input type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\"> 2\n" +
    "        </label>\n" +
    "        <label class=\"checkbox-inline\">\n" +
    "          <input type=\"checkbox\" id=\"inlineCheckbox3\" value=\"option3\"> 3\n" +
    "        </label>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<label class=\"checkbox-inline\">\n" +
    "  <input type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\"> 1\n" +
    "</label>\n" +
    "<label class=\"checkbox-inline\">\n" +
    "  <input type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\"> 2\n" +
    "</label>\n" +
    "<label class=\"checkbox-inline\">\n" +
    "  <input type=\"checkbox\" id=\"inlineCheckbox3\" value=\"option3\"> 3\n" +
    "</label>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Selects</h3>\n" +
    "    <p>Use the default option, or add <code>multiple</code> to show multiple options at once.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <select class=\"form-control\">\n" +
    "          <option>1</option>\n" +
    "          <option>2</option>\n" +
    "          <option>3</option>\n" +
    "          <option>4</option>\n" +
    "          <option>5</option>\n" +
    "        </select>\n" +
    "        <br>\n" +
    "        <select multiple class=\"form-control\">\n" +
    "          <option>1</option>\n" +
    "          <option>2</option>\n" +
    "          <option>3</option>\n" +
    "          <option>4</option>\n" +
    "          <option>5</option>\n" +
    "        </select>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<select class=\"form-control\">\n" +
    "  <option>1</option>\n" +
    "  <option>2</option>\n" +
    "  <option>3</option>\n" +
    "  <option>4</option>\n" +
    "  <option>5</option>\n" +
    "</select>\n" +
    "\n" +
    "<select multiple class=\"form-control\">\n" +
    "  <option>1</option>\n" +
    "  <option>2</option>\n" +
    "  <option>3</option>\n" +
    "  <option>4</option>\n" +
    "  <option>5</option>\n" +
    "</select>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"forms-controls-static\">Static control</h2>\n" +
    "    <p>When you need to place plain text next to a form label within a horizontal form, use the <code>.form-control-static</code> class on a <code>&lt;p&gt;</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\">Email</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <p class=\"form-control-static\">email@example.com</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "          <div class=\"col-sm-10\">\n" +
    "            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<form class=\"form-horizontal\" role=\"form\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label class=\"col-sm-2 control-label\">Email</label>\n" +
    "    <div class=\"col-sm-10\">\n" +
    "      <p class=\"form-control-static\">email@example.com</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "    <div class=\"col-sm-10\">\n" +
    "      <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"forms-control-states\">Form states</h2>\n" +
    "    <p>Provide feedback to users or visitors with basic feedback states on form controls and labels.</p>\n" +
    "\n" +
    "    <h3 id=\"forms-input-focus\">Input focus</h3>\n" +
    "    <p>We remove the default <code>outline</code> styles on some form controls and apply a <code>box-shadow</code> in its place for <code>:focus</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <input class=\"form-control\" id=\"focusedInput\" type=\"text\" value=\"This is focused...\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<input class=\"form-control\" id=\"focusedInput\" type=\"text\" value=\"This is focused...\">\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"forms-disabled-inputs\">Disabled inputs</h3>\n" +
    "    <p>Add the <code>disabled</code> attribute on an input to prevent user input and trigger a slightly different look.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input here…\" disabled>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input here...\" disabled>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"forms-disabled-fieldsets\">Disabled fieldsets</h3>\n" +
    "    <p>Add the <code>disabled</code> attribute to a <code>&lt;fieldset&gt;</code> to disable all the controls within the <code>&lt;fieldset&gt;</code> at once.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Link functionality of <code>&lt;a&gt;</code> not impacted</h4>\n" +
    "      <p>This class will only change the appearance of <code>&lt;a class=\"btn btn-default\"&gt;</code> buttons, not their functionality. Use custom JavaScript to disable links here.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p>While Bootstrap will apply these styles in all browsers, Internet Explorer 9 and below don't actually support the <code>disabled</code> attribute on a <code>&lt;fieldset&gt;</code>. Use custom JavaScript to disable the fieldset in these browsers.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <fieldset disabled>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"disabledTextInput\">Disabled input</label>\n" +
    "            <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"Disabled input\">\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"disabledSelect\">Disabled select menu</label>\n" +
    "            <select id=\"disabledSelect\" class=\"form-control\">\n" +
    "              <option>Disabled select</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "          <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"> Can't check this\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "        </fieldset>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<form role=\"form\">\n" +
    "  <fieldset disabled>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"disabledTextInput\">Disabled input</label>\n" +
    "      <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"Disabled input\">\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"disabledSelect\">Disabled select menu</label>\n" +
    "      <select id=\"disabledSelect\" class=\"form-control\">\n" +
    "        <option>Disabled select</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "    <div class=\"checkbox\">\n" +
    "      <label>\n" +
    "        <input type=\"checkbox\"> Can't check this\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "  </fieldset>\n" +
    "</form>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"forms-validation\">Validation states</h3>\n" +
    "    <p>Bootstrap includes validation styles for error, warning, and success states on form controls. To use, add <code>.has-warning</code>, <code>.has-error</code>, or <code>.has-success</code> to the parent element. Any <code>.control-label</code>, <code>.form-control</code>, and <code>.help-block</code> within that element will receive the validation styles.</p>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <div class=\"form-group has-success\">\n" +
    "          <label class=\"control-label\" for=\"inputSuccess\">Input with success</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"inputSuccess\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group has-warning\">\n" +
    "          <label class=\"control-label\" for=\"inputWarning\">Input with warning</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"inputWarning\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group has-error\">\n" +
    "          <label class=\"control-label\" for=\"inputError\">Input with error</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"inputError\">\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"form-group has-success\">\n" +
    "  <label class=\"control-label\" for=\"inputSuccess\">Input with success</label>\n" +
    "  <input type=\"text\" class=\"form-control\" id=\"inputSuccess\">\n" +
    "</div>\n" +
    "<div class=\"form-group has-warning\">\n" +
    "  <label class=\"control-label\" for=\"inputWarning\">Input with warning</label>\n" +
    "  <input type=\"text\" class=\"form-control\" id=\"inputWarning\">\n" +
    "</div>\n" +
    "<div class=\"form-group has-error\">\n" +
    "  <label class=\"control-label\" for=\"inputError\">Input with error</label>\n" +
    "  <input type=\"text\" class=\"form-control\" id=\"inputError\">\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"forms-control-sizes\">Control sizing</h2>\n" +
    "    <p>Set heights using classes like <code>.input-lg</code>, and set widths using grid column classes like <code>.col-lg-*</code>.</p>\n" +
    "\n" +
    "    <h3>Height sizing</h3>\n" +
    "    <p>Create larger or smaller form controls that match button sizes.</p>\n" +
    "    <div class=\"bs-example bs-example-control-sizing\">\n" +
    "      <form role=\"form\">\n" +
    "        <div class=\"controls\">\n" +
    "          <input class=\"form-control input-lg\" type=\"text\" placeholder=\".input-lg\">\n" +
    "          <input type=\"text\" class=\"form-control\" placeholder=\"Default input\">\n" +
    "          <input class=\"form-control input-sm\" type=\"text\" placeholder=\".input-sm\">\n" +
    "\n" +
    "          <select class=\"form-control input-lg\">\n" +
    "            <option value=\"\">.input-lg</option>\n" +
    "          </select>\n" +
    "          <select class=\"form-control\">\n" +
    "            <option value=\"\">Default select</option>\n" +
    "          </select>\n" +
    "          <select class=\"form-control input-sm\">\n" +
    "            <option value=\"\">.input-sm</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<input class=\"form-control input-lg\" type=\"text\" placeholder=\".input-lg\">\n" +
    "<input class=\"form-control\" type=\"text\" placeholder=\"Default input\">\n" +
    "<input class=\"form-control input-sm\" type=\"text\" placeholder=\".input-sm\">\n" +
    "\n" +
    "<select class=\"form-control input-lg\">...</select>\n" +
    "<select class=\"form-control\">...</select>\n" +
    "<select class=\"form-control input-sm\">...</select>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Column sizing</h3>\n" +
    "    <p>Wrap inputs in grid columns, or any custom parent element, to easily enforce desired widths.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-xs-2\">\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-2\">\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-3\">\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-3\">\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-4\">\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-4\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-2\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-2\">\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-3\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-3\">\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-4\">\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-4\">\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h2 id=\"forms-help-text\">Help text</h2>\n" +
    "    <p>Block level help text for form controls.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <form role=\"form\">\n" +
    "        <input type=\"text\" class=\"form-control\">\n" +
    "        <span class=\"help-block\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n" +
    "      </form>\n" +
    "    </div><!-- /.bs-example -->\n" +
    "{% highlight html %}\n" +
    "<span class=\"help-block\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Buttons\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"buttons\">Buttons</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"buttons-options\">Options</h2>\n" +
    "    <p>Use any of the available button classes to quickly create a styled button.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <button type=\"button\" class=\"btn btn-default\">Default</button>\n" +
    "      <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n" +
    "      <button type=\"button\" class=\"btn btn-success\">Success</button>\n" +
    "      <button type=\"button\" class=\"btn btn-info\">Info</button>\n" +
    "      <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n" +
    "      <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n" +
    "      <button type=\"button\" class=\"btn btn-link\">Link</button>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<!-- Standard button -->\n" +
    "<button type=\"button\" class=\"btn btn-default\">Default</button>\n" +
    "\n" +
    "<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n" +
    "<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n" +
    "\n" +
    "<!-- Indicates a successful or positive action -->\n" +
    "<button type=\"button\" class=\"btn btn-success\">Success</button>\n" +
    "\n" +
    "<!-- Contextual button for informational alert messages -->\n" +
    "<button type=\"button\" class=\"btn btn-info\">Info</button>\n" +
    "\n" +
    "<!-- Indicates caution should be taken with this action -->\n" +
    "<button type=\"button\" class=\"btn btn-warning\">Warning</button>\n" +
    "\n" +
    "<!-- Indicates a dangerous or potentially negative action -->\n" +
    "<button type=\"button\" class=\"btn btn-danger\">Danger</button>\n" +
    "\n" +
    "<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->\n" +
    "<button type=\"button\" class=\"btn btn-link\">Link</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h2 id=\"buttons-sizes\">Sizes</h2>\n" +
    "    <p>Fancy larger or smaller buttons? Add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> for additional sizes.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-lg\">Large button</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-lg\">Large button</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Default button</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Default button</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-sm\">Small button</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-sm\">Small button</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-xs\">Extra small button</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-xs\">Extra small button</button>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<p>\n" +
    "  <button type=\"button\" class=\"btn btn-primary btn-lg\">Large button</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default btn-lg\">Large button</button>\n" +
    "</p>\n" +
    "<p>\n" +
    "  <button type=\"button\" class=\"btn btn-primary\">Default button</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default\">Default button</button>\n" +
    "</p>\n" +
    "<p>\n" +
    "  <button type=\"button\" class=\"btn btn-primary btn-sm\">Small button</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default btn-sm\">Small button</button>\n" +
    "</p>\n" +
    "<p>\n" +
    "  <button type=\"button\" class=\"btn btn-primary btn-xs\">Extra small button</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default btn-xs\">Extra small button</button>\n" +
    "</p>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>Create block level buttons&mdash;those that span the full width of a parent&mdash; by adding <code>.btn-block</code>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"well\" style=\"max-width: 400px; margin: 0 auto 10px;\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default btn-lg btn-block\">Block level button</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button</button>\n" +
    "<button type=\"button\" class=\"btn btn-default btn-lg btn-block\">Block level button</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"buttons-active\">Active state</h2>\n" +
    "    <p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For <code>&lt;button&gt;</code> elements, this is done via <code>:active</code>. For <code>&lt;a&gt;</code> elements, it's done with <code>.active</code>. However, you may use <code>.active</code> <code>&lt;button&gt;</code>s should you need to replicate the active state progammatically.</p>\n" +
    "\n" +
    "    <h3>Button element</h3>\n" +
    "    <p>No need to add <code>:active</code> as it's a pseudo-class, but if you need to force the same appearance, go ahead and add <code>.active</code>.</p>\n" +
    "    <p class=\"bs-example\">\n" +
    "      <button type=\"button\" class=\"btn btn-primary btn-lg active\">Primary button</button>\n" +
    "      <button type=\"button\" class=\"btn btn-default btn-lg active\">Button</button>\n" +
    "    </p>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-primary btn-lg active\">Primary button</button>\n" +
    "<button type=\"button\" class=\"btn btn-default btn-lg active\">Button</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Anchor element</h3>\n" +
    "    <p>Add the <code>.active</code> class to <code>&lt;a&gt;</code> buttons.</p>\n" +
    "    <p class=\"bs-example\">\n" +
    "      <a href=\"#\" class=\"btn btn-primary btn-lg active\" role=\"button\">Primary link</a>\n" +
    "      <a href=\"#\" class=\"btn btn-default btn-lg active\" role=\"button\">Link</a>\n" +
    "    </p>\n" +
    "{% highlight html %}\n" +
    "<a href=\"#\" class=\"btn btn-primary btn-lg active\" role=\"button\">Primary link</a>\n" +
    "<a href=\"#\" class=\"btn btn-default btn-lg active\" role=\"button\">Link</a>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"buttons-disabled\">Disabled state</h2>\n" +
    "    <p>Make buttons look unclickable by fading them back 50%.</p>\n" +
    "\n" +
    "    <h3>Button element</h3>\n" +
    "    <p>Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.</p>\n" +
    "    <p class=\"bs-example\">\n" +
    "      <button type=\"button\" class=\"btn btn-primary btn-lg\" disabled=\"disabled\">Primary button</button>\n" +
    "      <button type=\"button\" class=\"btn btn-default btn-lg\" disabled=\"disabled\">Button</button>\n" +
    "    </p>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-lg btn-primary\" disabled=\"disabled\">Primary button</button>\n" +
    "<button type=\"button\" class=\"btn btn-default btn-lg\" disabled=\"disabled\">Button</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p>If you add the <code>disabled</code> attribute to a <code>&lt;button&gt;</code>, Internet Explorer 9 and below will render text gray with a nasty text-shadow that we cannot fix.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Anchor element</h3>\n" +
    "    <p>Add the <code>.disabled</code> class to <code>&lt;a&gt;</code> buttons.</p>\n" +
    "    <p class=\"bs-example\">\n" +
    "      <a href=\"#\" class=\"btn btn-primary btn-lg disabled\" role=\"button\">Primary link</a>\n" +
    "      <a href=\"#\" class=\"btn btn-default btn-lg disabled\" role=\"button\">Link</a>\n" +
    "    </p>\n" +
    "{% highlight html %}\n" +
    "<a href=\"#\" class=\"btn btn-primary btn-lg disabled\" role=\"button\">Primary link</a>\n" +
    "<a href=\"#\" class=\"btn btn-default btn-lg disabled\" role=\"button\">Link</a>\n" +
    "{% endhighlight %}\n" +
    "    <p>\n" +
    "      We use <code>.disabled</code> as a utility class here, similar to the common <code>.active</code> class, so no prefix is required.\n" +
    "    </p>\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Link functionality not impacted</h4>\n" +
    "      <p>This class will only change the <code>&lt;a&gt;</code>'s appearance, not its functionality. Use custom JavaScript to disable links here.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Context-specific usage</h4>\n" +
    "      <p>While button classes can be used on <code>&lt;a&gt;</code> and <code>&lt;button&gt;</code> elements, only <code>&lt;button&gt;</code> elements are supported within our nav and navbar components.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"buttons-tags\">Button tags</h2>\n" +
    "    <p>Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.</p>\n" +
    "    <form class=\"bs-example\">\n" +
    "      <a class=\"btn btn-default\" href=\"#\" role=\"button\">Link</a>\n" +
    "      <button class=\"btn btn-default\" type=\"submit\">Button</button>\n" +
    "      <input class=\"btn btn-default\" type=\"button\" value=\"Input\">\n" +
    "      <input class=\"btn btn-default\" type=\"submit\" value=\"Submit\">\n" +
    "    </form>\n" +
    "{% highlight html %}\n" +
    "<a class=\"btn btn-default\" href=\"#\" role=\"button\">Link</a>\n" +
    "<button class=\"btn btn-default\" type=\"submit\">Button</button>\n" +
    "<input class=\"btn btn-default\" type=\"button\" value=\"Input\">\n" +
    "<input class=\"btn btn-default\" type=\"submit\" value=\"Submit\">\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Cross-browser rendering</h4>\n" +
    "      <p>As a best practice, <strong>we highly recommend using the <code>&lt;button&gt;</code> element whenever possible</strong> to ensure matching cross-browser rendering.</p>\n" +
    "      <p>Among other things, there's <a href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=697451\">a Firefox bug</a> that prevents us from setting the <code>line-height</code> of <code>&lt;input&gt;</code>-based buttons, causing them to not exactly match the height of other buttons on Firefox.</p>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Images\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"images\">Images</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <p>Add classes to an <code>&lt;img&gt;</code> element to easily style images in any project.</p>\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p>Keep in mind that Internet Explorer 8 lacks support for rounded corners.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-example bs-example-images\">\n" +
    "      <img data-src=\"holder.js/140x140\" class=\"img-rounded\" alt=\"A generic square placeholder image with rounded corners\">\n" +
    "      <img data-src=\"holder.js/140x140\" class=\"img-circle\" alt=\"A generic square placeholder image where only the portion within the circle circumscribed about said square is visible\">\n" +
    "      <img data-src=\"holder.js/140x140\" class=\"img-thumbnail\" alt=\"A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera\">\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<img src=\"...\" alt=\"...\" class=\"img-rounded\">\n" +
    "<img src=\"...\" alt=\"...\" class=\"img-circle\">\n" +
    "<img src=\"...\" alt=\"...\" class=\"img-thumbnail\">\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Responsive images</h4>\n" +
    "      <p>Looking for how to make images more responsive? <a href=\"#overview-responsive-images\">Check out the responsive images section</a> up top.</p>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Helpers\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"helper-classes\">Helper classes</h1>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-close\">Close icon</h3>\n" +
    "    <p>Use the generic close icon for dismissing content like modals and alerts.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <p><button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button></p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-carets\">Carets</h3>\n" +
    "    <p>Use carets to indicate dropdown functionality and direction. Note that the default caret will reverse automatically in <a href=\"../components/#btn-dropdowns-dropup\">dropup menus</a>.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <span class=\"caret\"></span>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<span class=\"caret\"></span>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-floats\">Quick floats</h3>\n" +
    "    <p>Float an element to the left or right with a class. <code>!important</code> is included to avoid specificity issues. Classes can also be used as mixins.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"pull-left\">...</div>\n" +
    "<div class=\"pull-right\">...</div>\n" +
    "{% endhighlight %}\n" +
    "{% highlight css %}\n" +
    "// Classes\n" +
    ".pull-left {\n" +
    "  float: left !important;\n" +
    "}\n" +
    ".pull-right {\n" +
    "  float: right !important;\n" +
    "}\n" +
    "\n" +
    "// Usage as mixins\n" +
    ".element {\n" +
    "  .pull-left();\n" +
    "}\n" +
    ".another-element {\n" +
    "  .pull-right();\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Not for use in navbars</h4>\n" +
    "      <p>To align components in navbars with utility classes, use <code>.navbar-left</code> or <code>.navbar-right</code> instead. <a href=\"../components/#navbar-component-alignment\">See the navbar docs</a> for details.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-center\">Center content blocks</h3>\n" +
    "    <p>Set an element to <code>display: block</code> and center via <code>margin</code>. Available as a mixin and class.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"center-block\">...</div>\n" +
    "{% endhighlight %}\n" +
    "{% highlight css %}\n" +
    "// Classes\n" +
    ".center-block {\n" +
    "  display: block;\n" +
    "  margin-left: auto;\n" +
    "  margin-right: auto;\n" +
    "}\n" +
    "\n" +
    "// Usage as mixins\n" +
    ".element {\n" +
    "  .center-block();\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-clearfix\">Clearfix</h3>\n" +
    "    <p>Clear the <code>float</code> on any element with the <code>.clearfix</code> class. Utilizes <a href=\"http://nicolasgallagher.com/micro-clearfix-hack/\">the micro clearfix</a> as popularized by Nicolas Gallagher. Can also be used as a mixin.</p>\n" +
    "{% highlight html %}\n" +
    "<!-- Usage as a class -->\n" +
    "<div class=\"clearfix\">...</div>\n" +
    "{% endhighlight %}\n" +
    "{% highlight css %}\n" +
    "// Mixin itself\n" +
    ".clearfix() {\n" +
    "  &:before,\n" +
    "  &:after {\n" +
    "    content: \" \";\n" +
    "    display: table;\n" +
    "  }\n" +
    "  &:after {\n" +
    "    clear: both;\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Usage as a Mixin\n" +
    ".element {\n" +
    "  .clearfix();\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-show-hide\">Showing and hiding content</h3>\n" +
    "    <p>Force an element to be shown or hidden (<strong>including for screen readers</strong>) with the use of <code>.show</code> and <code>.hidden</code> classes. These classes use <code>!important</code> to avoid specificity conflicts, just like the <a href=\"#helper-classes-floats\">quick floats</a>. They are only available for block level toggling. They can also be used as mixins.</p>\n" +
    "    <p><code>.hide</code> is available, but it does not always affect screen readers and is <strong>deprecated</strong> as of v3.0.1. Use <code>.hidden</code> or <code>.sr-only</code> instead.</p>\n" +
    "    <p>Furthermore, <code>.invisible</code> can be used to toggle only the visibility of an element, meaning its <code>display</code> is not modified and the element can still affect the flow of the document.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"show\">...</div>\n" +
    "<div class=\"hidden\">...</div>\n" +
    "{% endhighlight %}\n" +
    "{% highlight css %}\n" +
    "// Classes\n" +
    ".show {\n" +
    "  display: block !important;\n" +
    "}\n" +
    ".hidden {\n" +
    "  display: none !important;\n" +
    "  visibility: hidden !important;\n" +
    "}\n" +
    ".invisible {\n" +
    "  visibility: hidden;\n" +
    "}\n" +
    "\n" +
    "// Usage as mixins\n" +
    ".element {\n" +
    "  .show();\n" +
    "}\n" +
    ".another-element {\n" +
    "  .hidden();\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-screen-readers\">Screen reader content</h3>\n" +
    "    <p>Hide an element to all devices <strong>except screen readers</strong> with <code>.sr-only</code>. Necessary for following <a href=\"{{ page.base_url }}getting-started#accessibility\">accessibility best practices</a>. Can also be used as a mixin.</p>\n" +
    "{% highlight html %}\n" +
    "<a class=\"sr-only\" href=\"#content\">Skip to main content</a>\n" +
    "{% endhighlight %}\n" +
    "{% highlight css %}\n" +
    "// Usage as a Mixin\n" +
    ".skip-navigation {\n" +
    "  .sr-only();\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3 id=\"helper-classes-image-replacement\">Image replacement</h3>\n" +
    "    <p>Utilize the <code>.text-hide</code> class or mixin to help replace an element's text content with a background image.</p>\n" +
    "{% highlight html %}\n" +
    "<h1 class=\"text-hide\">Custom heading</h1>\n" +
    "{% endhighlight %}\n" +
    "  {% highlight css %}\n" +
    "// Usage as a Mixin\n" +
    ".heading {\n" +
    "  .text-hide();\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Responsive utilities\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\" id=\"responsive-utilities\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1>Responsive utilities</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">For faster mobile-friendly development, use these utility classes for showing and hiding content by device via media query. Also included are utility classes for toggling content when printed.</p>\n" +
    "    <p>Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device's presentation. <strong>Responsive utilities are currently only available for block and table toggling.</strong> Use with inline and table elements is currently not supported.</p>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"responsive-utilities-classes\">Available classes</h2>\n" +
    "    <p>Use a single or combination of the available classes for toggling content across viewport breakpoints.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped responsive-utilities\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th></th>\n" +
    "            <th>\n" +
    "              Extra small devices\n" +
    "              <small>Phones (&lt;768px)</small>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              Small devices\n" +
    "              <small>Tablets (&ge;768px)</small>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              Medium devices\n" +
    "              <small>Desktops (&ge;992px)</small>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              Large devices\n" +
    "              <small>Desktops (&ge;1200px)</small>\n" +
    "            </th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <th><code>.visible-xs</code></th>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th><code>.visible-sm</code></th>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th><code>.visible-md</code></th>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th><code>.visible-lg</code></th>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <th><code>.hidden-xs</code></th>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th><code>.hidden-sm</code></th>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th><code>.hidden-md</code></th>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th><code>.hidden-lg</code></th>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"responsive-utilities-print\">Print classes</h2>\n" +
    "    <p>Similar to the regular responsive classes, use these for toggling content for print.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped responsive-utilities\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Class</th>\n" +
    "            <th>Browser</th>\n" +
    "            <th>Print</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <th><code>.visible-print</code></th>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th><code>.hidden-print</code></th>\n" +
    "            <td class=\"is-visible\">Visible</td>\n" +
    "            <td class=\"is-hidden\">Hidden</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"responsive-utilities-tests\">Test cases</h2>\n" +
    "    <p>Resize your browser or load on different devices to test the responsive utility classes.</p>\n" +
    "\n" +
    "    <h3>Visible on...</h3>\n" +
    "    <p>Green checkmarks indicate the element <strong>is visible</strong> in your current viewport.</p>\n" +
    "    <div class=\"row responsive-utilities-test visible-on\">\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-xs\">Extra small</span>\n" +
    "        <span class=\"visible-xs\">&#10004; Visible on x-small</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-sm\">Small</span>\n" +
    "        <span class=\"visible-sm\">&#10004; Visible on small</span>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-md\">Medium</span>\n" +
    "        <span class=\"visible-md\">&#10004; Visible on medium</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-lg\">Large</span>\n" +
    "        <span class=\"visible-lg\">&#10004; Visible on large</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row responsive-utilities-test visible-on\">\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-xs hidden-sm\">Extra small and small</span>\n" +
    "        <span class=\"visible-xs visible-sm\">&#10004; Visible on x-small and small</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-md hidden-lg\">Medium and large</span>\n" +
    "        <span class=\"visible-md visible-lg\">&#10004; Visible on medium and large</span>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-xs hidden-md\">Extra small and medium</span>\n" +
    "        <span class=\"visible-xs visible-md\">&#10004; Visible on x-small and medium</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-sm hidden-lg\">Small and large</span>\n" +
    "        <span class=\"visible-sm visible-lg\">&#10004; Visible on small and large</span>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-xs hidden-lg\">Extra small and large</span>\n" +
    "        <span class=\"visible-xs visible-lg\">&#10004; Visible on x-small and large</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-sm hidden-md\">Small and medium</span>\n" +
    "        <span class=\"visible-sm visible-md\">&#10004; Visible on small and medium</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Hidden on...</h3>\n" +
    "    <p>Here, green checkmarks also indicate the element <strong>is hidden</strong> in your current viewport.</p>\n" +
    "    <div class=\"row responsive-utilities-test hidden-on\">\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-xs\">Extra small</span>\n" +
    "        <span class=\"visible-xs\">&#10004; Hidden on x-small</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-sm\">Small</span>\n" +
    "        <span class=\"visible-sm\">&#10004; Hidden on small</span>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-md\">Medium</span>\n" +
    "        <span class=\"visible-md\">&#10004; Hidden on medium</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-3\">\n" +
    "        <span class=\"hidden-lg\">Large</span>\n" +
    "        <span class=\"visible-lg\">&#10004; Hidden on large</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row responsive-utilities-test hidden-on\">\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-xs hidden-sm\">Extra small and small</span>\n" +
    "        <span class=\"visible-xs visible-sm\">&#10004; Hidden on x-small and small</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-md hidden-lg\">Medium and large</span>\n" +
    "        <span class=\"visible-md visible-lg\">&#10004; Hidden on medium and large</span>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-xs hidden-md\">Extra small and medium</span>\n" +
    "        <span class=\"visible-xs visible-md\">&#10004; Hidden on x-small and medium</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-sm hidden-lg\">Small and large</span>\n" +
    "        <span class=\"visible-sm visible-lg\">&#10004; Hidden on small and large</span>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-xs hidden-lg\">Extra small and large</span>\n" +
    "        <span class=\"visible-xs visible-lg\">&#10004; Hidden on x-small and large</span>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-6\">\n" +
    "        <span class=\"hidden-sm hidden-md\">Small and medium</span>\n" +
    "        <span class=\"visible-sm visible-md\">&#10004; Hidden on small and medium</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/customize.html',
    "---\n" +
    "layout: default\n" +
    "title: Customize and download\n" +
    "slug: customize\n" +
    "lead: Customize Bootstrap's components, LESS variables, and jQuery plugins to get your very own version.\n" +
    "base_url: \"../\"\n" +
    "---\n" +
    "\n" +
    "<!-- Customizer form -->\n" +
    "<form class=\"bs-customizer\" role=\"form\">\n" +
    "  <div class=\"bs-docs-section\" id=\"less-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <button class=\"btn btn-default toggle\" type=\"button\">Toggle all</button>\n" +
    "      <h1 id=\"less\">LESS files</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Choose which LESS files to compile into your custom build of Bootstrap. Not sure which files to use? Read through the <a href=\"../css/\">CSS</a> and <a href=\"../components/\">Components</a> pages in the docs.</p>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <h3>Common CSS</h3>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"print.less\">\n" +
    "            Print media styles\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"type.less\">\n" +
    "            Typography\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"code.less\">\n" +
    "            Code\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"grid.less\">\n" +
    "            Grid system\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"tables.less\">\n" +
    "            Tables\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"forms.less\" data-dependents=\"navbar.less,input-groups.less\">\n" +
    "            Forms\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"buttons.less\">\n" +
    "            Buttons\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div><!-- .col-xs-6 .col-sm-4 -->\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <h3>Components</h3>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"glyphicons.less\">\n" +
    "            Glyphicons\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"button-groups.less\" data-dependency=\"buttons.less\">\n" +
    "            Button groups\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"input-groups.less\" data-dependency=\"forms.less\">\n" +
    "            Input groups\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"navs.less\" data-dependents=\"navbar.less\">\n" +
    "            Navs\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"navbar.less\" data-dependencies=\"forms.less,utilities.less,navs.less\">\n" +
    "            Navbar\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"breadcrumbs.less\">\n" +
    "            Breadcrumbs\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"pagination.less\">\n" +
    "            Pagination\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"pager.less\">\n" +
    "            Pager\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"labels.less\">\n" +
    "            Labels\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"badges.less\">\n" +
    "            Badges\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"jumbotron.less\">\n" +
    "            Jumbotron\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"thumbnails.less\">\n" +
    "            Thumbnails\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"alerts.less\">\n" +
    "            Alerts\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"progress-bars.less\">\n" +
    "            Progress bars\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"media.less\">\n" +
    "            Media items\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"list-group.less\">\n" +
    "            List groups\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"panels.less\">\n" +
    "            Panels\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"wells.less\">\n" +
    "            Wells\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"close.less\">\n" +
    "            Close icon\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div><!-- .col-xs-6 .col-sm-4 -->\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <h3>JavaScript components</h3>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"dropdowns.less\">\n" +
    "            Dropdowns\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"tooltip.less\">\n" +
    "            Tooltips\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"popovers.less\">\n" +
    "            Popovers\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"modals.less\">\n" +
    "            Modals\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"carousel.less\">\n" +
    "            Carousel\n" +
    "          </label>\n" +
    "        </div>\n" +
    "\n" +
    "        <h3>Utilities</h3>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"utilities.less\" data-dependents=\"navbar.less\">\n" +
    "            Basic utilities\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"responsive-utilities.less\">\n" +
    "            Responsive utilities\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"component-animations.less\">\n" +
    "            Component animations (for JS)\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div><!-- .col-xs-6 .col-sm-4 -->\n" +
    "    </div><!-- /.row -->\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <div class=\"bs-docs-section\" id=\"plugin-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <button class=\"btn btn-default toggle\" type=\"button\">Toggle all</button>\n" +
    "      <h1 id=\"plugins\">jQuery plugins</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Choose which jQuery plugins should be included in your custom JavaScript files. Unsure what to include? Read the <a href=\"../javascript/\">JavaScript</a> page in the docs.</p>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Linked to components</h4>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"alert.js\">\n" +
    "            Alert dismissal\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"button.js\">\n" +
    "            Advanced buttons\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"carousel.js\">\n" +
    "            Carousel functionality\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"dropdown.js\">\n" +
    "            Dropdowns\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"modal.js\">\n" +
    "            Modals\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"tooltip.js\">\n" +
    "            Tooltips\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"popover.js\" data-dependency=\"tooltip.js\">\n" +
    "            Popovers <small>(requires Tooltips)</small>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"tab.js\">\n" +
    "            Togglable tabs\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Magic</h4>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"affix.js\">\n" +
    "            Affix\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"collapse.js\">\n" +
    "            Collapse\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"scrollspy.js\">\n" +
    "            Scrollspy\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"checkbox\">\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\" checked value=\"transition.js\">\n" +
    "            Transitions <small>(required for any kind of animation)</small>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Produces two files</h4>\n" +
    "      <p>All checked plugins will be compiled into a readable <code>bootstrap.js</code> and a minified <code>bootstrap.min.js</code>. We recommend you use the minified version in production.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>jQuery required</h4>\n" +
    "      <p>All plugins require the latest version of <a href=\"http://jquery.com/\" target=\"_blank\">jQuery</a> to be included.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <div class=\"bs-docs-section\" id=\"less-variables-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <button class=\"btn btn-default toggle\" type=\"button\">Reset to defaults</button>\n" +
    "      <h1 id=\"less-variables\">LESS variables</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Customize LESS variables to define colors, sizes and more inside your custom CSS stylesheets.</p>\n" +
    "\n" +
    "    <h2 id=\"variables-basics\">Basics</h2>\n" +
    "\n" +
    "\n" +
    "    <h3>Color system</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@brand-primary</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#428bca\" data-var=\"@brand-primary\">\n" +
    "        <label>@brand-success</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#5cb85c\" data-var=\"@brand-success\">\n" +
    "        <label>@brand-warning</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f0ad4e\" data-var=\"@brand-warning\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@brand-danger</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#d9534f\" data-var=\"@brand-danger\">\n" +
    "        <label>@brand-info</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#5bc0de\" data-var=\"@brand-info\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3>Body scaffolding</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@body-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@body-bg\">\n" +
    "        <p class=\"help-block\">Background color for <code>&lt;body&gt;</code>.</p>\n" +
    "        <label>@text-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-dark\" data-var=\"@text-color\">\n" +
    "        <p class=\"help-block\">Global text color on <code>&lt;body&gt;</code>.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@link-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@link-color\">\n" +
    "        <p class=\"help-block\">Global textual link color</p>\n" +
    "        <label>@link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@link-color, 15%)\" data-var=\"@link-hover-color\">\n" +
    "        <p class=\"help-block\">Link hover color set via <code>darken()</code> function</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3>Typography</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Generic font variables</h4>\n" +
    "        <label>@font-family-sans-serif</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"'Helvetica Neue', Helvetica, Arial, sans-serif\" data-var=\"@font-family-sans-serif\">\n" +
    "        <p class=\"help-block\">Default sans-serif fonts.</p>\n" +
    "        <label>@font-family-serif</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Georgia, 'Times New Roman', Times, serif\" data-var=\"@font-family-serif\">\n" +
    "        <p class=\"help-block\">Default serif fonts.</p>\n" +
    "        <label>@font-family-monospace</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Monaco, Menlo, Consolas, 'Courier New', monospace\" data-var=\"@font-family-monospace\">\n" +
    "        <p class=\"help-block\">Default monospace fonts for <code>&lt;code&gt;</code> and <code>&lt;pre&gt;</code>.</p>\n" +
    "\n" +
    "        <h4>Base type styes</h4>\n" +
    "        <label>@font-family-base</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@font-family-sans-serif\" data-var=\"@font-family-base\">\n" +
    "        <label>@font-size-base</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"14px\" data-var=\"@font-size-base\">\n" +
    "        <label>@line-height-base</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"1.428571429\" data-var=\"@line-height-base\">\n" +
    "        <label>@line-height-large</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"1.33\" data-var=\"@line-height-large\">\n" +
    "        <label>@line-height-small</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"1.5\" data-var=\"@line-height-small\">\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Heading font sizes</h4>\n" +
    "        <label>@font-size-h1</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"floor(@font-size-base * 2.6)\" data-var=\"@font-size-h1\">\n" +
    "        <label>@font-size-h2</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"floor(@font-size-base * 2.15)\" data-var=\"@font-size-h2\">\n" +
    "        <label>@font-size-h3</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"ceil(@font-size-base * 1.7)\" data-var=\"@font-size-h3\">\n" +
    "        <label>@font-size-h4</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"ceil(@font-size-base * 1.25)\" data-var=\"@font-size-h4\">\n" +
    "        <label>@font-size-h5</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@font-size-base\" data-var=\"@font-size-h5\">\n" +
    "        <label>@font-size-h6</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"ceil(@font-size-base * 0.85)\" data-var=\"@font-size-h6\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3>Headings</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <label>@headings-font-family</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@font-family-base\" data-var=\"@headings-font-family\">\n" +
    "        <label>@headings-font-weight</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"500\" data-var=\"@headings-font-weight\">\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <label>@headings-line-height</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"1.1\" data-var=\"@headings-line-height\">\n" +
    "        <label>@headings-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"inherit\" data-var=\"@headings-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3>Code blocks</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <label>@code-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#c7254e\" data-var=\"@code-color\">\n" +
    "        <label>@code-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f9f2f4\" data-var=\"@code-bg\">\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <label>@pre-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-dark\" data-var=\"@pre-color\">\n" +
    "        <label>@pre-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@pre-bg\">\n" +
    "        <label>@pre-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@pre-border-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3>Media queries breakpoints</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-6 col-md-3\">\n" +
    "        <label>@screen-xs-min</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"480px\" data-var=\"@screen-xs-min\">\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-3\">\n" +
    "        <label>@screen-sm-min</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"768px\" data-var=\"@screen-sm-min\">\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-3\">\n" +
    "        <label>@screen-md-min</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"992px\" data-var=\"@screen-md-min\">\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-3\">\n" +
    "        <label>@screen-lg-min</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"1200px\" data-var=\"@screen-lg-min\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Layout and grid system</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <label>@container-sm</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"((720px + @grid-gutter-width))\" data-var=\"@container-sm\">\n" +
    "        <p class=\"help-block\">For <code>@screen-sm-min</code> and up.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <label>@container-md</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"((940px + @grid-gutter-width))\" data-var=\"@container-md\">\n" +
    "        <p class=\"help-block\">For <code>@screen-md-min</code> and up.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <label>@container-lg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"((1140px + @grid-gutter-width))\" data-var=\"@container-lg\">\n" +
    "        <p class=\"help-block\">For <code>@screen-lg-min</code> and up.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <label>@grid-columns</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"12\" data-var=\"@grid-columns\">\n" +
    "        <p class=\"help-block\">Number of columns in the grid.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <label>@grid-gutter-width</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"30px\" data-var=\"@grid-gutter-width\">\n" +
    "        <p class=\"help-block\">Padding between columns.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "      <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <label>@grid-float-breakpoint</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@screen-sm-min\" data-var=\"@grid-float-breakpoint\">\n" +
    "        <p class=\"help-block\">Point at which the navbar stops collapsing.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h3>Components</h3>\n" +
    "\n" +
    "    <h4>Padding</h4>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@padding-base-vertical</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"6px\" data-var=\"@padding-base-vertical\">\n" +
    "        <label>@padding-base-horizontal</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"12px\" data-var=\"@padding-base-horizontal\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@padding-large-vertical</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"10px\" data-var=\"@padding-large-vertical\">\n" +
    "        <label>@padding-large-horizontal</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"16px\" data-var=\"@padding-large-horizontal\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@padding-small-vertical</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"5px\" data-var=\"@padding-small-vertical\">\n" +
    "        <label>@padding-small-horizontal</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"10px\" data-var=\"@padding-small-horizontal\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>Rounded corners</h4>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@border-radius-base</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"4px\" data-var=\"@border-radius-base\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@border-radius-large</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"6px\" data-var=\"@border-radius-large\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@border-radius-small</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"3px\" data-var=\"@border-radius-small\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>Component active state</h4>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@component-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@component-active-color\">\n" +
    "        <p class=\"help-block\">Global color for active items (e.g., navs or dropdowns)</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@component-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@component-active-bg\">\n" +
    "        <p class=\"help-block\">Global background color for active items (e.g., navs or dropdowns)</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>Carets</h4>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@caret-width-base</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"4px\" data-var=\"@caret-width-base\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@caret-width-large</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"5px\" data-var=\"@caret-width-large\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-buttons\">Buttons</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@btn-font-weight</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"normal\" data-var=\"@btn-font-weight\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@btn-link-disabled-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@btn-link-disabled-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h4>Default</h4>\n" +
    "        <label>@btn-default-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#333\" data-var=\"@btn-default-color\">\n" +
    "        <label>@btn-default-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@btn-default-bg\">\n" +
    "        <label>@btn-default-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@btn-default-border\">\n" +
    "        <h4>Primary</h4>\n" +
    "        <label>@btn-primary-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@btn-default-color\" data-var=\"@btn-primary-color\">\n" +
    "        <label>@btn-primary-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@btn-primary-bg\">\n" +
    "        <label>@btn-primary-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@btn-primary-bg, 5%)\" data-var=\"@btn-primary-border\">\n" +
    "        <h4>Info</h4>\n" +
    "        <label>@btn-info-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@btn-default-color\" data-var=\"@btn-info-color\">\n" +
    "        <label>@btn-info-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-info\" data-var=\"@btn-info-bg\">\n" +
    "        <label>@btn-info-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@btn-info-bg, 5%)\" data-var=\"@btn-info-border\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h4>Success</h4>\n" +
    "        <label>@btn-success-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@btn-default-color\" data-var=\"@btn-success-color\">\n" +
    "        <label>@btn-success-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-success\" data-var=\"@btn-success-bg\">\n" +
    "        <label>@btn-success-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@btn-success-bg, 5%);\" data-var=\"@btn-success-border\">\n" +
    "        <h4>Warning</h4>\n" +
    "        <label>@btn-warning-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@btn-default-color\" data-var=\"@btn-warning-color\">\n" +
    "        <label>@btn-warning-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-warning\" data-var=\"@btn-warning-bg\">\n" +
    "        <label>@btn-warning-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\" darken(@btn-warning-bg, 5%)\" data-var=\"@btn-warning-border\">\n" +
    "        <h4>Danger</h4>\n" +
    "        <label>@btn-danger-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@btn-default-color\" data-var=\"@btn-danger-color\">\n" +
    "        <label>@btn-danger-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-danger\" data-var=\"@btn-danger-bg\">\n" +
    "        <label>@btn-danger-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@btn-danger-bg, 5%)\" data-var=\"@btn-danger-border\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-form-states\">Form states and alerts</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h4>Success</h4>\n" +
    "        <label>@state-success-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#468847\" data-var=\"@state-success-text\">\n" +
    "        <label>@state-success-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#dff0d8\" data-var=\"@state-success-bg\">\n" +
    "        <label>@state-success-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(spin(@state-success-bg, -10), 5%)\" data-var=\"@state-success-border\">\n" +
    "        <h4>Warning</h4>\n" +
    "        <label>@state-warning-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#c09853\" data-var=\"@state-warning-text\">\n" +
    "        <label>@state-warning-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fcf8e3\" data-var=\"@state-warning-bg\">\n" +
    "        <label>@state-warning-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(spin(@state-warning-bg, -10), 3%)\" data-var=\"@state-warning-border\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h4>Danger</h4>\n" +
    "        <label>@state-danger-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#b94a48\" data-var=\"@state-danger-text\">\n" +
    "        <label>@state-danger-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f2dede\" data-var=\"@state-danger-bg\">\n" +
    "        <label>@state-danger-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(spin(@state-danger-bg, -10), 3%)\" data-var=\"@state-danger-border\">\n" +
    "        <h4>Info</h4>\n" +
    "        <label>@state-info-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#3a87ad\" data-var=\"@state-info-text\">\n" +
    "        <label>@state-info-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#d9edf7\" data-var=\"@state-info-bg\">\n" +
    "        <label>@state-info-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(spin(@state-info-bg, -10), 7%)\" data-var=\"@state-info-border\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-alerts\">Alerts</h2>\n" +
    "\n" +
    "    <h4>Base styles</h4>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@alert-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"15px\" data-var=\"@alert-padding\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@alert-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@border-radius-base\" data-var=\"@alert-border-radius\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@alert-link-font-weight</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"bold\" data-var=\"@alert-link-font-weight\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Warning</h4>\n" +
    "        <label>@alert-warning-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-warning-text\" data-var=\"@alert-warning-text\">\n" +
    "        <label>@alert-warning-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-warning-bg\" data-var=\"@alert-warning-bg\">\n" +
    "        <label>@alert-warning-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-warning-border\" data-var=\"@alert-warning-border\">\n" +
    "\n" +
    "        <h4>Success</h4>\n" +
    "        <label>@alert-success-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-success-text\" data-var=\"@alert-success-text\">\n" +
    "        <label>@alert-success-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-success-bg\" data-var=\"@alert-success-bg\">\n" +
    "        <label>@alert-success-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-success-border\" data-var=\"@alert-success-border\">\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Danger</h4>\n" +
    "        <label>@alert-danger-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-danger-text\" data-var=\"@alert-danger-text\">\n" +
    "        <label>@alert-danger-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-danger-bg\" data-var=\"@alert-danger-bg\">\n" +
    "        <label>@alert-danger-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-danger-border\" data-var=\"@alert-danger-border\">\n" +
    "\n" +
    "        <h4>Info</h4>\n" +
    "        <label>@alert-info-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-info-text\" data-var=\"@alert-info-text\">\n" +
    "        <label>@alert-info-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-info-bg\" data-var=\"@alert-info-bg\">\n" +
    "        <label>@alert-info-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-info-border\" data-var=\"@alert-info-border\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-navbar\">Navbar</h2>\n" +
    "\n" +
    "    <h3>Base styles</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@navbar-height</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"50px\" data-var=\"@navbar-height\">\n" +
    "        <label>@navbar-margin-bottom</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@line-height-computed\" data-var=\"@navbar-margin-bottom\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@navbar-padding-horizontal</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"floor(@grid-gutter-width / 2)\" data-var=\"@navbar-padding-horizontal\">\n" +
    "        <label>@navbar-padding-vertical</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"((@navbar-height - @line-height-computed) / 2)\" data-var=\"@@navbar-padding-vertical\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@navbar-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@border-radius-base\" data-var=\"@navbar-border-radius\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h3>Default navbar</h3>\n" +
    "        <h4>Basics</h4>\n" +
    "        <label>@navbar-default-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#777\" data-var=\"@navbar-default-color\">\n" +
    "        <label>@navbar-default-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f8f8f8\" data-var=\"@navbar-default-bg\">\n" +
    "        <label>@navbar-default-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@navbar-default-bg, 6.5%)\" data-var=\"@navbar-default-border\">\n" +
    "\n" +
    "        <h4>Links</h4>\n" +
    "        <label>@navbar-default-link-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#777\" data-var=\"@navbar-default-link-color\">\n" +
    "        <label>@navbar-default-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#333\" data-var=\"@navbar-default-link-hover-color\">\n" +
    "        <label>@navbar-default-link-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"transparent\" data-var=\"@navbar-default-link-hover-bg\">\n" +
    "        <label>@navbar-default-link-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#555\" data-var=\"@navbar-default-link-active-color\">\n" +
    "        <label>@navbar-default-link-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@navbar-default-bg, 6.5%)\" data-var=\"@navbar-default-link-active-bg\">\n" +
    "        <label>@navbar-default-link-disabled-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@navbar-default-link-disabled-color\">\n" +
    "        <label>@navbar-default-link-disabled-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"transparent\" data-var=\"@navbar-default-link-disabled-bg\">\n" +
    "\n" +
    "        <h4>Brand</h4>\n" +
    "        <label>@navbar-default-brand-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@navbar-default-link-color\" data-var=\"@navbar-default-brand-color\">\n" +
    "        <label>@navbar-default-brand-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@navbar-default-brand-color, 10%)\" data-var=\"@navbar-default-brand-hover-color\">\n" +
    "        <label>@navbar-default-brand-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"transparent\" data-var=\"@navbar-default-brand-hover-bg\">\n" +
    "\n" +
    "        <h4>Toggle</h4>\n" +
    "        <label>@navbar-default-toggle-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@navbar-default-toggle-hover-bg\">\n" +
    "        <label>@navbar-default-toggle-icon-bar-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@navbar-default-toggle-icon-bar-bg\">\n" +
    "        <label>@navbar-default-toggle-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@navbar-default-toggle-border-color\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h3>Inverted navbar</h3>\n" +
    "\n" +
    "        <h4>Basics</h4>\n" +
    "        <label>@navbar-inverse-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@navbar-inverse-color\">\n" +
    "        <label>@navbar-inverse-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#222\" data-var=\"@navbar-inverse-bg\">\n" +
    "        <label>@navbar-inverse-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@navbar-inverse-bg, 10%)\" data-var=\"@navbar-inverse-border\">\n" +
    "\n" +
    "        <h4>Links</h4>\n" +
    "        <label>@navbar-inverse-link-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@navbar-inverse-link-color\">\n" +
    "        <label>@navbar-inverse-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@navbar-inverse-link-hover-color\">\n" +
    "        <label>@navbar-inverse-link-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"transparent\" data-var=\"@navbar-inverse-link-hover-bg\">\n" +
    "        <label>@navbar-inverse-link-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@navbar-inverse-link-hover-color\" data-var=\"@navbar-inverse-link-active-color\">\n" +
    "        <label>@navbar-inverse-link-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@navbar-inverse-bg, 10%)\" data-var=\"@navbar-inverse-link-active-bg\">\n" +
    "        <label>@navbar-inverse-link-disabled-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#444\" data-var=\"@navbar-inverse-link-disabled-color\">\n" +
    "        <label>@navbar-inverse-link-disabled-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"transparent\" data-var=\"@navbar-inverse-link-disabled-bg\">\n" +
    "\n" +
    "        <h4>Brand</h4>\n" +
    "        <label>@navbar-inverse-brand-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@navbar-inverse-link-color\" data-var=\"@navbar-inverse-brand-color\">\n" +
    "        <label>@navbar-inverse-brand-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@navbar-inverse-brand-hover-color\">\n" +
    "        <label>@navbar-inverse-brand-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"transparent\" data-var=\"@navbar-inverse-brand-hover-bg\">\n" +
    "\n" +
    "        <h4>Toggle</h4>\n" +
    "        <label>@navbar-inverse-toggle-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#333\" data-var=\"@navbar-inverse-toggle-hover-bg\">\n" +
    "        <label>@navbar-inverse-toggle-icon-bar-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@navbar-inverse-toggle-icon-bar-bg\">\n" +
    "        <label>@navbar-inverse-toggle-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#333\" data-var=\"@navbar-inverse-toggle-border-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-nav\">Nav</h2>\n" +
    "\n" +
    "    <h3>Default nav</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Common values</h4>\n" +
    "        <label>@nav-link-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"10px 15px\" data-var=\"@nav-link-padding\">\n" +
    "        <label>@nav-link-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@nav-link-hover-bg\">\n" +
    "        <label>@nav-disabled-link-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@nav-disabled-link-color\">\n" +
    "        <label>@nav-disabled-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@nav-disabled-link-hover-color\">\n" +
    "        <label>@nav-open-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@nav-open-link-hover-color\">\n" +
    "        <label>@nav-open-caret-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@nav-open-caret-border-color\">\n" +
    "\n" +
    "        <h4>Pills</h4>\n" +
    "        <label>@nav-pills-active-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@fff\" data-var=\"@nav-pills-active-link-hover-color\">\n" +
    "        <label>@nav-pills-active-link-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@component-active-bg\" data-var=\"@nav-pills-active-link-hover-bg\">\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-6\">\n" +
    "        <h4>Tabs</h4>\n" +
    "        <label>@nav-tabs-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@nav-tabs-border-color\">\n" +
    "        <label>@nav-tabs-link-hover-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@nav-tabs-link-hover-border-color\">\n" +
    "        <label>@nav-tabs-active-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray\" data-var=\"@nav-tabs-active-link-hover-color\">\n" +
    "        <label>@nav-tabs-active-link-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@body-bg\" data-var=\"@nav-tabs-active-link-hover-bg\">\n" +
    "        <label>@nav-tabs-active-link-hover-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@nav-tabs-active-link-hover-border-color\">\n" +
    "        <label>@nav-tabs-justified-link-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@nav-tabs-justified-link-border-color\">\n" +
    "        <label>@nav-tabs-justified-active-link-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@body-bg\" data-var=\"@nav-tabs-justified-active-link-border-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-tables\">Tables</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@table-cell-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"8px\" data-var=\"@table-cell-padding\">\n" +
    "        <p class=\"help-block\">Default padding for <code>&lt;th&gt;</code>s and <code>&lt;td&gt;</code>s</p>\n" +
    "        <label>@table-condensed-cell-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"5px\" data-var=\"@table-condensed-cell-padding\">\n" +
    "        <p class=\"help-block\">Default padding cells in <code>.table-condensed</code></p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@table-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"transparent\" data-var=\"@table-bg\">\n" +
    "        <p class=\"help-block\">Default background color used for all tables.</p>\n" +
    "        <label>@table-bg-accent</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f9f9f9\" data-var=\"@table-bg-accent\">\n" +
    "        <p class=\"help-block\">Background color used for <code>.table-striped</code>.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@table-bg-hover</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@table-bg-hover\">\n" +
    "        <p class=\"help-block\">Background color used for <code>.table-hover</code>.</p>\n" +
    "        <label>@table-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@table-border-color\">\n" +
    "        <p class=\"help-block\">Border color for table and cell borders.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-forms\">Forms</h2>\n" +
    "\n" +
    "    <h3>Inputs</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray\" data-var=\"@input-color\">\n" +
    "        <p class=\"help-block\">Text color for <code>&lt;input&gt;</code>s</p>\n" +
    "        <label>@input-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@input-bg\">\n" +
    "        <p class=\"help-block\"><code>&lt;input&gt;</code> background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@input-border\">\n" +
    "        <p class=\"help-block\"><code>&lt;input&gt;</code> border color</p>\n" +
    "        <label>@input-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@border-radius-base\" data-var=\"@input-border-radius\">\n" +
    "        <p class=\"help-block\"><code>&lt;input&gt;</code> border radius</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-color-placeholder</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@input-color-placeholder\">\n" +
    "        <p class=\"help-block\">Placeholder text color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Input states</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-border-focus</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#66afe9\" data-var=\"@input-border-focus\">\n" +
    "        <p class=\"help-block\">Border color for inputs on focus</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-bg-disabled</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@input-bg-disabled\">\n" +
    "        <p class=\"help-block\"><code>&lt;input disabled&gt;</code> background color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Input sizes</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-height-base</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"(@line-height-computed + (@padding-base-vertical * 2) + 2)\" data-var=\"@input-height-base\">\n" +
    "        <p class=\"help-block\">Default <code>.form-control</code> height</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-height-large</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"(floor(@font-size-large * @line-height-large) + (@padding-large-vertical * 2) + 2)\" data-var=\"@input-height-large\">\n" +
    "        <p class=\"help-block\">Large <code>.form-control</code> height</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-height-small</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"(floor(@font-size-small * @line-height-small) + (@padding-small-vertical * 2) + 2)\" data-var=\"@input-height-small\">\n" +
    "        <p class=\"help-block\">Small <code>.form-control</code> height</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Legend</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@legend-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-dark\" data-var=\"@legend-color\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@legend-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#e5e5e5\" data-var=\"@legend-border-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Input groups</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-group-addon-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@input-group-addon-bg\">\n" +
    "        <p class=\"help-block\">Background color for textual input addons</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@input-group-addon-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@input-border\" data-var=\"@input-group-addon-border-color\">\n" +
    "        <p class=\"help-block\">Border color for textual input addons</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-dropdowns\">Dropdowns</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h3>Dropdown menu</h3>\n" +
    "        <label>@dropdown-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@dropdown-bg\">\n" +
    "        <p class=\"help-block\">Dropdown menu background color</p>\n" +
    "        <label>@dropdown-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"rgba(0,0,0,.15)\" data-var=\"@dropdown-border\">\n" +
    "        <p class=\"help-block\">Dropdown menu border color</p>\n" +
    "        <label>@dropdown-fallback-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@dropdown-fallback-border\">\n" +
    "        <p class=\"help-block\">Dropdown menu border color <strong>for IE8</strong></p>\n" +
    "        <label>@dropdown-caret-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@dropdown-caret-color\" data-var=\"@dropdown-caret-color\">\n" +
    "        <p class=\"help-block\">Indicator arrow for showing an element has a dropdown</p>\n" +
    "        <label>@dropdown-divider-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#e5e5e5\" data-var=\"@dropdown-divider-bg\">\n" +
    "        <p class=\"help-block\">Dropdown divider top border color</p>\n" +
    "        <label>@dropdown-header-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@dropdown-header-color\">\n" +
    "        <p class=\"help-block\">Text color for headers within dropdown menus</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h3>Dropdown items</h3>\n" +
    "        <label>@dropdown-link-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-dark\" data-var=\"@dropdown-link-color\">\n" +
    "        <p class=\"help-block\">Dropdown text color</p>\n" +
    "\n" +
    "        <label>@dropdown-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@dropdown-link-color, 5%)\" data-var=\"@dropdown-link-hover-color\">\n" +
    "        <p class=\"help-block\">Hovered dropdown menu entry text color</p>\n" +
    "        <label>@dropdown-link-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@dropdown-link-hover-bg\">\n" +
    "        <p class=\"help-block\">Hovered dropdown menu entry text color</p>\n" +
    "\n" +
    "        <label>@dropdown-link-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@component-active-color\" data-var=\"@dropdown-link-active-color\">\n" +
    "        <p class=\"help-block\">Active dropdown menu entry text color</p>\n" +
    "        <label>@dropdown-link-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@component-active-bg\" data-var=\"@dropdown-link-active-bg\">\n" +
    "        <p class=\"help-block\">Active dropdown menu entry background color</p>\n" +
    "\n" +
    "        <label>@dropdown-link-disabled-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@dropdown-link-disabled-color\">\n" +
    "        <p class=\"help-block\">Disabled dropdown menu entry background color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-panels-wells\">Panels and wells</h2>\n" +
    "\n" +
    "    <h3>Common panel styles</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@panel-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@panel-bg\">\n" +
    "        <label>@panel-inner-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@panel-inner-border\">\n" +
    "        <p class=\"help-block\">Border color for elements within panels</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@panel-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@border-radius-base\" data-var=\"@panel-border-radius\">\n" +
    "        <label>@panel-footer-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@panel-footer-bg\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <h3>Contextual panel colors</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h4>Default</h4>\n" +
    "        <label>@panel-default-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-dark\" data-var=\"@panel-default-text\">\n" +
    "        <label>@panel-default-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@panel-default-border\">\n" +
    "        <label>@panel-default-heading-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@panel-default-heading-bg\">\n" +
    "\n" +
    "        <h4>Primary</h4>\n" +
    "        <label>@panel-primary-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@panel-primary-text\">\n" +
    "        <label>@panel-primary-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@panel-primary-border\">\n" +
    "        <label>@panel-primary-heading-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@panel-primary-heading-bg\">\n" +
    "\n" +
    "        <h4>Success</h4>\n" +
    "        <label>@panel-success-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-success-text\" data-var=\"@panel-success-text\">\n" +
    "        <label>@panel-success-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-success-border\" data-var=\"@panel-success-border\">\n" +
    "        <label>@panel-success-heading-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-success-bg\" data-var=\"@panel-success-heading-bg\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <h4>Info</h4>\n" +
    "        <label>@panel-info-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-info-text\" data-var=\"@panel-info-text\">\n" +
    "        <label>@panel-info-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-info-border\" data-var=\"@panel-info-border\">\n" +
    "        <label>@panel-info-heading-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-info-bg\" data-var=\"@panel-info-heading-bg\">\n" +
    "\n" +
    "        <h4>Warning</h4>\n" +
    "        <label>@panel-warning-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-warning-text\" data-var=\"@panel-warning-text\">\n" +
    "        <label>@panel-warning-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-warning-border\" data-var=\"@panel-warning-border\">\n" +
    "        <label>@panel-warning-heading-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-warning-bg\" data-var=\"@panel-warning-heading-bg\">\n" +
    "\n" +
    "        <h4>Danger</h4>\n" +
    "        <label>@panel-danger-text</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-danger-text\" data-var=\"@panel-danger-text\">\n" +
    "        <label>@panel-danger-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-danger-border\" data-var=\"@panel-danger-border\">\n" +
    "        <label>@panel-danger-heading-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@state-danger-bg\" data-var=\"@panel-danger-heading-bg\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Wells</h3>\n" +
    "    <label>@well-bg</label>\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@well-bg\">\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-accordion\">Accordion</h2>\n" +
    "    <label>@accordion-border-bg</label>\n" +
    "    <input type=\"text\" class=\"form-control\" placeholder=\"#e5e5e5\" data-var=\"@accordion-border-bg\">\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-badges\">Badges</h2>\n" +
    "\n" +
    "    <h3>Base styles</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@badge-font-weight</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"bold\" data-var=\"@badge-font-weight\">\n" +
    "        <label>@badge-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@badge-color\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@badge-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@badge-bg\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@badge-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"10px\" data-var=\"@badge-border-radius\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>States</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@badge-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@badge-link-hover-color\">\n" +
    "        <p class=\"help-block\">Linked badge text color on hover</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@badge-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@link-color\" data-var=\"@badge-active-color\">\n" +
    "        <p class=\"help-block\">Badge text color in active nav link</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@badge-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@badge-color\" data-var=\"@badge-active-bg\">\n" +
    "        <p class=\"help-block\">Badge background color in active nav link</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-breadcrumbs\">Breadcrumbs</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@breadcrumb-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@breadcrumb-color\">\n" +
    "        <p class=\"help-block\">Breadcrumb text color</p>\n" +
    "        <label>@breadcrumb-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@breadcrumb-bg\">\n" +
    "        <p class=\"help-block\">Breadcrumb background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@breadcrumb-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@breadcrumb-active-color\">\n" +
    "        <p class=\"help-block\">Text color of current page in the breadcrumb</p>\n" +
    "        <label>@breadcrumb-separator</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder='\"/\"' data-var=\"@breadcrumb-separator\">\n" +
    "        <p class=\"help-block\">Textual separator for between breadcrumb elements</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"variables-jumbotron\">Jumbotron</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@jumbotron-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"30px\" data-var=\"@jumbotron-padding\">\n" +
    "        <label>@jumbotron-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@jumbotron-bg\">\n" +
    "        <label>@jumbotron-font-size</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"ceil(@font-size-base * 1.5)\" data-var=\"@jumbotron-font-size\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@jumbotron-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"inherit\" data-var=\"@jumbotron-color\">\n" +
    "        <label>@jumbotron-heading-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"inherit\" data-var=\"@jumbotron-heading-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-modals\">Modals</h2>\n" +
    "\n" +
    "    <h3>Base modal</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-inner-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"20px\" data-var=\"@modal-inner-padding\">\n" +
    "        <p class=\"help-block\">Padding applied to the modal body</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-backdrop-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#000\" data-var=\"@modal-backdrop-bg\">\n" +
    "        <p class=\"help-block\">Modal backdrop background color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Modal header and footer</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-title-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"15px\" data-var=\"@modal-title-padding\">\n" +
    "        <p class=\"help-block\">Padding applied to the modal title</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-title-line-height</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@line-height-base\" data-var=\"@modal-title-line-height\">\n" +
    "        <p class=\"help-block\">Modal title line-height</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-header-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#e5e5e5\" data-var=\"@modal-header-border-color\">\n" +
    "        <p class=\"help-block\">Modal header border color</p>\n" +
    "        <label>@modal-footer-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@modal-header-border-color\" data-var=\"@modal-footer-border-color\">\n" +
    "        <p class=\"help-block\">Modal footer border color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Modal content</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-content-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@modal-content-bg\">\n" +
    "        <p class=\"help-block\">Background color of modal content area</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-content-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"rgba(0,0,0,.2)\" data-var=\"@modal-content-border-color\">\n" +
    "        <p class=\"help-block\">Modal content border color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@modal-content-fallback-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#999\" data-var=\"@modal-content-fallback-border-color\">\n" +
    "        <p class=\"help-block\">Modal content border color <strong>for IE8</strong></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-carousel\">Carousel</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@carousel-text-shadow</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"0 1px 2px rgba(0,0,0,.6)\" data-var=\"@carousel-text-shadow\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@carousel-control-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@carousel-control-color\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@carousel-caption-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@carousel-caption-color\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@carousel-indicator-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@carousel-indicator-border-color\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@carousel-indicator-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@carousel-indicator-active-bg\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-list-group\">List group</h2>\n" +
    "\n" +
    "    <h3>Base styles</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@list-group-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@list-group-bg\">\n" +
    "        <p class=\"help-block\">Background color on <code>.list-group-item</code></p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@list-group-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@list-group-border\">\n" +
    "        <p class=\"help-block\"><code>.list-group-item</code> border color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@list-group-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@border-radius-base\" data-var=\"@list-group-border-radius\">\n" +
    "        <p class=\"help-block\">List group border radius</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Hover and active states</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@list-group-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@list-group-hover-bg\">\n" +
    "        <p class=\"help-block\">Background color of single list elements on hover</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@list-group-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@list-group-active-color\">\n" +
    "        <p class=\"help-block\">Text color of active list elements</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@list-group-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@component-active-bg\" data-var=\"@list-group-active-bg\">\n" +
    "        <p class=\"help-block\">Background color of active list elements</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@list-group-active-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@list-group-active-bg\" data-var=\"@list-group-active-border\">\n" +
    "        <p class=\"help-block\">Border color of active list elements</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-thumbnails\">Thumbnails</h2>\n" +
    "\n" +
    "    <h3>Base thumbnail</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@thumbnail-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"4px\" data-var=\"@thumbnail-padding\">\n" +
    "        <p class=\"help-block\">Padding around the thumbnail image</p>\n" +
    "        <label>@thumbnail-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@body-bg\" data-var=\"@thumbnail-bg\">\n" +
    "        <p class=\"help-block\">Thumbnail background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@thumbnail-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@thumbnail-border\">\n" +
    "        <p class=\"help-block\">Thumbnail border color</p>\n" +
    "        <label>@thumbnail-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@border-radius-base\" data-var=\"@thumbnail-border-radius\">\n" +
    "        <p class=\"help-block\">Thumbnail border radius</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Thumbnail captions</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@thumbnail-caption-padding</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"9px\" data-var=\"@thumbnail-caption-padding\">\n" +
    "        <p class=\"help-block\">Padding around the thumbnail caption</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@thumbnail-caption-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@text-color\" data-var=\"@thumbnail-caption-color\">\n" +
    "        <p class=\"help-block\">Custom text color for thumbnail captions</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-progress\">Progress bars</h2>\n" +
    "\n" +
    "    <h3>Shared styles</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@progress-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#f5f5f5\" data-var=\"@progress-bg\">\n" +
    "        <p class=\"help-block\">Background color of the whole progress component</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@progress-bar-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@progress-bar-color\">\n" +
    "        <p class=\"help-block\">Info progress bar text color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@progress-bar-text-shadow</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"0 -1px 0 rgba(0,0,0,.25)\" data-var=\"@progress-bar-text-shadow\">\n" +
    "        <p class=\"help-block\">Info progress bar text shadow</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@progress-bar-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@progress-bar-bg\">\n" +
    "        <p class=\"help-block\">Default progress bar color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Contextual states</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@progress-bar-success-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-success\" data-var=\"@progress-bar-success-bg\">\n" +
    "        <p class=\"help-block\">Success progress bar color</p>\n" +
    "        <label>@progress-bar-info-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-info\" data-var=\"@progress-bar-info-bg\">\n" +
    "        <p class=\"help-block\">Info progress bar color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@progress-bar-warning-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-warning\" data-var=\"@progress-bar-warning-bg\">\n" +
    "        <p class=\"help-block\">Warning progress bar color</p>\n" +
    "        <label>@progress-bar-danger-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-danger\" data-var=\"@progress-bar-danger-bg\">\n" +
    "        <p class=\"help-block\">Danger progress bar color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-pagination\">Pagination</h2>\n" +
    "\n" +
    "    <h3>Default styles</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pagination-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@pagination-bg\">\n" +
    "        <p class=\"help-block\">Background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pagination-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ddd\" data-var=\"@pagination-border\">\n" +
    "        <p class=\"help-block\">Border color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pagination-hover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@pagination-hover-bg\">\n" +
    "        <p class=\"help-block\">Background hover color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Disabled and active states</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pagination-disabled-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@pagination-disabled-color\">\n" +
    "        <p class=\"help-block\">Disabled text color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pagination-active-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@pagination-active-bg\">\n" +
    "        <p class=\"help-block\">Active background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pagination-active-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@pagination-active-color\">\n" +
    "        <p class=\"help-block\">Active text color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-pager\">Pager</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pager-border-radius</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"15px\" data-var=\"@pager-border-radius\">\n" +
    "        <p class=\"help-block\">Pager border radius</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@pager-disabled-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@pager-disabled-color\">\n" +
    "        <p class=\"help-block\">Pager disabled state color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-labels\">Labels</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@label-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@label-color\">\n" +
    "        <p class=\"help-block\">Default label text color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@label-link-hover-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@label-link-hover-color\">\n" +
    "        <p class=\"help-block\">Default text color of a linked label</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@label-default-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@label-default-bg\">\n" +
    "        <p class=\"help-block\">Default label background color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@label-primary-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-primary\" data-var=\"@label-primary-bg\">\n" +
    "        <p class=\"help-block\">Primary label background color</p>\n" +
    "        <label>@label-success-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-success\" data-var=\"@label-success-bg\">\n" +
    "        <p class=\"help-block\">Success label background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@label-info-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-info\" data-var=\"@label-info-bg\">\n" +
    "        <p class=\"help-block\">Info label background color</p>\n" +
    "        <label>@label-warning-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-warning\" data-var=\"@label-warning-bg\">\n" +
    "        <p class=\"help-block\">Warning label background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@label-danger-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@brand-danger\" data-var=\"@label-danger-bg\">\n" +
    "        <p class=\"help-block\">Danger label background color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-tooltips-popovers\">Tooltips and popovers</h2>\n" +
    "\n" +
    "    <h3>Tooltip</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@tooltip-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@tooltip-color\">\n" +
    "        <p class=\"help-block\">Tooltip text color</p>\n" +
    "        <label>@tooltip-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#000\" data-var=\"@tooltip-bg\">\n" +
    "        <p class=\"help-block\">Tooltip background color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@tooltip-arrow-width</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"5px\" data-var=\"@tooltip-arrow-width\">\n" +
    "        <p class=\"help-block\">Tooltip arrow width</p>\n" +
    "        <label>@tooltip-arrow-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@tooltip-bg\" data-var=\"@tooltip-arrow-color\">\n" +
    "        <p class=\"help-block\">Tooltip arrow color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@tooltip-max-width</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"200px\" data-var=\"@tooltip-max-width\">\n" +
    "        <p class=\"help-block\">Tooltip max width</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Popovers</h3>\n" +
    "\n" +
    "    <h3>Base styles</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@popover-bg\">\n" +
    "        <p class=\"help-block\">Popover body background color</p>\n" +
    "        <label>@popover-max-width</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"276px\" data-var=\"@popover-max-width\">\n" +
    "        <p class=\"help-block\">Popover maximum width</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"rgba(0,0,0,.2)\" data-var=\"@popover-border-color\">\n" +
    "        <p class=\"help-block\">Popover border color</p>\n" +
    "        <label>@popover-fallback-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#ccc\" data-var=\"@popover-fallback-border-color\">\n" +
    "        <p class=\"help-block\">Popover fallback border color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-title-bg</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"darken(@popover-bg, 3%)\" data-var=\"@popover-title-bg\">\n" +
    "        <p class=\"help-block\">Popover title background color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Popover arrows</h3>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-arrow-width</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"10px\" data-var=\"@popover-arrow-width\">\n" +
    "        <p class=\"help-block\">Popover arrow width</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-arrow-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#fff\" data-var=\"@popover-arrow-color\">\n" +
    "        <p class=\"help-block\">Popover arrow color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-arrow-outer-width</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"(@popover-arrow-width + 1)\" data-var=\"@popover-arrow-outer-width\">\n" +
    "        <p class=\"help-block\">Popover outer arrow width</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-arrow-outer-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"rgba(0,0,0,.25)\" data-var=\"@popover-arrow-outer-color\">\n" +
    "        <p class=\"help-block\">Popover outer arrow color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@popover-arrow-outer-fallback-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#999\" data-var=\"@popover-arrow-outer-fallback-color\">\n" +
    "        <p class=\"help-block\">Popover outer arrow fallback color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-close\">Close button</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@close-font-weight</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"bold\" data-var=\"@close-font-weight\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@close-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"#000\" data-var=\"@close-color\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <label>@close-text-shadow</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"0 1px 0 #fff\" data-var=\"@close-text-shadow\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-type\">Type</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@text-muted</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@text-muted\">\n" +
    "        <p class=\"help-block\">Text muted color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@abbr-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@abbr-border-color\">\n" +
    "        <p class=\"help-block\">Abbreviations and acronyms border color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@headings-small-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@headings-small-color\">\n" +
    "        <p class=\"help-block\">Headings small color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@blockquote-small-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-light\" data-var=\"@blockquote-small-color\">\n" +
    "        <p class=\"help-block\">Blockquote small color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@blockquote-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@blockquote-border-color\">\n" +
    "        <p class=\"help-block\">Blockquote border color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@page-header-border-color</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@page-header-border-color\">\n" +
    "        <p class=\"help-block\">Page header border color</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"variables-other\">Other</h2>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@hr-border</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"@gray-lighter\" data-var=\"@hr-border\">\n" +
    "        <p class=\"help-block\">Horizontal line color</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <label>@component-offset-horizontal</label>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"180px\" data-var=\"@component-offset-horizontal\">\n" +
    "        <p class=\"help-block\">Horizontal offset for forms and lists</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"download\">Download</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Hooray! Your custom version of Bootstrap is now ready to be compiled. Just click the button below to finish the process.</p>\n" +
    "    <div class=\"bs-customize-download\">\n" +
    "      <button type=\"submit\" id=\"btn-compile\" class=\"btn btn-block btn-lg btn-outline\" onclick=\"_gaq.push(['_trackEvent', 'Customize', 'Download', 'Customize and Download']);\">Compile and Download</button>\n" +
    "    </div>\n" +
    "  </div><!-- /download -->\n" +
    "</form>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/carousel/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Carousel Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"carousel.css\" rel=\"stylesheet\">\n" +
    "  </head>\n" +
    "<!-- NAVBAR\n" +
    "================================================== -->\n" +
    "  <body>\n" +
    "    <div class=\"navbar-wrapper\">\n" +
    "      <div class=\"container\">\n" +
    "\n" +
    "        <div class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\">\n" +
    "          <div class=\"container\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "              </button>\n" +
    "              <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "            </div>\n" +
    "            <div class=\"navbar-collapse collapse\">\n" +
    "              <ul class=\"nav navbar-nav\">\n" +
    "                <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "                <li><a href=\"#about\">About</a></li>\n" +
    "                <li><a href=\"#contact\">Contact</a></li>\n" +
    "                <li class=\"dropdown\">\n" +
    "                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "                  <ul class=\"dropdown-menu\">\n" +
    "                    <li><a href=\"#\">Action</a></li>\n" +
    "                    <li><a href=\"#\">Another action</a></li>\n" +
    "                    <li><a href=\"#\">Something else here</a></li>\n" +
    "                    <li class=\"divider\"></li>\n" +
    "                    <li class=\"dropdown-header\">Nav header</li>\n" +
    "                    <li><a href=\"#\">Separated link</a></li>\n" +
    "                    <li><a href=\"#\">One more separated link</a></li>\n" +
    "                  </ul>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- Carousel\n" +
    "    ================================================== -->\n" +
    "    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "      <!-- Indicators -->\n" +
    "      <ol class=\"carousel-indicators\">\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
    "      </ol>\n" +
    "      <div class=\"carousel-inner\">\n" +
    "        <div class=\"item active\">\n" +
    "          <img data-src=\"holder.js/900x500/auto/#777:#7a7a7a/text:First slide\" alt=\"First slide\">\n" +
    "          <div class=\"container\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "              <h1>Example headline.</h1>\n" +
    "              <p>Note: If you're viewing this page via a <code>file://</code> URL, the \"next\" and \"previous\" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>\n" +
    "              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "          <img data-src=\"holder.js/900x500/auto/#666:#6a6a6a/text:Second slide\" alt=\"Second slide\">\n" +
    "          <div class=\"container\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "              <h1>Another example headline.</h1>\n" +
    "              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "          <img data-src=\"holder.js/900x500/auto/#555:#5a5a5a/text:Third slide\" alt=\"Third slide\">\n" +
    "          <div class=\"container\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "              <h1>One more for good measure.</h1>\n" +
    "              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
    "      <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "    </div><!-- /.carousel -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!-- Marketing messaging and featurettes\n" +
    "    ================================================== -->\n" +
    "    <!-- Wrap the rest of the page in another container to center all the content. -->\n" +
    "\n" +
    "    <div class=\"container marketing\">\n" +
    "\n" +
    "      <!-- Three columns of text below the carousel -->\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-4\">\n" +
    "          <img class=\"img-circle\" data-src=\"holder.js/140x140\" alt=\"Generic placeholder image\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n" +
    "          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "        </div><!-- /.col-lg-4 -->\n" +
    "        <div class=\"col-lg-4\">\n" +
    "          <img class=\"img-circle\" data-src=\"holder.js/140x140\" alt=\"Generic placeholder image\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n" +
    "          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "        </div><!-- /.col-lg-4 -->\n" +
    "        <div class=\"col-lg-4\">\n" +
    "          <img class=\"img-circle\" data-src=\"holder.js/140x140\" alt=\"Generic placeholder image\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n" +
    "          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "        </div><!-- /.col-lg-4 -->\n" +
    "      </div><!-- /.row -->\n" +
    "\n" +
    "\n" +
    "      <!-- START THE FEATURETTES -->\n" +
    "\n" +
    "      <hr class=\"featurette-divider\">\n" +
    "\n" +
    "      <div class=\"row featurette\">\n" +
    "        <div class=\"col-md-7\">\n" +
    "          <h2 class=\"featurette-heading\">First featurette heading. <span class=\"text-muted\">It'll blow your mind.</span></h2>\n" +
    "          <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-5\">\n" +
    "          <img class=\"featurette-image img-responsive\" data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr class=\"featurette-divider\">\n" +
    "\n" +
    "      <div class=\"row featurette\">\n" +
    "        <div class=\"col-md-5\">\n" +
    "          <img class=\"featurette-image img-responsive\" data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\">\n" +
    "        </div>\n" +
    "        <div class=\"col-md-7\">\n" +
    "          <h2 class=\"featurette-heading\">Oh yeah, it's that good. <span class=\"text-muted\">See for yourself.</span></h2>\n" +
    "          <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr class=\"featurette-divider\">\n" +
    "\n" +
    "      <div class=\"row featurette\">\n" +
    "        <div class=\"col-md-7\">\n" +
    "          <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\n" +
    "          <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-5\">\n" +
    "          <img class=\"featurette-image img-responsive\" data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr class=\"featurette-divider\">\n" +
    "\n" +
    "      <!-- /END THE FEATURETTES -->\n" +
    "\n" +
    "\n" +
    "      <!-- FOOTER -->\n" +
    "      <footer>\n" +
    "        <p class=\"pull-right\"><a href=\"#\">Back to top</a></p>\n" +
    "        <p>&copy; 2013 Company, Inc. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n" +
    "      </footer>\n" +
    "\n" +
    "    </div><!-- /.container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "    <script src=\"../../docs-assets/js/holder.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/grid/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Grid Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"grid.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Bootstrap grid examples</h1>\n" +
    "        <p class=\"lead\">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>\n" +
    "      </div>\n" +
    "\n" +
    "      <h3>Three equal columns</h3>\n" +
    "      <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <h3>Three unequal columns</h3>\n" +
    "      <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-3\">.col-md-3</div>\n" +
    "        <div class=\"col-md-6\">.col-md-6</div>\n" +
    "        <div class=\"col-md-3\">.col-md-3</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <h3>Two columns</h3>\n" +
    "      <p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-8\">.col-md-8</div>\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <h3>Full width, single column</h3>\n" +
    "      <p class=\"text-warning\">No grid classes are necessary for full-width elements.</p>\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <h3>Two columns with two nested columns</h3>\n" +
    "      <p>Per the documentation, nesting is easy—just put a row of columns within an existing row. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>\n" +
    "      <p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-8\">\n" +
    "          .col-md-8\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">.col-md-6</div>\n" +
    "            <div class=\"col-md-6\">.col-md-6</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">.col-md-4</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <h3>Mixed: mobile and desktop</h3>\n" +
    "      <p>The Bootstrap 3 grid system has four tiers of classes: xs (phones), sm (tablets), md (desktops), and lg (larger desktops). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</p>\n" +
    "      <p>Each tier of classes scales up, meaning if you plan on setting the same widths for xs and sm, you only need to specify xs.</p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 col-md-8\">.col-xs-12 .col-md-8</div>\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "        <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\">.col-xs-6</div>\n" +
    "        <div class=\"col-xs-6\">.col-xs-6</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <h3>Mixed: mobile, tablet, and desktop</h3>\n" +
    "      <p></p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-lg-8\">.col-xs-12 .col-sm-6 .col-lg-8</div>\n" +
    "        <div class=\"col-xs-6 col-lg-4\">.col-xs-6 .col-lg-4</div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "        <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "        <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <h3>Column clearing</h3>\n" +
    "      <p>Clear floats at specific breakpoints to prevent awkward wrapping with uneven content.</p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "        <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "\n" +
    "        <!-- Add the extra clearfix for only the required viewport -->\n" +
    "        <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "        <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "        <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <h3>Offset, push, and pull resets</h3>\n" +
    "      <p>Reset offsets, pushes, and pulls at specific breakpoints.</p>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-5 col-md-6\">.col-sm-5 .col-md-6</div>\n" +
    "        <div class=\"col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0\">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-6 col-md-5 col-lg-6\">.col-sm-6 .col-md-5 .col-lg-6</div>\n" +
    "        <div class=\"col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0\">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/jumbotron-narrow/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Narrow Jumbotron Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"jumbotron-narrow.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"header\">\n" +
    "        <ul class=\"nav nav-pills pull-right\">\n" +
    "          <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "          <li><a href=\"#\">About</a></li>\n" +
    "          <li><a href=\"#\">Contact</a></li>\n" +
    "        </ul>\n" +
    "        <h3 class=\"text-muted\">Project name</h3>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Jumbotron heading</h1>\n" +
    "        <p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n" +
    "        <p><a class=\"btn btn-lg btn-success\" href=\"#\" role=\"button\">Sign up today</a></p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row marketing\">\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <h4>Subheading</h4>\n" +
    "          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n" +
    "\n" +
    "          <h4>Subheading</h4>\n" +
    "          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>\n" +
    "\n" +
    "          <h4>Subheading</h4>\n" +
    "          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-lg-6\">\n" +
    "          <h4>Subheading</h4>\n" +
    "          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>\n" +
    "\n" +
    "          <h4>Subheading</h4>\n" +
    "          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>\n" +
    "\n" +
    "          <h4>Subheading</h4>\n" +
    "          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"footer\">\n" +
    "        <p>&copy; Company 2013</p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/jumbotron/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Jumbotron Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"jumbotron.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\">\n" +
    "          <form class=\"navbar-form navbar-right\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"text\" placeholder=\"Email\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n" +
    "          </form>\n" +
    "        </div><!--/.navbar-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Main jumbotron for a primary marketing message or call to action -->\n" +
    "    <div class=\"jumbotron\">\n" +
    "      <div class=\"container\">\n" +
    "        <h1>Hello, world!</h1>\n" +
    "        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n" +
    "        <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "      <!-- Example row of columns -->\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "       </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n" +
    "          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <footer>\n" +
    "        <p>&copy; Company 2013</p>\n" +
    "      </footer>\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/justified-nav/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Justified Nav Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"justified-nav.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <div class=\"masthead\">\n" +
    "        <h3 class=\"text-muted\">Project name</h3>\n" +
    "        <ul class=\"nav nav-justified\">\n" +
    "          <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "          <li><a href=\"#\">Projects</a></li>\n" +
    "          <li><a href=\"#\">Services</a></li>\n" +
    "          <li><a href=\"#\">Downloads</a></li>\n" +
    "          <li><a href=\"#\">About</a></li>\n" +
    "          <li><a href=\"#\">Contact</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Jumbotron -->\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Marketing stuff!</h1>\n" +
    "        <p class=\"lead\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>\n" +
    "        <p><a class=\"btn btn-lg btn-success\" href=\"#\" role=\"button\">Get started today</a></p>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Example row of columns -->\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-4\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "          <p><a class=\"btn btn-primary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-4\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "          <p><a class=\"btn btn-primary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "       </div>\n" +
    "        <div class=\"col-lg-4\">\n" +
    "          <h2>Heading</h2>\n" +
    "          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\n" +
    "          <p><a class=\"btn btn-primary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Site footer -->\n" +
    "      <div class=\"footer\">\n" +
    "        <p>&copy; Company 2013</p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/navbar-fixed-top/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Fixed Top Navbar Example for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"navbar-fixed-top.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Fixed navbar -->\n" +
    "    <div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#about\">About</a></li>\n" +
    "            <li><a href=\"#contact\">Contact</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li class=\"dropdown-header\">Nav header</li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "                <li><a href=\"#\">One more separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li><a href=\"../navbar/\">Default</a></li>\n" +
    "            <li><a href=\"../navbar-static-top/\">Static top</a></li>\n" +
    "            <li class=\"active\"><a href=\"./\">Fixed top</a></li>\n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <!-- Main component for a primary marketing message or call to action -->\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Navbar example</h1>\n" +
    "        <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n" +
    "        <p>To see the difference between static and fixed top navbars, just scroll.</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-lg btn-primary\" href=\"../../components/#navbar\" role=\"button\">View navbar docs &raquo;</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/navbar-static-top/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Static Top Navbar Example for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"navbar-static-top.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Static navbar -->\n" +
    "    <div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#about\">About</a></li>\n" +
    "            <li><a href=\"#contact\">Contact</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li class=\"dropdown-header\">Nav header</li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "                <li><a href=\"#\">One more separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li><a href=\"../navbar/\">Default</a></li>\n" +
    "            <li class=\"active\"><a href=\"./\">Static top</a></li>\n" +
    "            <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li>\n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <!-- Main component for a primary marketing message or call to action -->\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Navbar example</h1>\n" +
    "        <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n" +
    "        <p>To see the difference between static and fixed top navbars, just scroll.</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-lg btn-primary\" href=\"../../components/#navbar\" role=\"button\">View navbar docs &raquo;</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/navbar/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Navbar Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"navbar.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <!-- Static navbar -->\n" +
    "      <div class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li class=\"dropdown-header\">Nav header</li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "                <li><a href=\"#\">One more separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li class=\"active\"><a href=\"./\">Default</a></li>\n" +
    "            <li><a href=\"../navbar-static-top/\">Static top</a></li>\n" +
    "            <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li>\n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Main component for a primary marketing message or call to action -->\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Navbar example</h1>\n" +
    "        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n" +
    "        <p>\n" +
    "          <a class=\"btn btn-lg btn-primary\" href=\"../../components/#navbar\" role=\"button\">View navbar docs &raquo;</a>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/non-responsive/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "    <!-- Note there is no responsive meta tag here -->\n" +
    "\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Non-responsive Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"non-responsive.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Fixed navbar -->\n" +
    "    <div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#about\">About</a></li>\n" +
    "            <li><a href=\"#contact\">Contact</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li class=\"dropdown-header\">Nav header</li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "                <li><a href=\"#\">One more separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "            <li><a href=\"#\">Link</a></li>\n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Non-responsive Bootstrap</h1>\n" +
    "        <p class=\"lead\">Disable the responsiveness of Bootstrap by fixing the width of the container and using the first grid system tier.</p>\n" +
    "      </div>\n" +
    "\n" +
    "      <h3>What changes</h3>\n" +
    "      <p>Note the lack of the <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code>, which disables the zooming aspect of sites in mobile devices. In addition, we reset our container's width and are basically good to go.</p>\n" +
    "\n" +
    "      <h3>Regarding navbars</h3>\n" +
    "      <p>As a heads up, the navbar component is rather tricky here in that the styles for displaying it are rather specific and detailed. Overrides to ensure desktop styles display are not as performant or sleek as one would like. Just be aware there may be potential gotchas as you build on top of this example when using the navbar.</p>\n" +
    "\n" +
    "      <h3>Non-responsive grid system</h3>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">One third</div>\n" +
    "        <div class=\"col-xs-4\">One third</div>\n" +
    "        <div class=\"col-xs-4\">One third</div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/offcanvas/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Off Canvas Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"offcanvas.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "    <div class=\"navbar navbar-fixed-top navbar-inverse\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#about\">About</a></li>\n" +
    "            <li><a href=\"#contact\">Contact</a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.nav-collapse -->\n" +
    "      </div><!-- /.container -->\n" +
    "    </div><!-- /.navbar -->\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <div class=\"row row-offcanvas row-offcanvas-right\">\n" +
    "\n" +
    "        <div class=\"col-xs-12 col-sm-9\">\n" +
    "          <p class=\"pull-right visible-xs\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary btn-xs\" data-toggle=\"offcanvas\">Toggle nav</button>\n" +
    "          </p>\n" +
    "          <div class=\"jumbotron\">\n" +
    "            <h1>Hello, world!</h1>\n" +
    "            <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.</p>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-6 col-sm-6 col-lg-4\">\n" +
    "              <h2>Heading</h2>\n" +
    "              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "              <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "            </div><!--/span-->\n" +
    "            <div class=\"col-6 col-sm-6 col-lg-4\">\n" +
    "              <h2>Heading</h2>\n" +
    "              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "              <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "            </div><!--/span-->\n" +
    "            <div class=\"col-6 col-sm-6 col-lg-4\">\n" +
    "              <h2>Heading</h2>\n" +
    "              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "              <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "            </div><!--/span-->\n" +
    "            <div class=\"col-6 col-sm-6 col-lg-4\">\n" +
    "              <h2>Heading</h2>\n" +
    "              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "              <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "            </div><!--/span-->\n" +
    "            <div class=\"col-6 col-sm-6 col-lg-4\">\n" +
    "              <h2>Heading</h2>\n" +
    "              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "              <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "            </div><!--/span-->\n" +
    "            <div class=\"col-6 col-sm-6 col-lg-4\">\n" +
    "              <h2>Heading</h2>\n" +
    "              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n" +
    "              <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n" +
    "            </div><!--/span-->\n" +
    "          </div><!--/row-->\n" +
    "        </div><!--/span-->\n" +
    "\n" +
    "        <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\" role=\"navigation\">\n" +
    "          <div class=\"list-group\">\n" +
    "            <a href=\"#\" class=\"list-group-item active\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Link</a>\n" +
    "          </div>\n" +
    "        </div><!--/span-->\n" +
    "      </div><!--/row-->\n" +
    "\n" +
    "      <hr>\n" +
    "\n" +
    "      <footer>\n" +
    "        <p>&copy; Company 2013</p>\n" +
    "      </footer>\n" +
    "\n" +
    "    </div><!--/.container-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "    <script src=\"offcanvas.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/signin/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Signin Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"signin.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <form class=\"form-signin\">\n" +
    "        <h2 class=\"form-signin-heading\">Please sign in</h2>\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n" +
    "        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n" +
    "        <label class=\"checkbox\">\n" +
    "          <input type=\"checkbox\" value=\"remember-me\"> Remember me\n" +
    "        </label>\n" +
    "        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n" +
    "      </form>\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/starter-template/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Starter Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"starter-template.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#about\">About</a></li>\n" +
    "            <li><a href=\"#contact\">Contact</a></li>\n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "      <div class=\"starter-template\">\n" +
    "        <h1>Bootstrap starter template</h1>\n" +
    "        <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\n" +
    "      </div>\n" +
    "\n" +
    "    </div><!-- /.container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/sticky-footer-navbar/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Sticky Footer Navbar Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"sticky-footer-navbar.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Wrap all page content here -->\n" +
    "    <div id=\"wrap\">\n" +
    "\n" +
    "      <!-- Fixed navbar -->\n" +
    "      <div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "              <span class=\"sr-only\">Toggle navigation</span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "          </div>\n" +
    "          <div class=\"collapse navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "              <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "              <li><a href=\"#about\">About</a></li>\n" +
    "              <li><a href=\"#contact\">Contact</a></li>\n" +
    "              <li class=\"dropdown\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                  <li><a href=\"#\">Action</a></li>\n" +
    "                  <li><a href=\"#\">Another action</a></li>\n" +
    "                  <li><a href=\"#\">Something else here</a></li>\n" +
    "                  <li class=\"divider\"></li>\n" +
    "                  <li class=\"dropdown-header\">Nav header</li>\n" +
    "                  <li><a href=\"#\">Separated link</a></li>\n" +
    "                  <li><a href=\"#\">One more separated link</a></li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div><!--/.nav-collapse -->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- Begin page content -->\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"page-header\">\n" +
    "          <h1>Sticky footer with fixed navbar</h1>\n" +
    "        </div>\n" +
    "        <p class=\"lead\">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added within <code>#wrap</code> with <code>padding-top: 60px;</code> on the <code>.container</code>.</p>\n" +
    "        <p>Back to <a href=\"../sticky-footer\">the default sticky footer</a> minus the navbar.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"footer\">\n" +
    "      <div class=\"container\">\n" +
    "        <p class=\"text-muted credit\">Example courtesy <a href=\"http://martinbean.co.uk\">Martin Bean</a> and <a href=\"http://ryanfait.com/sticky-footer/\">Ryan Fait</a>.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/sticky-footer/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Sticky Footer Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"sticky-footer.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Wrap all page content here -->\n" +
    "    <div id=\"wrap\">\n" +
    "\n" +
    "      <!-- Begin page content -->\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"page-header\">\n" +
    "          <h1>Sticky footer</h1>\n" +
    "        </div>\n" +
    "        <p class=\"lead\">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.</p>\n" +
    "        <p>Use <a href=\"../sticky-footer-navbar\">the sticky footer with a fixed navbar</a> if need be, too.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"footer\">\n" +
    "      <div class=\"container\">\n" +
    "        <p class=\"text-muted credit\">Example courtesy <a href=\"http://martinbean.co.uk\">Martin Bean</a> and <a href=\"http://ryanfait.com/sticky-footer/\">Ryan Fait</a>.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/examples/theme/index.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"author\" content=\"\">\n" +
    "    <link rel=\"shortcut icon\" href=\"../../docs-assets/ico/favicon.png\">\n" +
    "\n" +
    "    <title>Theme Template for Bootstrap</title>\n" +
    "\n" +
    "    <!-- Bootstrap core CSS -->\n" +
    "    <link href=\"../../dist/css/bootstrap.css\" rel=\"stylesheet\">\n" +
    "    <!-- Bootstrap theme -->\n" +
    "    <link href=\"../../dist/css/bootstrap-theme.min.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Custom styles for this template -->\n" +
    "    <link href=\"theme.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n" +
    "    <!--[if lt IE 9]><script src=\"../../docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n" +
    "\n" +
    "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <!-- Fixed navbar -->\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Bootstrap theme</a>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "            <li><a href=\"#about\">About</a></li>\n" +
    "            <li><a href=\"#contact\">Contact</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li><a href=\"#\">Action</a></li>\n" +
    "                <li><a href=\"#\">Another action</a></li>\n" +
    "                <li><a href=\"#\">Something else here</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li class=\"dropdown-header\">Nav header</li>\n" +
    "                <li><a href=\"#\">Separated link</a></li>\n" +
    "                <li><a href=\"#\">One more separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container theme-showcase\">\n" +
    "\n" +
    "      <!-- Main jumbotron for a primary marketing message or call to action -->\n" +
    "      <div class=\"jumbotron\">\n" +
    "        <h1>Hello, world!</h1>\n" +
    "        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n" +
    "        <p><a href=\"#\" class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Buttons</h1>\n" +
    "      </div>\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-default\">Default</button>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\n" +
    "        <button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-default\">Default</button>\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n" +
    "        <button type=\"button\" class=\"btn btn-success\">Success</button>\n" +
    "        <button type=\"button\" class=\"btn btn-info\">Info</button>\n" +
    "        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n" +
    "        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n" +
    "        <button type=\"button\" class=\"btn btn-link\">Link</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-default\">Default</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\n" +
    "        <button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button type=\"button\" class=\"btn btn-xs btn-default\">Default</button>\n" +
    "        <button type=\"button\" class=\"btn btn-xs btn-primary\">Primary</button>\n" +
    "        <button type=\"button\" class=\"btn btn-xs btn-success\">Success</button>\n" +
    "        <button type=\"button\" class=\"btn btn-xs btn-info\">Info</button>\n" +
    "        <button type=\"button\" class=\"btn btn-xs btn-warning\">Warning</button>\n" +
    "        <button type=\"button\" class=\"btn btn-xs btn-danger\">Danger</button>\n" +
    "        <button type=\"button\" class=\"btn btn-xs btn-link\">Link</button>\n" +
    "      </p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Thumbnails</h1>\n" +
    "      </div>\n" +
    "      <img data-src=\"holder.js/200x200\" class=\"img-thumbnail\" alt=\"A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Dropdown menus</h1>\n" +
    "      </div>\n" +
    "      <div class=\"dropdown theme-dropdown clearfix\">\n" +
    "        <a id=\"dropdownMenu1\" href=\"#\" role=\"button\" class=\"sr-only dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "          <li class=\"active\" role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\n" +
    "          <li role=\"presentation\" class=\"divider\"></li>\n" +
    "          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Navbars</h1>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"navbar navbar-default\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "              <span class=\"sr-only\">Toggle navigation</span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "          </div>\n" +
    "          <div class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "              <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "              <li><a href=\"#about\">About</a></li>\n" +
    "              <li><a href=\"#contact\">Contact</a></li>\n" +
    "              <li class=\"dropdown\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                  <li><a href=\"#\">Action</a></li>\n" +
    "                  <li><a href=\"#\">Another action</a></li>\n" +
    "                  <li><a href=\"#\">Something else here</a></li>\n" +
    "                  <li class=\"divider\"></li>\n" +
    "                  <li class=\"dropdown-header\">Nav header</li>\n" +
    "                  <li><a href=\"#\">Separated link</a></li>\n" +
    "                  <li><a href=\"#\">One more separated link</a></li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div><!--/.nav-collapse -->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"navbar navbar-inverse\">\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "              <span class=\"sr-only\">Toggle navigation</span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "          </div>\n" +
    "          <div class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "              <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "              <li><a href=\"#about\">About</a></li>\n" +
    "              <li><a href=\"#contact\">Contact</a></li>\n" +
    "              <li class=\"dropdown\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                  <li><a href=\"#\">Action</a></li>\n" +
    "                  <li><a href=\"#\">Another action</a></li>\n" +
    "                  <li><a href=\"#\">Something else here</a></li>\n" +
    "                  <li class=\"divider\"></li>\n" +
    "                  <li class=\"dropdown-header\">Nav header</li>\n" +
    "                  <li><a href=\"#\">Separated link</a></li>\n" +
    "                  <li><a href=\"#\">One more separated link</a></li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div><!--/.nav-collapse -->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Alerts</h1>\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-success\">\n" +
    "        <strong>Well done!</strong> You successfully read this important alert message.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-info\">\n" +
    "        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-warning\">\n" +
    "        <strong>Warning!</strong> Best check yo self, you're not looking too good.\n" +
    "      </div>\n" +
    "      <div class=\"alert alert-danger\">\n" +
    "        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Progress bars</h1>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"><span class=\"sr-only\">60% Complete</span></div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\"><span class=\"sr-only\">40% Complete (success)</span></div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\"><span class=\"sr-only\">20% Complete</span></div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\"><span class=\"sr-only\">60% Complete (warning)</span></div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\"><span class=\"sr-only\">80% Complete (danger)</span></div>\n" +
    "      </div>\n" +
    "      <div class=\"progress\">\n" +
    "        <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\"><span class=\"sr-only\">35% Complete (success)</span></div>\n" +
    "        <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\"><span class=\"sr-only\">20% Complete (warning)</span></div>\n" +
    "        <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\"><span class='sr-only'>10% Complete (danger)</span></div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>List groups</h1>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <ul class=\"list-group\">\n" +
    "            <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "            <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "            <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "            <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "            <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.col-sm-4 -->\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"list-group\">\n" +
    "            <a href=\"#\" class=\"list-group-item active\">\n" +
    "              Cras justo odio\n" +
    "            </a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Morbi leo risus</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac</a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">Vestibulum at eros</a>\n" +
    "          </div>\n" +
    "        </div><!-- /.col-sm-4 -->\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"list-group\">\n" +
    "            <a href=\"#\" class=\"list-group-item active\">\n" +
    "              <h4 class=\"list-group-item-heading\">List group item heading</h4>\n" +
    "              <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n" +
    "            </a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">\n" +
    "              <h4 class=\"list-group-item-heading\">List group item heading</h4>\n" +
    "              <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n" +
    "            </a>\n" +
    "            <a href=\"#\" class=\"list-group-item\">\n" +
    "              <h4 class=\"list-group-item-heading\">List group item heading</h4>\n" +
    "              <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div><!-- /.col-sm-4 -->\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Panels</h1>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "              <h3 class=\"panel-title\">Panel title</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "              Panel content\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"panel panel-primary\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "              <h3 class=\"panel-title\">Panel title</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "              Panel content\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!-- /.col-sm-4 -->\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"panel panel-success\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "              <h3 class=\"panel-title\">Panel title</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "              Panel content\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"panel panel-info\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "              <h3 class=\"panel-title\">Panel title</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "              Panel content\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!-- /.col-sm-4 -->\n" +
    "        <div class=\"col-sm-4\">\n" +
    "          <div class=\"panel panel-warning\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "              <h3 class=\"panel-title\">Panel title</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "              Panel content\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"panel panel-danger\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "              <h3 class=\"panel-title\">Panel title</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "              Panel content\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!-- /.col-sm-4 -->\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"page-header\">\n" +
    "        <h1>Wells</h1>\n" +
    "      </div>\n" +
    "      <div class=\"well\">\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div> <!-- /container -->\n" +
    "\n" +
    "\n" +
    "    <!-- Bootstrap core JavaScript\n" +
    "    ================================================== -->\n" +
    "    <!-- Placed at the end of the document so the pages load faster -->\n" +
    "    <script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
    "    <script src=\"../../dist/js/bootstrap.min.js\"></script>\n" +
    "    <script src=\"../../docs-assets/js/holder.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/getting-started.html',
    "---\n" +
    "layout: default\n" +
    "title: Getting started\n" +
    "slug: getting-started\n" +
    "lead: \"An overview of Bootstrap, how to download and use, basic templates and examples, and more.\"\n" +
    "base_url: \"../\"\n" +
    "---\n" +
    "\n" +
    "\n" +
    "  <!-- Getting started\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"download\">Download Bootstrap</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap has a few easy ways to quickly get started, each one appealing to a different skill level and use case. Read through to see what suits your particular needs.</p>\n" +
    "\n" +
    "    <h3 id=\"download-compiled\">Compiled CSS, JS, and fonts</h3>\n" +
    "    <p>The fastest way to get Bootstrap is to download the precompiled and minified versions of our CSS, JavaScript, and fonts. No documentation or original source code files are included.</p>\n" +
    "    <p><a class=\"btn btn-lg btn-primary\" href=\"{{ site.download_dist }}\" onclick=\"_gaq.push(['_trackEvent', 'Getting started', 'Download', 'Download compiled']);\" role=\"button\">Download precompiled Bootstrap</a></p>\n" +
    "\n" +
    "    <h3 id=\"download-additional\">Additional downloads</h3>\n" +
    "    <div class=\"bs-docs-dl-options\">\n" +
    "      <h4>\n" +
    "        <a href=\"{{ site.download_source }}\" onclick=\"_gaq.push(['_trackEvent', 'Getting started', 'Download', 'Download source']);\">Download source code</a>\n" +
    "      </h4>\n" +
    "      <p>Get the latest Bootstrap LESS and JavaScript source code by downloading it directly from GitHub.</p>\n" +
    "      <h4>\n" +
    "        <a href=\"{{ site.repo }}\" onclick=\"_gaq.push(['_trackEvent', 'Getting started', 'Download', 'GitHub project']);\">Clone or fork via GitHub</a>\n" +
    "      </h4>\n" +
    "      <p>Visit us on GitHub to clone or fork the Bootstrap project.</p>\n" +
    "      <h4>\n" +
    "        Install with <a href=\"http://bower.io\">Bower</a>\n" +
    "      </h4>\n" +
    "      <p>Install and manage Bootstrap's styles, JavaScript, and documentation using <a href=\"http://bower.io\">Bower</a>.</p>\n" +
    "      {% highlight bash %}$ bower install bootstrap{% endhighlight %}\n" +
    "    </div>\n" +
    "\n" +
    "    <h3 id=\"download-cdn\">Bootstrap CDN</h3>\n" +
    "    <p>The folks over at <a href=\"http://www.maxcdn.com/\">MaxCDN</a> graciously provide CDN support for Bootstrap's CSS and JavaScript. Just use these <a href=\"http://www.bootstrapcdn.com/\">Bootstrap CDN</a> links.</p>\n" +
    "{% highlight html %}\n" +
    "<!-- Latest compiled and minified CSS -->\n" +
    "<link rel=\"stylesheet\" href=\"{{ site.cdn_css }}\">\n" +
    "\n" +
    "<!-- Optional theme -->\n" +
    "<link rel=\"stylesheet\" href=\"{{ site.cdn_theme_css }}\">\n" +
    "\n" +
    "<!-- Latest compiled and minified JavaScript -->\n" +
    "<script src=\"{{ site.cdn_js }}\"></script>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\" id=\"callout-less-compilation\">\n" +
    "      <h4>Compiling Bootstrap's LESS files</h4>\n" +
    "      <p>If you work with Bootstrap's uncompiled source code, you need to compile the LESS files to produce usable CSS files. For compiling LESS files into CSS, we only officially support <a href=\"http://twitter.github.io/recess/\">Recess</a>, which is Twitter's CSS hinter based on <a href=\"http://lesscss.org\">less.js</a>.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- File structure\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"whats-included\">What's included</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Within the download you'll find the following directories and files, logically grouping common resources and providing both compiled and minified variations.</p>\n" +
    "    <p>Once downloaded, unzip the compressed folder to see the structure of (the compiled) Bootstrap. You'll see something like this:</p>\n" +
    "\n" +
    "<!-- NOTE: This info is intentionally duplicated in the README.\n" +
    "Copy any changes made here over to the README too. -->\n" +
    "{% highlight bash %}\n" +
    "bootstrap/\n" +
    "├── css/\n" +
    "│   ├── bootstrap.css\n" +
    "│   ├── bootstrap.min.css\n" +
    "│   ├── bootstrap-theme.css\n" +
    "│   └── bootstrap-theme.min.css\n" +
    "├── js/\n" +
    "│   ├── bootstrap.js\n" +
    "│   └── bootstrap.min.js\n" +
    "└── fonts/\n" +
    "    ├── glyphicons-halflings-regular.eot\n" +
    "    ├── glyphicons-halflings-regular.svg\n" +
    "    ├── glyphicons-halflings-regular.ttf\n" +
    "    └── glyphicons-halflings-regular.woff\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>This is the most basic form of Bootstrap: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (<code>bootstrap.*</code>), as well as compiled and minified CSS and JS (<code>bootstrap.min.*</code>). Fonts from Glyphicons are included, as is the optional Bootstrap theme.</p>\n" +
    "    <div class=\"bs-callout bs-callout-danger\" id=\"jquery-required\">\n" +
    "      <h4>jQuery required</h4>\n" +
    "      <p>Please note that <strong>all JavaScript plugins require jQuery</strong> to be included, as shown in the <a href=\"#template\">starter template</a>. <a href=\"{{ site.repo }}/blob/v{{ site.current_version }}/bower.json\">Consult our <code>bower.json</code></a> to see which versions of jQuery are supported.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Template\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"template\">Basic template</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Start with this basic HTML template, or modify <a href=\"../getting-started#examples\">these examples</a>. We hope you'll customize our templates and examples, adapting them to suit your needs.</p>\n" +
    "\n" +
    "    <p>Copy the HTML below to begin working with a minimal Bootstrap document.</p>\n" +
    "{% highlight html %}\n" +
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <title>Bootstrap 101 Template</title>\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <!-- Bootstrap -->\n" +
    "    <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n" +
    "    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n" +
    "      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n" +
    "    <![endif]-->\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <h1>Hello, world!</h1>\n" +
    "\n" +
    "    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\n" +
    "    <script src=\"https://code.jquery.com/jquery.js\"></script>\n" +
    "    <!-- Include all compiled plugins (below), or include individual files as needed -->\n" +
    "    <script src=\"js/bootstrap.min.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Template\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"examples\">Examples</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Build on the basic template above with Bootstrap's many components. See also <a href=\"#customizing\">Customizing Bootstrap</a> for tips on maintaining your own Bootstrap variants.</p>\n" +
    "\n" +
    "    <div class=\"row bs-examples\">\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/starter-template/\">\n" +
    "          <img src=\"../examples/screenshots/starter-template.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Starter template</h4>\n" +
    "        <p>Nothing but the basics: compiled CSS and JavaScript along with a container.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/grid/\">\n" +
    "          <img src=\"../examples/screenshots/grid.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Grids</h4>\n" +
    "        <p>Multiple examples of grid layouts with all four tiers, nesting, and more.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/jumbotron/\">\n" +
    "          <img src=\"../examples/screenshots/jumbotron.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Jumbotron</h4>\n" +
    "        <p>Build around the jumbotron with a navbar and some basic grid columns.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/jumbotron-narrow/\">\n" +
    "          <img src=\"../examples/screenshots/jumbotron-narrow.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Narrow jumbotron</h4>\n" +
    "        <p>Build a more custom page by narrowing the default container and jumbotron.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/navbar/\">\n" +
    "          <img src=\"../examples/screenshots/navbar.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Navbar</h4>\n" +
    "        <p>Super basic template that includes the navbar along with some additional content.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/navbar-static-top/\">\n" +
    "          <img src=\"../examples/screenshots/navbar-static.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Static top navbar</h4>\n" +
    "        <p>Super basic template with a static top navbar along with some additional content.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/navbar-fixed-top/\">\n" +
    "          <img src=\"../examples/screenshots/navbar-fixed.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Fixed navbar</h4>\n" +
    "        <p>Super basic template with a fixed top navbar along with some additional content.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/signin/\">\n" +
    "          <img src=\"../examples/screenshots/sign-in.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Sign-in page</h4>\n" +
    "        <p>Custom form layout and design for a simple sign in form.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/sticky-footer/\">\n" +
    "          <img src=\"../examples/screenshots/sticky-footer.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Sticky footer</h4>\n" +
    "        <p>Attach a footer to the bottom of the viewport when the content is shorter than it.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/sticky-footer-navbar/\">\n" +
    "          <img src=\"../examples/screenshots/sticky-footer-navbar.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Sticky footer with navbar</h4>\n" +
    "        <p>Attach a footer to the bottom of the viewport with a fixed navbar at the top.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/justified-nav/\">\n" +
    "          <img src=\"../examples/screenshots/justified-nav.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Justified nav</h4>\n" +
    "        <p>Create a custom navbar with justified links. Heads up! <a href=\"../components/#nav-justified\">Not too WebKit friendly.</a></p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/offcanvas/\">\n" +
    "          <img src=\"../examples/screenshots/offcanvas.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Offcanvas</h4>\n" +
    "        <p>Build a toggleable off-canvas navigation menu for use with Bootstrap.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/carousel/\">\n" +
    "          <img src=\"../examples/screenshots/carousel.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Carousel</h4>\n" +
    "        <p>Customize the navbar and carousel, then add some new components.</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/non-responsive/\">\n" +
    "          <img src=\"../examples/screenshots/non-responsive.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Non-responsive Bootstrap</h4>\n" +
    "        <p>Easily disable the responsiveness of Bootstrap <a href=\"../getting-started/#disable-responsive\">per our docs</a>.</p>\n" +
    "      </div>\n" +
    "      <div class=\"clearfix visible-xs\"></div>\n" +
    "\n" +
    "      <div class=\"col-xs-6 col-md-4\">\n" +
    "        <a class=\"thumbnail\" href=\"../examples/theme/\">\n" +
    "          <img src=\"../examples/screenshots/theme.jpg\" alt=\"\">\n" +
    "        </a>\n" +
    "        <h4>Bootstrap theme</h4>\n" +
    "        <p>Load the optional Bootstrap theme for a visually enhanced experience.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Template\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"disable-responsive\">Disabling responsiveness</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap automatically adapts your pages for various screen sizes.\n" +
    "      Here's how to disable this feature so your page works like in <a href=\"../examples/non-responsive/\">this non-responsive example</a>.</p>\n" +
    "\n" +
    "    <h3>Steps to disable page responsiveness</h3>\n" +
    "    <ol>\n" +
    "      <li>Omit the viewport <code>&lt;meta&gt;</code> mentioned in <a href=\"../css/#overview-mobile\">the CSS docs</a></li>\n" +
    "      <li>Override the <code>width</code> on the <code>.container</code> for each grid tier with a single width, for example <code>width: 970px !important;</code> Be sure that this comes after the default Bootstrap CSS. You can optionally avoid the <code>!important</code> with media queries or some selector-fu.</li>\n" +
    "      <li>If using navbars, remove all navbar collapsing and expanding behavior.</li>\n" +
    "      <li>For grid layouts, use <code>.col-xs-*</code> classes in addition to, or in place of, the medium/large ones. Don't worry, the extra-small device grid scales to all resolutions.</li>\n" +
    "    </ol>\n" +
    "    <p>You'll still need Respond.js for IE8 (since our media queries are still there and need to be processed).\n" +
    "      This disables the \"mobile site\" aspects of Bootstrap.</p>\n" +
    "\n" +
    "    <h3>Bootstrap template with responsiveness disabled</h3>\n" +
    "    <p>We've applied these steps to an example. Read its source code to see the specific changes implemented.</p>\n" +
    "    <p>\n" +
    "      <a href=\"../examples/non-responsive/\" class=\"btn btn-primary\">View non-responsive example</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Migration\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"migration\">Migrating from 2.x to 3.0</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap 3 is not backwards compatible with v2.x. Use this section as a general guide to upgrading from v2.x to v3.0. For a broader overview, see <a href=\"http://blog.getbootstrap.com/2013/08/19/bootstrap-3-released/\">what's new</a> in the v3.0 release announcement.</p>\n" +
    "\n" +
    "    <h2 id=\"migration-classes\">Major class changes</h2>\n" +
    "    <p>This table shows the style changes between v2.x and v3.0.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Bootstrap 2.x</th>\n" +
    "            <th>Bootstrap 3.0</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td><code>.container-fluid</code></td>\n" +
    "            <td><code>.container</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.row-fluid</code></td>\n" +
    "            <td><code>.row</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.span*</code></td>\n" +
    "            <td><code>.col-md-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.offset*</code></td>\n" +
    "            <td><code>.col-md-offset-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.brand</code></td>\n" +
    "            <td><code>.navbar-brand</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.nav-collapse</code></td>\n" +
    "            <td><code>.navbar-collapse</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.nav-toggle</code></td>\n" +
    "            <td><code>.navbar-toggle</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.btn-navbar</code></td>\n" +
    "            <td><code>.navbar-btn</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.hero-unit</code></td>\n" +
    "            <td><code>.jumbotron</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.icon-*</code></td>\n" +
    "            <td><code>.glyphicon .glyphicon-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.btn</code></td>\n" +
    "            <td><code>.btn .btn-default</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.btn-mini</code></td>\n" +
    "            <td><code>.btn-xs</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.btn-small</code></td>\n" +
    "            <td><code>.btn-sm</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.btn-large</code></td>\n" +
    "            <td><code>.btn-lg</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.alert-error</code></td>\n" +
    "            <td><code>.alert-danger</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.visible-phone</code></td>\n" +
    "            <td><code>.visible-xs</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.visible-tablet</code></td>\n" +
    "            <td><code>.visible-sm</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.visible-desktop</code></td>\n" +
    "            <td><code>.visible-md</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.hidden-phone</code></td>\n" +
    "            <td><code>.hidden-xs</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.hidden-tablet</code></td>\n" +
    "            <td><code>.hidden-sm</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.hidden-desktop</code></td>\n" +
    "            <td><code>.hidden-md</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.input-small</code></td>\n" +
    "            <td><code>.input-sm</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.input-large</code></td>\n" +
    "            <td><code>.input-lg</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.control-group</code></td>\n" +
    "            <td><code>.form-group</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.checkbox.inline</code> <code>.radio.inline</code></td>\n" +
    "            <td><code>.checkbox-inline</code> <code>.radio-inline</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.input-prepend</code> <code>.input-append</code></td>\n" +
    "            <td><code>.input-group</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.add-on</code></td>\n" +
    "            <td><code>.input-group-addon</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.img-polaroid</code></td>\n" +
    "            <td><code>.img-thumbnail</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>ul.unstyled</code></td>\n" +
    "            <td><code>.list-unstyled</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>ul.inline</code></td>\n" +
    "            <td><code>.list-inline</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.muted</code></td>\n" +
    "            <td><code>.text-muted</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.text-error</code></td>\n" +
    "            <td><code>.text-danger</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.table .error</code></td>\n" +
    "            <td><code>.table .danger</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.bar</code></td>\n" +
    "            <td><code>.progress-bar</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.bar-*</code></td>\n" +
    "            <td><code>.progress-bar-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.accordion</code></td>\n" +
    "            <td><code>.panel-group</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.accordion-group</code></td>\n" +
    "            <td><code>.panel .panel-default</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.accordion-heading</code></td>\n" +
    "            <td><code>.panel-heading</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.accordion-body</code></td>\n" +
    "            <td><code>.panel-collapse</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><code>.accordion-inner</code></td>\n" +
    "            <td><code>.panel-body</code></td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "\n" +
    "    <h2 id=\"migration-new\">What's new</h2>\n" +
    "    <p>We've added new elements and changed some existing ones. Here are the new or updated styles.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Element</th>\n" +
    "            <th>Description</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>Panels</td>\n" +
    "            <td><code>.panel .panel-default</code> <code>.panel-body</code> <code>.panel-title</code> <code>.panel-heading</code> <code>.panel-footer</code> <code>.panel-collapse</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>List groups</td>\n" +
    "            <td><code>.list-group</code> <code>.list-group-item</code> <code>.list-group-item-text</code> <code>.list-group-item-heading</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Glyphicons</td>\n" +
    "            <td><code>.glyphicon</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Jumbotron</td>\n" +
    "            <td><code>.jumbotron</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Extra small grid (&lt;768px)</td>\n" +
    "            <td><code>.col-xs-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Small grid (&ge;768px)</td>\n" +
    "            <td><code>.col-sm-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Medium grid (&ge;992px)</td>\n" +
    "            <td><code>.col-md-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Large grid (&ge;1200px)</td>\n" +
    "            <td><code>.col-lg-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Responsive utility classes (&ge;1200px)</td>\n" +
    "            <td><code>.visible-lg</code> <code>.hidden-lg</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Offsets</td>\n" +
    "            <td><code>.col-sm-offset-*</code> <code>.col-md-offset-*</code> <code>.col-lg-offset-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Push</td>\n" +
    "            <td><code>.col-sm-push-*</code> <code>.col-md-push-*</code> <code>.col-lg-push-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Pull</td>\n" +
    "            <td><code>.col-sm-pull-*</code> <code>.col-md-pull-*</code> <code>.col-lg-pull-*</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Input groups</td>\n" +
    "            <td><code>.input-group</code> <code>.input-group-addon</code> <code>.input-group-btn</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Form controls</td>\n" +
    "            <td><code>.form-control</code> <code>.form-group</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Button group sizes</td>\n" +
    "            <td><code>.btn-group-xs</code> <code>.btn-group-sm</code> <code>.btn-group-lg</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Navbar text</td>\n" +
    "            <td><code>.navbar-text</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Navbar header</td>\n" +
    "            <td><code>.navbar-header</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Justified tabs / pills</td>\n" +
    "            <td><code>.nav-justified</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Responsive images</td>\n" +
    "            <td><code>.img-responsive</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Contextual table rows</td>\n" +
    "            <td><code>.success</code> <code>.danger</code> <code>.warning</code> <code>.active</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Contextual panels</td>\n" +
    "            <td><code>.panel-success</code> <code>.panel-danger</code> <code>.panel-warning</code> <code>.panel-info</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Modal</td>\n" +
    "            <td><code>.modal-dialog</code> <code>.modal-content</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Thumbnail image</td>\n" +
    "            <td><code>.img-thumbnail</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Well sizes</td>\n" +
    "            <td><code>.well-sm</code> <code>.well-lg</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Alert links</td>\n" +
    "            <td><code>.alert-link</code></td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"migration-dropped\">What's removed</h2>\n" +
    "    <p>The following elements have been dropped or changed in v3.0.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Element</th>\n" +
    "            <th>Removed from 2.x</th>\n" +
    "            <th>3.0 Equivalent</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>Form actions</td>\n" +
    "            <td><code>.form-actions</code></td>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Search form</td>\n" +
    "            <td><code>.form-search</code></td>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Fluid container</td>\n" +
    "            <td><code>.container-fluid</code></td>\n" +
    "            <td><code>.container</code> (no more fixed grid)</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Fluid row</td>\n" +
    "            <td><code>.row-fluid</code></td>\n" +
    "            <td><code>.row</code> (no more fixed grid)</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Controls wrapper</td>\n" +
    "            <td><code>.controls</code></td>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Controls row</td>\n" +
    "            <td><code>.controls-row</code></td>\n" +
    "            <td><code>.row</code> or <code>.form-group</code></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Navbar inner</td>\n" +
    "            <td><code>.navbar-inner</code></td>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Navbar vertical dividers</td>\n" +
    "            <td><code>.navbar .divider-vertical</code></td>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Dropdown submenu</td>\n" +
    "            <td><code>.dropdown-submenu</code></td>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Tab alignments</td>\n" +
    "            <td><code>.tabs-left</code> <code>.tabs-right</code> <code>.tabs-below</code></td>\n" +
    "            <td class=\"text-muted\">N/A</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Nav lists</td>\n" +
    "            <td><code>.nav-list</code> <code>.nav-header</code></td>\n" +
    "            <td>No direct equivalent, but <a href=\"../components/#list-group\">list groups</a> and <a href=\"../javascript/#collapse\"><code>.panel-group</code>s</a> are similar.</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"migration-notes\">Additional notes</h2>\n" +
    "    <p>Other changes in v3.0 are not immediately apparent. Base classes, key styles, and behaviors have been adjusted for flexibility and our <em>mobile first</em> approach. Here's a partial list:</p>\n" +
    "    <ul>\n" +
    "      <li>By default, text-based form controls now receive only minimal styling.  For focus colors and rounded corners, apply the <code>.form-control</code> class on the element to style.</li>\n" +
    "      <li>Text-based form controls with the <code>.form-control</code> class applied are now 100% wide by default. Wrap inputs inside <code>&lt;div class=\"col-*\"&gt;&lt;/div&gt;</code> to control input widths.</li>\n" +
    "      <li><code>.badge</code> no longer has contextual (-success,-primary,etc..) classes.</li>\n" +
    "      <li><code>.btn</code> must also use <code>.btn-default</code> to get the \"default\" button.</li>\n" +
    "      <li><code>.container</code> and <code>.row</code> are now fluid (percentage-based).</li>\n" +
    "      <li>Images are no longer responsive by default. Use <code>.img-responsive</code> for fluid <code>&lt;img&gt;</code> size.</li>\n" +
    "      <li>The icons, now <code>.glyphicon</code>, are now font based. Icons also require a base and icon class (e.g. <code>.glyphicon .glyphicon-asterisk</code>).</li>\n" +
    "      <li>Typeahead has been dropped, in favor of using <a href=\"http://twitter.github.io/typeahead.js/\">Twitter Typeahead</a>.</li>\n" +
    "      <li>Modal markup has changed significantly. The <code>.modal-header</code>, <code>.modal-body</code>, and <code>.modal-footer</code> sections are now wrapped in <code>.modal-content</code> and <code>.modal-dialog</code> for better mobile styling and behavior.</li>\n" +
    "      <li>The HTML loaded by the <code>remote</code> modal option is now injected into the <code>.modal</code> instead of into the <code>.modal-body</code>. This allows you to also easily vary the header and footer of the modal, not just the modal body.</li>\n" +
    "      <li>JavaScript events are namespaced. For example, to handle the modal \"show\" event, use <code>'show.bs.modal'</code>. For tabs \"shown\" use <code>'shown.bs.tab'</code>, etc..</li>\n" +
    "    </ul>\n" +
    "    <p>For more information on upgrading to v3.0, and code snippets from the community, see <a href=\"http://bootply.com/\">Bootply</a>.</p>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Browser support\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"browsers\">Browser support</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap is built to work best in the latest desktop and mobile browsers, meaning older browsers might display differently styled, though fully functional, renderings of certain components.</p>\n" +
    "\n" +
    "    <h3>Supported browsers</h3>\n" +
    "    <p>Specifically, we support the latest versions of the following:</p>\n" +
    "    <ul>\n" +
    "      <li>Chrome (Mac, Windows, iOS, and Android)</li>\n" +
    "      <li>Safari (Mac and iOS only, as the Windows version is being abandoned)</li>\n" +
    "      <li>Firefox (Mac, Windows)</li>\n" +
    "      <li>Internet Explorer</li>\n" +
    "      <li>Opera (Mac, Windows)</li>\n" +
    "    </ul>\n" +
    "    <p>Unofficially, Bootstrap should look and behave well enough in Chromium and Chrome for Linux, Firefox for Linux, and Internet Explorer 7, though they are not officially supported.</p>\n" +
    "\n" +
    "    <h3>Internet Explorer 8 and 9</h3>\n" +
    "    <p>Internet Explorer 8 and 9 are also supported, however, please be aware that some CSS3 properties and HTML5 elements are not fully supported by these browsers. In addition, <strong>Internet Explorer 8 requires the use of <a href=\"https://github.com/scottjehl/Respond\">Respond.js</a> to enable media query support.</strong></p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th scope=\"col\" class=\"col-xs-4\">Feature</th>\n" +
    "            <th scope=\"col\" class=\"col-xs-4\">Internet Explorer 8</th>\n" +
    "            <th scope=\"col\" class=\"col-xs-4\">Internet Explorer 9</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <th scope=\"row\"><code>border-radius</code></th>\n" +
    "            <td class=\"text-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Not supported</td>\n" +
    "            <td class=\"text-success\"><span class=\"glyphicon glyphicon-ok\"></span> Supported</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th scope=\"row\"><code>box-shadow</code></th>\n" +
    "            <td class=\"text-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Not supported</td>\n" +
    "            <td class=\"text-success\"><span class=\"glyphicon glyphicon-ok\"></span> Supported</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th scope=\"row\"><code>transform</code></th>\n" +
    "            <td class=\"text-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Not supported</td>\n" +
    "            <td class=\"text-success\"><span class=\"glyphicon glyphicon-ok\"></span> Supported, with <code>-ms</code> prefix</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th scope=\"row\"><code>transition</code></th>\n" +
    "            <td colspan=\"2\" class=\"text-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Not supported</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <th scope=\"row\"><code>placeholder</code></th>\n" +
    "            <td colspan=\"2\" class=\"text-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Not supported</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <p>Visit <a href=\"http://caniuse.com/\">Can I use...</a> for details on browser support of CSS3 and HTML5 features.</p>\n" +
    "\n" +
    "    <h3>Internet Explorer 8 and Respond.js</h3>\n" +
    "    <p>Beware of the following caveats when using Respond.js in your development and production environments for Internet Explorer 8.</p>\n" +
    "    <h4 id=\"respond-js-x-domain\">Respond.js and cross-domain CSS</h4>\n" +
    "    <p>Using Respond.js with CSS hosted on a different (sub)domain (for example, on a CDN) requires some additional setup. <a href=\"https://github.com/scottjehl/Respond/blob/master/README.md#cdnx-domain-setup\">See the Respond.js docs</a> for details.</p>\n" +
    "    <h4 id=\"respond-file-proto\">Respond.js and <code>file://</code></h4>\n" +
    "    <p>Due to browser security rules, Respond.js doesn't work with pages viewed via the <code>file://</code> protocol (like when opening a local HTML file). To test responsive features in IE8, view your pages over HTTP(S). <a href=\"https://github.com/scottjehl/Respond/blob/master/README.md#support--caveats\">See the Respond.js docs</a> for details.</p>\n" +
    "    <h4 id=\"respond-import\">Respond.js and <code>@import</code></h4>\n" +
    "    <p>Respond.js doesn't work with CSS that's referenced via <code>@import</code>. In particular, some Drupal configurations are known to use <code>@import</code>. <a href=\"https://github.com/scottjehl/Respond/blob/master/README.md#support--caveats\">See the Respond.js docs</a> for details.</p>\n" +
    "\n" +
    "    <h3>Internet Explorer 8 and box-sizing</h3>\n" +
    "    <p>IE8 does not fully support <code>box-sizing: border-box;</code> when combined with <code>min-width</code>, <code>max-width</code>, <code>min-height</code>, or <code>max-height</code>. For that reason, as of v3.0.1, we no longer use <code>max-width</code> on <code>.container</code>s.</p>\n" +
    "\n" +
    "    <h3 id=\"ie-compat-modes\">IE Compatibility modes</h3>\n" +
    "    <p>Bootstrap is not supported in the old Internet Explorer compatibility modes. To be sure you're using the latest rendering mode for IE, consider including the appropriate <code>&lt;meta&gt;</code> tag in your pages:</p>\n" +
    "{% highlight html %}\n" +
    "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "{% endhighlight %}\n" +
    "    <p>This tag is included in all docs pages and examples to ensure the best rendering possible in each supported version of Internet Explorer.</p>\n" +
    "    <p>See <a href=\"http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge\">this StackOverflow question</a> for more information.</p>\n" +
    "\n" +
    "    <h3 id=\"ie-10-width\">Internet Explorer 10 in Windows 8 and Windows Phone 8</h3>\n" +
    "    <p>Internet Explorer 10 doesn't differentiate <strong>device width</strong> from <strong>viewport width</strong>, and thus doesn't properly apply the media queries in Bootstrap's CSS. Normally you'd just add a quick snippet of CSS to fix this:</p>\n" +
    "{% highlight css %}\n" +
    "@-ms-viewport       { width: device-width; }\n" +
    "{% endhighlight %}\n" +
    "    <p>However, this doesn't work as it causes Windows Phone 8 devices to show a mostly desktop view instead of narrow \"phone\" view. To address this, you'll need to <strong>include the following CSS and JavaScript to work around the bug until Microsoft issues a fix</strong>.</p>\n" +
    "{% highlight css %}\n" +
    "@-webkit-viewport   { width: device-width; }\n" +
    "@-moz-viewport      { width: device-width; }\n" +
    "@-ms-viewport       { width: device-width; }\n" +
    "@-o-viewport        { width: device-width; }\n" +
    "@viewport           { width: device-width; }\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "{% highlight js %}\n" +
    "if (navigator.userAgent.match(/IEMobile\\/10\\.0/)) {\n" +
    "  var msViewportStyle = document.createElement(\"style\")\n" +
    "  msViewportStyle.appendChild(\n" +
    "    document.createTextNode(\n" +
    "      \"@-ms-viewport{width:auto!important}\"\n" +
    "    )\n" +
    "  )\n" +
    "  document.getElementsByTagName(\"head\")[0].appendChild(msViewportStyle)\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "    <p>For more information and usage guidelines, read <a href=\"http://timkadlec.com/2013/01/windows-phone-8-and-device-width/\">Windows Phone 8 and Device-Width</a>.</p>\n" +
    "    <p>As a heads up, we include this in the Bootstrap docs as an example.</p>\n" +
    "\n" +
    "    <h3 id=\"safari-percentages\">Safari percent rounding</h3>\n" +
    "    <p>As of Safari v6.1 for OS X and Safari for iOS v7.0.1, Safari's rendering engine has some trouble with the number of decimal places used in our <code>.col-*-1</code> grid classes. So if you have 12 individual grid columns, you'll notice that they come up short compared to other rows of columns. We can't do much here (<a href=\"https://github.com/twbs/bootstrap/issues/9282\">see #9282</a>) but you do have some options:</p>\n" +
    "    <ul>\n" +
    "      <li>Add <code>.pull-right</code> to your last grid column to get the hard-right alignment</li>\n" +
    "      <li>Tweak your percentages manually to get the perfect rounding for Safari (more difficult than the first option)</li>\n" +
    "    </ul>\n" +
    "    <p>We'll keep an eye on this though and update our code if we have an easy solution.</p>\n" +
    "\n" +
    "    <h3 id=\"mobile-modals\">Modals and mobile devices</h3>\n" +
    "    <h4>Overflow and scrolling</h4>\n" +
    "    <p>Support for <code>overflow: hidden</code> on the <code>&lt;body&gt;</code> element is quite limited in iOS and Android. To that end, when you scroll past the top or bottom of a modal in either of those devices' browsers, the <code>&lt;body&gt;</code> content will begin to scroll.</p>\n" +
    "    <h4>Virtual keyboards</h4>\n" +
    "    <p>Also, note that if you're using inputs in your modal – iOS has a rendering bug that doesn't update the position of fixed elements when the virtual keyboard is triggered. A few workarounds for this include transforming your elements to <code>position: absolute</code> or invoking a timer on focus to try to correct the positioning manually. This is not handled by Bootstrap, so it is up to you to decide which solution is best for your application.</p>\n" +
    "\n" +
    "    <h3 id=\"browser-zoom\">Browser zooming</h3>\n" +
    "    <p>Page zooming inevitably presents rendering artifacts in some components, both in Bootstrap and the rest of the web. Depending on the issue, we may be able to fix it (search first and then open an issue if need be). However, we tend to ignore these as they often have no direct solution other than hacky workarounds.</p>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Third party support\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"third-parties\">Third party support</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">While we don't officially support any third party plugins or add-ons, we do offer some useful advice to help avoid potential issues in your projects.</p>\n" +
    "\n" +
    "    <h3>Box-sizing</h3>\n" +
    "    <p>Some third party software, including Google Maps and Google Custom Search Engine, conflict with Bootstrap due to <code>* { box-sizing: border-box; }</code>, a rule which makes it so <code>padding</code> does not affect the final computed width of an element. Learn more about <a href=\"http://css-tricks.com/box-sizing/\">box model and sizing at CSS Tricks</a>.</p>\n" +
    "    <p>Depending on the context, you may override as-needed (Option 1) or reset the box-sizing for entire regions (Option 2).</p>\n" +
    "{% highlight css %}\n" +
    "/* Box-sizing resets\n" +
    " *\n" +
    " * Reset individual elements or override regions to avoid conflicts due to\n" +
    " * global box model settings of Bootstrap. Two options, individual overrides and\n" +
    " * region resets, are available as plain CSS and uncompiled LESS formats.\n" +
    " */\n" +
    "\n" +
    "/* Option 1A: Override a single element's box model via CSS */\n" +
    ".element {\n" +
    "  -webkit-box-sizing: content-box;\n" +
    "     -moz-box-sizing: content-box;\n" +
    "          box-sizing: content-box;\n" +
    "}\n" +
    "\n" +
    "/* Option 1B: Override a single element's box model by using a Bootstrap LESS mixin */\n" +
    ".element {\n" +
    "  .box-sizing(content-box);\n" +
    "}\n" +
    "\n" +
    "/* Option 2A: Reset an entire region via CSS */\n" +
    ".reset-box-sizing,\n" +
    ".reset-box-sizing *,\n" +
    ".reset-box-sizing *:before,\n" +
    ".reset-box-sizing *:after {\n" +
    "  -webkit-box-sizing: content-box;\n" +
    "     -moz-box-sizing: content-box;\n" +
    "          box-sizing: content-box;\n" +
    "}\n" +
    "\n" +
    "/* Option 2B: Reset an entire region with a custom LESS mixin */\n" +
    ".reset-box-sizing {\n" +
    "  &,\n" +
    "  *,\n" +
    "  *:before,\n" +
    "  *:after {\n" +
    "    .box-sizing(content-box);\n" +
    "  }\n" +
    "}\n" +
    ".element {\n" +
    "  .reset-box-sizing();\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- Accessibility\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"accessibility\">Accessibility</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap follows common web standards, and with minimal extra effort, can be used to create sites that are accessible to those using <abbr title=\"Assistive Technology\" class=\"initialism\">AT</abbr>.</p>\n" +
    "\n" +
    "    <h3>Skip navigation</h3>\n" +
    "    <p>If your navigation contains many links and comes before the main content in the DOM, add a <code>Skip to main content</code> link immediately after your opening <code>&lt;body&gt;</code> tag. <a href=\"http://a11yproject.com/posts/skip-nav-links/\">(read why)</a></p>\n" +
    "{% highlight html %}\n" +
    "<body>\n" +
    "  <a href=\"#content\" class=\"sr-only\">Skip to main content</a>\n" +
    "  <div class=\"container\" id=\"content\">\n" +
    "    The main page content.\n" +
    "  </div>\n" +
    "</body>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Nested headings</h3>\n" +
    "    <p>When nesting headings (<code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code>), your primary document header should be an <code>&lt;h1&gt;</code>. Subsequent headings should make logical use of <code>&lt;h2&gt;</code> - <code>&lt;h6&gt;</code> such that screen readers can construct a table of contents for your pages.</p>\n" +
    "    <p>Learn more at <a href=\"http://squizlabs.github.io/HTML_CodeSniffer/Standards/Section508/\">HTML CodeSniffer</a> and <a href=\"http://accessibility.psu.edu/headings\">Penn State's AccessAbility</a>.</p>\n" +
    "\n" +
    "    <h3>Additional resources</h3>\n" +
    "    <ul>\n" +
    "      <li><a href=\"https://github.com/squizlabs/HTML_CodeSniffer\">\"HTML Codesniffer\" bookmarklet for identifying accessibility issues</a></li>\n" +
    "      <li><a href=\"http://a11yproject.com/\">The A11Y Project</a></li>\n" +
    "      <li><a href=\"https://developer.mozilla.org/en-US/docs/Accessibility\">MDN accessibility documentation</a></li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <!-- License FAQs\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"license-faqs\">License FAQs</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap is released under the Apache 2 license and is copyright {{ site.time | date: \"%Y\" }} Twitter. Boiled down to smaller chunks, it can be described with the following conditions.</p>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-12 col-lg-6\">\n" +
    "        <h4>It allows you to:</h4>\n" +
    "        <ul>\n" +
    "          <li>Freely download and use Bootstrap, in whole or in part, for personal, company internal or commercial purposes</li>\n" +
    "          <li>Use Bootstrap in packages or distributions that you create</li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"col-12 col-lg-6\">\n" +
    "        <h4>It forbids you to:</h4>\n" +
    "        <ul>\n" +
    "          <li>Redistribute any piece of Bootstrap without proper attribution</li>\n" +
    "          <li>Use any marks owned by Twitter in any way that might state or imply that Twitter endorses your distribution</li>\n" +
    "          <li>Use any marks owned by Twitter in any way that might state or imply that you created the Twitter software in question</li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-12 col-lg-6\">\n" +
    "        <h4>It requires you to:</h4>\n" +
    "        <ul>\n" +
    "          <li>Include a copy of the license in any redistribution you may make that includes Bootstrap</li>\n" +
    "          <li>Provide clear attribution to Twitter for any distributions that include Bootstrap</li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"col-12 col-lg-6\">\n" +
    "        <h4>It does not require you to:</h4>\n" +
    "        <ul>\n" +
    "          <li>Include the source of Bootstrap itself, or of any modifications you may have made to it, in any redistribution you may assemble that includes it</li>\n" +
    "          <li>Submit changes that you make to Bootstrap back to the Bootstrap project (though such feedback is encouraged)</li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <p>The full Bootstrap license is located <a href=\"{{ site.repo }}/blob/master/README.md\">in the project repository</a> for more information.</p>\n" +
    "  </div><!-- /.bs-docs-section -->\n" +
    "\n" +
    "\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"customizing\">Customizing Bootstrap</h1>\n" +
    "    </div>\n" +
    "    <p class=\"lead\">Bootstrap is best maintained when you treat it as a separate and independently-versioned dependency in your development environment. Doing this makes upgrading Bootstrap easier in the future.</p>\n" +
    "\n" +
    "    <p>Once you've downloaded and included Bootstrap's styles and scripts, you can customize its components. Just create a new stylesheet (LESS, if you like, or just plain CSS) to house your customizations.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Compiled or minified?</h4>\n" +
    "      <p>Unless you plan on reading the CSS, go with minified stylesheets. It's the same code, just compacted. Minified styles use less bandwidth, which is good, especially in production environments.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <p>From there, include whatever Bootstrap components and HTML content you need to create templates for your site's pages.</p>\n" +
    "\n" +
    "    <h3>Customizing components</h3>\n" +
    "    <p>You can customize components to varying degrees, but most fall into two camps: <em>light customizations</em> and <em>overhauls</em>. Plenty examples of both are available from third parties.</p>\n" +
    "    <p>We define <em>light customizations</em> as superficial changes, for example, color and font changes to existing Bootstrap components. A light customization example is the <a href=\"http://translate.twitter.com\">Twitter Translation Center</a> (coded by <a href=\"https://twitter.com/mdo\">@mdo</a>). Let's look at how to implement the custom button we wrote for this site, <code>.btn-ttc</code>.</p>\n" +
    "    <p>The stock Bootstrap buttons require just one class, <code>.btn</code>, to start.  Here we extend the <code>.btn</code> style with a new modifier class, <code>.btn-ttc</code>, that we will create. This gives us a distinct custom look with minimal effort.</p>\n" +
    "    <p>Our customized button will be coded like this:</p>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-ttc\">Save changes</button>\n" +
    "{% endhighlight %}\n" +
    "    <p>Note how <code>.btn-ttc</code> is added to the standard <code>.btn</code> class.</p>\n" +
    "\n" +
    "    <p>To implement this, in the custom stylesheet, add the following CSS:</p>\n" +
    "\n" +
    "{% highlight css %}\n" +
    "/* Custom button\n" +
    "-------------------------------------------------- */\n" +
    "\n" +
    "/* Override base .btn styles */\n" +
    "/* Apply text and background changes to three key states: default, hover, and active (click). */\n" +
    ".btn-ttc,\n" +
    ".btn-ttc:hover,\n" +
    ".btn-ttc:active {\n" +
    "  color: white;\n" +
    "  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n" +
    "  background-color: #007da7;\n" +
    "}\n" +
    "\n" +
    "/* Apply the custom-colored gradients */\n" +
    "/* Note: you'll need to include all the appropriate gradients for various browsers and standards. */\n" +
    ".btn-ttc {\n" +
    "  background-repeat: repeat-x;\n" +
    "  background-image: linear-gradient(top, #009ED2 0%, #007DA7 100%);\n" +
    "  ...\n" +
    "}\n" +
    "\n" +
    "/* Set the hover state */\n" +
    "/* An easy hover state is just to move the gradient up a small amount. Add other embellishments as you see fit. */\n" +
    ".btn-ttc:hover {\n" +
    "  background-position: 0 -15px;\n" +
    "}\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>In short: Look to the style source and duplicate the selectors you need for your modifications.</p>\n" +
    "    <p><strong>In summary, here's the basic workflow:</strong></p>\n" +
    "    <ul>\n" +
    "      <li>For each element you want to customize, find its code in the compiled Bootstrap CSS.</li>\n" +
    "      <li>Copy the component's selector and styles and paste them in your custom stylesheet. For instance, to customize the navbar background, just copy the <code>.navbar</code> style specification.</li>\n" +
    "      <li>In your custom stylesheet, edit the CSS you just copied from the Bootstrap source. No need for prepending additional classes, or appending <code>!important</code> here.  Keep it simple.</li>\n" +
    "      <li>Rinse and repeat until you're happy with your customizations.</li>\n" +
    "    </ul>\n" +
    "    <p>Once you are comfortable performing light customizations, visual overhauls are just as straightforward. For a site like <a href=\"http://yourkarma.com\">Karma</a>, which uses Bootstrap as a CSS reset with heavy modifications, more extensive work is involved.  But the same principle applies: include Bootstrap's default stylesheet first, then apply your custom stylesheet.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Alternate customization methods</h4>\n" +
    "      <p>While not recommended for folks new to Bootstrap, you may use one of two alternate methods for customization. The first is modifying the source <code>.less</code> files (making upgrades super difficult), and the second is mapping source LESS code to <a href=\"http://ruby.bvision.com/blog/please-stop-embedding-bootstrap-classes-in-your-html\">your own classes via mixins</a>. For the time being, neither of those options are documented here.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Removing potential bloat</h3>\n" +
    "    <p>Not all sites and applications need to make use of everything Bootstrap has to offer, especially in production environments where optimizing bandwidth is an issue. We encourage you to remove whatever is unused with our <a href=\"../customize/\">Customizer</a>.</p>\n" +
    "    <p>Using the Customizer, simply uncheck any component, feature, or asset you don't need. Hit download and swap out the default Bootstrap files with these newly customized ones. You'll get vanilla Bootstrap, but without the features *you* deem unnecessary. All custom builds include compiled and minified versions, so use whichever works for you.</p>\n" +
    "\n" +
    "  </div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/index.html',
    "---\n" +
    "layout: home\n" +
    "title: Bootstrap\n" +
    "base_url: \"./\"\n" +
    "---\n" +
    "\n" +
    "<main class=\"bs-masthead\" id=\"content\" role=\"main\">\n" +
    "  <div class=\"container\">\n" +
    "    <h1>Bootstrap</h1>\n" +
    "    <p class=\"lead\">Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>\n" +
    "    <p>\n" +
    "      <a href=\"{{ site.download_dist }}\" class=\"btn btn-outline-inverse btn-lg\" onclick=\"_gaq.push(['_trackEvent', 'Jumbotron actions', 'Download', 'Download {{ site.current_version }}']);\">Download Bootstrap</a>\n" +
    "      <a href=\"{{ site.download_source }}\" class=\"btn btn-outline-inverse btn-lg\" onclick=\"_gaq.push(['_trackEvent', 'Jumbotron actions', 'Download', 'Download {{ site.current_version source }}']);\">Download source</a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</main>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/javascript.html',
    "---\n" +
    "layout: default\n" +
    "title: JavaScript\n" +
    "slug: js\n" +
    "lead: \"Bring Bootstrap's components to life with over a dozen custom jQuery plugins. Easily include them all, or one by one.\"\n" +
    "base_url: \"../\"\n" +
    "---\n" +
    "\n" +
    "\n" +
    "  <!-- Overview\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"js-overview\">Overview</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3 id=\"js-individual-compiled\">Individual or compiled</h3>\n" +
    "    <p>Plugins can be included individually (using Bootstrap's individual <code>*.js</code> files), or all at once (using <code>bootstrap.js</code> or the minified <code>bootstrap.min.js</code>).</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Do not attempt to include both.</h4>\n" +
    "      <p>Both <code>bootstrap.js</code> and <code>bootstrap.min.js</code> contain all plugins in a single file.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Plugin dependencies</h4>\n" +
    "      <p>Some plugins and CSS components depend on other plugins. If you include plugins individually, make sure to check for these dependencies in the docs. Also note that all plugins depend on jQuery (this means jQuery must be included <strong>before</strong> the plugin files). <a href=\"{{ site.repo }}/blob/v{{ site.current_version }}/bower.json\">Consult our <code>bower.json</code></a> to see which versions of jQuery are supported.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3 id=\"js-data-attrs\">Data attributes</h3>\n" +
    "    <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using a plugin.</p>\n" +
    "\n" +
    "    <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to disable the data attribute API by unbinding all events on the document namespaced with <code>data-api</code>. This looks like this:\n" +
    "{% highlight js %}\n" +
    "$(document).off('.data-api')\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>Alternatively, to target a specific plugin, just include the plugin's name as a namespace along with the data-api namespace like this:</p>\n" +
    "{% highlight js %}\n" +
    "$(document).off('.alert.data-api')\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"js-programmatic-api\">Programmatic API</h3>\n" +
    "    <p>We also believe you should be able to use all Bootstrap plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.</p>\n" +
    "{% highlight js %}\n" +
    "$(\".btn.danger\").button(\"toggle\").addClass(\"fat\")\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>All methods should accept an optional options object, a string which targets a particular method, or nothing (which initiates a plugin with default behavior):</p>\n" +
    "{% highlight js %}\n" +
    "$(\"#myModal\").modal()                      // initialized with defaults\n" +
    "$(\"#myModal\").modal({ keyboard: false })   // initialized with no keyboard\n" +
    "$(\"#myModal\").modal('show')                // initializes and invokes show immediately</p>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>Each plugin also exposes its raw constructor on a <code>Constructor</code> property: <code>$.fn.popover.Constructor</code>. If you'd like to get a particular plugin instance, retrieve it directly from an element: <code>$('[rel=popover]').data('popover')</code>.</p>\n" +
    "\n" +
    "    <h3 id=\"js-noconflict\">No conflict</h3>\n" +
    "    <p>Sometimes it is necessary to use Bootstrap plugins with other UI frameworks. In these circumstances, namespace collisions can occasionally occur. If this happens, you may call <code>.noConflict</code> on the plugin you wish to revert the value of.</p>\n" +
    "{% highlight js %}\n" +
    "var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value\n" +
    "$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3 id=\"js-events\">Events</h3>\n" +
    "    <p>Bootstrap provides custom events for most plugin's unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. <code>show</code>) is triggered at the start of an event, and its past participle form (ex. <code>shown</code>) is trigger on the completion of an action.</p>\n" +
    "    <p>As of 3.0.0, all Bootstrap events are namespaced.</p>\n" +
    "    <p>All infinitive events provide <code>preventDefault</code> functionality. This provides the ability to stop the execution of an action before it starts.</p>\n" +
    "{% highlight js %}\n" +
    "$('#myModal').on('show.bs.modal', function (e) {\n" +
    "  if (!data) return e.preventDefault() // stops modal from being shown\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\" id=\"callout-third-party-libs\">\n" +
    "      <h4>Third-party libraries</h4>\n" +
    "      <p><strong>Bootstrap does not officially support third-party JavaScript libraries</strong> like Prototype or jQuery UI. Despite <code>.noConflict</code> and namespaced events, there may be compatibility problems that you need to fix on your own. Ask on the <a href=\"http://groups.google.com/group/twitter-bootstrap\">mailing list</a> if you need help.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Transitions\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"transitions\">Transitions <small>transition.js</small></h1>\n" +
    "    </div>\n" +
    "    <h3>About transitions</h3>\n" +
    "    <p>For simple transition effects, include <code>transition.js</code> once alongside the other JS files. If you're using the compiled (or minified) <code>bootstrap.js</code>, there is no need to include this&mdash;it's already there.</p>\n" +
    "    <h3>What's inside</h3>\n" +
    "    <p>Transition.js is a basic helper for <code>transitionEnd</code> events as well as a CSS transition emulator. It's used by the other plugins to check for CSS transition support and to catch hanging transitions.</p>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Modal\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"modals\">Modals <small>modal.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"modals-examples\">Examples</h2>\n" +
    "    <p>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\" id=\"callout-stacked-modals\">\n" +
    "      <h4>Overlapping modals not supported</h4>\n" +
    "      <p>Be sure not to open a modal while another is still visible. Showing more than one modal at a time requires custom code.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Mobile device caveats</h4>\n" +
    "      <p>There are some caveats regarding using modals on mobile devices. <a href=\"{{ page.base_url }}getting-started#mobile-modals\">See our browser support docs</a> for details.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Static example</h3>\n" +
    "    <p>A rendered modal with header, body, and set of actions in the footer.</p>\n" +
    "    <div class=\"bs-example bs-example-modal\">\n" +
    "      <div class=\"modal\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "          <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "              <h4 class=\"modal-title\">Modal title</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "              <p>One fine body&hellip;</p>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
    "            </div>\n" +
    "          </div><!-- /.modal-content -->\n" +
    "        </div><!-- /.modal-dialog -->\n" +
    "      </div><!-- /.modal -->\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "        <h4 class=\"modal-title\">Modal title</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <p>One fine body&hellip;</p>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
    "      </div>\n" +
    "    </div><!-- /.modal-content -->\n" +
    "  </div><!-- /.modal-dialog -->\n" +
    "</div><!-- /.modal -->\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Live demo</h3>\n" +
    "    <p>Toggle a modal via JavaScript by clicking the button below. It will slide down and fade in from the top of the page.</p>\n" +
    "    <!-- sample modal content -->\n" +
    "    <div id=\"myModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "      <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "\n" +
    "          <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "            <h4 class=\"modal-title\" id=\"myModalLabel\">Modal Heading</h4>\n" +
    "          </div>\n" +
    "          <div class=\"modal-body\">\n" +
    "            <h4>Text in a modal</h4>\n" +
    "            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n" +
    "\n" +
    "            <h4>Popover in a modal</h4>\n" +
    "            <p>This <a href=\"#\" role=\"button\" class=\"btn btn-default popover-test\" title=\"A Title\" data-content=\"And here's some amazing content. It's very engaging. right?\">button</a> should trigger a popover on click.</p>\n" +
    "\n" +
    "            <h4>Tooltips in a modal</h4>\n" +
    "            <p><a href=\"#\" class=\"tooltip-test\" title=\"Tooltip\">This link</a> and <a href=\"#\" class=\"tooltip-test\" title=\"Tooltip\">that link</a> should have tooltips on hover.</p>\n" +
    "\n" +
    "            <hr>\n" +
    "\n" +
    "            <h4>Overflowing text to show scroll behavior</h4>\n" +
    "            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n" +
    "            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n" +
    "            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n" +
    "            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n" +
    "            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n" +
    "            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n" +
    "            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n" +
    "            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n" +
    "            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n" +
    "          </div>\n" +
    "          <div class=\"modal-footer\">\n" +
    "            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
    "          </div>\n" +
    "\n" +
    "        </div><!-- /.modal-content -->\n" +
    "      </div><!-- /.modal-dialog -->\n" +
    "    </div><!-- /.modal -->\n" +
    "\n" +
    "    <div class=\"bs-example\" style=\"padding-bottom: 24px;\">\n" +
    "      <button class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "        Launch demo modal\n" +
    "      </button>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<!-- Button trigger modal -->\n" +
    "<button class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "  Launch demo modal\n" +
    "</button>\n" +
    "\n" +
    "<!-- Modal -->\n" +
    "<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        ...\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
    "      </div>\n" +
    "    </div><!-- /.modal-content -->\n" +
    "  </div><!-- /.modal-dialog -->\n" +
    "</div><!-- /.modal -->\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Make modals accessible</h4>\n" +
    "      <p>Be sure to add <code>role=\"dialog\"</code> to <code>.modal</code>, <code>aria-labelledby=\"myModalLabel\"</code> attribute to reference the modal title, and <code>aria-hidden=\"true\"</code> to tell assistive technologies to skip the modal's DOM elements.</p>\n" +
    "      <p>Additionally, you may give a description of your modal dialog with <code>aria-describedby</code> on <code>.modal</code>.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"modals-usage\">Usage</h2>\n" +
    "    <p>The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds <code>.model-open</code> to the <code>&lt;body&gt;</code> to override default scrolling behavior and generates a <code>.modal-backdrop</code> to provide a click area for dismissing shown modals when clicking outside the modal.</p>\n" +
    "\n" +
    "    <h3>Via data attributes</h3>\n" +
    "    <p>Activate a modal without writing JavaScript. Set <code>data-toggle=\"modal\"</code> on a controller element, like a button, along with a <code>data-target=\"#foo\"</code> or <code>href=\"#foo\"</code> to target a specific modal to toggle.</p>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">Launch modal</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Via JavaScript</h3>\n" +
    "    <p>Call a modal with id <code>myModal</code> with a single line of JavaScript:</p>\n" +
    "    {% highlight js %}$('#myModal').modal(options){% endhighlight %}\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-backdrop=\"\"</code>.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 100px;\">Name</th>\n" +
    "           <th style=\"width: 50px;\">type</th>\n" +
    "           <th style=\"width: 50px;\">default</th>\n" +
    "           <th>description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>backdrop</td>\n" +
    "           <td>boolean or the string <code>'static'</code></td>\n" +
    "           <td>true</td>\n" +
    "           <td>Includes a modal-backdrop element. Alternatively, specify <code>static</code> for a backdrop which doesn't close the modal on click.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>keyboard</td>\n" +
    "           <td>boolean</td>\n" +
    "           <td>true</td>\n" +
    "           <td>Closes the modal when escape key is pressed</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>show</td>\n" +
    "           <td>boolean</td>\n" +
    "           <td>true</td>\n" +
    "           <td>Shows the modal when initialized.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>remote</td>\n" +
    "           <td>path</td>\n" +
    "           <td>false</td>\n" +
    "           <td><p>If a remote URL is provided, content will be loaded via jQuery's <code>load</code> method and injected into the root of the modal element. If you're using the data-api, you may alternatively use the <code>href</code> attribute to specify the remote source. An example of this is shown below:</p>\n" +
    "{% highlight html %}\n" +
    "<a data-toggle=\"modal\" href=\"remote.html\" data-target=\"#modal\">Click me</a>\n" +
    "{% endhighlight %}\n" +
    "           </td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "\n" +
    "    <h4>.modal(options)</h4>\n" +
    "    <p>Activates your content as a modal. Accepts an optional options <code>object</code>.</p>\n" +
    "{% highlight js %}\n" +
    "$('#myModal').modal({\n" +
    "  keyboard: false\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>.modal('toggle')</h4>\n" +
    "    <p>Manually toggles a modal.</p>\n" +
    "    {% highlight js %}$('#myModal').modal('toggle'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.modal('show')</h4>\n" +
    "    <p>Manually opens a modal.</p>\n" +
    "    {% highlight js %}$('#myModal').modal('show'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.modal('hide')</h4>\n" +
    "    <p>Manually hides a modal.</p>\n" +
    "    {% highlight js %}$('#myModal').modal('hide'){% endhighlight %}\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <p>Bootstrap's modal class exposes a few events for hooking into modal functionality.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 150px;\">Event Type</th>\n" +
    "           <th>Description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>show.bs.modal</td>\n" +
    "           <td>This event fires immediately when the <code>show</code> instance method is called.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>shown.bs.modal</td>\n" +
    "           <td>This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hide.bs.modal</td>\n" +
    "           <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hidden.bs.modal</td>\n" +
    "           <td>This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#myModal').on('hidden.bs.modal', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Dropdowns\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"dropdowns\">Dropdowns <small>dropdown.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"dropdowns-examples\">Examples</h2>\n" +
    "    <p>Add dropdown menus to nearly anything with this simple plugin, including the navbar, tabs, and pills.</p>\n" +
    "\n" +
    "    <h3>Within a navbar</h3>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav id=\"navbar-example\" class=\"navbar navbar-default navbar-static\" role=\"navigation\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-js-navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project Name</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse bs-js-navbar-collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a id=\"drop1\" href=\"#\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop1\">\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Action</a></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Another action</a></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Something else here</a></li>\n" +
    "                <li role=\"presentation\" class=\"divider\"></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" id=\"drop2\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown 2 <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop2\">\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Action</a></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Another action</a></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Something else here</a></li>\n" +
    "                <li role=\"presentation\" class=\"divider\"></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li id=\"fat-menu\" class=\"dropdown\">\n" +
    "              <a href=\"#\" id=\"drop3\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown 3 <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop3\">\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Action</a></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Another action</a></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Something else here</a></li>\n" +
    "                <li role=\"presentation\" class=\"divider\"></li>\n" +
    "                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Separated link</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.nav-collapse -->\n" +
    "      </nav> <!-- /navbar-example -->\n" +
    "    </div> <!-- /example -->\n" +
    "\n" +
    "    <h3>Within tabs</h3>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <ul class=\"nav nav-pills\">\n" +
    "        <li class=\"active\"><a href=\"#\">Regular link</a></li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a id=\"drop4\" role=\"button\" data-toggle=\"dropdown\" href=\"#\">Dropdown <b class=\"caret\"></b></a>\n" +
    "          <ul id=\"menu1\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop4\">\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Action</a></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Another action</a></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Something else here</a></li>\n" +
    "            <li role=\"presentation\" class=\"divider\"></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a id=\"drop5\" role=\"button\" data-toggle=\"dropdown\" href=\"#\">Dropdown 2 <b class=\"caret\"></b></a>\n" +
    "          <ul id=\"menu2\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop5\">\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Action</a></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Another action</a></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Something else here</a></li>\n" +
    "            <li role=\"presentation\" class=\"divider\"></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a id=\"drop6\" role=\"button\" data-toggle=\"dropdown\" href=\"#\">Dropdown 3 <b class=\"caret\"></b></a>\n" +
    "          <ul id=\"menu3\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop6\">\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Action</a></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Another action</a></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Something else here</a></li>\n" +
    "            <li role=\"presentation\" class=\"divider\"></li>\n" +
    "            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"http://twitter.com/fat\">Separated link</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul> <!-- /tabs -->\n" +
    "    </div> <!-- /example -->\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"dropdowns-usage\">Usage</h2>\n" +
    "    <p>Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the <code>.open</code> class on the parent list item. When opened, the plugin also adds <code>.dropdown-backdrop</code> as a click area for closing dropdown menus when clicking outside the menu.</p>\n" +
    "\n" +
    "    <h3>Via data attributes</h3>\n" +
    "    <p>Add <code>data-toggle=\"dropdown\"</code> to a link or button to toggle a dropdown.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"dropdown\">\n" +
    "  <a data-toggle=\"dropdown\" href=\"#\">Dropdown trigger</a>\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "    ...\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "          <p>To keep URLs intact, use the <code>data-target</code> attribute instead of <code>href=\"#\"</code>.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"dropdown\">\n" +
    "  <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"/page.html\">\n" +
    "    Dropdown <span class=\"caret\"></span>\n" +
    "  </a>\n" +
    "\n" +
    "\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "    ...\n" +
    "  </ul>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Via JavaScript</h3>\n" +
    "    <p>Call the dropdowns via JavaScript:</p>\n" +
    "{% highlight js %}\n" +
    "$('.dropdown-toggle').dropdown()\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p><em>None</em></p>\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "    <h4>$().dropdown('toggle')</h4>\n" +
    "    <p>Toggles the dropdown menu of a given navbar or tabbed navigation.</p>\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th style=\"width: 150px;\">Event Type</th>\n" +
    "            <th>Description</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>show.bs.dropdown</td>\n" +
    "            <td>This event fires immediately when the show instance method is called.</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>shown.bs.dropdown</td>\n" +
    "            <td>This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete).</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>hide.bs.dropdown</td>\n" +
    "            <td>This event is fired immediately when the hide instance method has been called.</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>hidden.bs.dropdown</td>\n" +
    "            <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- ./bs-table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#myDropdown').on('show.bs.dropdown', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- ScrollSpy\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"scrollspy\">ScrollSpy <small>scrollspy.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"scrollspy-examples\">Example in navbar</h2>\n" +
    "    <p>The ScrollSpy plugin is for automatically updating nav targets based on scroll position. Scroll the area below the navbar and watch the active class change. The dropdown sub items will be highlighted as well.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <nav id=\"navbar-example2\" class=\"navbar navbar-default navbar-static\" role=\"navigation\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-js-navbar-scrollspy\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"#\">Project Name</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse bs-js-navbar-scrollspy\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li><a href=\"#fat\">@fat</a></li>\n" +
    "            <li><a href=\"#mdo\">@mdo</a></li>\n" +
    "            <li class=\"dropdown\">\n" +
    "              <a href=\"#\" id=\"navbarDrop1\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "              <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"navbarDrop1\">\n" +
    "                <li><a href=\"#one\" tabindex=\"-1\">one</a></li>\n" +
    "                <li><a href=\"#two\" tabindex=\"-1\">two</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"#three\" tabindex=\"-1\">three</a></li>\n" +
    "              </ul>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </nav>\n" +
    "      <div data-spy=\"scroll\" data-target=\"#navbar-example2\" data-offset=\"0\" class=\"scrollspy-example\">\n" +
    "        <h4 id=\"fat\">@fat</h4>\n" +
    "        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>\n" +
    "        <h4 id=\"mdo\">@mdo</h4>\n" +
    "        <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>\n" +
    "        <h4 id=\"one\">one</h4>\n" +
    "        <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>\n" +
    "        <h4 id=\"two\">two</h4>\n" +
    "        <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>\n" +
    "        <h4 id=\"three\">three</h4>\n" +
    "        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>\n" +
    "        <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"scrollspy-usage\">Usage</h2>\n" +
    "\n" +
    "    <h3>Via data attributes</h3>\n" +
    "    <p>To easily add scrollspy behavior to your topbar navigation, add <code>data-spy=\"scroll\"</code> to the element you want to spy on (most typically this would be the <code>&lt;body&gt;</code>). Then add the <code>data-target</code> attribute with the ID or class of the parent element of any Bootstrap <code>.nav</code> component.</p>\n" +
    "{% highlight html %}\n" +
    "<body data-spy=\"scroll\" data-target=\"#navbar-example\">\n" +
    "  ...\n" +
    "</body>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Via JavaScript</h3>\n" +
    "    <p>Call the scrollspy via JavaScript:</p>\n" +
    "{% highlight js %}\n" +
    "$('body').scrollspy({ target: '#navbar-example' })\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Resolvable ID targets required</h4>\n" +
    "      <p>Navbar links must have resolvable id targets. For example, a <code>&lt;a href=\"#home\"&gt;home&lt;/a&gt;</code> must correspond to something in the DOM like <code>&lt;div id=\"home\"&gt;&lt;/div&gt;</code>.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "    <h4>.scrollspy('refresh')</h4>\n" +
    "    <p>When using scrollspy in conjunction with adding or removing of elements from the DOM, you'll need to call the refresh method like so:</p>\n" +
    "{% highlight js %}\n" +
    "$('[data-spy=\"scroll\"]').each(function () {\n" +
    "  var $spy = $(this).scrollspy('refresh')\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-offset=\"\"</code>.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 100px;\">Name</th>\n" +
    "           <th style=\"width: 100px;\">type</th>\n" +
    "           <th style=\"width: 50px;\">default</th>\n" +
    "           <th>description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>offset</td>\n" +
    "           <td>number</td>\n" +
    "           <td>10</td>\n" +
    "           <td>Pixels to offset from top when calculating position of scroll.</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- ./bs-table-responsive -->\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 150px;\">Event Type</th>\n" +
    "           <th>Description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>activate.bs.scrollspy</td>\n" +
    "           <td>This event fires whenever a new item becomes activated by the scrollspy.</td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- ./bs-table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#myScrollspy').on('activate.bs.scrollspy', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Tabs\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"tabs\">Togglable tabs <small>tab.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"tabs-examples\">Example tabs</h2>\n" +
    "    <p>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus.</p>\n" +
    "    <div class=\"bs-example bs-example-tabs\">\n" +
    "      <ul id=\"myTab\" class=\"nav nav-tabs\">\n" +
    "        <li class=\"active\"><a href=\"#home\" data-toggle=\"tab\">Home</a></li>\n" +
    "        <li><a href=\"#profile\" data-toggle=\"tab\">Profile</a></li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a href=\"#\" id=\"myTabDrop1\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"myTabDrop1\">\n" +
    "            <li><a href=\"#dropdown1\" tabindex=\"-1\" data-toggle=\"tab\">@fat</a></li>\n" +
    "            <li><a href=\"#dropdown2\" tabindex=\"-1\" data-toggle=\"tab\">@mdo</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <div id=\"myTabContent\" class=\"tab-content\">\n" +
    "        <div class=\"tab-pane fade in active\" id=\"home\">\n" +
    "          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n" +
    "        </div>\n" +
    "        <div class=\"tab-pane fade\" id=\"profile\">\n" +
    "          <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\n" +
    "        </div>\n" +
    "        <div class=\"tab-pane fade\" id=\"dropdown1\">\n" +
    "          <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>\n" +
    "        </div>\n" +
    "        <div class=\"tab-pane fade\" id=\"dropdown2\">\n" +
    "          <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Extends tabbed navigation</h4>\n" +
    "      <p>This plugin extends the <a href=\"../components/#nav-tabs\">tabbed navigation component</a> to add tabbable areas.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"tabs-usage\">Usage</h2>\n" +
    "    <p>Enable tabbable tabs via JavaScript (each tab needs to be activated individually):</p>\n" +
    "{% highlight js %}\n" +
    "$('#myTab a').click(function (e) {\n" +
    "  e.preventDefault()\n" +
    "  $(this).tab('show')\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "          <p>You can activate individual tabs in several ways:</p>\n" +
    "{% highlight js %}\n" +
    "$('#myTab a[href=\"#profile\"]').tab('show') // Select tab by name\n" +
    "$('#myTab a:first').tab('show') // Select first tab\n" +
    "$('#myTab a:last').tab('show') // Select last tab\n" +
    "$('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Markup</h3>\n" +
    "    <p>You can activate a tab or pill navigation without writing any JavaScript by simply specifying <code>data-toggle=\"tab\"</code> or <code>data-toggle=\"pill\"</code> on an element. Adding the <code>nav</code> and <code>nav-tabs</code> classes to the tab <code>ul</code> will apply the Bootstrap <a href=\"{{ page.base_url }}components#nav-tabs\">tab styling</a>, while adding the <code>nav</code> and <code>nav-pills</code> classes will apply <a href=\"{{ page.base_url }}components#nav-pills\">pill styling</a>.</p>\n" +
    "{% highlight html %}\n" +
    "<!-- Nav tabs -->\n" +
    "<ul class=\"nav nav-tabs\">\n" +
    "  <li><a href=\"#home\" data-toggle=\"tab\">Home</a></li>\n" +
    "  <li><a href=\"#profile\" data-toggle=\"tab\">Profile</a></li>\n" +
    "  <li><a href=\"#messages\" data-toggle=\"tab\">Messages</a></li>\n" +
    "  <li><a href=\"#settings\" data-toggle=\"tab\">Settings</a></li>\n" +
    "</ul>\n" +
    "\n" +
    "<!-- Tab panes -->\n" +
    "<div class=\"tab-content\">\n" +
    "  <div class=\"tab-pane active\" id=\"home\">...</div>\n" +
    "  <div class=\"tab-pane\" id=\"profile\">...</div>\n" +
    "  <div class=\"tab-pane\" id=\"messages\">...</div>\n" +
    "  <div class=\"tab-pane\" id=\"settings\">...</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Fade effect</h3>\n" +
    "    <p>To make tabs fade in, add <code>.fade</code> to each <code>.tab-pane</code>. The first tab pane must also have <code>.in</code> to properly fade in initial content.</p>\n" +
    "{% highlight html %}\n" +
    "<div class=\"tab-content\">\n" +
    "  <div class=\"tab-pane fade in active\" id=\"home\">...</div>\n" +
    "  <div class=\"tab-pane fade\" id=\"profile\">...</div>\n" +
    "  <div class=\"tab-pane fade\" id=\"messages\">...</div>\n" +
    "  <div class=\"tab-pane fade\" id=\"settings\">...</div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "    <h4>$().tab</h4>\n" +
    "    <p>\n" +
    "      Activates a tab element and content container. Tab should have either a <code>data-target</code> or an <code>href</code> targeting a container node in the DOM.\n" +
    "    </p>\n" +
    "{% highlight html %}\n" +
    "<ul class=\"nav nav-tabs\" id=\"myTab\">\n" +
    "  <li class=\"active\"><a href=\"#home\" data-toggle=\"tab\">Home</a></li>\n" +
    "  <li><a href=\"#profile\" data-toggle=\"tab\">Profile</a></li>\n" +
    "  <li><a href=\"#messages\" data-toggle=\"tab\">Messages</a></li>\n" +
    "  <li><a href=\"#settings\" data-toggle=\"tab\">Settings</a></li>\n" +
    "</ul>\n" +
    "\n" +
    "<div class=\"tab-content\">\n" +
    "  <div class=\"tab-pane active\" id=\"home\">...</div>\n" +
    "  <div class=\"tab-pane\" id=\"profile\">...</div>\n" +
    "  <div class=\"tab-pane\" id=\"messages\">...</div>\n" +
    "  <div class=\"tab-pane\" id=\"settings\">...</div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "  $(function () {\n" +
    "    $('#myTab a:last').tab('show')\n" +
    "  })\n" +
    "</script>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 150px;\">Event Type</th>\n" +
    "           <th>Description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>show.bs.tab</td>\n" +
    "           <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "           <td>shown.bs.tab</td>\n" +
    "           <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('a[data-toggle=\"tab\"]').on('shown.bs.tab', function (e) {\n" +
    "  e.target // activated tab\n" +
    "  e.relatedTarget // previous tab\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Tooltips\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"tooltips\">Tooltips <small>tooltip.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"tooltips-examples\">Examples</h2>\n" +
    "    <p>Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don't rely on images, use CSS3 for animations, and data-attributes for local title storage.</p>\n" +
    "    <p>Hover over the links below to see tooltips:</p>\n" +
    "    <div class=\"bs-example tooltip-demo\">\n" +
    "      <p class=\"muted\" style=\"margin-bottom: 0;\">Tight pants next level keffiyeh <a href=\"#\" data-toggle=\"tooltip\" title=\"Default tooltip\">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href=\"#\" data-toggle=\"tooltip\" title=\"Another tooltip\">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href=\"#\" data-toggle=\"tooltip\" title=\"Another one here too\">whatever keytar</a>, scenester farm-to-table banksy Austin <a href=\"#\" data-toggle=\"tooltip\" title=\"The last tip!\">twitter handle</a> freegan cred raw denim single-origin coffee viral.\n" +
    "      </p>\n" +
    "    </div><!-- /example -->\n" +
    "\n" +
    "    <h3>Four directions</h3>\n" +
    "    <div class=\"bs-example tooltip-demo\">\n" +
    "      <div class=\"bs-example-tooltips\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">Tooltip on left</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">Tooltip on top</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">Tooltip on bottom</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">Tooltip on right</button>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Opt-in functionality</h4>\n" +
    "      <p>For performance reasons, the Tooltip and Popover data-apis are opt-in, meaning <strong>you must initialize them yourself</strong>.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Tooltips in button groups and input groups require special setting</h4>\n" +
    "      <p>When using tooltips on elements within a <code>.btn-group</code> or an <code>.input-group</code>, you'll have to specify the option <code>container: 'body'</code> (documented below) to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip is triggered).</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Tooltips on disabled elements require wrapper elements</h4>\n" +
    "      <p>To add a tooltip to a <code>disabled</code> or <code>.disabled</code> element, put the element inside of a <code>&lt;div&gt;</code> and apply the tooltip to that <code>&lt;div&gt;</code> instead.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"tooltips-usage\">Usage</h2>\n" +
    "    <p>The tooltip plugin generates content and markup on demand, and by default places tooltips after their trigger element.</p>\n" +
    "    <p>Trigger the tooltip via JavaScript:</p>\n" +
    "{% highlight js %}\n" +
    "$('#example').tooltip(options)\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Markup</h3>\n" +
    "    <p>The generated markup of a tooltip is rather simple, though it does require a position (by default, set to <code>top</code> by the plugin).</p>\n" +
    "{% highlight html linenos %}\n" +
    "<div class=\"tooltip\">\n" +
    "  <div class=\"tooltip-inner\">\n" +
    "    Tooltip!\n" +
    "  </div>\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-animation=\"\"</code>.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 100px;\">Name</th>\n" +
    "           <th style=\"width: 100px;\">type</th>\n" +
    "           <th style=\"width: 50px;\">default</th>\n" +
    "           <th>description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>animation</td>\n" +
    "           <td>boolean</td>\n" +
    "           <td>true</td>\n" +
    "           <td>apply a CSS fade transition to the tooltip</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>html</td>\n" +
    "           <td>boolean</td>\n" +
    "           <td>false</td>\n" +
    "           <td>Insert HTML into the tooltip. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>placement</td>\n" +
    "           <td>string | function</td>\n" +
    "           <td>'top'</td>\n" +
    "           <td>how to position the tooltip - top | bottom | left | right | auto. <br> When \"auto\" is specified, it will dynamically reorient the tooltip. For example, if placement is \"auto left\", the tooltip will display to the left when possible, otherwise it will display right.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>selector</td>\n" +
    "           <td>string</td>\n" +
    "           <td>false</td>\n" +
    "           <td>If a selector is provided, tooltip objects will be delegated to the specified targets.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>title</td>\n" +
    "           <td>string | function</td>\n" +
    "           <td>''</td>\n" +
    "           <td>default title value if <code>title</code> attribute isn't present</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>trigger</td>\n" +
    "           <td>string</td>\n" +
    "           <td>'hover focus'</td>\n" +
    "           <td>how tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>delay</td>\n" +
    "           <td>number | object</td>\n" +
    "           <td>0</td>\n" +
    "           <td>\n" +
    "            <p>delay showing and hiding the tooltip (ms) - does not apply to manual trigger type</p>\n" +
    "            <p>If a number is supplied, delay is applied to both hide/show</p>\n" +
    "            <p>Object structure is: <code>delay: { show: 500, hide: 100 }</code></p>\n" +
    "           </td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>container</td>\n" +
    "           <td>string | false</td>\n" +
    "           <td>false</td>\n" +
    "           <td>\n" +
    "            <p>Appends the tooltip to a specific element. Example: <code>container: 'body'</code></p>\n" +
    "           </td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Data attributes for individual tooltips</h4>\n" +
    "      <p>Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Markup</h3>\n" +
    "{% highlight html %}\n" +
    "<a href=\"#\" data-toggle=\"tooltip\" title=\"first tooltip\">Hover over me</a>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "\n" +
    "    <h4>$().tooltip(options)</h4>\n" +
    "    <p>Attaches a tooltip handler to an element collection.</p>\n" +
    "\n" +
    "    <h4>.tooltip('show')</h4>\n" +
    "    <p>Reveals an element's tooltip.</p>\n" +
    "    {% highlight js %}$('#element').tooltip('show'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.tooltip('hide')</h4>\n" +
    "    <p>Hides an element's tooltip.</p>\n" +
    "    {% highlight js %}$('#element').tooltip('hide'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.tooltip('toggle')</h4>\n" +
    "    <p>Toggles an element's tooltip.</p>\n" +
    "    {% highlight js %}$('#element').tooltip('toggle'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.tooltip('destroy')</h4>\n" +
    "    <p>Hides and destroys an element's tooltip.</p>\n" +
    "    {% highlight js %}$('#element').tooltip('destroy'){% endhighlight %}\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 150px;\">Event Type</th>\n" +
    "           <th>Description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>show.bs.tooltip</td>\n" +
    "           <td>This event fires immediately when the <code>show</code> instance method is called.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>shown.bs.tooltip</td>\n" +
    "           <td>This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hide.bs.tooltip</td>\n" +
    "           <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hidden.bs.tooltip</td>\n" +
    "           <td>This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#myTooltip').on('hidden.bs.tooltip', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Popovers\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"popovers\">Popovers <small>popover.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"popovers-examples\">Examples</h2>\n" +
    "    <p>Add small overlays of content, like those on the iPad, to any element for housing secondary information.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Plugin dependency</h4>\n" +
    "      <p>Popovers require the <a href=\"#tooltips\">tooltip plugin</a> to be included in your version of Bootstrap.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Opt-in functionality</h4>\n" +
    "      <p>For performance reasons, the Tooltip and Popover data-apis are opt-in, meaning <strong>you must initialize them yourself</strong>.</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Popovers in button groups and input groups require special setting</h4>\n" +
    "      <p>When using popovers on elements within a <code>.btn-group</code> or an <code>.input-group</code>, you'll have to specify the option <code>container: 'body'</code> (documented below) to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the popover is triggered).</p>\n" +
    "    </div>\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Popovers on disabled elements require wrapper elements</h4>\n" +
    "      <p>To add a popover to a <code>disabled</code> or <code>.disabled</code> element, put the element inside of a <code>&lt;div&gt;</code> and apply the popover to that <code>&lt;div&gt;</code> instead.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Static popover</h3>\n" +
    "    <p>Four options are available: top, right, bottom, and left aligned.</p>\n" +
    "    <div class=\"bs-example bs-example-popover\">\n" +
    "      <div class=\"popover top\">\n" +
    "        <div class=\"arrow\"></div>\n" +
    "        <h3 class=\"popover-title\">Popover top</h3>\n" +
    "        <div class=\"popover-content\">\n" +
    "          <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"popover right\">\n" +
    "        <div class=\"arrow\"></div>\n" +
    "        <h3 class=\"popover-title\">Popover right</h3>\n" +
    "        <div class=\"popover-content\">\n" +
    "          <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"popover bottom\">\n" +
    "        <div class=\"arrow\"></div>\n" +
    "        <h3 class=\"popover-title\">Popover bottom</h3>\n" +
    "\n" +
    "        <div class=\"popover-content\">\n" +
    "          <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"popover left\">\n" +
    "        <div class=\"arrow\"></div>\n" +
    "        <h3 class=\"popover-title\">Popover left</h3>\n" +
    "        <div class=\"popover-content\">\n" +
    "          <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"clearfix\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Live demo</h3>\n" +
    "    <div class=\"bs-example\" style=\"padding-bottom: 24px;\">\n" +
    "      <a href=\"#\" class=\"btn btn-lg btn-danger\" data-toggle=\"popover\" title=\"A Title\" data-content=\"And here's some amazing content. It's very engaging. right?\" role=\"button\">Click to toggle popover</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>Four directions</h4>\n" +
    "    <div class=\"bs-example tooltip-demo\">\n" +
    "      <div class=\"bs-example-tooltips\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n" +
    "          Popover on left\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n" +
    "          Popover on top\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"bottom\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n" +
    "          Popover on bottom\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n" +
    "          Popover on right\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"popovers-usage\">Usage</h2>\n" +
    "    <p>Enable popovers via JavaScript:</p>\n" +
    "    {% highlight js %}$('#example').popover(options){% endhighlight %}\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-animation=\"\"</code>.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th style=\"width: 100px;\">Name</th>\n" +
    "            <th style=\"width: 100px;\">type</th>\n" +
    "            <th style=\"width: 50px;\">default</th>\n" +
    "            <th>description</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>animation</td>\n" +
    "            <td>boolean</td>\n" +
    "            <td>true</td>\n" +
    "            <td>apply a CSS fade transition to the tooltip</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>html</td>\n" +
    "            <td>boolean</td>\n" +
    "            <td>false</td>\n" +
    "            <td>Insert HTML into the popover. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>placement</td>\n" +
    "            <td>string | function</td>\n" +
    "            <td>'right'</td>\n" +
    "            <td>how to position the popover - top | bottom | left | right | auto.<br> When \"auto\" is specified, it will dynamically reorient the popover. For example, if placement is \"auto left\", the tooltip will display to the left when possible, otherwise it will display right.</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>selector</td>\n" +
    "            <td>string</td>\n" +
    "            <td>false</td>\n" +
    "            <td>if a selector is provided, tooltip objects will be delegated to the specified targets. in practice, this is used to enable dynamic HTML content to have popovers added. See <a href=\"https://github.com/twbs/bootstrap/issues/4215\">this</a> and <a href=\"http://jsfiddle.net/fScua/\">an informative example</a>.</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>trigger</td>\n" +
    "            <td>string</td>\n" +
    "            <td>'click'</td>\n" +
    "            <td>how popover is triggered - click | hover | focus | manual</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>title</td>\n" +
    "            <td>string | function</td>\n" +
    "            <td>''</td>\n" +
    "            <td>default title value if <code>title</code> attribute isn't present</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>content</td>\n" +
    "            <td>string | function</td>\n" +
    "            <td>''</td>\n" +
    "            <td>default content value if <code>data-content</code> attribute isn't present</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>delay</td>\n" +
    "            <td>number | object</td>\n" +
    "            <td>0</td>\n" +
    "            <td>\n" +
    "             <p>delay showing and hiding the popover (ms) - does not apply to manual trigger type</p>\n" +
    "             <p>If a number is supplied, delay is applied to both hide/show</p>\n" +
    "             <p>Object structure is: <code>delay: { show: 500, hide: 100 }</code></p>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>container</td>\n" +
    "            <td>string | false</td>\n" +
    "            <td>false</td>\n" +
    "            <td>\n" +
    "             <p>Appends the popover to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.</p>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Data attributes for individual popovers</h4>\n" +
    "      <p>Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "    <h4>$().popover(options)</h4>\n" +
    "    <p>Initializes popovers for an element collection.</p>\n" +
    "\n" +
    "    <h4>.popover('show')</h4>\n" +
    "    <p>Reveals an elements popover.</p>\n" +
    "    {% highlight js %}$('#element').popover('show'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.popover('hide')</h4>\n" +
    "    <p>Hides an elements popover.</p>\n" +
    "    {% highlight js %}$('#element').popover('hide'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.popover('toggle')</h4>\n" +
    "    <p>Toggles an elements popover.</p>\n" +
    "    {% highlight js %}$('#element').popover('toggle'){% endhighlight %}\n" +
    "\n" +
    "    <h4>.popover('destroy')</h4>\n" +
    "    <p>Hides and destroys an element's popover.</p>\n" +
    "    {% highlight js %}$('#element').popover('destroy'){% endhighlight %}\n" +
    "    <h3>Events</h3>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 150px;\">Event Type</th>\n" +
    "           <th>Description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>show.bs.popover</td>\n" +
    "           <td>This event fires immediately when the <code>show</code> instance method is called.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>shown.bs.popover</td>\n" +
    "           <td>This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hide.bs.popover</td>\n" +
    "           <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hidden.bs.popover</td>\n" +
    "           <td>This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#myPopover').on('hidden.bs.popover', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Alert\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"alerts\">Alert messages <small>alert.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"alerts-examples\">Example alerts</h2>\n" +
    "    <p>Add dismiss functionality to all alert messages with this plugin.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"alert alert-warning fade in\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "        <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"alert alert-danger fade in\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "        <h4>Oh snap! You got an error!</h4>\n" +
    "        <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>\n" +
    "        <p>\n" +
    "          <button type=\"button\" class=\"btn btn-danger\">Take this action</button>\n" +
    "          <button type=\"button\" class=\"btn btn-default\">Or do this</button>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"alerts-usage\">Usage</h2>\n" +
    "    <p>Enable dismissal of an alert via JavaScript:</p>\n" +
    "    {% highlight js %}$(\".alert\").alert(){% endhighlight %}\n" +
    "\n" +
    "    <h3>Markup</h3>\n" +
    "    <p>Just add <code>data-dismiss=\"alert\"</code> to your close button to automatically give an alert close functionality.</p>\n" +
    "    {% highlight html %}<a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>{% endhighlight %}\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "\n" +
    "    <h4>$().alert()</h4>\n" +
    "    <p>Wraps all alerts with close functionality. To have your alerts animate out when closed, make sure they have the <code>.fade</code> and <code>.in</code> class already applied to them.</p>\n" +
    "\n" +
    "    <h4>.alert('close')</h4>\n" +
    "    <p>Closes an alert.</p>\n" +
    "    {% highlight js %}$(\".alert\").alert('close'){% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <p>Bootstrap's alert class exposes a few events for hooking into alert functionality.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th style=\"width: 150px;\">Event Type</th>\n" +
    "            <th>Description</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>close.bs.alert</td>\n" +
    "            <td>This event fires immediately when the <code>close</code> instance method is called.</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>closed.bs.alert</td>\n" +
    "            <td>This event is fired when the alert has been closed (will wait for CSS transitions to complete).</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#my-alert').bind('closed.bs.alert', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Buttons\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"buttons\">Buttons <small>button.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"buttons-examples\">Example uses</h2>\n" +
    "    <p>Do more with buttons. Control button states or create groups of buttons for more components like toolbars.</p>\n" +
    "\n" +
    "    <h4>Stateful</h4>\n" +
    "    <p>Add <code>data-loading-text=\"Loading...\"</code> to use a loading state on a button.</p>\n" +
    "    <div class=\"bs-example\" style=\"padding-bottom: 24px;\">\n" +
    "      <button type=\"button\" id=\"fat-btn\" data-loading-text=\"Loading...\" class=\"btn btn-primary\">\n" +
    "        Loading state\n" +
    "      </button>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" data-loading-text=\"Loading...\" class=\"btn btn-primary\">\n" +
    "  Loading state\n" +
    "</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Single toggle</h4>\n" +
    "    <p>Add <code>data-toggle=\"button\"</code> to activate toggling on a single button.</p>\n" +
    "    <div class=\"bs-example\" style=\"padding-bottom: 24px;\">\n" +
    "      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\">Single toggle</button>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\">Single toggle</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Checkbox</h4>\n" +
    "    <p>Add <code>data-toggle=\"buttons\"</code> to a group of checkboxes for checkbox style toggling on btn-group.</p>\n" +
    "    <div class=\"bs-example\" style=\"padding-bottom: 24px;\">\n" +
    "      <div class=\"btn-group\" data-toggle=\"buttons\">\n" +
    "        <label class=\"btn btn-primary\">\n" +
    "          <input type=\"checkbox\"> Option 1\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-primary\">\n" +
    "          <input type=\"checkbox\"> Option 2\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-primary\">\n" +
    "          <input type=\"checkbox\"> Option 3\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group\" data-toggle=\"buttons\">\n" +
    "  <label class=\"btn btn-primary\">\n" +
    "    <input type=\"checkbox\"> Option 1\n" +
    "  </label>\n" +
    "  <label class=\"btn btn-primary\">\n" +
    "    <input type=\"checkbox\"> Option 2\n" +
    "  </label>\n" +
    "  <label class=\"btn btn-primary\">\n" +
    "    <input type=\"checkbox\"> Option 3\n" +
    "  </label>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>Radio</h4>\n" +
    "    <p>Add <code>data-toggle=\"buttons\"</code> to a group of radio inputs for radio style toggling on btn-group.</p>\n" +
    "    <div class=\"bs-example\" style=\"padding-bottom: 24px;\">\n" +
    "      <div class=\"btn-group\" data-toggle=\"buttons\">\n" +
    "        <label class=\"btn btn-primary\">\n" +
    "          <input type=\"radio\" name=\"options\" id=\"option1\"> Option 1\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-primary\">\n" +
    "          <input type=\"radio\" name=\"options\" id=\"option2\"> Option 2\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-primary\">\n" +
    "          <input type=\"radio\" name=\"options\" id=\"option3\"> Option 3\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"btn-group\" data-toggle=\"buttons\">\n" +
    "  <label class=\"btn btn-primary\">\n" +
    "    <input type=\"radio\" name=\"options\" id=\"option1\"> Option 1\n" +
    "  </label>\n" +
    "  <label class=\"btn btn-primary\">\n" +
    "    <input type=\"radio\" name=\"options\" id=\"option2\"> Option 2\n" +
    "  </label>\n" +
    "  <label class=\"btn btn-primary\">\n" +
    "    <input type=\"radio\" name=\"options\" id=\"option3\"> Option 3\n" +
    "  </label>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"buttons-usage\">Usage</h2>\n" +
    "    <p>Enable buttons via JavaScript:</p>\n" +
    "{% highlight js %}\n" +
    "$('.btn-group').button()\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Markup</h3>\n" +
    "    <p>Data attributes are integral to the button plugin. Check out the example code below for the various markup types.</p>\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p><em>None</em></p>\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "\n" +
    "    <h4>$().button('toggle')</h4>\n" +
    "    <p>Toggles push state. Gives the button the appearance that it has been activated.</p>\n" +
    "    <div class=\"bs-callout bs-callout-info\">\n" +
    "      <h4>Auto toggling</h4>\n" +
    "      <p>You can enable auto toggling of a button by using the <code>data-toggle</code> attribute.</p>\n" +
    "    </div>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn\" data-toggle=\"button\">...</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>$().button('loading')</h4>\n" +
    "    <p>Sets button state to loading - disables button and swaps text to loading text. Loading text should be defined on the button element using the data attribute <code>data-loading-text</code>.\n" +
    "    </p>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn\" data-loading-text=\"loading stuff...\">...</button>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Cross-browser compatibility</h4>\n" +
    "      <p><a href=\"https://github.com/twbs/bootstrap/issues/793\">Firefox persists the disabled state across page loads</a>. A workaround for this is to use <code>autocomplete=\"off\"</code>.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h4>$().button('reset')</h4>\n" +
    "    <p>Resets button state - swaps text to original text.</p>\n" +
    "\n" +
    "    <h4>$().button(string)</h4>\n" +
    "    <p>Resets button state - swaps text to any data defined text state.</p>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn\" data-complete-text=\"finished!\" >...</button>\n" +
    "<script>\n" +
    "  $('.btn').button('complete')\n" +
    "</script>\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Collapse\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"collapse\">Collapse <small>collapse.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>About</h3>\n" +
    "    <p>Get base styles and flexible support for collapsible components like accordions and navigation.</p>\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-danger\">\n" +
    "      <h4>Plugin dependency</h4>\n" +
    "      <p>Collapse requires the <a href=\"#transitions\">transitions plugin</a> to be included in your version of Bootstrap.</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"collapse-examples\">Example accordion</h2>\n" +
    "    <p>Using the collapse plugin, we built a simple accordion by extending the panel component.</p>\n" +
    "\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div class=\"panel-group\" id=\"accordion\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "          <div class=\"panel-heading\">\n" +
    "            <h4 class=\"panel-title\">\n" +
    "              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n" +
    "                Collapsible Group Item #1\n" +
    "              </a>\n" +
    "            </h4>\n" +
    "          </div>\n" +
    "          <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n" +
    "            <div class=\"panel-body\">\n" +
    "              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "          <div class=\"panel-heading\">\n" +
    "            <h4 class=\"panel-title\">\n" +
    "              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n" +
    "                Collapsible Group Item #2\n" +
    "              </a>\n" +
    "            </h4>\n" +
    "          </div>\n" +
    "          <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n" +
    "            <div class=\"panel-body\">\n" +
    "              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "          <div class=\"panel-heading\">\n" +
    "            <h4 class=\"panel-title\">\n" +
    "              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n" +
    "                Collapsible Group Item #3\n" +
    "              </a>\n" +
    "            </h4>\n" +
    "          </div>\n" +
    "          <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n" +
    "            <div class=\"panel-body\">\n" +
    "              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"panel-group\" id=\"accordion\">\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n" +
    "          Collapsible Group Item #1\n" +
    "        </a>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n" +
    "          Collapsible Group Item #2\n" +
    "        </a>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n" +
    "          Collapsible Group Item #3\n" +
    "        </a>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <p>You can also use the plugin without the accordion markup. Make a button toggle the expanding and collapsing of another element.</p>\n" +
    "{% highlight html %}\n" +
    "<button type=\"button\" class=\"btn btn-danger\" data-toggle=\"collapse\" data-target=\"#demo\">\n" +
    "  simple collapsible\n" +
    "</button>\n" +
    "\n" +
    "<div id=\"demo\" class=\"collapse in\">...</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h2 id=\"collapse-usage\">Usage</h2>\n" +
    "    <p>The collapse plugin utilizes a few classes to handle the heavy lifting:</p>\n" +
    "    <ul>\n" +
    "      <li><code>.collapse</code> hides the content</li>\n" +
    "      <li><code>.collapse.in</code> shows the content</li>\n" +
    "      <li><code>.collapsing</code> is added when the transition starts, and removed when it finishes</li>\n" +
    "    </ul>\n" +
    "    <p>These classes can be found in <code>component-animations.less</code>.</p>\n" +
    "\n" +
    "    <h3>Via data attributes</h3>\n" +
    "    <p>Just add <code>data-toggle=\"collapse\"</code> and a <code>data-target</code> to element to automatically assign control of a collapsible element. The <code>data-target</code> attribute accepts a CSS selector to apply the collapse to. Be sure to add the class <code>collapse</code> to the collapsible element. If you'd like it to default open, add the additional class <code>in</code>.</p>\n" +
    "    <p>To add accordion-like group management to a collapsible control, add the data attribute <code>data-parent=\"#selector\"</code>. Refer to the demo to see this in action.</p>\n" +
    "\n" +
    "    <h3>Via JavaScript</h3>\n" +
    "    <p>Enable manually with:</p>\n" +
    "{% highlight js %}\n" +
    "$(\".collapse\").collapse()\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-parent=\"\"</code>.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 100px;\">Name</th>\n" +
    "           <th style=\"width: 50px;\">type</th>\n" +
    "           <th style=\"width: 50px;\">default</th>\n" +
    "           <th>description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>parent</td>\n" +
    "           <td>selector</td>\n" +
    "           <td>false</td>\n" +
    "           <td>If selector then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this dependent on the <code>accordion-group</code> class)</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>toggle</td>\n" +
    "           <td>boolean</td>\n" +
    "           <td>true</td>\n" +
    "           <td>Toggles the collapsible element on invocation</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "\n" +
    "    <h4>.collapse(options)</h4>\n" +
    "    <p>Activates your content as a collapsible element. Accepts an optional options <code>object</code>.\n" +
    "{% highlight js %}\n" +
    "$('#myCollapsible').collapse({\n" +
    "  toggle: false\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>.collapse('toggle')</h4>\n" +
    "    <p>Toggles a collapsible element to shown or hidden.</p>\n" +
    "\n" +
    "    <h4>.collapse('show')</h4>\n" +
    "    <p>Shows a collapsible element.</p>\n" +
    "\n" +
    "    <h4>.collapse('hide')</h4>\n" +
    "    <p>Hides a collapsible element.</p>\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <p>Bootstrap's collapse class exposes a few events for hooking into collapse functionality.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 150px;\">Event Type</th>\n" +
    "           <th>Description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>show.bs.collapse</td>\n" +
    "           <td>This event fires immediately when the <code>show</code> instance method is called.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>shown.bs.collapse</td>\n" +
    "           <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hide.bs.collapse</td>\n" +
    "           <td>\n" +
    "            This event is fired immediately when the <code>hide</code> method has been called.\n" +
    "           </td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>hidden.bs.collapse</td>\n" +
    "           <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#myCollapsible').on('hidden.bs.collapse', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Carousel\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"carousel\">Carousel <small>carousel.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"carousel-examples\">Examples</h2>\n" +
    "    <p>The slideshow below shows a generic plugin and component for cycling through elements like a carousel.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "        <ol class=\"carousel-indicators\">\n" +
    "          <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "          <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "          <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "        </ol>\n" +
    "        <div class=\"carousel-inner\">\n" +
    "          <div class=\"item active\">\n" +
    "            <img data-src=\"holder.js/900x500/auto/#777:#555/text:First slide\" alt=\"First slide\">\n" +
    "          </div>\n" +
    "          <div class=\"item\">\n" +
    "            <img data-src=\"holder.js/900x500/auto/#666:#444/text:Second slide\" alt=\"Second slide\">\n" +
    "          </div>\n" +
    "          <div class=\"item\">\n" +
    "            <img data-src=\"holder.js/900x500/auto/#555:#333/text:Third slide\" alt=\"Third slide\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n" +
    "          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n" +
    "          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "  <!-- Indicators -->\n" +
    "  <ol class=\"carousel-indicators\">\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "  </ol>\n" +
    "\n" +
    "  <!-- Wrapper for slides -->\n" +
    "  <div class=\"carousel-inner\">\n" +
    "    <div class=\"item active\">\n" +
    "      <img src=\"...\" alt=\"...\">\n" +
    "      <div class=\"carousel-caption\">\n" +
    "        ...\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    ...\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Controls -->\n" +
    "  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n" +
    "    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "  </a>\n" +
    "  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n" +
    "    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "  </a>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "<div class=\"bs-callout bs-callout-warning\" id=\"callout-carousel-transitions\">\n" +
    "  <h4>Transition animations not supported in Internet Explorer 8 &amp; 9</h4>\n" +
    "  <p>Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 &amp; 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include jQuery-based fallbacks for the transitions.</p>\n" +
    "</div>\n" +
    "\n" +
    "    <h3>Optional captions</h3>\n" +
    "    <p>Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.item</code>. Place just about any optional HTML within there and it will be automatically aligned and formatted.</p>\n" +
    "    <div class=\"bs-example\">\n" +
    "      <div id=\"carousel-example-captions\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "        <ol class=\"carousel-indicators\">\n" +
    "          <li data-target=\"#carousel-example-captions\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "          <li data-target=\"#carousel-example-captions\" data-slide-to=\"1\"></li>\n" +
    "          <li data-target=\"#carousel-example-captions\" data-slide-to=\"2\"></li>\n" +
    "        </ol>\n" +
    "        <div class=\"carousel-inner\">\n" +
    "          <div class=\"item active\">\n" +
    "            <img data-src=\"holder.js/900x500/auto/#777:#777\" alt=\"First slide image\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "              <h3>First slide label</h3>\n" +
    "              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"item\">\n" +
    "            <img data-src=\"holder.js/900x500/auto/#666:#666\" alt=\"Second slide image\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "              <h3>Second slide label</h3>\n" +
    "              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"item\">\n" +
    "            <img data-src=\"holder.js/900x500/auto/#555:#5555\" alt=\"Third slide image\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "              <h3>Third slide label</h3>\n" +
    "              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <a class=\"left carousel-control\" href=\"#carousel-example-captions\" data-slide=\"prev\">\n" +
    "          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "        </a>\n" +
    "        <a class=\"right carousel-control\" href=\"#carousel-example-captions\" data-slide=\"next\">\n" +
    "          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div><!-- /example -->\n" +
    "{% highlight html %}\n" +
    "<div class=\"item active\">\n" +
    "  <img src=\"...\" alt=\"...\">\n" +
    "  <div class=\"carousel-caption\">\n" +
    "    <h3>...</h3>\n" +
    "    <p>...</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "<div class=\"bs-callout bs-callout-danger\">\n" +
    "  <h4>Accessibility issue</h4>\n" +
    "  <p>The carousel component is generally not compliant with accessibility standards. If you need to be compliant, please consider other options for presenting your content.</p>\n" +
    "</div>\n" +
    "\n" +
    "    <h2 id=\"carousel-usage\">Usage</h2>\n" +
    "\n" +
    "    <h3>Via data attributes</h3>\n" +
    "    <p>Use data attributes to easily control the position of the carousel. <code>data-slide</code> accepts the keywords <code>prev</code> or <code>next</code>, which alters the slide position relative to its current position. Alternatively, use <code>data-slide-to</code> to pass a raw slide index to the carousel <code>data-slide-to=\"2\"</code>, which shifts the slide position to a particular index beginning with <code>0</code>.</p>\n" +
    "    <p>The <code>data-ride=\"carousel\"</code> attribute is used to mark a carousel as animating starting at page load.</p>\n" +
    "\n" +
    "    <h3>Via JavaScript</h3>\n" +
    "    <p>Call carousel manually with:</p>\n" +
    "{% highlight js %}\n" +
    "$('.carousel').carousel()\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-interval=\"\"</code>.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 100px;\">Name</th>\n" +
    "           <th style=\"width: 50px;\">type</th>\n" +
    "           <th style=\"width: 50px;\">default</th>\n" +
    "           <th>description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>interval</td>\n" +
    "           <td>number</td>\n" +
    "           <td>5000</td>\n" +
    "           <td>The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>pause</td>\n" +
    "           <td>string</td>\n" +
    "           <td>\"hover\"</td>\n" +
    "           <td>Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>wrap</td>\n" +
    "           <td>boolean</td>\n" +
    "           <td>true</td>\n" +
    "           <td>Whether the carousel should cycle continuously or have hard stops.</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "\n" +
    "    <h3>Methods</h3>\n" +
    "\n" +
    "    <h4>.carousel(options)</h4>\n" +
    "    <p>Initializes the carousel with an optional options <code>object</code> and starts cycling through items.</p>\n" +
    "{% highlight js %}\n" +
    "$('.carousel').carousel({\n" +
    "  interval: 2000\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <h4>.carousel('cycle')</h4>\n" +
    "    <p>Cycles through the carousel items from left to right.</p>\n" +
    "\n" +
    "    <h4>.carousel('pause')</h4>\n" +
    "    <p>Stops the carousel from cycling through items.</p>\n" +
    "\n" +
    "\n" +
    "    <h4>.carousel(number)</h4>\n" +
    "    <p>Cycles the carousel to a particular frame (0 based, similar to an array).</p>\n" +
    "\n" +
    "    <h4>.carousel('prev')</h4>\n" +
    "    <p>Cycles to the previous item.</p>\n" +
    "\n" +
    "    <h4>.carousel('next')</h4>\n" +
    "    <p>Cycles to the next item.</p>\n" +
    "\n" +
    "    <h3>Events</h3>\n" +
    "    <p>Bootstrap's carousel class exposes two events for hooking into carousel functionality.</p>\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 150px;\">Event Type</th>\n" +
    "           <th>Description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>slide.bs.carousel</td>\n" +
    "           <td>This event fires immediately when the <code>slide</code> instance method is invoked.</td>\n" +
    "         </tr>\n" +
    "         <tr>\n" +
    "           <td>slid.bs.carousel</td>\n" +
    "           <td>This event is fired when the carousel has completed its slide transition.</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "{% highlight js %}\n" +
    "$('#myCarousel').on('slide.bs.carousel', function () {\n" +
    "  // do something…\n" +
    "})\n" +
    "{% endhighlight %}\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!-- Affix\n" +
    "  ================================================== -->\n" +
    "  <div class=\"bs-docs-section\">\n" +
    "    <div class=\"page-header\">\n" +
    "      <h1 id=\"affix\">Affix <small>affix.js</small></h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <h2 id=\"affix-examples\">Example</h2>\n" +
    "    <p>The subnavigation on the left is a live demo of the affix plugin.</p>\n" +
    "\n" +
    "    <hr class=\"bs-docs-separator\">\n" +
    "\n" +
    "    <h2 id=\"affix-usage\">Usage</h2>\n" +
    "\n" +
    "    <h3>Via data attributes</h3>\n" +
    "    <p>To easily add affix behavior to any element, just add <code>data-spy=\"affix\"</code> to the element you want to spy on. Then use offsets to define when to toggle the pinning of an element on and off.</p>\n" +
    "\n" +
    "{% highlight html %}\n" +
    "<div data-spy=\"affix\" data-offset-top=\"200\">...</div>\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "    <div class=\"bs-callout bs-callout-warning\">\n" +
    "      <h4>Requires independent styling ;)</h4>\n" +
    "      <p>\n" +
    "        Affix toggles between three states/classes: <code>.affix</code>, <code>.affix-top</code>, and <code>.affix-bottom</code>. You must provide the styles for these classes yourself (independent of this plugin).\n" +
    "        The <code>.affix-top</code> class should be in the regular flow of the document. The <code>.affix</code> class should be <code>position: fixed</code>. And <code>.affix-bottom</code> should be <code>position: absolute</code>. Note: <code>.affix-bottom</code> is special in that the plugin will place the element with JS relative to the <code>offset: { bottom: number }</code> option you've provided.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "\n" +
    "    <h3>Via JavaScript</h3>\n" +
    "    <p>Call the affix plugin via JavaScript:</p>\n" +
    "{% highlight js %}\n" +
    "  $('#myAffix').affix({\n" +
    "    offset: {\n" +
    "      top: 100\n" +
    "    , bottom: function () {\n" +
    "        return (this.bottom = $('.bs-footer').outerHeight(true))\n" +
    "      }\n" +
    "    }\n" +
    "  })\n" +
    "{% endhighlight %}\n" +
    "\n" +
    "\n" +
    "    <h3>Options</h3>\n" +
    "    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-offset-top=\"200\"</code>.</p>\n" +
    "\n" +
    "    <div class=\"table-responsive\">\n" +
    "      <table class=\"table table-bordered table-striped\">\n" +
    "        <thead>\n" +
    "         <tr>\n" +
    "           <th style=\"width: 100px;\">Name</th>\n" +
    "           <th style=\"width: 100px;\">type</th>\n" +
    "           <th style=\"width: 50px;\">default</th>\n" +
    "           <th>description</th>\n" +
    "         </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "         <tr>\n" +
    "           <td>offset</td>\n" +
    "           <td>number | function | object</td>\n" +
    "           <td>10</td>\n" +
    "           <td>Pixels to offset from screen when calculating position of scroll. If a single number is provided, the offset will be applied in both top and bottom directions. To provide a unique, bottom and top offset just provide an object <code>offset: { top: 10 }</code> or <code>offset: { top: 10, bottom: 5 }</code>. Use a function when you need to dynamically calculate an offset.</td>\n" +
    "         </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div><!-- /.table-responsive -->\n" +
    "\n" +
    "  </div>\n"
  );


  $templateCache.put('app/bower_components/sass-bootstrap/js/tests/index.html',
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>Bootstrap Plugin Test Suite</title>\n" +
    "\n" +
    "  <!-- jquery -->\n" +
    "  <!--<script src=\"http://code.jquery.com/jquery-1.7.min.js\"></script>-->\n" +
    "  <script src=\"vendor/jquery.js\"></script>\n" +
    "\n" +
    "  <!-- qunit -->\n" +
    "  <link rel=\"stylesheet\" href=\"vendor/qunit.css\" media=\"screen\">\n" +
    "  <script src=\"vendor/qunit.js\"></script>\n" +
    "\n" +
    "  <!--  plugin sources -->\n" +
    "  <script src=\"../../js/transition.js\"></script>\n" +
    "  <script src=\"../../js/alert.js\"></script>\n" +
    "  <script src=\"../../js/button.js\"></script>\n" +
    "  <script src=\"../../js/carousel.js\"></script>\n" +
    "  <script src=\"../../js/collapse.js\"></script>\n" +
    "  <script src=\"../../js/dropdown.js\"></script>\n" +
    "  <script src=\"../../js/modal.js\"></script>\n" +
    "  <script src=\"../../js/scrollspy.js\"></script>\n" +
    "  <script src=\"../../js/tab.js\"></script>\n" +
    "  <script src=\"../../js/tooltip.js\"></script>\n" +
    "  <script src=\"../../js/popover.js\"></script>\n" +
    "  <script src=\"../../js/affix.js\"></script>\n" +
    "\n" +
    "  <!-- unit tests -->\n" +
    "  <script src=\"unit/transition.js\"></script>\n" +
    "  <script src=\"unit/alert.js\"></script>\n" +
    "  <script src=\"unit/button.js\"></script>\n" +
    "  <script src=\"unit/carousel.js\"></script>\n" +
    "  <script src=\"unit/collapse.js\"></script>\n" +
    "  <script src=\"unit/dropdown.js\"></script>\n" +
    "  <script src=\"unit/modal.js\"></script>\n" +
    "  <script src=\"unit/scrollspy.js\"></script>\n" +
    "  <script src=\"unit/tab.js\"></script>\n" +
    "  <script src=\"unit/tooltip.js\"></script>\n" +
    "  <script src=\"unit/popover.js\"></script>\n" +
    "  <script src=\"unit/affix.js\"></script>\n" +
    "\n" +
    "</head>\n" +
    "<body>\n" +
    "  <div>\n" +
    "    <h1 id=\"qunit-header\">Bootstrap Plugin Test Suite</h1>\n" +
    "    <h2 id=\"qunit-banner\"></h2>\n" +
    "    <h2 id=\"qunit-userAgent\"></h2>\n" +
    "    <ol id=\"qunit-tests\"></ol>\n" +
    "    <div id=\"qunit-fixture\"></div>\n" +
    "  </div>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('app/index.html',
    "<!doctype html>\n" +
    "<html ng-app=\"app\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "    <title>webapp</title>\n" +
    "    <link rel=\"stylesheet\" href=\"styles/style.css\">\n" +
    "    <script src=\"src/main.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "<div ng-controller=\"MainController\">\n" +
    "    <div ng-repeat=\"nav in navElements\">\n" +
    "        <a ui-sref=\"{{nav.href}}\">{{nav.display}}</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ui-view></div>\n" +
    "<!-- Latest compiled and minified JavaScript -->\n" +
    "<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js\"></script>\n" +
    "</body>\n" +
    "\n" +
    "</html>\n"
  );


  $templateCache.put('/customers/customers.tpl.html',
    "<div class=\"container\" ui-view>\n" +
    "    <a id=\"customers.load\" href=\"#\" ng-click=\"load()\">Load Customers</a>\n" +
    "    <pre>\n" +
    "    {{customers | json}}\n" +
    "    </pre>\n" +
    "\n" +
    "    <div id=\"customer.result\">\n" +
    "        {{response | json}}\n" +
    "    </div>\n" +
    "\n" +
    "    <div>\n" +
    "        <div>\n" +
    "            <label for=\"customer.firstName\">Vorname</label>\n" +
    "            <input ng-model=\"customer.firstName\" type=\"text\" id=\"customer.firstName\">\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <label for=\"customer.lastName\">Nachname</label>\n" +
    "            <input ng-model=\"customer.lastName\" type=\"text\" id=\"customer.lastName\">\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <label for=\"customer.organization\">Firma</label>\n" +
    "            <input ng-model=\"customer.organization\" type=\"text\" id=\"customer.organization\">\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <label for=\"customer.customerNumber\">Kundennummer</label>\n" +
    "            <input ng-model=\"customer.customerNumber\" type=\"text\" id=\"customer.customerNumber\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" ng-click=\"store()\">Kunde speichern</button>\n" +
    "    </div>\n" +
    "    <pre>\n" +
    "        {{customer | json}}\n" +
    "    </pre>\n" +
    "</div>\n"
  );


  $templateCache.put('/expenses/expenses.tpl.html',
    "<div class=\"container\" ui-view>\n" +
    "    <a id=\"expenses.load\" href=\"#\" ng-click=\"load()\">Load Expenses</a>\n" +
    "    <pre>\n" +
    "    {{expenses | json}}\n" +
    "    </pre>\n" +
    "\n" +
    "    <div id=\"expenses.result\">\n" +
    "        {{response | json}}\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/invoices/directive/invoiceFilter.html',
    "<div>\n" +
    "    directive works\n" +
    "</div>"
  );


  $templateCache.put('/invoices/invoices.tpl.html',
    "<div class=\"container\" ui-view>\n" +
    "    <a id=\"invoices.load\" href=\"#\" ng-click=\"load()\">Rechnungen laden</a>\n" +
    "\n" +
    "    <div data-invoice-filter>hallo welt</div>\n" +
    "    <div class=\"row\" ng-repeat=\"invoice in invoices\">\n" +
    "        <div class=\"col-md-2\">{{invoice.invoiceNumber}}-number</div>\n" +
    "        <div class=\"col-md-4\">{{invoice.organization}}</div>\n" +
    "        <div class=\"col-md-2\">{{invoice.date}}</div>\n" +
    "        <div class=\"col-md-2\">{{invoice.amount.total | currency}}</div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/templates.tpl.html',
    "<div class=\"container\" ui-view>\n" +
    "    Templates:\n" +
    "    <div><input required type=\"text\" ng-model=\"templateName\">\n" +
    "        <button id=\"templates.put\" class=\"button\" ng-file-select ng-file-change=\"upload($files, templateName)\" ng-multiple=\"false\">Template Datei</button>\n" +
    "    </div>\n" +
    "    Template: {{templateName}}\n" +
    "\n" +
    "    <div>\n" +
    "        Templates\n" +
    "        <div ng-repeat=\"template in templates\">\n" +
    "            Template-File: {{template.name}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );

}]);
