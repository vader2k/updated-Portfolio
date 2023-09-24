import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Healthstarks, Hoobanks, Jericho, Podcast, Social} from './pages'
import {Home} from './pages'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='health' element={<Healthstarks/>}/>
          <Route path='hoobanks' element={<Hoobanks/>}/>
          <Route path='jericho' element={<Jericho/>}/>
          <Route path='podcast' element={<Podcast/>}/>
          <Route path='social' element={<Social/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App