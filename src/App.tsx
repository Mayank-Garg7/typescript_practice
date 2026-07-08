import AdvaProps from './components/AdvaProps'
import ChildrenProps from './components/ChildrenProps'
import Greet from './components/Greet'

const App = () => {
  return (
    <div>
      <Greet name="audience" message="wait outside for next couple of laps" isRunning = {true} />
      <AdvaProps request="error" />
      <ChildrenProps>
        <h3>Hello Mayank,</h3>
        <p>hope you are doing well there</p>
      </ChildrenProps>
    </div>
  )
}

export default App
