// ==UserScript==
// @name         闲鱼搜索框显示
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Wars
// @match        https://2.taobao.com/*
// @match        https://s.2.taobao.com/*
// @match        https://trade.2.taobao.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //搜索框恢复
    var Header_Search = document.createElement("div");
    Header_Search.className="idle-search";
    Header_Search.innerHTML="<form method=\"get\" action=\"//s.2.taobao.com/list/list.htm\" name=\"search\" target=\"_top\"><input class=\"input-search\" id=\"J_HeaderSearchQuery\" name=\"q\" type=\"text\" value=\"\" placeholder=\"搜闲鱼\" /><input type=\"hidden\" name=\"search_type\" value=\"item\" autocomplete=\"off\" /><input type=\"hidden\" name=\"app\" value=\"shopsearch\" autocomplete=\"off\" /><button class=\"btn-search\" type=\"submit\"><i class=\"iconfont\">&#xe602;</i><span class=\"search-img\"></span></button></form>";
    document.getElementById("J_IdleHeader").appendChild(Header_Search);
    //去除商品第一张图片广告
    var guide_img = document.getElementsByClassName("guide-img");
    guide_img[0].parentNode.innerHTML="";
    //左下角闲鱼下载
    // var download = document.getElementsByClassName("download-layer");
    // download[0].parentNode.innerHTML="";
    //去除主页右侧反馈按钮 恢复添加旺旺应用
    document.getElementsByClassName("advice")[0].parentNode.innerHTML="<li class=\"top\" id=\"J_GoTop\"><a href=\"#\">TOP</a></li>";
})();
