import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { populate, populateList } from "../../utils/templates.js"
import { stageList } from "./data.js"
import { stageCardTemplate, stageItemTemplate } from "./ui.js"

class Stages extends ResponsiveFactory {
  #$container = qs(".stages__list-container")
  #stageList = stageList.map((text, index) =>
    populate(stageItemTemplate, {
      counter: `${index + 1}`,
      text,
    }),
  )

  renderDesktop() {
    this.#$container.innerHTML = this.#stageList
      .map((item) => populateList(stageCardTemplate, { items: [item] }))
      .join("")
  }

  renderMobile() {
    this.#$container.innerHTML = populateList(stageCardTemplate, {
      items: [this.#stageList[0], this.#stageList[1]],
    })
  }
}

export default Stages
