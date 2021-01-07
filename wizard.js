class Wizard extends Character {
  constructor(state) {
    super(state);
    this.hp = 10;
    this.mana = 200;
    this.dmg = 2;
    this.class = "Mage";
    this.name = "Gamatara";
    this.isOnUlt = false;
  }

  ult() {
    if((this.mana - 25) < 0) {
      alert("Vous n'avez pas assez de mana pour utiliser votre attaque spéciale !");
    } else {
      console.log(
        `%c${`Gamatara incante une boule de feu`}`,
        "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
      this.mana -= 25;
      this.dmg = 7;
      this.isOnUlt = true;
    }
  }

  breakUlt() {
    this.dmg = 2;
    this.isOnUlt = false;
  }
}