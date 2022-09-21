"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var swiper = new Swiper(".commentSwiper", (_Swiper = {
  slidesPerView: 1,
  // 倒底會回第一張
  loop: true,
  // 有fade效果才不會整張切換
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}, _defineProperty(_Swiper, "pagination", {
  el: '.swiper-pagination',
  type: 'bullets'
}), _defineProperty(_Swiper, "navigation", {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
}), _Swiper));
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {});
//# sourceMappingURL=all.js.map
