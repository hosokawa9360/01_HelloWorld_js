//resource.js
var res = {
    HelloWorld_png : "res/HelloWorld.png",
    Cocos_png : "res/cocos.png",
    gameicon_1_png : "res/gameicon_1.png",
    gameicon_2_png : "res/gameicon_2.png",
    gameicon_3_png : "res/gameicon_3.png",
    gameicon_4_png : "res/gameicon_4.png",
    
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
