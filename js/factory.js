class Factory {
  /**
   *
   * @param {import ("./query.js").default} query
   */
  constructor(query) {
    query.add(this.render)
  }

  render(params) {}
}

export default Factory
