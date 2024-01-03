import { BrowserRouter, Routes, Route} from "react-router-dom"
import {Healthstarks, Hoobanks, Jericho, Podcast, Social, Home, MediCare} from './pages'
import Loading from './pages/Loading'
import {useState, useEffect} from 'react'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=>{
      setLoading(false);
    }, 4000)
  },[]);
  return (
    <>
      <BrowserRouter>
          <div>
            {loading? (
              <Loading/>
            ):(
              <>
              <Routes>
                <Route index element={<Home/>} />
                <Route path='health' element={<Healthstarks/>}/>
                <Route path='hoobanks' element={<Hoobanks/>}/>
                <Route path='jericho' element={<Jericho/>}/>
                <Route path='podcast' element={<Podcast/>}/>
                <Route path='social' element={<Social/>}/>
                <Route path='medicare' element={<MediCare/>} />
              </Routes>
              </>
            )

            }
          </div>
      </BrowserRouter>

    </>
  )
}

export default App