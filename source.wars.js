// ==UserScript==
// @name         闲鱼搜索框显示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Wars
// @match        https://2.taobao.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var Header_Search = document.createElement("div");
        Header_Search.className="idle-search";
        Header_Search.innerHTML="<form method=\"get\" action=\"//s.2.taobao.com/list/list.htm\" name=\"search\" target=\"_top\"><input class=\"input-search\" id=\"J_HeaderSearchQuery\" name=\"q\" type=\"text\" value=\"\" placeholder=\"搜闲鱼\" /><input type=\"hidden\" name=\"search_type\" value=\"item\" autocomplete=\"off\" /><input type=\"hidden\" name=\"app\" value=\"shopsearch\" autocomplete=\"off\" /><button class=\"btn-search\" type=\"submit\"><i class=\"iconfont\">&#xe602;</i><span class=\"search-img\"></span></button></form>";
        document.getElementById("J_IdleHeader").appendChild(Header_Search);
})();
