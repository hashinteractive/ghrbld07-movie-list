import React, { useState, useEffect } from 'react'

const ToggleButton = (props) => {
  const [toggled, setToggled] = useState(true);
  useEffect(() => {
    props.watched(toggled)
  }, [toggled])
  const styles = {
    ...(toggled && {
      transform: 'translateX(100%)',
      backgroundColor: '#48bb78'
    })
  }
  return (
    <div className="flex items-center justify-end w-full">
      <label 
        htmlFor="toogleA"
        className="flex items-center cursor-pointer">
        <div className="relative" onClick={ () => { setToggled(!toggled) }}>
          <input type="checkbox" className="hidden" />
          <div
            className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div
            style={styles}
            className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 -mt-1 left-0"></div>
        </div>
        <div
          className="ml-3 text-gray-700 font-medium">
          { toggled ? 'Watched' : 'To Watch' }
        </div>
      </label>
      
    </div>
  )
}

export default ToggleButton