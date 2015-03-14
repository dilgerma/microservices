/*wichtig,
 gegen minificatino hier array zurückliefern!
 */

module.exports = ['$upload', '$q', '$http', function ($upload, $q, $http) {

    //TODO - refactor to config
    var templateURI = "/templates";


    return {
        upload: function (files, templateName) {

            //TODO implement error handling.
            if (!files) {
                return $q.reject("no files provided");
            }
            if (files.length !== 1) {
                return $q.reject("too many files provided");
            }

            //only allow one file
            var file = files[0];
            return $upload.upload({
                url: templateURI,
                file: file,
                fields: {'templateName': templateName}
            }).progress(function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
            }).success(function (data, status, headers, config) {
                console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
            });
        },

        findAll: function () {
            return $http.get(templateURI);
        }
    };

}];