import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { imageTemplate } from "./ui.js"

class IntroductionFirstImage extends ResponsiveFactory {
  #$desktopContainer = qs(".introduction__first-image-container_desktop")
  #$mobileContainer = qs(".introduction__first-image-container_mobile")

  renderDesktop() {
    this.#$mobileContainer.innerHTML = ""
    this.#$desktopContainer.innerHTML = imageTemplate
  }

  renderMobile() {
    this.#$desktopContainer.innerHTML = ""
    this.#$mobileContainer.innerHTML = imageTemplate
  }
}

export default IntroductionFirstImage
