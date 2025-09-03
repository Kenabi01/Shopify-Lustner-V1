// Navigation logic for horizontal sections

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('sectionsWrapper');
  const buttons = [
    document.getElementById('btn-products'),
    document.getElementById('btn-config'),
    document.getElementById('btn-cart'),
    document.getElementById('btn-more')
  ];
  let currentIndex = 0;

  function setActive(index) {
    currentIndex = index;
    wrapper.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
    buttons.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });
  }

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => setActive(index));
  });

  function debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(null, args), delay);
    };
  }

  const handleResize = debounce(() => {
    wrapper.scrollTo({ left: currentIndex * window.innerWidth });
  }, 100);

  window.addEventListener('resize', handleResize);
});
