import {
  IntroductionFirstImage,
  Participants,
  Stages,
} from "./components/index.js"
import ImageLoader from "./imageLoader.js"
import query from "./query.js"
import Screen from "./screen.js"

function run() {
  ImageLoader.mount()
  new Stages(query)
  new Participants(query)
  new IntroductionFirstImage(query)
  new Screen(query).launch()
}

run()
