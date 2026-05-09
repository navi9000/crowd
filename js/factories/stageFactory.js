import { stageList } from "../data.js"
import Factory from "../factory.js"
import Templates from "../templates.js"
import { qs } from "../utils/dom.js"
import { populate, populateList } from "../utils/templates.js"

class StageFactory extends Factory {
  #$container = qs(".stages__list-container")
  #stageList = stageList.map((text, index) =>
    populate(Templates.StageItem(), {
      counter: `${index + 1}`,
      text,
    }),
  )

  renderDesktop() {
    this.#$container.innerHTML = this.#stageList
      .map((item) => populateList(Templates.StageCard(), { items: [item] }))
      .join("")
  }

  renderMobile() {
    this.#$container.innerHTML = populateList(Templates.StageCard(), {
      items: [this.#stageList[0], this.#stageList[1]],
    })
  }
}

export default StageFactory
