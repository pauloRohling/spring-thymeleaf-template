import { environment } from "./environment/environment.js";

export function sayHello() {
  console.log("Hello World!");
  console.log("Environment:", environment.production);
}

sayHello();
