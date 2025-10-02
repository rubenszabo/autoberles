function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');
  const imgOverlay = document.getElementById('imgOverlay');
  const overlayImg = document.getElementById('overlayImg');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const img = card.querySelector('img');
      overlayImg.src = img.src;
      imgOverlay.style.display = 'flex';
    });
  });

  imgOverlay.addEventListener('click', function () {
    imgOverlay.style.display = 'none';
    overlayImg.src = '';
  });
});