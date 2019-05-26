import React, { Component } from "react";
import connect from "react-redux";
import Axios from "axios";

class App extends Component {
     
    render() {      

          return(
            <div className='App'>
           
            <button onClick={this.props.increse}> + </button>
                
                <div> {this.props.count} </div>
                
                <button onClick={this.props.increse}> - </button>

                </div>
          );
        }}

     function mapStateToProps (state)
     {
       return{
         count : state.count
       } 
     }
     
     function mapDispatchToProps (dispatch){
       return{
         increse : () => dispatch({type: 'INCREASE'}),
         increse : () => dispatch({type: 'DECREASE'})

       }
     }

export default connect (mapStateToProps , mapDispatchToProps)  (App);


