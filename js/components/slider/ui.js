export const NAVIGATION_TEMPLATE = `<div class="navigation">
      <button class="navigation__button navigation__button_prev">
        <img class="navigation__arrow" src="img/arrow.svg" alt="arrow" />
      </button>
      {{result}}
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

export const NAVIGATION_VALUE_NUMERICAL = `<div class="navigation__result navigation__result_numerical">
  <span class="navigation__value">{{value}}</span><span class="navigation__slash">/</span><span class="navigation__total">{{total}}</span>
</div>
`
