(function () {
  var idx = 0;
  var total = CARS.length;

  var els = {
    photo: document.getElementById('slidePhoto'),
    counter: document.getElementById('slideCounter'),
    badge: document.getElementById('guessBadge'),
    year: document.getElementById('carYear'),
    title: document.getElementById('carTitle'),
    blurb: document.getElementById('carBlurb'),
    rarityFill: document.getElementById('rarityFill'),
    rarityNumber: document.getElementById('rarityNumber'),
    units: document.getElementById('specUnits'),
    value: document.getElementById('specValue'),
    hp: document.getElementById('specHp'),
    top: document.getElementById('specTop'),
    engine: document.getElementById('specEngine'),
    card: document.getElementById('slideCard'),
    progress: document.getElementById('progressFill'),
    prev: document.getElementById('prevBtn'),
    next: document.getElementById('nextBtn'),
    prevM: document.getElementById('prevBtnMobile'),
    nextM: document.getElementById('nextBtnMobile'),
  };

  function render() {
    var car = CARS[idx];
    els.photo.src = 'images/' + car.file;
    els.photo.alt = car.year + ' ' + car.make + ' ' + car.model;
    els.counter.textContent = (idx + 1) + ' / ' + total;
    els.badge.hidden = !car.guess;
    els.year.textContent = car.year;
    els.title.textContent = car.make + ' ' + car.model;
    els.blurb.textContent = car.blurb;
    els.rarityFill.style.width = (car.rarity * 10) + '%';
    els.rarityNumber.textContent = car.rarity + '/10';
    els.units.textContent = car.units;
    els.value.textContent = car.value;
    els.hp.textContent = car.hp;
    els.top.textContent = car.top;
    els.engine.textContent = car.engine;
    els.progress.style.width = (((idx + 1) / total) * 100) + '%';

    els.prev.disabled = idx === 0;
    els.prevM.disabled = idx === 0;
    els.next.disabled = idx === total - 1;
    els.nextM.disabled = idx === total - 1;

    els.card.classList.remove('animate');
    void els.card.offsetWidth; // reflow to restart animation
    els.card.classList.add('animate');

    // preload neighbors
    [idx - 1, idx + 1].forEach(function (i) {
      if (i >= 0 && i < total) {
        var pre = new Image();
        pre.src = 'images/' + CARS[i].file;
      }
    });
  }

  function go(delta) {
    var next = idx + delta;
    if (next < 0 || next >= total) return;
    idx = next;
    render();
  }

  els.prev.addEventListener('click', function () { go(-1); });
  els.next.addEventListener('click', function () { go(1); });
  els.prevM.addEventListener('click', function () { go(-1); });
  els.nextM.addEventListener('click', function () { go(1); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });

  // touch swipe
  var touchStartX = null;
  var touchStartY = null;
  var shell = document.querySelector('.slide-shell');

  shell.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  shell.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) go(1); else go(-1);
    }
    touchStartX = null;
    touchStartY = null;
  }, { passive: true });

  render();
})();
