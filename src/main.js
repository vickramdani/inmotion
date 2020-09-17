import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from "jquery";

import "regenerator-runtime";
import "./style.css";

AOS.init();

$(document).ready(function() {
  autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
  var trigger = $(".trigger");
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
