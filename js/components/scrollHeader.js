function scrollHeader() {
  const scroll = () => {
    const nav = document.getElementById('header');

    scrollY >= 80 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');
  };

  window.addEventListener('scroll', scroll);
}

export default scrollHeader;
