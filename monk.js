class Monk extends Character {
  constructor(state) {
    super(state);
    this.hp = 8;
    this.mana = 200;
    this.dmg = 2;
    this.class = "Moine";
    this.name = "Moana";
    this.isOnUlt = false;
  }

  ult() {
    if((this.mana - 20) < 0) {
      alert("Vous n'avez pas assez de mana pour utiliser votre attaque spéciale !")
    } else {
    this.hp += 8;
    console.log(
      `%c${`${this.name} se heal de 8 points il est maitenant à ${this.hp}`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    this.isOnUlt = true;
    }
  }

  breakUlt(){
    this.isOnUlt = false;
  }
}