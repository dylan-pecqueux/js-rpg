class Warlock extends Character {
  constructor(state) {
    super(state);
    this.hp = 11;
    this.mana = 200;
    this.dmg = 2;
    this.class = "Demoniste";
    this.name = "Airwipe";
    this.isOnUlt = false;
  }

  ult() {
    if((this.mana - 25) < 0) {
      alert("Vous n'avez pas assez de mana pour utiliser votre attaque spéciale !");
    } else {
      console.log(
        `%c${`Airwipe incante un drain de vie`}`,
        "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
      this.mana -= 25;
      this.dmg = 3;
      this.hp += 3;
      this.isOnUlt = true;
    }
  }

  breakUlt() {
    this.dmg = 2;
    this.isOnUlt = false;
  }
}