namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Enemy5 = SpriteKind.create()
    export const Enemy6 = SpriteKind.create()
    export const Enemy7 = SpriteKind.create()
    export const Enemy8 = SpriteKind.create()
    export const Vida1 = SpriteKind.create()
    export const Vida2 = SpriteKind.create()
    export const Vida3 = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vida2, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vida1, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.smiles, 100)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vida3, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    info.changeLifeBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Liquido = sprites.createProjectileFromSprite(assets.image`ataque`, Slime, 0, -100)
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy7, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy8, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy5, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy7, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Slime,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . f f 6 f f f f f f . . . . 
        . . . f 6 6 6 f f f . . f . . . 
        . . . f 6 6 6 f f f f f . . . . 
        . f f f 6 6 7 6 f f f f f . . . 
        f f 6 6 6 6 7 6 6 6 6 6 f . . . 
        f 6 f 6 6 6 6 6 7 7 6 6 f f . . 
        f f 6 6 7 6 6 6 6 6 6 6 6 f f . 
        f f 6 6 7 6 6 6 f f f f f f . . 
        . f 6 6 6 6 7 6 6 6 6 6 f . . . 
        . f f 6 6 6 7 6 6 6 f f f f f . 
        . . f f f f f f f f f . f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f . . . . f f f f . 
        . . . f f 6 f f f f f f . . . . 
        . . . f 6 6 6 f f f . . . . . . 
        . . . f 6 6 6 f f f f f . . . . 
        . f f f 6 6 6 6 f f f f f . . . 
        f f 6 6 6 6 7 6 6 6 6 6 f f f . 
        f 6 f 6 6 6 7 7 7 7 7 6 f f . . 
        f f 6 6 6 6 6 6 6 6 6 6 6 f f . 
        f f 6 7 6 6 6 6 6 f f f f f . . 
        . f 6 7 7 6 6 6 6 6 6 6 f . . . 
        . f f 6 6 6 6 6 6 6 f f f . . f 
        . . f f f f f f f f f . f f f f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f f f f f f f f . . . 
        . . . f f 6 f f f f . . . . . . 
        . . . f 6 6 6 f f f . . . . . . 
        . . . f 6 6 6 f f f f f . . . . 
        . f f f 6 6 6 6 f f f f f f . . 
        f f 6 6 6 6 7 6 6 6 6 6 f . . . 
        f 6 f 6 6 6 7 7 6 6 6 6 f f f f 
        f f 6 6 6 6 6 6 6 f f f f f . . 
        f f 6 7 7 6 6 6 f f f f f f . . 
        . f 6 6 7 7 6 6 6 6 6 6 f f f . 
        . f f 6 6 6 6 6 6 6 f f f . . . 
        . . f f f f f f f f f . f f f f 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Slime,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . f f f f f f 6 f f . . . 
        . . . f . . f f f 6 6 6 f . . . 
        . . . . f f f f f 6 6 6 f . . . 
        . . . f f f f f 6 6 7 6 f f f . 
        . . . f 6 6 6 6 6 6 7 6 6 6 f f 
        . . f f 6 7 7 7 6 6 7 7 6 f 6 f 
        . f f 6 6 6 6 6 6 6 6 6 6 6 f f 
        . . f f f f f f 6 6 6 6 6 6 f f 
        . . . f 6 6 6 6 6 6 7 7 7 6 f . 
        . f f f f f 6 6 6 6 7 7 6 f f . 
        f f f f . f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . . . f f f f f . . . . . . 
        . f f f f . . . . f f . . . . . 
        . . . . f f f f f f 6 f f . . . 
        . . . . . . f f f 6 6 6 f . . . 
        . . . . f f f f f 6 7 6 f . . . 
        . . . f f f f f 6 6 7 6 f f f . 
        . f f f 6 6 6 6 6 6 7 6 6 6 f f 
        . . f f 6 6 6 6 6 6 6 7 7 f 6 f 
        . f f 6 6 6 6 6 6 6 6 6 6 6 f f 
        . . f f f f f 6 6 6 6 6 6 6 f f 
        . . . f 6 6 6 6 7 7 7 6 6 6 f . 
        f . . f f f 6 6 7 7 6 6 6 f f . 
        f f f f . f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . f f f f 6 f f . . . 
        . . . . . . f f f 6 6 6 f . . . 
        . . . . f f f f f 6 6 6 f . . . 
        . . f f f f f f 7 6 6 7 f f f . 
        . . . f 6 6 6 7 7 6 6 7 6 6 f f 
        f f f f 6 6 6 6 6 6 6 7 7 f 6 f 
        . . f f f f f 6 6 6 6 6 6 6 f f 
        . . f f f f f f 7 6 6 6 6 6 f f 
        . f f f 6 6 6 7 7 6 6 7 7 6 f . 
        . . . f f f 6 6 6 6 6 7 6 f f . 
        f f f f . f f f f f f f f f . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy6, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy6, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy8, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy5, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
