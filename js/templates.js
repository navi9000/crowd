class Templates {
  static Navigation() {
    return `<div class="navigation">
      <button class="navigation__button navigation__button_prev">
        <img class="navigation__arrow" src="img/arrow.svg" alt="arrow" />
      </button>
      <div class="navigation__result">{{result}}</div>
      <button class="navigation__button navigation__button_next">
        <img class="navigation__arrow" src="img/arrow.svg" alt="arrow" />
      </button>
    </div>`
  }
}

export default Templates
