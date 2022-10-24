FROM adoptopenjdk/openjdk11
CMD ["./mvnw", "clean", "package"]
ARG JAR_FILE_PATH=target/*.jar
COPY ${JAR_FILE_PATH} e205-app.jar
ENTRYPOINT ["java", "-jar", "e205-app.jar"]