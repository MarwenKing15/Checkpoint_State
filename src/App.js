import React from 'react';
import Profile from './Component/Profile';
import Timer from './Component/Timer';
import './App.css';

class App extends React.Component {


  constructor(){
    super()
this.state = {
    show : false,
    btnStatus : false,
    digit:0,
    date : new Date().toLocaleString(),
  };
  this.handleShowPerson = this.handleShowPerson.bind(this);
  }

  handleShowPerson() {
      this.setState(({ show }) => ({ show: !show }));
      this.setState(({ btnStatus }) => ({ btnStatus: !btnStatus }));
  }


    componentDidMount = ()=>{
        this.myTimer = setInterval(()=>{
        this.setState(perState =>({
          digit : perState.digit+10,
          date : new Date().toLocaleString(),
        }));
      }, 10);
    };

    clearInterval=()=>{
      this.setState(({ digit }) => ({ digit: 0 }));
    }



  render(){
  return (
    <div className="App">
    {this.state.show && <Profile/>} 
        <div class="box-2">
          <div class="btn btn-two">
            <span 
            onClick={() => {
          this.handleShowPerson();
          this.clearInterval();}}>
              {this.state.btnStatus?"Hide Profile":"Show Profile"}</span>
          </div>
        </div>  
        {this.state.show && <Timer time={this.state.digit} />} 
    </div>
  );
}
  }

  
export default App;
