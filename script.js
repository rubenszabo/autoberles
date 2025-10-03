function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll('.card-img-top');
  const imgOverlay = document.getElementById('imgOverlay');
  const overlayImg = document.getElementById('overlayImg');

  // Only open overlay when the image itself (with .card-img-top) is clicked
  imgs.forEach(imgEl => {
    imgEl.addEventListener('click', function (e) {
      e.stopPropagation(); // prevent clicks bubbling to parent card
      const src = imgEl.src || imgEl.getAttribute('src');
      overlayImg.src = src;
      imgOverlay.style.display = 'flex';
    });
  });

  imgOverlay.addEventListener('click', function () {
    imgOverlay.style.display = 'none';
    overlayImg.src = '';
  });

  // Centralized hide function for the image overlay
  function hideImgOverlay() {
    if (imgOverlay.style.display !== 'none') {
      imgOverlay.style.display = 'none';
      overlayImg.src = '';
    }
  }

  // Hide overlay on any key press
  document.addEventListener('keydown', function () {
    hideImgOverlay();
  });

  // Hide overlay on scroll / wheel / touchmove / pointer down
  window.addEventListener('wheel', function () {
    hideImgOverlay();
  }, { passive: true });

  window.addEventListener('scroll', function () {
    hideImgOverlay();
  }, { passive: true });

  document.addEventListener('touchmove', function () {
    hideImgOverlay();
  }, { passive: true });

  document.addEventListener('pointerdown', function () {
    hideImgOverlay();
  });
});