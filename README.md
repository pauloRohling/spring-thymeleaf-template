# Spring Thymeleaf Template

This repository provides a template for a pre-configured project with **Spring Boot**, **Thymeleaf**,
**Webflux**, **Gulp**, **Webpack**, **Tailwind** and **Prettier**, providing a straightforward development experience.

## Prerequisites

- Java 21
- Gradle 8.7
- Node and NPM

## Installation and Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/pauloRohling/spring-thymeleaf-template.git
   ```

2. Navigate to the project directory and install the dependencies:

   ```bash
   cd ./src/main/javascript
   npm install
   ```

## Usage

To run the project in development mode:

1. Ensure you are in the `./src/main/javascript` directory
2. Run the following command to start the Gulp watch task:

   ```bash
   npm start
   ```
   
3. Run the Spring Boot application

## Formatting with Prettier

To format the code with Prettier:

1. Ensure you are in the `./src/main/javascript` directory
2. Run the following command to format the code:

   ```bash
   npm run format
   ```

## Build

To build the project for production:

1. Ensure you are in the `./src/main/javascript` directory
2. Run the following command to build the assets:

   ```bash
   npm run build
   ```
   
3. Navigate to the root directory of the project
4. Run the following command to build the project:

   ```bash
   ./gradlew build
   ```

5. The built project will be available in the `./build/libs` directory.

## Additional Information

- **Spring Boot Version**: 3.2.5
- **Included Libraries**: Thymeleaf, Webflux, Actuator, Lombok
- **Frontend Tools**: Gulp v5.0.0, Webpack v5.91.0
- **CSS Framework**: TailwindCSS v3.4.3
- **Code Formatter**: Prettier v3.2.5