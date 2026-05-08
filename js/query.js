class Query {
  #savedCallbacks

  /**
   *
   * @param {[Function]=} list
   */
  constructor(list = []) {
    this.#savedCallbacks = list
  }

  /**
   *
   * @param {Function} callback
   */
  add(callback) {
    this.#savedCallbacks = [...this.#savedCallbacks, callback]
  }

  /**
   *
   * @param {Function} callback
   */
  remove(callback) {
    this.#savedCallbacks = this.#savedCallbacks.filter(
      (item) => item !== callback,
    )
  }

  /**
   *
   * @param {object=} params
   */
  notify(params) {
    this.#savedCallbacks.forEach((callback) => callback(params))
  }
}

export default new Query()
