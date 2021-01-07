class Character {
  constructor() {
    this.state = "Playing";
  }

  takeDamage(victim) {
    if(this.name === "Carl" && this.isOnUlt === "secondStep" && victim.hp > 0){
      this.hp -= 7;
      console.log(
        `%c${`Carl n'as pa réussi à tuer sa cible dans l'ombre et reçoit donc 7 points de dégats`}`,
        "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
    }
  }

  dealDamage(victim){
    if(victim.name == "Grace" && victim.isOnUlt === true) {
      victim.hp -= (this.dmg -  2);
    } else if(victim.name == "Carl" && victim.isOnUlt === "secondStep") {
      console.log(
        `%c${`Carl a disparu vous ne pouvez pas l'attaquer !`}`,
        "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );
    } else {
      victim.hp -= this.dmg;
    };
  }

  isAlooser(){
    this.state = "Looser"
    console.log(
      `%c${`Ce personnage est maintenant six pieds sous terre !`}`,
      "color:green;font-family:system-ui;font-size:1.5rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );
  }
}