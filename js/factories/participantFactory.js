import Factory from "../factory.js"

class ParticipantFactory extends Factory {
  /**
   *
   * @param {{isLargeScreen: boolean}} param0
   */
  render({ isLargeScreen }) {
    const el = document.querySelector(".participants__list-container")
    if (isLargeScreen) {
      el.innerHTML = "Большой экран"
    } else {
      el.innerHTML = "Малый экран"
    }
  }
}

export default ParticipantFactory
