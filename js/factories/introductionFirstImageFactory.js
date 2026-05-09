import Factory from "../factory.js"
import Templates from "../templates.js"
import { qs } from "../utils/dom.js"

class IntroductionFirstImageFactory extends Factory {
  #$desktopContainer = qs(".introduction__first-image-container_desktop")
  #$mobileContainer = qs(".introduction__first-image-container_mobile")

  renderDesktop() {
    this.#$mobileContainer.innerHTML = ""
    this.#$desktopContainer.innerHTML = Templates.IntroductionFirstImage()
  }

  renderMobile() {
    this.#$desktopContainer.innerHTML = ""
    this.#$mobileContainer.innerHTML = Templates.IntroductionFirstImage()
  }
}

export default IntroductionFirstImageFactory
