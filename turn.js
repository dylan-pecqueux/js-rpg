class Turn extends Display{
  constructor(character, game) {
    super();
    this.character = character;
    this.game = game;
    this.newTurn = this.startTurn();
  }

  startTurn() {

    const shuffle = () => 0.5 - Math.random();
    const characters = this.character.sort(shuffle);

    characters.forEach(element => {
      this.whoTurn(element.name);
      this.game.watchStats();
      if(element.name === "Carl" && element.isOnUlt === "secondStep"){
        this.shadowCarl();
      } else {
        const ultOrNot = this.yourTurn(element.name);
        if (ultOrNot == 1) element.ult();
      }

      if(element.name === "Carl" &&  element.isOnUlt === "firstStep"){
        this.carlDisapear();
      } else if (element.name !== "Moana" || element.isOnUlt !== true){
        let victim = undefined;
        while (victim == undefined) {
          const whoAttacked = this.whoAttacked(element.name);
          if(whoAttacked === null){
            alert("Vous quittez le jeux, Bye !");
            break;
          }
          victim = this.character.find(element => element.name == whoAttacked);
        }
        element.dealDamage(victim);
        this.showAttack(element, victim);
        element.takeDamage(victim);
        this.game.suppDead(victim, element);
        this.game.suppDeadElement(element);
      }
    });

    this.character.forEach(element => {
      if(element.isOnUlt === true) element.breakUlt();
      if(element.isOnUlt === "secondStep") element.breakUlt();
      if(element.isOnUlt === "firstStep") element.isOnUlt = "secondStep";
    });

    this.game.newTurn();
  }
}