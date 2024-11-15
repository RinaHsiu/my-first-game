controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(5)
game.splash("my dad is better than yours! hahahahahahah!!!!!")
mySprite = sprites.create(assets.image`duckyyyyyy`, SpriteKind.Player)
