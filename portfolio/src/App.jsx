import { BrowserRouter, Routes, Route} from "react-router-dom"
import {Healthstarks, Hoobanks, Jericho, Podcast, AnonStore, Home, MediCare, Summarizer, SocialCheap} from './pages'
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
                <Route path='anon' element={<AnonStore/>}/>
                <Route path='medicare' element={<MediCare/>} />
                <Route path='summarizer' element={<Summarizer/>} />
                <Route path='socialcheap' element={<SocialCheap/>} /> 
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