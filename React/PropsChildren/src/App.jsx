import React, { Suspense , lazy } from 'react'
import Heading from './Heading'
import CreateContext from './CreateContext/CreateContext'
import UseState from './UseState'
import UseEffect from './UseEffect'
import UseCallback from './useCallback'

const Content = lazy(()=>import("./Content"))


const App = () => {
  return (
   <>
   {/* <Heading/>
   <Suspense fallback={<div>Loading....</div>}>
   <Content/>
   </Suspense> */}
  {/* <CreateContext/> */}
  {/* <UseState/> */}
  {/* <UseEffect/> */}
  <UseCallback/>
   </>
  )
}

export default App