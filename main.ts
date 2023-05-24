namespace SpriteKind {
    export const Recycled_Items = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ThePlayer.vy == 0) {
        ThePlayer.vy = -250
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ThePlayer.vy == 0) {
        ThePlayer.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.bubbles)
    game.setGameOverMessage(false, "\"GAMER OVER!\"")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.none)
    game.setGameOverMessage(true, "\"You win!\"")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Recycled_Items, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let Newspaper: Sprite = null
let EmptyBottle: Sprite = null
let Trash: Sprite = null
let CokeBottle: Sprite = null
let ThePlayer: Sprite = null
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbb6666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbb666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbb666666bb66bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666bb66bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbb666666666b66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666b66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb6666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb6666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb6666666666666666666bbb66bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666bbb66bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbb66666666666666666666666bb66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666bb66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbb66666666666666666666666bbb66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666bbb66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbb66666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbb66666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbb6666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bb666bbbb6666666666666666666666666666666666bb66bbbbbbbbbbbbb6666bbbbbbbbbbbbbbbbbbbb666bbbb6666666666666666666666666666666666bb66bbbbbbbbbbbbb6666bbbbbbbbbbbbbb
    b66666bb66666666666666666666666666666666666b6666bbbbbbbbbbb666666bbbbbbbbbbbbbbbbbb66666bb66666666666666666666666666666666666b6666bbbbbbbbbbb666666bbbbbbbbbbbbb
    b66666b666666666666666666666666666666666666b6666bbbbbbbbbbb666666b666bbbbbbbbbbbbbb66666b666666666666666666666666666666666666b6666bbbbbbbbbbb666666b666bbbbbbbbb
    bb6666666666666666666666666666666666666666666666bbbbbbbbbbbbb666666666bbbbbbbbbbbbbb6666666666666666666666666666666666666666666666bbbbbbbbbbbbb666666666bbbbbbbb
    b6666666666666666666666666666666666666666666666bbbbbbbbb6666b666666666bbbbbbbbbbbbb6666666666666666666666666666666666666666666666bbbbbbbbb6666b666666666bbbbbbbb
    666666666666666666666666666666666666666666666666bbbbbbb66666666666666bbbbbbbbbb1bb666666666dd6666666666666666666666666666666666666bbbbbbb66666666666666bbbbbbbbb
    6666666666666666666666666666666666666666666666666b666bb666666666666666666bbbbbbddd666666666ddd6666666666666666666666666666666666666b666bb666666666666666666bbbbb
    66666666666666666666666666666666666666666666666666666666666666666666666666bbbb1ddd666666666ddd66666666666666666666666666666666666666666666666666666666666666bbbb
    66666666666666666666666666666666666666666666666666666666666666666666666666bbbddddddd666666ddddd6666666666666666666666666666666666666666666666666666666666666bbbb
    66666666666666666666666666666666666666666ddddddddd666666666666666666666666666ddddddd666666ddddd666666666666666666666666666666666666666666dddddddddd6666666666666
    66666666666666666666666666666666666666666ddddddddd666666666666666666666666666ddddddd666666ddddd666666666666666666666666666666666666666666dddddddddd6666666666666
    6666666666666666666ddd6666666666666666666d11dddddd666666666666666666666666666d11dddd66666ddddddd66666666666666666666dd6666666666666666666dd1d1ddddd6666666666666
    666666666666666666ddddd666666666666666666ddddddd1d666666666666666666666666666ddddddd66666ddddddd6666666666666666666dddd666666666666666666dddddd11dd6666666666666
    66666666666666666dddddd666666666666666666ddddddddd6666666666d66666666ddddd666d1ddddd66666ddddddd66666666666666666dddddd666666666666666666dddddddddd6666666666666
    66666666666666666ddd1d666666d666666666666ddddddddd666666666dd66666666ddddd666ddddddd66666ddddddd66666666666666666ddd1d666666dd66666666666dddd1ddddd66666666dd666
    66666666666666666dddddd66666d666666666666ddddddd1d666666666dd66666666ddddd666ddddddd66666ddddddd66666666666666666dddddd66666dd66666666666ddddddd1dd66666666dd666
    66666666ddd666666dd11d66666ddd66666666666ddddddddd66dddddd6dd66666666ddddd666ddddddd66666ddddddd666666666dd666666ddd1d66666ddd66666666666dddddddddd6ddddddddd666
    d6dd6666ddddddddddd1ddd666ddddd6666666666ddddddd1d66d11ddd6dd666666666dd1dd66ddddddd666dddddddddd6dd6666ddddddddddddd1d6666dddd6666666666dddddd11dd6d11dddddd666
    dddd66666d1dd1ddddddddd666ddddd6666666666ddddddddd66dddd1d6dd66666666dddddd66dd1dddd666ddddddddddddd6666dd1ddd1dddddddd6666dddd6666666666dddddddddd6dddd1dddd666
    dd1d66666ddd1111ddddddd666ddddd6666666666ddddddddd66dddd1dddd66666666dddddd66ddddddd666ddddddddddd1d6666dddd1d11ddddddd6666dddd6666666666dddddddddd6dddd1dddd666
    dddd6666dddddddddddddddd66dddddd66dd6dd6ddddddddddd6d11dddddd66666666dddddd66ddddddd666ddddddddddddd6666dddddddddddddddd66dddddd666d66ddddddddddddd6d11dddddd666
    dd1d6666dddddddddddddddd66dddddd66ddddddddddddddddd6ddddddddd66d66d66dddddd66ddddddd666ddddddddddd1d6666dddddddddddddddd66dddddd666dddddddddddddddd6ddddddddd666
    ddddd6dd1d1ddddddddddddd66ddddddd6dddd11ddddddddddddd11bbddddddd6ddd66dd1dd66ddddddd666ddddddddddddddd6ddd1ddddddddddddd66ddddddd666d11ddddddbddddddd11bbbddd6dd
    ddddd6dddddddddddddddddddd1dddddd6dddddddddbbbdddddddddbbbdddddd6ddd6dddddd66ddddddd666ddddddddddddddd6dddddddddddddddddddddddddd6ddddddddddbbdddddddddbbbddd6dd
    ddddd6ddddddddddddddddddddddddddd6dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd666ddddddddddddddd6dddddddddddddddddddddddddd6ddddddddddbbdddddddddbbbdddddd
    ddddd6ddddddddddddddddddddddddddd6dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd6ddddddddddddddd6dddddddddddddddddddddddddd6d1ddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd6dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd6ddddddddddddddbbbbbbbbbbdddddddddddddddddd6ddddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd6dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd6ddddddddddddddbbbbbbbbbbdddddddddddddddddd6ddddddddbbbbbbbdddddbbbbbddddd
    dddddbddbbbbbbddddddddddddddddddd6dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd6ddddddddddddddbbdbdbbbbbdddddddddddddddddd6ddddddddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbdbddddddddddddddddddd6dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd6ddddddddddddddbbbbbbddbbdddddddddddddddddd6ddddddddbbbbbbbddddbbbbbbbbddd
    dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd6ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
    dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbabbbbb
    bbbbbbabbbaabbbbbaabbbbabbbabbbbabaabbbabbbbbbabbbaabbbbbaabbbbabbbabbbbabaabbbabbbbbbabbbaabbbbbaabbbbabbbabbbbabaabbbabbbbbbabbbaabbbbbaabbbbabbbabbbbabaabbba
    bbabbbaabaabbabbbaabbbaabbbaabbbabbaabaabbabbbaabaabbabbbaabbbaabbbaabbbabbaabaabbabbbaabaabbabbbaabbbaabbbaabbbabbaabaabbabbbaabaabbabbbaabbbaabbbaabbbabbaabaa
    bbaabbaabaabbaabbbaabaabbbbaababaabaaaabbbaabbaabaabbaabbbaabaabbbbaababaabaaaabbbaabbaabaabbaabbbaabaabbbbaababaabaaaabbbaabbaabaabbaabbbaabaabbbbaababaabaaaab
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `)
ThePlayer = sprites.create(assets.image`Player1`, SpriteKind.Player)
controller.moveSprite(ThePlayer, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
ThePlayer.ay = 1000
scene.cameraFollowSprite(ThePlayer)
for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
    CokeBottle = sprites.create(img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `, SpriteKind.Recycled_Items)
    animation.runImageAnimation(
    CokeBottle,
    [img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 1 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `,img`
        f f f f f f f f f f f f f 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 2 2 1 2 1 2 1 1 2 2 1 1 
        1 2 2 1 2 1 2 1 2 1 2 1 2 
        1 1 2 1 1 1 2 1 2 1 2 1 1 
        f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 1 1 1 1 1 1 1 1 1 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f 
        `],
    200,
    true
    )
    tiles.placeOnTile(CokeBottle, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
    Trash = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Recycled_Items)
    animation.runImageAnimation(
    Trash,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f c f f f f f f f f f . 
        . f f f f c f f f f f f f f f . 
        f f f f c f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f c f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f c f f f f f f f f f . . 
        . . f f c f f f f f f f f f . . 
        . f f c f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f c f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f f f . . . 
        . . . f c f f f f f f f f . . . 
        . . f c f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f c f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . c f f f f f f f . . . . 
        . . . f c f f f f f f f f . . . 
        . . . c f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . c f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . c f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f c . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f c . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f c . . . 
        . . . f f f f f f f f f c . . . 
        . . . f f f f f f f f c f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f c f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f c f . . . 
        . . f f f f f f f f f c f f . . 
        . . f f f f f f f f c f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f c f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f c f f f . . 
        . f f f f f f f f f c f f f f . 
        . f f f f f f f f c f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f c f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f c f f f f f f . 
        f f f f f f f f c f f f f f f f 
        f f f f f f f c f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f c f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(Trash, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
    EmptyBottle = sprites.create(assets.image`newspaper`, SpriteKind.Recycled_Items)
    animation.runImageAnimation(
    EmptyBottle,
    [img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        . 1 . . . . . . 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        . 1 6 . . . . . 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        . 1 6 6 6 . . . 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        . 1 6 6 6 6 . . 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        . 1 6 6 6 6 6 . 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 . . . . . . . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 . . . . . . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 . . . . . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 . . . . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 . . . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 . . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 6 . 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 . . . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 . . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 . . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 6 . 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 . . . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 . . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 6 . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . . . . . 
        . . . . d d . . . . 
        . . 1 1 1 1 1 1 . . 
        . 1 . . . . . . 1 . 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 . . . . . . . . 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        1 6 6 6 6 6 6 6 6 1 
        . 1 6 6 6 6 6 6 1 . 
        . . 1 1 1 1 1 1 . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(EmptyBottle, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    Newspaper = sprites.create(assets.image`newspaper`, SpriteKind.Recycled_Items)
    animation.runImageAnimation(
    Newspaper,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 8 8 8 8 8 8 1 2 1 e . 
        . 1 1 2 b a a 9 a a a a 1 2 d . 
        . e e 1 b 9 9 f 1 5 a 1 2 1 c . 
        . 1 e e 9 b f 1 1 5 5 1 1 a d . 
        . 1 1 e e e b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 3 8 8 8 8 8 1 2 1 e . 
        . 1 1 2 b a 3 9 a a a a 1 2 d . 
        . e e 1 b 9 9 3 3 3 a 1 2 1 c . 
        . 1 e e 9 b f 1 1 3 3 1 1 a d . 
        . 1 1 e e e b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 3 8 8 8 8 8 1 2 1 e . 
        . 1 1 2 b a 3 9 4 4 a a 1 2 d . 
        . e e 1 b 9 9 4 3 3 a 1 2 1 c . 
        . 1 e 4 9 4 4 1 1 3 3 1 1 a d . 
        . 1 1 e 4 e b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 3 8 8 8 8 8 1 2 1 e . 
        . 1 1 2 b a 3 7 7 7 a a 1 2 d . 
        . e e 1 b 9 7 4 3 3 a 1 2 1 c . 
        . 1 e 4 7 7 4 1 1 3 3 1 1 a d . 
        . 1 7 7 4 e b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 3 8 8 8 8 8 1 2 1 e . 
        . 1 1 2 b 8 8 7 7 7 a a 1 2 d . 
        . e e 1 b 9 7 8 3 3 a 1 2 1 c . 
        . 1 e 4 7 7 4 1 8 8 8 1 1 a d . 
        . 1 7 7 4 e b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 3 8 8 8 8 8 1 2 1 e . 
        . 1 1 2 b 8 8 7 7 7 a a 1 2 d . 
        . e e 1 b 9 7 8 3 3 a 1 2 1 c . 
        . 1 e 4 a a a a a a a a a a d . 
        . 1 7 7 4 e b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 3 8 8 8 b 8 1 2 1 e . 
        . 1 1 2 b 8 8 7 b 7 a a 1 2 d . 
        . e e 1 b 9 b b 3 3 a 1 2 1 c . 
        . 1 e 4 a b a a a a a a a a d . 
        . 1 7 7 4 e b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 5 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 8 3 8 8 8 b 8 1 2 1 e . 
        . 1 1 2 b 8 8 7 d d a a 1 2 d . 
        . e e 1 b 9 b d 3 3 a 1 2 1 c . 
        . 1 e 4 a b d a a a a a a a d . 
        . 1 7 7 4 d b b b b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 6 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 6 3 8 8 8 b 8 1 2 1 e . 
        . 1 1 2 b 6 8 7 d d a a 1 2 d . 
        . e e 1 b 6 b d 3 3 a 1 2 1 c . 
        . 1 e 4 a b 6 6 6 a a a a a d . 
        . 1 7 7 4 d b b 6 b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 6 1 1 1 1 1 1 1 1 5 d . 
        . 1 2 8 6 3 8 8 8 b 8 3 2 1 e . 
        . 1 1 2 b 6 8 7 d 3 3 a 1 2 d . 
        . e e 1 b 6 b d 3 3 a 1 2 1 c . 
        . 1 e 4 a 3 3 3 6 a a a a a d . 
        . 1 7 3 3 d b b 6 b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 6 1 1 1 1 1 1 1 1 5 5 5 
        . 1 2 8 6 3 8 8 8 b 8 3 5 5 e . 
        . 1 1 2 b 6 8 7 d 3 5 5 1 2 d . 
        . e e 1 b 6 b d 5 5 a 1 2 1 c . 
        . 1 e 4 a 3 3 5 6 a a a a a d . 
        . 1 7 3 3 5 5 b 6 b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d 6 6 d d 6 6 d d 6 6 d . 
        . 1 1 9 9 1 1 9 9 1 1 9 9 1 6 . 
        . 9 9 1 1 9 9 1 1 9 9 1 1 9 f . 
        . f f f f f f f f f f f f f 4 . 
        . 1 1 1 6 1 1 1 1 1 1 1 1 5 5 5 
        . 1 2 8 6 3 8 8 8 4 4 3 5 5 e . 
        . 1 1 2 b 6 4 4 4 3 5 5 1 2 d . 
        . e e 1 4 4 b d 5 5 a 1 2 1 c . 
        . 1 4 4 a 3 3 5 6 a a a a a d . 
        . 1 7 3 3 5 5 b 6 b b 1 a 1 d . 
        . 1 1 1 1 1 1 1 e 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(Newspaper, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
