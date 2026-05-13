import { qsa } from "./utils/dom.js"

class ImageLoader {
  #imagesToLoad
  #observer

  /**
   *
   * @param {HTMLImageElement} image
   */
  #loadImages(image) {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload = () => {
      image.removeAttribute("data-src")
    }
  }

  mount() {
    this.#imagesToLoad = qsa("img[data-src]")

    if ("IntersectionObserver" in window) {
      this.#observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute("data-src")
            const elements = qsa(`img[data-src="${dataSrc}"]`)
            elements.forEach((element) => {
              this.#loadImages(element)
              observer.unobserve(element)
            })
            // this.#loadImages(item.target)
            // observer.unobserve(item.target)
          }
        })
      })
      this.#imagesToLoad.forEach((img) => {
        this.#observer.observe(img)
      })
    } else {
      this.#imagesToLoad.forEach((img) => {
        loadImages(img)
      })
    }
  }

  unmount() {
    if (this.#observer) {
      this.#observer.disconnect()
      this.#observer = undefined
    }
    this.#imagesToLoad = []
  }
}

export default new ImageLoader()
