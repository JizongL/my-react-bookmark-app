import React from 'react'
import './Bookmark.css'

import Rating from '../rating/rating';

export default function Bookmark(props){
  
return(
  <div className='bookmark'>
    <div className='bookmark__row'>
      <a 
      href ={props.url}
      target='_blank'
      rel='noopener noreferrer'
      >{props.title}</a>
    </div>
    <div>
      <Rating value={props.rating}/>
    </div>
    <div className='bookmark__description'>
      {props.description}
    </div>
  </div>
)
}
