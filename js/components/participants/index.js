import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import { PARTICIPANT_LIST } from "./data.js"
import { PARTICIPANT_TEMPLATE } from "./ui.js"
import Slider from "../slider/index.js"

class Participants extends ResponsiveFactory {
  #parentSelector = ".participants__list-container"
  #participantList = PARTICIPANT_LIST.map(({ name, description, src }) =>
    populate(PARTICIPANT_TEMPLATE, {
      name,
      description,
      src: src ?? "img/participant-placeholder.png",
    }),
  )
  /**
   * @type {Slider=}
   */
  #slider

  renderDesktop() {
    if (this.#slider) {
      this.#slider.unmount()
    }

    this.#slider = new Slider({
      parentSelector: this.#parentSelector,
      slideList: this.#participantList,
      slidesPerView: 4,
      autoplay: true,
    })
    this.#slider.mount()
  }

  renderMobile() {
    if (this.#slider) {
      this.#slider.unmount()
    }

    this.#slider = new Slider({
      parentSelector: this.#parentSelector,
      slideList: this.#participantList,
    })
    this.#slider.mount()
  }
}

export default Participants
