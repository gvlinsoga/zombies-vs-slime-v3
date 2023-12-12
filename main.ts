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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Liquido = sprites.createProjectileFromSprite(assets.image`ataque`, Slime, 0, -100)
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
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
let Enemigo5: Sprite = null
let Enemigo4: Sprite = null
let Enemigo: Sprite = null
let Enemigo7: Sprite = null
let Enemigo6: Sprite = null
let Enemigo2: Sprite = null
let Vida2: Sprite = null
let Coin: Sprite = null
let Vida3: Sprite = null
let Vida: Sprite = null
let Enemigo3: Sprite = null
let Liquido: Sprite = null
let Slime: Sprite = null
scene.setBackgroundImage(assets.image`Carretera`)
Slime = sprites.create(assets.image`slime`, SpriteKind.Player)
Slime.setFlag(SpriteFlag.StayInScreen, true)
Slime.setPosition(80, 110)
info.setLife(5)
info.setScore(0)
controller.moveSprite(Slime, 200, 200)
game.showLongText("Pulsa A para empezar", DialogLayout.Center)
game.onUpdateInterval(5000, function () {
    Enemigo3 = sprites.create(assets.image`zombie4`, SpriteKind.Enemy3)
    Enemigo3.setVelocity(0, 20)
    Enemigo3.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(9000, function () {
    Vida = sprites.create(assets.image`Vida1`, SpriteKind.Vida1)
    Vida.setVelocity(0, 20)
    Vida.setPosition(randint(0, 130), 0)
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
game.onUpdateInterval(7000, function () {
    Enemigo2 = sprites.create(assets.image`Zombie3`, SpriteKind.Enemy2)
    Enemigo2.setVelocity(0, 20)
    Enemigo2.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(2000, function () {
    Enemigo6 = sprites.create(assets.image`zombie8`, SpriteKind.Enemy6)
    Enemigo6.setVelocity(0, 20)
    Enemigo6.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(1000, function () {
    Enemigo7 = sprites.create(assets.image`zombie6`, SpriteKind.Enemy7)
    Enemigo7.setVelocity(0, 20)
    Enemigo7.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(4000, function () {
    Enemigo = sprites.create(assets.image`Zombie1`, SpriteKind.Enemy)
    Enemigo.setVelocity(0, 20)
    Enemigo.setPosition(randint(0, 120), 0)
})
forever(function () {
    music.play(music.stringPlayable("D E D A D C5 D F ", 110), music.PlaybackMode.InBackground)
    if (info.score() == 100) {
        game.over(true)
    }
})
game.onUpdateInterval(6000, function () {
    Enemigo4 = sprites.create(assets.image`Zombie2`, SpriteKind.Enemy4)
    Enemigo4.setVelocity(0, 20)
    Enemigo4.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(3000, function () {
    Enemigo5 = sprites.create(assets.image`zombie7`, SpriteKind.Enemy5)
    Enemigo5.setVelocity(0, 20)
    Enemigo5.setPosition(randint(0, 130), 0)
})
game.onUpdateInterval(8000, function () {
    Enemigo8 = sprites.create(assets.image`zombie5`, SpriteKind.Enemy8)
    Enemigo8.setVelocity(0, 20)
    Enemigo8.setPosition(randint(0, 130), 0)
})
