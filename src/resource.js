//resource.js
var res = {
    HelloWorld_png : "res/HelloWorld.png",
    Cocos_png : "res/cocos.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
