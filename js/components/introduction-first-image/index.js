import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { IMAGE_TEMPLATE } from "./ui.js"

class IntroductionFirstImage extends ResponsiveFactory {
  #$desktopContainer = qs(".introduction__first-image-container_desktop")
  #$mobileContainer = qs(".introduction__first-image-container_mobile")

  renderDesktop() {
    this.#$mobileContainer.innerHTML = ""
    this.#$desktopContainer.innerHTML = IMAGE_TEMPLATE
  }

  renderMobile() {
    this.#$desktopContainer.innerHTML = ""
    this.#$mobileContainer.innerHTML = IMAGE_TEMPLATE
  }
}

export default IntroductionFirstImage
