const messagesGenerator = {
  firstM: [
    "Hello, ",
    "Hey, ",
    "Hola, ",
    "Olá, ",
    "Opa, ",
    "Oi, ",
    "Hi, ",
    "Hue, ",
    "Jorge, ",
  ],
  secondM: [
    "ozado! ",
    "dude! ",
    "asshole! ",
    "boloia! ",
    "bai tola! ",
    "viado! ",
    "meua migo! ",
    "garoto de programa! ",
  ],
  thirdM: [
    "Como estás?",
    "How are you?",
    "Bien?",
    "Como vai?",
    "Colé que é titi?",
    "Tudo bem?",
    "What's up?",
    "Mama eu.",
  ],

  message() {
    const first = this.firstM[
      Math.floor(Math.random() * this.firstM.length)
    ];
    const second = this.secondM[
      Math.floor(Math.random() * this.secondM.length)
    ];
    const third = this.thirdM[
      Math.floor(Math.random() * this.thirdM.length)
    ];
    console.log(first + second + third);
  },
};

messagesGenerator.message();
