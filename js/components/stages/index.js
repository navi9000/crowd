import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import { STAGE_LIST } from "./data.js"
import { STAGE_CARD_TEMPLATE, STAGE_ITEM_TEMPLATE } from "./ui.js"
import Slider from "../slider/index.js"

class Stages extends ResponsiveFactory {
  #parentQuerySelector = ".stages__list-container"
  #$container = qs(".stages__list-container")
  #stageList = STAGE_LIST.map((text, index) =>
    populate(STAGE_ITEM_TEMPLATE, {
      counter: `${index + 1}`,
      text,
    }),
  )

  renderDesktop() {
    this.#$container.innerHTML = this.#stageList
      .map((item) => populate(STAGE_CARD_TEMPLATE, { items: item }))
      .join("")
  }

  renderMobile() {
    // this.#$container.innerHTML = populate(STAGE_CARD_TEMPLATE, {
    //   items: [this.#stageList[0], this.#stageList[1]],
    // })

    const slider = new Slider({
      parentSelector: this.#parentQuerySelector,
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
    })

    slider.mount()
  }
}

export default Stages
