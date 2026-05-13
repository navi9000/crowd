import imageLoader from "./imageLoader.js"

class ResponsiveFactory {
  /**
   *
   * @param {import ("./query.js").default} query
   * @param {import ("./imageLoader.js").default} imageLoader
   */
  constructor(query) {
    query.add(this.#render.bind(this))
  }

  #render({ isLargeScreen }) {
    imageLoader.unmount()
    isLargeScreen ? this.renderDesktop() : this.renderMobile()
    imageLoader.mount()
  }

  renderMobile() {}

  renderDesktop() {}
}

export default ResponsiveFactory
