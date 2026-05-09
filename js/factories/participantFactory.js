import Factory from "../factory.js"
import { qs } from "../utils/dom.js"

class ParticipantFactory extends Factory {
  #$container = qs(".participants__list-container")

  renderDesktop() {
    this.#$container.innerHTML = "Большой экран"
  }

  renderMobile() {
    this.#$container.innerHTML = "Малый экран"
  }
}

export default ParticipantFactory
