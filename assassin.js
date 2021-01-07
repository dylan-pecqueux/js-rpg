class Assassin extends Character {
  constructor(state) {
    super(state);
    this.hp = 6;
    this.mana = 20;
    this.dmg = 6;
    this.class = "Assassin";
    this.name = "Carl";
    this.isOnUlt = false;
  }

  ult() {
    if((this.mana - 20) < 0) {
      alert("Vous n'avez pas assez de mana pour utiliser votre attaque spéciale !")
    } else {
    this.mana -= 20;
    this.dmg = 7;
    this.isOnUlt = "firstStep";
    }
  }

  breakUlt() {
    this.dmg = 6;
    this.isOnUlt = false;
  }
}