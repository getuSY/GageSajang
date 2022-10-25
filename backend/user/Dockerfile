FROM openjdk:11
ARG JAR_FILE=build/libs/e205-app.jar
COPY ${JAR_FILE} app.jar

EXPOSE 8081/tcp
ENTRYPOINT ["java","-jar","/app.jar"]
