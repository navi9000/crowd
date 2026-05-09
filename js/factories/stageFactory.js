import Factory from "../factory.js"
import Templates from "../templates.js"
import { qs } from "../utils/dom.js"

class StageFactory extends Factory {
  #$container = qs(".stages__list-container")

  renderDesktop() {
    this.#$container.innerHTML = "Большой экран"
  }

  renderMobile() {
    this.#$container.innerHTML = Templates.StageCard().replace(
      "{{items}}",
      [
        Templates.StageItem()
          .replace("{{counter}}", "1")
          .replace(
            "{{text}}",
            "Строительство железнодорожной магистрали Москва-Васюки",
          ),
        Templates.StageItem()
          .replace("{{counter}}", "2")
          .replace(
            "{{text}}",
            "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
          ),
      ].join(""),
    )
  }
}

export default StageFactory
