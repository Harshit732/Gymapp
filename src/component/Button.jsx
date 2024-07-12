import React from 'react'

export default function Button(props) {
  const {text, func} = props
  return (
    
    <button onClick={func} className="b1 mx-auto rounded-md boder-blue-400 "><p>{text}</p></button>
  )
}
