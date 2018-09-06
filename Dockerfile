FROM tomcat:8.5.28-jre8-alpine
RUN rm -rf /usr/local/tomcat/webapps && mkdir /usr/local/tomcat/webapps
ADD target/gogreen-*.tar.gz /usr/local/tomcat/
ADD conf/catalina.properties /usr/local/tomcat/conf/catalina.properties
