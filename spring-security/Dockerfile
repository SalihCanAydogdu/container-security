# STAGE 1: Build (Maven + JDK 17)
FROM maven:3.9.6-eclipse-temurin-17-alpine AS build
WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code and build JAR 
COPY src ./src
RUN mvn clean package -DskipTests

# STAGE 2: Run (JRE 17 only - Lighter and more secure)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]



