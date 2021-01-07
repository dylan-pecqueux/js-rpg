class Paladin extends Character {
  constructor(state) {
    super(state);
    this.hp = 10;
    this.mana = 120; 
    this.dmg = 3;
    this.class = "Paladin";
    this.name = "Ulder";
    this.isOnUlt = false;
  }

  ult() {
    if((this.mana - 40) < 0) {
      alert("Vous n'avez pas assez de mana pour utiliser votre attaque spéciale !")
    } else {
      console.log(
        `%c${`Ulder incante son attaque healing lighting`}`,
        "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
      this.hp += 5;
      this.mana -= 40;
      this.dmg = 4;
      this.isOnUlt = true;
    }
  }

  breakUlt() {
    this.dmg = 3;
    this.isOnUlt = false;
  }
}