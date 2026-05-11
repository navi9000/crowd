import ResponsiveFactory from "../../responsiveFactory.js"
import { qs } from "../../utils/dom.js"
import { populate } from "../../utils/templates.js"
import { participantList } from "./data.js"
import { participantItemTemplate } from "./ui.js"

class Participants extends ResponsiveFactory {
  #$container = qs(".participants__list-container")
  #participantList = participantList.map(({ name, description, src }) =>
    populate(participantItemTemplate, {
      name,
      description,
      src: src ?? "img/participant-placeholder.png",
    }),
  )

  renderDesktop() {
    this.#$container.innerHTML = "".concat(
      this.#participantList[0],
      this.#participantList[1],
      this.#participantList[2],
    )
  }

  renderMobile() {
    this.#$container.innerHTML = this.#participantList[0]
  }
}

export default Participants
