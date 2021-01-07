class Display {
  constructor(){

  }

  welcome(){
    console.log(`
    _     _  _______  ___      _______  _______  __   __  _______ 
    | | _ | ||       ||   |    |       ||       ||  |_|  ||       |
    | || || ||    ___||   |    |       ||   _   ||       ||    ___|
    |       ||   |___ |   |    |       ||  | |  ||       ||   |___ 
    |       ||    ___||   |___ |      _||  |_|  ||       ||    ___|
    |   _   ||   |___ |       ||     |_ |       || ||_|| ||   |___ 
    |__| |__||_______||_______||_______||_______||_|   |_||_______|
    `);
  }

  gameOver(){
    console.log(`
    _______  _______  __   __  _______    _______  __   __  _______  ______   
    |       ||   _   ||  |_|  ||       |  |       ||  | |  ||       ||    _ |  
    |    ___||  |_|  ||       ||    ___|  |   _   ||  |_|  ||    ___||   | ||  
    |   | __ |       ||       ||   |___   |  | |  ||       ||   |___ |   |_||_ 
    |   ||  ||       ||       ||    ___|  |  |_|  ||       ||    ___||    __  |
    |   |_| ||   _   || ||_|| ||   |___   |       | |     | |   |___ |   |  | |
    |_______||__| |__||_|   |_||_______|  |_______|  |___|  |_______||___|  |_|
    `);
    console.log(
      `%c${`Les vainqueurs sont :`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    const winner = this.character.filter(element => element.state === "Playing");
    winner.map(element => {
      console.log(
        `%c${`${element.name} le ${element.class}`}`,
        "color:red;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
    });
  }

  showNewTurn(){
    console.log("");
    console.log(
      `%c${`Tour ${11 - this.turnLeft}`}`,
      "color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }

  shadowCarl(){
    console.log(
      `%c${`Carl attaque depuis les ombres`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }

  carlDisapear(){
    console.log(
      `%c${`Carl disparait dans les abisses au prochain tour..`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }

  yourTurn(name){
    return prompt(`Au tour de ${name}
        Taper le nombre correspondant à votre choix :
        1 - attaque spéciale 
        2 - attaque de base`);
  }

  whoTurn(name){
    console.log("");
    console.log(
      `%c${`Au tour de ${name}`}`,
      "color:red;font-family:system-ui;font-size:1.8rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }

  whoAttacked(name){
    return prompt(`C'est à ${name} d'attaquer,
        Rentrez le nom du personnage que vous voulez attaquer 
        avec une majuscule svp !`);
  }

  showAttack(element, victim){
    console.log(
      `%c${`${element.name} attaque ${victim.name}, et lui inflige ${element.dmg} de damage, les points de vie de ${victim.name} sont maintenant de ${victim.hp}`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }
}