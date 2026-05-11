import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import { STAGE_LIST } from "./data.js"
import { STAGE_CARD_TEMPLATE, STAGE_ITEM_TEMPLATE } from "./ui.js"
import Slider from "../slider/index.js"

class Stages extends ResponsiveFactory {
  #parentSelector = ".stages__list-container"
  #$container = qs(".stages__list-container")
  #stageList = STAGE_LIST.map((text, index) =>
    populate(STAGE_ITEM_TEMPLATE, {
      counter: `${index + 1}`,
      text,
    }),
  )
  /**
   * @type {Slider=}
   */
  #slider

  renderDesktop() {
    if (this.#slider) {
      this.#slider.unmount()
      this.#slider = undefined
    }
    qs(this.#parentSelector).innerHTML = this.#stageList
      .map((item) => populate(STAGE_CARD_TEMPLATE, { items: item }))
      .join("")
  }

  renderMobile() {
    this.#slider = new Slider({
      parentSelector: this.#parentSelector,
      slideList: [
        populate(STAGE_CARD_TEMPLATE, {
          items: [this.#stageList[0], this.#stageList[1]],
        }),
        populate(STAGE_CARD_TEMPLATE, {
          items: this.#stageList[2],
        }),
        populate(STAGE_CARD_TEMPLATE, {
          items: [this.#stageList[3], this.#stageList[4]],
        }),
        populate(STAGE_CARD_TEMPLATE, {
          items: this.#stageList[5],
        }),
        populate(STAGE_CARD_TEMPLATE, {
          items: this.#stageList[6],
        }),
      ],
      slideGap: 20,
      navigationDisplay: "dots",
    })

    this.#slider.mount()
  }
}

export default Stages
