class Fighter extends Character {
  constructor(state) {
    super(state);
    this.hp = 12;
    this.mana = 40;
    this.dmg = 4;
    this.class = "Guerrier";
    this.name = "Grace";
    this.isOnUlt = false;
  }

  ult() {
    if((this.mana - 20) < 0) {
      alert("Vous n'avez pas assez de mana pour utiliser votre attaque spéciale !")
    } else {
      console.log(
        `%c${`Grace lance son attaque dark vision`}`,
        "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
      this.mana -= 20;
      this.dmg = 5;
      this.isOnUlt = true;
    }
  }

  breakUlt() {
    this.dmg = 4;
    this.isOnUlt = false;
  }
}

