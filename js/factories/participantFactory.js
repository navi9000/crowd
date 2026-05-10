import { participantList } from "../data.js"
import Factory from "../factory.js"
import Templates from "../templates.js"
import { qs } from "../utils/dom.js"
import { populate } from "../utils/templates.js"

class ParticipantFactory extends Factory {
  #$container = qs(".participants__list-container")
  #participantList = participantList.map(({ name, description, src }) =>
    populate(Templates.ParticipantItem(), {
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

export default ParticipantFactory
