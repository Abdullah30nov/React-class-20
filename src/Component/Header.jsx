
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const selector = useSelector(state=>state.counterReducer);

    console.log(selector)
  return (<>
    <div>Header</div>
    <h1>{selector.counter}</h1>
  </>
  )
}

export default Header