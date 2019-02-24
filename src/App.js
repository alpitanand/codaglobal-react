import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/component/Navbar/Navbar'
import PopulateList from '../src/component/PopulateList/PopulateList'
import axios from 'axios'
import Loader from '../src/component/Loders/Loder'
class App extends Component {

   hosted = "https://codaglobal.herokuapp.com/";
   local = "http://localhost:3001/";

   constructor(){
    super()
    this.hosted = "https://codaglobal.herokuapp.com/";
    this.local = "http://localhost:3001/";
 
   }

  state={
    search:null,
    fetchedItem:[],
    searchedItem:null,
    numberOfSong:50,
    numberOfSongInState:50,
    loading:false
  }

  componentDidMount(){
    this.setState({loading:true})
    axios.get(this.hosted+"song/"+this.state.numberOfSong).then((response)=>{
      this.setState({fetchedItem:response.data,loading:false})
     
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.state.numberOfSongInState!==prevState.numberOfSongInState){
      this.setState({loading:true,fetchedItem:[]})
      axios.get(this.hosted+"song/"+this.state.numberOfSongInState).then((response)=>{
        this.setState({fetchedItem:response.data,loading:false})
      }).catch((err)=>{
        console.log("pressing")
       alert("Please enter number from 1 to 100")
      })
    }

    if(this.state.searchedItem!==prevState.searchedItem){
      this.setState({loading:true,fetchedItem:[]})
      axios.get(this.hosted+"search/"+this.state.searchedItem).then((response)=>{
        this.setState({fetchedItem:response.data,loading:false})
      }).catch((err)=>{
        alert("Something went wrong")
      })
    }
  }
   
  changed = (event)=>{
    //console.log(event.target.value)
    this.setState({search:event.target.value})
  }

  search=()=>{
    this.setState({searchedItem:this.state.search})
  }

  numberOfSong=(event)=>{
    this.setState({numberOfSong:event.target.value})
  }

  displaySong=()=>{
    this.setState({numberOfSongInState:this.state.numberOfSong})
    
  }
 
  render() {
    let data = <div style={{textAlign:'center',marginTop:10}}><Loader/></div>
    if(!this.state.loading){
     data=<div></div>
    }
    
    return (
      <div className="App">
       <Navbar
       displaySong={this.displaySong}
       changed={((event)=>this.changed(event))}
       search={this.search}
       numberOfSong={(event)=>{this.numberOfSong(event)}}
       />
       {data}
        <PopulateList fetchedData={this.state.fetchedItem} /> 
      </div>
    );
  }
}

export default App;
