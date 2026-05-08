class Screen {
  #SCREEN_SIZE_BREAKPOINT = 768
  #isLargeScreen
  #query

  /**
   *
   * @param {import ("./query.js").default} query
   */
  constructor(query) {
    this.#isLargeScreen = this.#getIsLargeScreen(window.screen.width)
    this.#query = query
  }

  launch() {
    this.#query.notify({ isLargeScreen: this.#isLargeScreen })
    window.addEventListener("resize", (e) => {
      const newValue = this.#getIsLargeScreen(e.target.screen.width)
      if (newValue !== this.#isLargeScreen) {
        this.#isLargeScreen = newValue
        this.#query.notify({ isLargeScreen: this.#isLargeScreen })
      }
    })
  }

  /**
   *
   * @param {number} value
   */
  #getIsLargeScreen(value) {
    return value >= this.#SCREEN_SIZE_BREAKPOINT
  }
}

export default Screen
