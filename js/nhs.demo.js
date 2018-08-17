// JavaScript Document

$(function () {
  var destaque = $("#slide-container").destaque({
    //各要素のスピード設定
    slideMovement: 1000,
    slideSpeed: 1000,
    elementSpeed: 1100,
    autoSlideDelay: 10000,
    //コンテナ要素の指定
    itemSelector: ".item",
    //背景要素の指定
    itemBackgroundSelector: ".background",
    //前景要素の指定(文字等)
    itemForegroundElementSelector: ".foreground .element",
    //コントローラーの設定
    controlsSelector: ".pager",
    //ページネーションが少し早いので、調整。
    onPageUpdate: function(destaque, pageData) {
    setTimeout(function(){
      $(".pagination .bullet").removeClass("active");
      $(".pagination .bullet[rel='"+ pageData.currentSlide +"']").addClass("active");
    },700);
  }
}); 
$(".pagination .bullet").click(function(e) {
  e.preventDefault();
  destaque.goTo(parseInt($(this).attr("rel"), 10));
  });
});