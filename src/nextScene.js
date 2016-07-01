//nextScene.js
var NextLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        var label = cc.LabelTTF.create("This is Next Scene!!", "Arial", 26);
        label.setPosition(size.width / 2, size.height / 2);
        this.addChild(label, 1);

        return true;
    },
});

/*
var backgroundLayer = cc.Layer.extend({
    sprite: null,
    // ブロックを保持しておく配列
    dropSpriteArray: null,
    // 配列の宣言　ブロックの名前を指定
    dropArray:[res.drop01_png, res.drop02_png, res.drop03_png, res.drop04_png, res.drop05_png],
    ctor: function() {
        this._super()
        var size = cc.director.getWinSize();

console.log(this.dropSpriteArray);
        this.dropSpriteArray = new Array();
        var i = 0;
        for (i = 1, i <= 5; i++) {
            this.sprite = new cc.Sprite(this.dropArray[i]);
            //this.sprite.setPosition(size.width * i / 6, size.height / 5);　
            this.sprite.attr({
                x: size.width * i / 2,
                y: size.height / 2,
                scale: 1.0,
                rotation: 0
            });
            this.dropSpriteArray.push(this.sprite);
            this.addChild(this.dropSpriteArray[i], 0);
        }

        return true;
    },
});
*/

var backgroundLayer = cc.Layer.extend({
  sprite: null,
  dropSpriteArray: null,
  dropArray: [res.drop01_png, res.drop02_png, res.drop03_png, res.drop04_png, res.drop05_png],
  ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        this.dropSpriteArray = new Array();
        var i=1;
        for(i=0;i<5; i++){
          var rnd = Math.floor(Math.random() * 5);
          this.sprite = new cc.Sprite(this.dropArray[rnd]);
          cc.log(i);
          cc.log(this.dropArray[i]);
          this.sprite.attr({
              x:size.width * (i+1) / 6 ,
              y:size.height * 5 / 6,
              scale: 1.0,
              rotation: 0
          });
          this.dropSpriteArray.push(this.sprite);
          // this.addChild(this.sprite);
          this.addChild(this.dropSpriteArray[i],0);

        //  var drop01 = cc.Sprite.create(res.drop01_png);　
        //  drop01.setPosition(size.width * i / 6, size.height / 5);　
        //  this.addChild(drop01);
        }

        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
        cc.director.runScene(new MyScene());
    },
});

var NextScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer1 = new backgroundLayer();
        this.addChild(layer1);
        var layer2 = new NextLayer();
        this.addChild(layer2);
    }
});
