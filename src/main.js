import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

import "regenerator-runtime";
import "./style.css";

AOS.init();

function browserDetect() {
  let test = function(regexp) {
    return regexp.test(window.navigator.userAgent);
  };
  switch (true) {
    case test(/firefox|fxios/i):
      console.log("Mozilla Firefox");
    case test(/opr\//i):
      console.log("Opera");
    case test(/chrome|chromium|crios/i):
      console.log("Google Chrome");
    default:
      alert("Please open this site with Chrome, Opera, or Firefox for better experience");
  }
};

browserDetect();

$(document).ready(function() {
  autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
  const trigger = $(".trigger");
  trigger.click(function(e) {
    e.preventDefault();
    const theModal = $(this).data("target");
    const videoSRC = $(this).data("src");

    $(theModal + " iframe").attr("src", videoSRC);
    $(theModal).on("hidden.bs.modal", function() {
      $(theModal + " iframe").attr("src", "");
    });
  });
}
