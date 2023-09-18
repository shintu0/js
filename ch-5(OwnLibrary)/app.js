var g = Greeter("John", "Doe", "en");
console.log(g);

g.greet("formal");
g.greet();

g.setLang("es").greet("formal");
g.setLang("es").greet();

g.setLang("fr").greet();

