document.querySelectorAll('.method-carousel').forEach(carousel => {
  const track   = carousel.querySelector('.method-gallery');
  const prevBtn = carousel.querySelector('.arrow-left');
  const nextBtn = carousel.querySelector('.arrow-right');

  const visible = 3; // adjust if needed
  const total   = track.children.length;
  let index     = 0;

  function updateArrows(){
    prevBtn.classList.toggle('d-none', index === 0);
    nextBtn.classList.toggle('d-none', index >= total - visible);
  }

  function stepWidth(){
    const first = track.children[0].getBoundingClientRect();
    const gap   = parseFloat(getComputedStyle(track).gap) || 0;
    return first.width + gap;
  }

  function moveForward(){
    if(index < total - visible){
      track.appendChild(track.firstElementChild);
      index++;
      updateArrows();
    }
  }

  function moveBack(){
    if(index > 0){
      track.insertBefore(track.lastElementChild, track.firstElementChild);
      index--;
      updateArrows();
    }
  }

  nextBtn.addEventListener('click', moveForward);
  prevBtn.addEventListener('click', moveBack);

  updateArrows();
});
