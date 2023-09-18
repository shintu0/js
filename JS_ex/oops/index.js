"use strict";
class Person {

  constructor(name) {
    this.name = name;
  }

  speak(words) {
    console.log(words + "....");
  }
}

class Man extends Person {
  constructor(name) {
    super(name);
    this.name = "Mr. " + this.name;
  }
  speak(words) {
    ;
    console.log("Grr.." + words + "...");
  }

  getName() {
    return this.name;
  }

}

const sintu = new Man("Sintu");
console.log(sintu.getName());
sintu.speak("Namastey")


