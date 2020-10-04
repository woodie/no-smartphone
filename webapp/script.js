  function app() {

    var parts =  navigator.userAgent.split(') ')
    document.getElementById('details').innerHTML =  parts[0].split(' (')[1];
    document.getElementById('browser').innerHTML =  parts[parts.length - 1];
    // debug
    var raw = "click mousedown mouseup focus blur keydown change mouseup click dblclick mousemove mouseover mouseout mousewheel keydown keyup keypress textInput touchstart touchmove touchend touchcancel resize scroll zoom focus blur select change submit reset";
    var words = raw.split(' ');
    for (i = 0; i < words.length; i++) {
      try {
      document.addEventListener(words[i], function (e) {
        console.log(e);
      });
      } catch(error) {
        console.log('No luck with ', words[i]);
      }
    }
    // try dull screen on click
    document.addEventListener('keydown', function (e) {
      var code = e.keyCode ? e.keyCode : e.which;
      document.getElementById('keycode').innerHTML = code;
      document.getElementById('keyname').innerHTML = e.key;
      //if (code == 163) { // #
      //  try {
      //    document.documentElement.requestFullscreen();
      //  } catch(error) {
      //    document.getElementById('fs').innerHTML = 'fail';
      //  }
      //}
    });
    document.body.addEventListener("mousemove", function (e) {
      if (e.movementY > 0) {
        document.getElementById('mousemove').innerHTML = 'down';
      } else if (e.movementY < 0) {
        document.getElementById('mousemove').innerHTML = 'up';
      } else if (e.movementX > 0) {
        document.getElementById('mousemove').innerHTML = 'right';
      } else if (e.movementX < 0) {
        document.getElementById('mousemove').innerHTML = 'left';
      }
    });

  };