let Enemigo8: Sprite = null
let Enemigo3: Sprite = null
let Enemigo6: Sprite = null
let Enemigo2: Sprite = null
let Vida: Sprite = null
let Enemigo: Sprite = null
let Enemigo7: Sprite = null
let Enemigo4: Sprite = null
let Enemigo5: Sprite = null
let Vida2: Sprite = null
let Coin: Sprite = null
let Vida3: Sprite = null
let updatevelocity = 0
let Liquido: Sprite = null
let Slime: Sprite = null
let update = 0
scene.setBackgroundImage(assets.image`Carretera`)
Slime = sprites.create(assets.image`slime`, SpriteKind.Player)
Slime.setFlag(SpriteFlag.StayInScreen, true)
Slime.setPosition(80, 110)
info.setLife(5)
info.setScore(0)
controller.moveSprite(Slime, 200, 200)
game.showLongText("Pulsa A para ayudar a Slime y reventar \"zombies\"!", DialogLayout.Center)
game.onUpdateInterval(5000, function () {
    update += 1000
})
game.onUpdateInterval(5000, function () {
    updatevelocity += 10
})
game.onUpdateInterval(12000, function () {
    Vida3 = sprites.create(assets.image`vida2`, SpriteKind.Vida3)
    Vida3.setVelocity(0, 20)
    Vida3.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(12000, function () {
    Coin = sprites.create(assets.image`Coin`, SpriteKind.Coin)
    Coin.setVelocity(0, 20)
    Coin.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(11000, function () {
    Vida2 = sprites.create(assets.image`vida3`, SpriteKind.Vida2)
    Vida2.setVelocity(0, 20)
    Vida2.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(3000 - update, function () {
    Enemigo5 = sprites.create(assets.image`zombie7`, SpriteKind.Enemy5)
    Enemigo5.setVelocity(0, 20 + updatevelocity)
    Enemigo5.setPosition(randint(0, 130), 0)
    animation.runImageAnimation(
    Enemigo5,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 6 1 f 6 6 f 1 6 f . . 
        . f e 6 6 6 6 6 6 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 6 f 7 7 7 7 7 7 f 6 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 6 1 f 6 6 f 1 6 f f 
        . . f e 6 6 6 6 6 e e f e 
        . f e f b 7 7 7 e 6 6 6 e 
        . e 6 f 7 7 7 7 e 6 6 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 6 1 f 6 6 f 1 6 f f . 
        e f e e 6 6 6 6 6 e f . . 
        e 6 6 6 e 7 7 7 b f e f . 
        . e 6 6 e 7 7 7 7 f 6 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    500,
    true
    )
})
game.onUpdateInterval(6000 - update, function () {
    Enemigo4 = sprites.create(assets.image`Zombie2`, SpriteKind.Enemy4)
    Enemigo4.setVelocity(0, 20 + updatevelocity)
    Enemigo4.setPosition(randint(0, 130), 0)
    animation.runImageAnimation(
    Enemigo4,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 7 7 f b f e f f . 
        . f e e 7 7 f 7 7 f 7 7 e e f . 
        . . f e e 7 7 7 7 7 7 e e f . . 
        . . . f e e 7 7 7 7 e e f . . . 
        . . e 7 f 2 2 2 2 2 2 f 7 e . . 
        . . 7 1 f 2 2 2 2 2 2 f 1 7 . . 
        . . 7 7 f 4 4 5 5 4 4 f 7 7 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 7 7 f b f e f . . 
        . . f e 7 1 f 7 7 f 1 7 e f . . 
        . . . f e 7 7 7 7 7 7 e f e . . 
        . . f e f 2 2 2 2 e d d 7 e . . 
        . . e 7 f 2 2 2 2 e d d e . . . 
        . . . . f 7 7 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 7 f 7 7 f 7 f e f f . 
        . f e e 7 1 f 7 7 f 1 7 e e f . 
        . . f e e 7 7 7 7 7 7 e e f . . 
        . . . f e e 7 7 7 7 e e f . . . 
        . . e 7 f 2 2 2 2 2 2 f 7 e . . 
        . . 7 d f 2 2 2 2 2 2 f d 7 . . 
        . . 7 7 f 7 7 5 5 7 7 f 7 7 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f 7 f 7 7 f b f e f . . 
        . . f e 7 1 f 7 7 f 1 7 e f . . 
        . . e f e 7 7 7 7 7 7 e f . . . 
        . . e 7 7 7 e 2 2 2 2 f e f . . 
        . . . e 7 7 e 2 2 2 2 f 7 e . . 
        . . . . e e f 5 5 7 7 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
})
game.onUpdateInterval(1000 - update, function () {
    Enemigo7 = sprites.create(assets.image`zombie6`, SpriteKind.Enemy7)
    Enemigo7.setVelocity(0, 20 + updatevelocity)
    Enemigo7.setPosition(randint(0, 130), 0)
    animation.runImageAnimation(
    Enemigo7,
    [img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 7 7 7 7 b 5 5 5 f 
        f 5 5 c c 7 7 7 7 c c 5 5 f 
        f b b f b f 7 7 f b f b b f 
        f b b 7 1 f 7 7 f 1 7 b b f 
        . f b f 7 7 7 7 7 7 7 b f . 
        . f 7 f 7 7 7 7 7 7 f 7 f . 
        . 7 7 f 6 9 9 9 9 6 f 7 7 . 
        . 7 d c 9 9 9 9 9 9 c d 7 7 
        . 7 f b 3 b 3 b 3 b b f 7 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        c b 5 5 5 d b b d 5 5 5 b c 
        f 5 5 5 b 7 7 7 7 b 5 5 5 f 
        f 5 5 c c 7 7 7 7 c c 5 5 f 
        f b b f b f 7 7 f b f b b f 
        f b b 7 1 f 7 7 f 1 7 b b f 
        c f b f 7 7 7 7 7 7 7 b f c 
        . c 7 c 6 9 9 7 7 7 7 7 c . 
        . 7 7 c 9 9 9 9 7 7 7 7 c . 
        . 7 c b b 3 b b b 7 7 c . . 
        . . c c 3 3 b 3 b 3 c c . . 
        . . . . c b b c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        c b 5 5 5 d b b d 5 5 5 b c 
        f 5 5 5 b 7 7 7 7 b 5 5 5 f 
        f 5 5 c c 7 7 7 7 c c 5 5 f 
        f b b f b f 7 7 f b f b b f 
        f b b 7 1 f 7 7 f 1 7 b b f 
        c f b 7 7 d 7 7 7 7 f b f c 
        . c 7 7 7 7 9 9 9 6 c 7 c . 
        . c 7 7 7 7 9 9 9 9 c 7 7 . 
        . . c 7 7 b b b 3 b b c 7 7 
        . . c c 3 b 3 b 3 3 c c . . 
        . . . . c c c b b c . . . . 
        `],
    500,
    true
    )
})
forever(function () {
    music.play(music.stringPlayable("D E D A D C5 D F ", 110), music.PlaybackMode.InBackground)
})
game.onUpdateInterval(4000 - update, function () {
    Enemigo = sprites.create(assets.image`Zombie1`, SpriteKind.Enemy)
    Enemigo.setVelocity(0, 20 + updatevelocity)
    Enemigo.setPosition(randint(0, 120), 0)
    animation.runImageAnimation(
    Enemigo,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    true
    )
})
game.onUpdateInterval(9000 + update, function () {
    Vida = sprites.create(assets.image`Vida1`, SpriteKind.Vida1)
    Vida.setVelocity(0, 20)
    Vida.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(7000 - update, function () {
    Enemigo2 = sprites.create(assets.image`Zombie3`, SpriteKind.Enemy2)
    Enemigo2.setVelocity(0, 20 + updatevelocity)
    Enemigo2.setPosition(randint(0, 130), 0)
    animation.runImageAnimation(
    Enemigo2,
    [img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f 7 7 f f 6 f . . . 
        . . f 6 f 7 f 7 7 f 7 f 6 f . . 
        . . f 6 f 7 3 7 7 3 7 f 6 f . . 
        . . f 6 6 f 7 7 7 7 f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f 7 3 5 3 3 5 3 7 f f . . 
        . . f 7 7 f 3 5 5 3 f 7 7 f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f 7 7 f f 6 f . . . 
        . . f 6 f 7 f 7 7 f 7 f 6 f . . 
        . . f 6 f 7 3 7 7 3 7 f 6 f . . 
        . . f 6 6 f 7 7 7 7 f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f 3 3 5 3 3 5 3 7 f f . . 
        . . . f 7 f 3 5 5 3 f f 7 f . . 
        . . . f 7 f 3 3 3 3 3 f f . . . 
        . . . f f 3 5 3 3 5 3 3 f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f 7 7 f f 6 f . . . 
        . . f 6 f 7 f 7 7 f 7 f 6 f . . 
        . . f 6 f 7 3 7 7 3 7 f 6 f . . 
        . . f 6 6 f 7 7 7 7 f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f 7 3 5 3 3 5 3 3 f f . . 
        . . f 7 f f 3 5 5 3 f 7 f . . . 
        . . . f f 3 3 3 3 3 f 7 f . . . 
        . . . f 3 3 5 3 3 5 3 f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    500,
    true
    )
})
game.onUpdateInterval(2000 - update, function () {
    Enemigo6 = sprites.create(assets.image`zombie8`, SpriteKind.Enemy6)
    Enemigo6.setVelocity(0, 20 + updatevelocity)
    Enemigo6.setPosition(randint(0, 130), 0)
    animation.runImageAnimation(
    Enemigo6,
    [img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 7 7 c c c c f . 
        . f f c c 7 7 7 7 c c f f . 
        . f f f b f 7 7 f b f f f . 
        . f f 7 1 f 7 7 f 1 7 f f . 
        . . f f 7 7 7 7 7 7 f f . . 
        . . e f e 7 7 7 7 e f e . . 
        . e 7 f b 3 3 3 3 b f 7 e . 
        . 7 7 f 3 3 3 3 3 3 c 7 7 . 
        . 7 7 f 6 6 6 6 6 6 f 7 7 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 7 7 c c c c f . 
        . f f c c 7 7 7 7 c c f f . 
        . f f f b f 7 7 f b f f f . 
        . f f 7 1 f d d f 1 7 f f . 
        . . f f d d d d d 7 e f e . 
        . f e f f b b b e 7 7 7 e . 
        . e 7 f b 3 3 3 e 7 7 e . . 
        . . . f 6 6 6 6 f e e . . . 
        . . . f f f f f f f . . . . 
        . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 7 7 c c c c f . 
        . f f c c 7 7 7 7 c c f f . 
        . f f f b f 7 7 f b f f f . 
        . f f 7 1 f 7 7 f 1 7 f f . 
        . e f e 7 7 7 7 7 7 f f . . 
        . e 7 7 7 e b b b f f e f . 
        . . e 7 7 e 3 3 b e f 7 e . 
        . . . e e f 6 6 6 6 f . . . 
        . . . . f f f f f f f . . . 
        . . . . . . . . f f f . . . 
        `],
    500,
    true
    )
})
game.onUpdateInterval(5000 - update, function () {
    Enemigo3 = sprites.create(assets.image`zombie4`, SpriteKind.Enemy3)
    Enemigo3.setVelocity(0, 20 + updatevelocity)
    Enemigo3.setPosition(randint(0, 130), 0)
    animation.runImageAnimation(
    Enemigo3,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f 7 4 5 5 5 5 4 7 f . . . 
        . . f b 3 7 4 4 4 4 7 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 7 b 3 7 7 3 b 7 3 3 f . 
        . f 3 3 f f 7 7 7 7 f f 3 3 f . 
        . f b b f b f 7 7 f b f b b f . 
        . f b b 7 1 f 7 7 f 1 7 b b f . 
        f f b b f 7 7 7 7 7 7 f b b f f 
        f b b f f f 7 7 7 7 f f f b b f 
        . f 7 7 f b d d d d b f 7 7 f . 
        . . 7 7 c d d d d d d c 7 7 . . 
        . . 7 f b d b d b d b b f 7 . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 7 b 3 7 7 3 b 7 3 3 f . 
        . f b 3 f f 7 7 7 7 f f 3 b f . 
        f f b b f b f 7 7 f b f b b f f 
        f b b b 7 1 f 7 7 f 1 7 b b b f 
        . f b b 7 7 7 7 7 7 7 f b b f . 
        . . f 7 7 7 7 d d d b f 7 f . . 
        . . f 7 7 7 7 d d d d c 7 7 . . 
        . . . f 7 7 d d b d b b f 7 . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 7 7 3 b e 3 3 f . 
        . f 3 3 f f 7 7 7 7 f f 3 3 f . 
        . f b b f b f 7 7 f b f b b f . 
        . f b b 7 1 f 7 7 f 1 7 b b f . 
        f f b b f 7 7 7 7 7 7 f b b f f 
        f b b f f f 7 7 7 7 f f f b b f 
        . f 7 7 f b d d d d b f 7 7 f . 
        . . 7 7 c d d d d d d c 7 7 . . 
        . . 7 f b d b d b d b b f 7 . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 7 7 3 b e 3 3 f . 
        . f b 3 f f 7 7 7 7 f f 3 b f . 
        f f b b f b f 7 7 f b f b b f f 
        f b b b 7 1 f 7 7 f 1 7 b b b f 
        . f b b f 7 7 7 7 7 7 7 b b f . 
        . . f 7 f b d d d 7 7 7 7 f . . 
        . . 7 7 c d d d d 7 7 7 7 f . . 
        . . 7 f b b d b d d 7 7 f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    500,
    true
    )
})
game.onUpdateInterval(8000 - update, function () {
    Enemigo8 = sprites.create(assets.image`zombie5`, SpriteKind.Enemy8)
    Enemigo8.setVelocity(0, 20 + updatevelocity)
    Enemigo8.setPosition(randint(0, 130), 0)
    animation.runImageAnimation(
    Enemigo8,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 7 e e e f f f f 
        f f f 7 7 7 e e f f f f 
        f f f 7 7 7 7 e e f f f 
        f 7 e 7 7 7 7 7 7 e 7 f 
        f 7 7 f f 7 7 f f 7 7 f 
        f e 7 7 7 7 7 7 7 7 e f 
        . f e 7 7 b b 7 7 e f . 
        . f f e 7 7 7 7 e f f . 
        e 7 f b 1 1 1 1 b f 1 e 
        7 d f 1 1 1 1 1 1 f d 7 
        7 7 f 6 6 6 6 6 6 f 7 7 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f 3 e e e e e f f f 
        f f f f 7 e e e f f f f 
        f f f 7 7 7 e e f f f f 
        f f f 7 7 7 7 e e f f f 
        f 7 e 7 7 7 7 7 7 e 7 f 
        f 7 7 f f 7 7 f f 7 7 f 
        f e 7 7 7 7 7 7 7 7 e f 
        . f e 7 7 7 b 7 7 e f e 
        f f f e 7 7 7 7 d d 7 e 
        e 7 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 7 e e e f f f f 
        f f f 7 7 7 e e f f f f 
        f f f 7 7 7 7 e e f f f 
        f 7 e 7 7 7 7 7 7 e 7 f 
        f 7 7 f f 7 7 f f 7 7 f 
        f e 7 d d d d d d 7 e f 
        e f e 7 d b b d d e f . 
        e 7 d d 7 7 7 7 e f f f 
        . e d d e 1 1 1 b f 7 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    500,
    true
    )
})
