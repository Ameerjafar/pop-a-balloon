import { BalloonComponent } from "./component/BalloonComponent"
import { TopElement } from "./component/TopElement"


function App() {
  return (
    <div className = 'bg-blue-100'>
      <div className = "p-10 justify-center items-center h-screen">
        <TopElement></TopElement>
        <BalloonComponent></BalloonComponent>
      </div>
    </div>
  )
}

export default App
