console.log("Build a Greeter library");

/*
When given first name and last name and language(optional)
It will generate greetings formaly and informly
supporsts english and spanish
also doesn't conflict with other codes.
*/
(function (global) {
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };
  var supportedLanguage = ["en", "es"];

  var logMessages = {
    en: "Logged in",
    es: "Incio Session"
  }

  var greetings = {
    en: "Hello",
    es: "Hola"
  };
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };
  Greeter.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    validate: function () {
      if (supportedLanguage.indexOf(this.language) == -1) {
        throw "Inavlid Langauge";
      }
    },
    greeting: function () {
      return greetings[this.language] + " " + this.firstName;
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.firstName;
    },
    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) console.log(msg);
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language]);
      }
    },
    setLang: function (newLang) {
      this.language = newLang;
      this.validate();

      return this;
    }

  };
  Greeter.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  }
  Greeter.init.prototype = Greeter.prototype;
  global.Greeter = Greeter;

})(window);

(function () {

})();