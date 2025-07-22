// Example: Animate the intro title on page load
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.intro-title');
  title.style.opacity = 0;
  title.style.transform = 'translateY(40px)';
  setTimeout(() => {
    title.style.transition = 'all 1s cubic-bezier(.6,-0.01,0,.99)';
    title.style.opacity = 1;
    title.style.transform = 'translateY(0)';
  }, 200);
});
