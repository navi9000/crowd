import Factory from "../factory.js"

class StageFactory extends Factory {
  /**
   *
   * @param {{isLargeScreen: boolean}} param0
   */
  render({ isLargeScreen }) {
    const el = document.querySelector(".stages__list-container")
    if (isLargeScreen) {
      el.innerHTML = "Большой экран"
    } else {
      el.innerHTML = "Малый экран"
    }
  }
}

export default StageFactory
