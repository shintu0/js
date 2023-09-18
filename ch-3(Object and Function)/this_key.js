// ----------------------------this--------------------------------------------
console.log(this);
function a() {
  console.log(this);
}

const b = function () {
  console.log(this);
  this.newVariable = "HELLO";
}
a();
b();
console.log(newVariable);

// --------------------------inside object method---------------------------
var obj = {
  name: "The obj Object",
  log: function () {
    var self = this;
    console.log(this);
    self.name = "Updated to C"
    console.log(this);

    var setName = function (name) {
      console.log("setName");
      console.log(self);
      self.name = name;
    }
    // setName("again updated C");
    console.log(this);

  }
}

obj.log();
console.log(this);

