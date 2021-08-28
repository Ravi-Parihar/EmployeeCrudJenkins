FROM openjdk:8
EXPOSE 8080
ADD target/EmployeeCrudOperation-0.0.1-SNAPSHOT.jar EmployeeCrudOperation-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/EmployeeCrudOperation-0.0.1-SNAPSHOT.jar"]