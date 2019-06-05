"use strict";

$(function () {
  // 头部的 城市切换
  $(".jd-area li").each(function (index) {
    var that = this;
    $(that).mouseenter(function () {
      $(that).addClass("active").siblings().removeClass("active");
      $($(".jd-city-box .jd-city")[index]).addClass("active").siblings().removeClass("active");
    });
  });
});