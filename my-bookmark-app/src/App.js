import React, { Component } from 'react';
import './App.css';
import BookmarkApp from './BookmarkApp/BookmarkApp';
import AddBookmark from './addBookmark/AddBookmark'




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      bookmarks:[],
      showAddForm:false
    }
  
  }
  componentDidMount(){
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks'
    const options = {
      method:'GET',
      headers:{"Authorization": "Bearer $2a$10$h.CQo6fnv730fFRJdlKhyOSM0nLSvC4MlJTgXtYQhNE75jjJpzQaq",
     "Content-Type": "application/json"
      }

    }
    fetch(url,options)
    .then(response =>{
      if(!response.ok){
       throw new Error(response.statusText)   
    }return response
  }).then(
    res=>res.json()
  ).then(
    data => {
      this.setState({
        bookmarks:data,
        error:null
      })
    }
  ).catch(err=>{
    this.setState(
      {error:err.message}
    )
  })
  }
  setShowAddform=(show)=>{
    this.setState({
      showAddForm:show
    })
  }

  addBookmark=(bookmarks)=>{
    this.setState({
      bookmarks:[...this.state.bookmarks,bookmarks],
      showAddForm:false
    });
  }



  render() {
    console.log('test state',this.state)
    const page = this.state.showAddForm?
    <AddBookmark 
    showForm={ this.setShowAddform}
    handleAdd={this.addBookmark}
    />: <BookmarkApp bookmarks={this.state.bookmarks} 
    showForm={ this.setShowAddform}/>
    
    return (
      <div className="App">     
        {page}        
      </div>
    );
  }
}

export default App;
