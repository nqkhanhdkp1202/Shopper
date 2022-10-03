import { useRoutes } from "react-router-dom"
import routers from "./routers"
import store from "./store"

function App() {
  const element = useRoutes(routers)
  return (
    <>
      {element}
    </>
  )
}

export default App
