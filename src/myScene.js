//myScene.js
var MyLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create(res.HelloWorld_png);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);

        var label = cc.LabelTTF.create("Hello World", "Arial", 40);
        label.setPosition(size.width / 2, size.height / 2);
        this.addChild(label, 1);
        //add code
        var spriteB = cc.Sprite.create(res.Cocos_png);
       　spriteB.setPosition(size.width / 4, size.height / 4);
       　this.addChild(spriteB);


        return true;
    },
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
    }
});