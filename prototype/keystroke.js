document.addEventListener("keydown", log_keystroke);

function log_keystroke(event) {
  var keystoke_timestamp = (new Date()).getTime();
  var keystroke_key = event.key
  document.getElementById("keystroke_log").innerHTML +=
  `${keystroke_key}: ${keystoke_timestamp}</br>`;
}
