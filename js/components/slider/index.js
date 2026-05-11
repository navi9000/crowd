/**
 * @typedef {Object} SliderParams
 * @property {string} parentSelector
 * @property {[string]} slideList
 * @property {number=} slidesPerView
 * @property {number=} slideGap
 * @property {boolean=} autoplay
 * @property {boolean=} loop
 * @property {number=} firstElementIndex

 */

import { delegate, qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import {
  NAVIGATION_TEMPLATE,
  SLIDER_SLIDE_TEMPLATE,
  SLIDER_TEMPLATE,
} from "./ui.js"

class Slider {
  #parentSelector
  #parentElement
  #prevButtonSelector
  #nextButtonSelector
  #slideList
  #length
  #slidesPerView
  #slideGap
  #autoplay
  #loop
  #currentIndex

  /**
   *
   * @param {SliderParams}
   */
  constructor({
    parentSelector,
    slideList,
    slidesPerView = 1,
    slideGap = 0,
    autoplay = false,
    loop = false,
    firstElementIndex = 0,
  }) {
    this.#parentSelector = parentSelector
    this.#parentElement = qs(parentSelector)
    this.#prevButtonSelector = `${this.#parentSelector} .navigation__button_prev`
    this.#nextButtonSelector = `${this.#parentSelector} .navigation__button_next`
    this.#slideList = slideList
    this.#length = this.#slideList.length
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
      wrapperStyles: `width: calc(${100 * this.#length}% + ${this.#slideGap * (this.#length - 1)}px);
      grid-template-columns: repeat(${this.#length}, minmax(0, 1fr));
      gap: ${this.#slideGap}px`,
      navigation: populate(NAVIGATION_TEMPLATE, { result: "hi" }),
    })

    delegate(
      this.#parentElement,
      ".navigation__button_next",
      "click",
      this.nextSlide.bind(this),
    )

    delegate(
      this.#parentElement,
      ".navigation__button_prev",
      "click",
      this.prevSlide.bind(this),
    )

    if (!this.#loop && this.#isFirst) {
      this.#disableNavButton(this.#prevButtonSelector)
    }

    if (!this.#loop && this.#isLast) {
      this.#disableNavButton(this.#nextButtonSelector)
    }
  }

  unmount() {}

  prevSlide() {
    this.#currentIndex = this.#currentIndex - 1
    this.#reposition()

    this.#enableNavButton(this.#nextButtonSelector)
    if (!this.#loop && this.#isFirst) {
      this.#disableNavButton(this.#prevButtonSelector)
    }
  }

  nextSlide() {
    this.#currentIndex = this.#currentIndex + 1
    this.#reposition()

    this.#enableNavButton(this.#prevButtonSelector)
    if (!this.#loop && this.#isLast) {
      this.#disableNavButton(this.#nextButtonSelector)
    }
  }

  get #isFirst() {
    return this.#currentIndex === 0
  }

  get #isLast() {
    return this.#currentIndex === this.#length - 1
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
    qs(selector).classList.remove("navigation__button_disabled")
  }

  /**
   *
   * @param {string} selector
   */
  #disableNavButton(selector) {
    qs(selector).classList.add("navigation__button_disabled")
  }
}

export default Slider
