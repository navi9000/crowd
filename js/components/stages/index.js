import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import { STAGE_LIST } from "./data.js"
import { STAGE_CARD_TEMPLATE, STAGE_ITEM_TEMPLATE } from "./ui.js"

class Stages extends ResponsiveFactory {
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
    this.#$container.innerHTML = populate(STAGE_CARD_TEMPLATE, {
      items: [this.#stageList[0], this.#stageList[1]],
    })
  }
}

export default Stages
