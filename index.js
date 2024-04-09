var config = {
    width: 600,
        height: 400,
    scene: [Scence1, Scence2],
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 600,
        height: 400,
      },
    
}

var game = new Phaser.Game(config)