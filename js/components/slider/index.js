/**
 * @typedef {Object} SliderParams
 * @property {string} parentSelector
 * @property {[string]} slideList
 * @property {number=} slidesPerView
 * @property {number=} slideGap
 * @property {boolean=} 
 * @property {number=} firstElementIndex

 */

import { qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import {
  NAVIGATION_TEMPLATE,
  SLIDER_SLIDE_TEMPLATE,
  SLIDER_TEMPLATE,
} from "./ui.js"

class Slider {
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
      wrapperStyles: `width: calc(${100 * this.#slideList.length}% + ${this.#slideGap}px);
      grid-template-columns: repeat(${this.#slideList.length}, minmax(0, 1fr));
      gap: ${this.#slideGap}px`,
      navigation: populate(NAVIGATION_TEMPLATE, { result: "hi" }),
    })
  }

  unmount() {}
}

export default Slider
