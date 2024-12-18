import React, { Children } from 'react'

const ComponenteConChildren = (props) => {
  return (
    <div>
        <p>ComponenteConChildren</p>
        <div>
            {props.children}
        </div>
        
    </div>
  )
}

export default ComponenteConChildren