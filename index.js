// ==UserScript==
// @name         微店代抢
// @namespace    http://tampermonkey.net/
// @version      1
// @description  微店自动抢
// @author       1585364631
// @match        *://weidian.com/buy/add-order/*
// @icon         https://s1.ax1x.com/2022/10/14/xwsJYT.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var but = document.getElementById('pay_btn').getElementsByTagName('span')
    console.log(but.length)
    if(but.length!=3){
        console.log("未到发售时间或者商品数量不足")
        window.location.reload();
    }else{
        console.log(but[0])
        but[0].click()
    }
})();
