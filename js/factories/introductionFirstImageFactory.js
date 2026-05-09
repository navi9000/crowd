import Factory from "../factory.js"
import Templates from "../templates.js"

class IntroductionFirstImageFactory extends Factory {
  /**
   *
   * @param {{isLargeScreen: boolean}} param0
   */
  render({ isLargeScreen }) {
    const desktopContainer = document.querySelector(
      ".introduction__first-image-container_desktop",
    )
    const mobileContainer = document.querySelector(
      ".introduction__first-image-container_mobile",
    )

    if (isLargeScreen) {
      mobileContainer.innerHTML = ""
      desktopContainer.innerHTML = Templates.IntroductionFirstImage()
    } else {
      desktopContainer.innerHTML = ""
      mobileContainer.innerHTML = Templates.IntroductionFirstImage()
    }
  }
}

export default IntroductionFirstImageFactory
