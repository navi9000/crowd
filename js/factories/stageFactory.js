import Factory from "../factory.js"
import Templates from "../templates.js"
import { qs } from "../utils/dom.js"
import { populate, populateList } from "../utils/templates.js"

class StageFactory extends Factory {
  #$container = qs(".stages__list-container")

  renderDesktop() {
    this.#$container.innerHTML = "Большой экран"
  }

  renderMobile() {
    this.#$container.innerHTML = populateList(Templates.StageCard(), {
      items: [
        populate(Templates.StageItem(), {
          counter: "1",
          text: "Строительство железнодорожной магистрали Москва-Васюки",
        }),
        populate(Templates.StageItem(), {
          counter: "2",
          text: "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
        }),
      ],
    })
  }
}

export default StageFactory
