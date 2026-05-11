/**
 * @typedef {Object} SliderParams
 * @property {string} parentSelector
 * @property {[string]} slideList
 * @property {number=} slidesPerView
 * @property {number=} slideGap
 * @property {boolean=} 
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
  #slideList
  #slidesPerView
  #slideGap
  #autorepeat
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
    autorepeat = false,
    firstElementIndex = 0,
  }) {
    this.#parentSelector = parentSelector
    this.#parentElement = qs(parentSelector)
    this.#slideList = slideList
    this.#slidesPerView = slidesPerView
    this.#slideGap = slideGap
    this.#autorepeat = autorepeat
    this.#currentIndex = firstElementIndex
  }

  mount() {
    this.#parentElement.innerHTML = populate(SLIDER_TEMPLATE, {
      content: this.#slideList.map((content) =>
        populate(SLIDER_SLIDE_TEMPLATE, { content }),
      ),
      wrapperStyles: `width: calc(${100 * this.#slideList.length}% + ${this.#slideGap * (this.#slideList.length - 1)}px);
      grid-template-columns: repeat(${this.#slideList.length}, minmax(0, 1fr));
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
  }

  unmount() {}

  prevSlide() {
    this.#currentIndex = this.#currentIndex - 1
    const $slides = qs(`${this.#parentSelector} .slider__slides`)

    $slides.style.transform = `translateX(calc(${this.#calculatePosition()}))`
  }

  nextSlide() {
    this.#currentIndex = this.#currentIndex + 1
    const $slides = qs(`${this.#parentSelector} .slider__slides`)

    $slides.style.transform = `translateX(calc(${this.#calculatePosition()}))`
  }

  #calculatePosition() {
    return `(${(-100 / this.#slideList.length) * this.#currentIndex}%) - (${(this.#slideGap / this.#slideList.length) * this.#currentIndex}px)`
  }
}

export default Slider
