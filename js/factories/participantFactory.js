import Factory from "../factory.js"
import Templates from "../templates.js"
import { qs } from "../utils/dom.js"
import { populate } from "../utils/templates.js"

class ParticipantFactory extends Factory {
  #$container = qs(".participants__list-container")

  renderDesktop() {
    this.#$container.innerHTML = "Большой экран"
  }

  renderMobile() {
    this.#$container.innerHTML = populate(Templates.ParticipantItem(), {
      src: "img/participant-placeholder.png",
      name: "Хозе-Рауль Капабланка",
      description: "Чемпион мира по шахматам",
    })
  }
}

export default ParticipantFactory
