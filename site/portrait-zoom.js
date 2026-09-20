(function () {
  var open = document.getElementById("portrait-open");
  var dialog = document.getElementById("portrait-dialog");
  if (!open || !dialog || typeof dialog.showModal !== "function") return;

  open.addEventListener("click", function () {
    dialog.showModal();
  });
  // Any click closes it: the backdrop click targets the dialog itself, the image click bubbles up.
  dialog.addEventListener("click", function () {
    dialog.close();
  });
})();
