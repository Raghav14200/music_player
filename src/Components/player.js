import React,{Component, createRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay,faAngleDoubleRight, faAngleDoubleLeft, faPause} from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';


class player extends Component{
    constructor(props){
        super(props);
        this.myref=createRef();
        this.play = this.play.bind(this);
        this.state={
            currentTime:0,
            duration:0,
            slidebar:0,

        }
    }

    time = (e) =>{
        const slidepercentage=e.target.currentTime/e.target.duration*100;
        this.setState({
            currentTime:e.target.currentTime,
            duration:e.target.duration,
            slidebar:Math.round(slidepercentage)
        })
    }
    
    play(){
        if(this.props.state.playing==='false'){
            this.myref.current.play();
            this.props.state.playing='true';
            this.props.state.Option=faPause;
        }else{
            this.myref.current.pause();
            this.props.state.playing='false';
            this.props.state.Option=faPlay;
        }
    }
    play2=()=>{
        this.setState({Option:faPlay});
    }

    drag=(e)=>{
        this.myref.current.currentTime=e.target.value;
        this.setState({
            currentTime:e.target.value,    
        })
    }

    gettime = (time)=>{
        return Math.floor(time/60)+':'+('0'+Math.floor(time%60)).slice(-2);
    }

    

    render(){
        
        const slide_animation={
            transform:`translateX(${this.state.slidebar}%)`,
        }

        const animation={
            backgroundImage:`linear-gradient(to right,${this.props.current.color[0]},${this.props.current.color[1]})`
        }

        return(
            <div className="player">
                <div className="icons">
                <div className="control">
                <p>{this.gettime(this.state.currentTime)}</p>
                <div className='track'>
                <input min={0} max={this.state.duration} value={this.state.currentTime} style={animation} onChange={this.drag} type="range" />
                <div className='animate' style={slide_animation}></div>
                </div>
                <p>{this.gettime(this.state.duration)}</p>
                </div>
                <br/>
                <div class='controller'>
                <FontAwesomeIcon onClick={()=>this.props.skipleftright('front')} icon={faAngleDoubleRight} className="left" size='2x'/>
                <FontAwesomeIcon icon={this.props.state.Option} className="play" onClick={this.play} size='2x'/>
                <FontAwesomeIcon onClick={()=>this.props.skipleftright('back')} icon={faAngleDoubleLeft} className="right" size='2x'/>
                </div>
                </div>
                <audio onTimeUpdate={this.time} onLoadedMetadata={this.time} src={this.props.current.audio} ref={this.myref}/>
            </div>
        )
    }
}


export default player;

