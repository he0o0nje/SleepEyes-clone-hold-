function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie =
    name +
    "=" +
    escape(value) +
    "; path=/; expires=" +
    todayDate.toGMTString() +
    ";";
}
function pop_close(name, idx) {
  setCookie(name, "done", 1);
  $("#layer_pop" + idx).hide();
}

function pop_hide(idx) {
  $("#layer_pop" + idx).hide();
}

$(function () {
  var pop_move = false;
  $(".main_layer_popup .pop_link").click(function () {
    var data = $(this).data("pop_idx");
    if (!pop_move) {
      pop_hide(data);
    }
  });

  $(".main_layer_popup").draggable({
    handle: "div.pop_bottom",
    cursor: "move",
  });
});
