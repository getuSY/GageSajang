FROM openjdk:11
ARG JAR_FILE=build/libs/eureka-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

EXPOSE 8761/tcp
ENTRYPOINT ["java","-jar","/app.jar"]
