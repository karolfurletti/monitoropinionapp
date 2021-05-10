import createRematchPersist, { getPersistor } from "@rematch/persist"
import { init } from "@rematch/core"
import models from "./index"

const persistPlugin = createRematchPersist({
  whitelist: ["generalModel", "loginModel"],
  throttle: 3000,
  version: 1
})

const store = init({
  models,
  plugins: [persistPlugin]
})

const persistor = getPersistor()

export default store
export { persistor }
