import React from 'react'
import './BookmarkApp.css'
import BookmarkList from '../bookmarkList/bookmarkList'
import Fab from '../fab/fab'

class BookmarkApp extends React.Component{
  render(){
  
    return(
      <div className='bookmarkapp'>
      <h2>Bookmarks</h2>
      <BookmarkList bookmarks={this.props.bookmarks} />
      <Fab showForm={this.props.showForm}/>
      </div>
    )
  }
}

export default BookmarkApp