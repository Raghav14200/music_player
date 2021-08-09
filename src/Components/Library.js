import React,{Component} from 'react';
import '../styles/library.css';

class Library extends Component{
    render(){
        return (
            <div className={`library ${this.props.library?'libray_check':''}`}>
                <h1 className='heading'>Library</h1>
                {this.props.data.map((data2)=>{
                    return (
                    <div className={`library-card + ${data2.active?'selected':''}`} onClick={()=>this.props.currentsongupdate(data2)}>
                    <img src={data2.cover}/>
                    <div>
                    <h2>{data2.name}</h2>
                    <h3>{data2.artist}</h3>
                    </div>
                    </div>
                    )
                })
    }
            </div>
        )
    }
}

export default Library;