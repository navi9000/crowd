class Templates {
  static IntroductionFirstImage() {
    return `<img src="img/introduction-top.png" alt="chess" class="introduction__first-image" />`
  }

  static ParticipantItem() {
    return `<article class="participant">
        <div class="participant__img-container">
            <img src="{{src}}" alt="participant" class="participant__img" />
        </div>
        <h3 class="participant__name">{{name}}</h3>
        <p class="participant__description">{{description}}</p>
        <a class="participant__button">Подробнее</a>
    </article>`
  }

  static StageItem() {
    return `<div class="stage-item">
        <div class="stage-item__counter">{{counter}}</div>
        <div class="stage-item__text">{{text}}</div>
    </div>`
  }

  static StageCard() {
    return `<div class="stage-card">
        <div class="stage-card__content">{{items}}</div>
    </div>`
  }

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
