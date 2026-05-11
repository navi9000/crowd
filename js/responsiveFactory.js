class ResponsiveFactory {
  /**
   *
   * @param {import ("./query.js").default} query
   */
  constructor(query) {
    query.add(this.#render.bind(this))
  }

  #render({ isLargeScreen }) {
    isLargeScreen ? this.renderDesktop() : this.renderMobile()
  }

  renderMobile() {}

  renderDesktop() {}
}

export default ResponsiveFactory
