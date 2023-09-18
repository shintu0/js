const readline=require("readline");

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.question("What's your name: ",(name)=>{
  rl.question("Where do you live: ",(country)=>{
    console.log(`${name} is a citizen of ${country}`);
    rl.close();

  })
});

// EventEmmiter (on)

rl.on("close",()=>{
  console.log("Thanks you")
});