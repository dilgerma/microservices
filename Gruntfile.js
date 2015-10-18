'use strict';

module.exports = function (grunt) {


    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        exec: {
            //default prepare
            prepare: {
                command: function () {
                    //no op
                    return "echo 'nothing to prepare.'"
                }
            },
            //default build
            build_images: {
                command: function (dir, dockerfile, repository, tag) {
                    console.log("Building for Repository " + repository + " and tag " + tag);
                    var combinedTag = tag !== undefined ? repository + ":" + tag : repository;
                    return "docker build -f " + dir + "/" + dockerfile + " -t " + combinedTag + " " + dir;
                }
            },
            //prepare group app
            prepare_app: {
                command: function (dir, name, dockerfile) {
                    var targetContextDirectory = dir + '/build/libs/prepare';
                    return "rm -rf " + targetContextDirectory +
                        "\n mkdir " + targetContextDirectory +
                        "\n cp " + dir + "/" + dockerfile + " " + targetContextDirectory +
                        "\n cp " + dir + "/.dockerignore " + targetContextDirectory +
                        "\n unzip -q -o " + dir + "/build/libs/*.jar -d " +
                        targetContextDirectory;
                }
            },
            //build group app
            build_images_app: {
                command: function (dir, dockerfile, repository, tag) {
                    console.log("Building for Repository " + repository + " and tag " + tag);
                    var combinedTag = tag !== undefined ? repository + ":" + tag : repository;
                    return "cd " + dir + "/build/libs/prepare;" +
                        "\n docker build -f " + dockerfile + " -t " + combinedTag + " .";
                }
            },
            push_images: {
                command: function (repository, tag) {
                    console.log("pushing image for " + repository + " and " + tag)
                    var pushSpec = repository + (tag !== undefined ? ":" + tag : "");
                    console.log("pushing " + pushSpec);
                    return "docker push " + pushSpec;
                }
            }
        }
    });

    var init = function () {
        var content = grunt.file.readJSON(".services.json");
        return content;
    };

    var buildTag = function (baseTag) {
        if (process.env.PIPELINE_VERSION !== undefined) {
            baseTag = baseTag + ":" + process.env.PIPELINE_VERSION;
        }
        return baseTag;
    };

    var serviceGroup = function (service) {
        return service.group !== undefined ? "_" + service.group : "";
    };

    grunt.registerTask('prepare', function () {
        var content = init();
        var services = content['services'];

        services.forEach(function (service, dockerfile) {
            console.log("preparing image in " + service.dir);

            var group = serviceGroup(service);
            grunt.task.run("exec:prepare" + group + ":" + service.dir + ":" + service.name + ':' + content.dockerfile);

        });
    });


    grunt.registerTask('build', function () {

        var content = init();
        var services = content['services'];

        grunt.task.run('prepare');

        services.forEach(function (service) {
            console.log("building service " + service.name);
            var dockerFilePath = service.dir + "/" + content.jsonFile;
            console.log("building image in " + service.dir + " for tag " + service.tag);
            var tag = buildTag(service.tag);
            grunt.task.run("exec:build_images" + serviceGroup(service) + ":" + service.dir + ":" + content.dockerfile + ":" + tag);
        });
    });

    grunt.registerTask('push', function () {
        var content = init();
        var services = content['services'];
        services.forEach(function (service) {
            var command = "exec:push_images:" + buildTag(service.tag);
            grunt.task.run(command);
        });
    });

    grunt.registerTask('default', function () {
        grunt.task.run('build', 'push');
    });


};