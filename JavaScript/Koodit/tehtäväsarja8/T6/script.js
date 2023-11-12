document.addEventListener('DOMContentLoaded', () => {
  const balloon = document.querySelector('.balloon');
  let balloonSize = 100;

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      balloonSize *= 1.1;
    } else if (event.key === 'ArrowDown') {
      balloonSize *= 0.9;
    }

    balloonSize = Math.max(10, Math.min(300, balloonSize));
    balloon.style.fontSize = `${balloonSize}px`;

    if (balloonSize >= 300) {
      balloon.innerHTML = '💥';
      document.removeEventListener('keydown', handleKeyDown);
    }
  });
});
