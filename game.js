class Game extends Display{
  constructor() {
    super();
    this.turnLeft = 11;
    this.character = [new Fighter, new Paladin, new Berzerker, new Monk, new Assassin, new Wizard, new Warlock];
    this.welcome = this.welcome();
    this.go = this.newTurn();
  }


  newTurn(){
    this.turnLeft --;
    if(this.turnLeft === 0 || this.character.length === 1){
      this.gameOver();
    } else {
      this.showNewTurn();
      new Turn(this.character, this);
    }
  }

  watchStats(){
    console.log(
      `%c${`Voici l'état des personnages :`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    this.character.forEach(element => {
      if(element.isOnUlt === "secondStep"){
        console.log(
          `%c${`Carl a disparue dans les ombres, vous ne pouvez pas l'attaquer`}`,
          "color:red;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold"
        );
      } else {
        console.log(
          `%c${`${element.name} le ${element.class} à ${element.hp} hp et ${element.mana} de mana`}`,
          "color:red;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold"
        );
      }
    });
  }

  suppDead(victim, element){
    if(victim.hp <= 0){
      element.mana += 20;
      this.character.splice(this.character.findIndex(b => b === victim), 1);
      victim.isAlooser();
    }
  }

  suppDeadElement(element){
    if(element.hp <= 0){
      this.character.splice(index, 1);
      element.isAlooser();
    }
  }
}

const play = () => new Game;
