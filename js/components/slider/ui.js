export const NAVIGATION_TEMPLATE = `<div class="navigation">
      <button class="navigation__button navigation__button_prev">
        <img class="navigation__arrow" src="img/arrow.svg" alt="arrow" />
      </button>
      <div class="navigation__result">{{result}}</div>
      <button class="navigation__button navigation__button_next">
        <img class="navigation__arrow" src="img/arrow.svg" alt="arrow" />
      </button>
    </div>`

export const SLIDER_SLIDE_TEMPLATE = `<div class="slider__slide">{{content}}</div>`

export const SLIDER_TEMPLATE = `<div class="slider">
  <div class="slider__slides" style="{{wrapperStyles}}">
    {{content}}
  </div>
  {{navigation}}
</div>`
