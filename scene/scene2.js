class Scence2 extends Phaser.Scene{
    constructor() {
        super("playGame")
    }
    
    create(){
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");

        this.background.setOrigin(0, 0);

        this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
        this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
        this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");
        this.ship4 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
        this.ship5 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
        this.ship6 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");

        // this.add.text(20, 20, "Playing game", {
        //     font: "25px Arial",
        //     fill: "yellow"
        // });

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        //play animation
        this.ship1.play('ship1_anim')
        this.ship2.play('ship2_anim')
        this.ship3.play('ship3_anim')
        this.ship4.play('ship1_anim')
        this.ship5.play('ship2_anim')
        this.ship6.play('ship3_anim')


        //make the ship clickable to destroy them
        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();
        this.ship4.setInteractive();
        this.ship5.setInteractive();
        this.ship6.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this);

        this.add.text(20, 20, "Tax Game", {font: "25px Arial", fill: "yellow"});
    }

    moveship(ship, speed) {
        ship.y += speed;
        if(ship.y > config.height) {
            this.resetShipPos(ship);
        }
    }

    update() {
        this.moveship(this.ship1, .5);
        this.moveship(this.ship2, .9);
        this.moveship(this.ship3, 1);
        this.moveship(this.ship4, .7);
        this.moveship(this.ship5, 1.5);
        this.moveship(this.ship6, 2);
        // this.moveship(this.ship1, 1);
        // this.moveship(this.ship2, 2);
        // this.moveship(this.ship3, 3);
        //this.background.tilePositionY -= .5;
    }

    resetShipPos(ship) {
        ship.y = 0;
        var randomx = Phaser.Math.Between(0, config.width);
        ship.x = randomx
    }

    destroyShip(pointer, gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }

}