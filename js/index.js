import ParticipantFactory from "./factories/participantFactory.js"
import StageFactory from "./factories/stageFactory.js"
import query from "./query.js"
import Screen from "./screen.js"

function run() {
  new StageFactory(query)
  new ParticipantFactory(query)
  new Screen(query).launch()
}

run()
