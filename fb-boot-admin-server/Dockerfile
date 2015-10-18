FROM dilgerm/app-base
#assumes the jar file was unpacked to /build/unpacked
ADD /build/unpacked/lib/ /sources/lib
ADD /build/unpacked/ /sources
CMD java -cp /sources org.springframework.boot.loader.JarLauncher
