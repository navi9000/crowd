/**
 * @typedef {Object} SliderParams
 * @property {string} parentSelector
 * @property {[string]} slideList
 * @property {"numerical" | "dots"} navigationDisplay
 * @property {number=} slidesPerView
 * @property {number=} slideGap
 * @property {boolean=} autoplay
 * @property {boolean=} loop
 * @property {number=} firstElementIndex
 */

import { delegate, qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import {
  NAVIGATION_DOT,
  NAVIGATION_TEMPLATE,
  NAVIGATION_VALUE_DOTS,
  NAVIGATION_VALUE_NUMERICAL,
  SLIDER_SLIDE_TEMPLATE,
  SLIDER_TEMPLATE,
} from "./ui.js"

class Slider {
  #parentSelector
  #parentElement
  #prevButtonSelector
  #nextButtonSelector
  #valueSelector
  #navigationResultSelector
  #slideList
  #length
  #navigationDisplay
  #slidesPerView
  #slideGap
  #autoplay
  #loop
  #currentIndex
  #eventListeners = []
  #interval

  /**
   *
   * @param {SliderParams}
   */
  constructor({
    parentSelector,
    slideList,
    navigationDisplay,
    slidesPerView = 1,
    slideGap = 0,
    autoplay = false,
    loop = false,
    firstElementIndex = 0,
  }) {
    this.#parentSelector = parentSelector
    this.#parentElement = qs(parentSelector)
    this.#prevButtonSelector = ".navigation__button_prev"
    this.#nextButtonSelector = ".navigation__button_next"
    this.#valueSelector = ".navigation__value"
    this.#navigationResultSelector = ".navigation__result"
    this.#slideList = slideList
    this.#length = this.#slideList.length
    this.#navigationDisplay = navigationDisplay
    this.#slidesPerView = slidesPerView
    this.#slideGap = slideGap
    this.#autoplay = autoplay
    this.#loop = loop
    this.#currentIndex = firstElementIndex
  }

  mount() {
    this.#parentElement.innerHTML = populate(SLIDER_TEMPLATE, {
      content: this.#slideList.map((content) =>
        populate(SLIDER_SLIDE_TEMPLATE, { content }),
      ),
      wrapperStyles: `width: calc(${(100 * this.#length) / this.#slidesPerView}% + ${(this.#slideGap * (this.#length - 1)) / this.#slidesPerView}px);
      grid-template-columns: repeat(${this.#length}, minmax(0, 1fr));
      gap: ${this.#slideGap}px`,
      navigation: populate(NAVIGATION_TEMPLATE, {
        result:
          this.#navigationDisplay === "numerical"
            ? populate(NAVIGATION_VALUE_NUMERICAL, {
                value: (this.#currentIndex + 1).toString(),
                total: this.#length.toString(),
              })
            : populate(NAVIGATION_VALUE_DOTS, {
                dots: Array.from({ length: this.#length }, (_, index) =>
                  populate(NAVIGATION_DOT, {
                    active:
                      index === this.#currentIndex
                        ? "navigation__dot_active"
                        : "",
                  }),
                ),
              }),
      }),
    })

    this.#eventListeners.push(
      delegate(
        this.#parentElement,
        this.#nextButtonSelector,
        "click",
        this.#nextSlide.bind(this),
      ),
      delegate(
        this.#parentElement,
        this.#prevButtonSelector,
        "click",
        this.#prevSlide.bind(this),
      ),
    )

    if (!this.#loop && this.#isFirst) {
      this.#disableNavButton(this.#prevButtonSelector)
    }

    if (!this.#loop && this.#isLast) {
      this.#disableNavButton(this.#nextButtonSelector)
    }

    if (this.#autoplay) {
      this.#launchAutoplay()
    }
  }

  unmount() {
    if (this.#autoplay) {
      this.#stopAutoplay()
    }
    this.#eventListeners.forEach((kill) => kill())
    this.#parentElement.innerHTML = ""
  }

  get #isFirst() {
    return this.#currentIndex === 0
  }

  get #isLast() {
    return this.#currentIndex === this.#length - this.#slidesPerView
  }

  #launchAutoplay() {
    this.#interval = setInterval(this.#autoplayCallback.bind(this), 4000)
  }

  #stopAutoplay() {
    clearInterval(this.#interval)
  }

  #autoplayCallback() {
    this.#isLast ? this.#firstSlide() : this.#nextSlide()
  }

  #firstSlide() {
    this.#currentIndex = 0
    this.#reposition()
    this.#repaintValue()

    if (!this.#loop) {
      this.#disableNavButton(this.#prevButtonSelector)
      this.#enableNavButton(this.#nextButtonSelector)
    }

    if (!this.#loop && this.#isLast) {
      this.#disableNavButton(this.#nextButtonSelector)
    }

    if (this.#autoplay) {
      this.#stopAutoplay()
      this.#launchAutoplay()
    }
  }

  #prevSlide() {
    this.#currentIndex = this.#currentIndex - 1
    this.#reposition()
    this.#repaintValue()

    this.#enableNavButton(this.#nextButtonSelector)
    if (!this.#loop && this.#isFirst) {
      this.#disableNavButton(this.#prevButtonSelector)
    }

    if (this.#autoplay) {
      this.#stopAutoplay()
      this.#launchAutoplay()
    }
  }

  #nextSlide() {
    this.#currentIndex = this.#currentIndex + 1
    this.#reposition()
    this.#repaintValue()

    this.#enableNavButton(this.#prevButtonSelector)
    if (!this.#loop && this.#isLast) {
      this.#disableNavButton(this.#nextButtonSelector)
    }

    if (this.#autoplay) {
      this.#stopAutoplay()
      this.#launchAutoplay()
    }
  }

  #repaintValue() {
    if (this.#navigationDisplay === "numerical") {
      qs(`${this.#parentSelector} ${this.#valueSelector}`).innerHTML =
        this.#currentIndex + 1
    }

    if (this.#navigationDisplay === "dots") {
      qs(
        `${this.#parentSelector} ${this.#navigationResultSelector}`,
      ).innerHTML = Array.from({ length: this.#length }, (_, index) =>
        populate(NAVIGATION_DOT, {
          active: index === this.#currentIndex ? "navigation__dot_active" : "",
        }),
      ).join("")
    }
  }

  #reposition() {
    const $slides = qs(`${this.#parentSelector} .slider__slides`)
    const newPos = `(${(-100 / this.#length) * this.#currentIndex}%) - (${(this.#slideGap / this.#length) * this.#currentIndex}px)`
    $slides.style.transform = `translateX(calc(${newPos}))`
  }

  /**
   *
   * @param {string} selector
   */
  #enableNavButton(selector) {
    qs(`${this.#parentSelector} ${selector}`).classList.remove(
      "navigation__button_disabled",
    )
  }

  /**
   *
   * @param {string} selector
   */
  #disableNavButton(selector) {
    qs(`${this.#parentSelector} ${selector}`).classList.add(
      "navigation__button_disabled",
    )
  }
}

export default Slider
