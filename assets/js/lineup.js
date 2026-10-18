// Lineup view switcher: All / Starters / 1st sub / 2nd sub
(function () {
  var bar = document.querySelector('.viewbar');
  var pitch = document.querySelector('.pitch');
  if (!bar || !pitch) return;
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-view]');
    if (!b) return;
    pitch.setAttribute('data-view', b.getAttribute('data-view'));
    Array.prototype.forEach.call(bar.querySelectorAll('button'), function (x) {
      x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
    });
  });
})();
