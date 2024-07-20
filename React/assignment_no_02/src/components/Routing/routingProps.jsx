import React from 'react'
import { Link } from 'react-router-dom'

export default function routing(props) {
  return (
    <div>
        <div id="moveBtn" className={props.classes}>
    <p className='pt-1 px-1 '>{props.text}</p>
    <Link to={props.path}>
      <p className="text-center pt-1" id='linkName'>{props.linkName}</p>
    </Link>
  </div>
  </div>
  )
}
