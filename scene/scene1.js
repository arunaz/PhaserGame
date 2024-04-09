class Scence1 extends Phaser.Scene{
    constructor() {
        super("bootGame")
    }

    preload(){
        this.load.image("background", "assets/sky.jpg");
        // this.load.image("ship", "assets/ship.png");
        // this.load.image("ship2", "assets/ship2.png");
        // this.load.image("ship3", "assets/ship3.png");

        this.load.spritesheet("ship", "assets/sprintsheet/ship.png",{
            frameWidth: 16,
            frameHeight: 16
          });
          this.load.spritesheet("ship2", "assets/sprintsheet/ship2.png",{
            frameWidth: 32,
            frameHeight: 16
          });
          this.load.spritesheet("ship3", "assets/sprintsheet/ship3.png",{
            frameWidth: 16,
            frameHeight: 16
          });
          this.load.spritesheet("explosion", "assets/sprintsheet/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
          });

          this.load.spritesheet("power-up", "assets/sprintsheet/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
          });
      }

    create() {
        this.add.text(20, 20, "Loading Game .....");
        this.scene.start("playGame")
    }
}