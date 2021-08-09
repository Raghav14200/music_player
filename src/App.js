import Player from './Components/player';
import Song from './Components/song';
import {Component} from 'react';
import Data from './data'; 
import { current } from 'immer';
import Library from './Components/Library';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import Nav from './Components/Nav';

class App extends Component{
  constructor(){
    super();
    const data=[...Data()];
    this.state={
      data: data,
      current:data[0],
      playing:'false',
      Option:faPlay,
      library:false
    }
  }

  currentsongupdate = (data2)=>{
    this.setState((prevstate)=>{
     return {current:data2,playing:'false',Option:faPlay,data:prevstate.data.map((data3)=>{
       if(data3===data2){
         return {
           ...data3,
           active:true
         }
       }else{
         return {
           ...data3,
           active:false
         }
       }
     })}})
  }

  Optionupdate = ()=>{
    if(this.state.playing==='false'){
    this.setState({Option:faPlay,playing:'true'})
    }else{
      this.setState({Option:faPause,playing:'false'})
    }
  }

  librarystatus = ()=>{
    if(!this.state.library){
    this.setState({
      library:true
    })
  }else{
    this.setState({
      library:false
    })
  }
  }

  //forward and backward button
  skipleftright = (direction)=>{
    const ind=this.state.data.findIndex((data2)=> data2.id===this.state.current.id);
    if(direction==='back'){
      let ind2;
      if(ind===0){
        ind2=this.state.data.filter((data3,index) =>{
          if(index===5){
            return data3;
          }
        }
      )[0];
      }else{
      ind2=this.state.data.filter((data3,index) =>{
        if(index===ind-1){
          return data3;
        }
      }
    )[0];
    }
    this.currentsongupdate(ind2);
    }else{
      let ind2;
      if(ind===5){
        ind2=this.state.data.filter((data3,index) =>{
          if(index===0){
            return data3;
          }
        }
        )[0]}else{
      ind2=this.state.data.filter((data3,index) =>{
        if(index===ind+1){
          return data3;
        }
      }
      )[0];
    }
    this.currentsongupdate(ind2)
    }
}

  render(){
  return (
    <div className="App">
      <div>
        <Nav librarystatus={this.librarystatus}/>
      <h1>Music player</h1>
      <Player current={this.state.current} skipleftright={this.skipleftright} playing={this.state.playing} state={this.state} Optionupdate={this.Optionupdate}/>
      <Song current={this.state.current}/>
      </div>
      <div><Library data={this.state.data} currentsongupdate={this.currentsongupdate} library={this.state.library}/></div>
    </div>
  ); 
  }
}

export default App;
