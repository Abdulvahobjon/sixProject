class Menu {
  constructor(src, alt, title, descr, total, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.total = 10;
    this.parentSelector = document.querySelector(parentSelector);
    this.trnasfer = 11000;
    this.numUz()
  }

  numUz() {
    this.total = this.total * this.trnasfer;
  }

  render() {
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="menu__item">
        <img src=${this.src} alt=${this.alt}/>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">
        ${this.descr}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.total}</span> month</div>
        </div>
      </div>
        `;

    this.parentSelector.append(div);
  }
}

new Menu(
  "img/tabs/1.png",
  "img",
  'Plan "Usual"',
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
  10,
  ".menu .container"
).render();


new Menu(
  "img/tabs/3.jpg",
  "img",
  'Plan "VIP"',
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
  8,
  ".menu .container"
).render();


new Menu(
  "img/tabs/2.jpg",
  "img-2",
  'Plan “Premium”',
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.",
  9,
  ".menu .container"
).render();
