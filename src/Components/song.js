import React,{Component} from 'react';

class song extends Component{
    render(){
        return(
            <div className="song">
                <img src={this.props.current.cover} className="cover"/>
                <h2>{this.props.current.name}</h2>
                <h3>{this.props.current.artist}</h3>
            </div>
        )
    }
}

export default song;