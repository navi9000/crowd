import Factory from "../factory.js"
import Templates from "../templates.js"
import { qs } from "../utils/dom.js"

class ParticipantFactory extends Factory {
  #$container = qs(".participants__list-container")

  renderDesktop() {
    this.#$container.innerHTML = "Большой экран"
  }

  renderMobile() {
    this.#$container.innerHTML = Templates.ParticipantItem()
      .replace("{{src}}", "img/participant-placeholder.png")
      .replace("{{name}}", "Хозе-Рауль Капабланка")
      .replace("{{description}}", "Чемпион мира по шахматам")
  }
}

export default ParticipantFactory
