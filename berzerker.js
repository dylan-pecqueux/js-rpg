class Berzerker extends Character {
  constructor(state) {
    super(state);
    this.hp = 8;
    this.mana = 0;
    this.dmg = 4;
    this.class = "Berzerker";
    this.name = "Draven";
    this.isOnUlt = false;
  }

  ult() {
    console.log(
      `%c${`Draven devient enragé et augmente son attaque de 1 et reduit ses hp de 1`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
    this.dmg ++;
    this.hp --;
  }
}