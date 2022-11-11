FROM openjdk:11
ARG JAR_FILE=build/libs/e205-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

EXPOSE 8081/tcp
ENTRYPOINT ["java","-jar","/app.jar"]

FROM python:3.9
#WORKDIR /root
#ADD hello.py .
#ARG PYTHON_FILE=src/test/python/simulation.py
WORKDIR /src/test/python
COPY . .
#COPY ${PYTHON_FILE} python.py
RUN pip install -r ./requirements.txt\
CMD ["python3", "/simulation.py"]