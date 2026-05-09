import Factory from "../factory.js"
import { qs } from "../utils/dom.js"

class StageFactory extends Factory {
  #$container = qs(".stages__list-container")

  renderDesktop() {
    this.#$container.innerHTML = "Большой экран"
  }

  renderMobile() {
    this.#$container.innerHTML = "Малый экран"
  }
}

export default StageFactory
