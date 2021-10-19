function renderPortfolio(params) {
  let HTML = '';

  const portfolioDOM = document.getElementById(`${params.selector}`);
  for (let data of params.data) {
    const imagePath = params.imgPath + data.img;
    HTML += `<div class="portfolio_content grid swiper-slide">
    <img src="${imagePath}" alt="portfolio image" class="portfolio_img" />
    <div class="portfolio_data">
        <h3 class="portfolio_title">${data.title}</h3>
        <p class="portfolio_description">${data.description}</p>
        <a href="" class="button button--flex button--small portfolio_button">
            Demo
            <i class="uil uil-arrow-right button_icon"></i>
        </a>
    </div>
</div>`;

    portfolioDOM.innerHTML = HTML;
  }
}

export default renderPortfolio;
