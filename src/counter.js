import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            start:false
        }
        setInterval(() => this.state.start ? this.setState({count:this.state.count+1000}) : clearInterval(this.state.count),1000)
       }
       getStarted = () => {
           this.setState({start: !this.state.start})
       }
        getReset =()=> {
            this.setState({count:0,start:false})
   
        }
      
        
   
        render(){
           const {count}=this.state
           var   seconds = String(parseInt((count/1000)%60)).padStart(2, '0')
           var minutes = String(parseInt((count/(1000*60))%60)).padStart(2, '0')
           var hours = String(parseInt((count/(1000*60*60))%24)).padStart(2, '0')
             return (
                 <div className='div'>
                     <div className='timer'>
                     <h1 className='counter'>{hours} : {minutes} : {seconds}</h1>
                     <div className='text'>
                     <p>Hours</p>
                     <p>Minutes</p>
                     <p>Seconds</p>
                     </div>
                     </div>
                     <div className='buttons'>
                     <button className='btn' onClick={this.getStarted}>{this.state.start ? 'Stop' : 'Start'}</button>
                     <button className='btn' onClick={this.getReset}>Reset</button>
                     </div>
                 </div>
             )
         }
       }
export default Counter