FROM openjdk:8
EXPOSE 8080
ADD target/employeecrudoperation-0.0.1-snapshot.jar employeecrudoperation-0.0.1-snapshot.jar
ENTRYPOINT ["java", "-jar", "/employeecrudoperation-0.0.1-snapshot.jar"]