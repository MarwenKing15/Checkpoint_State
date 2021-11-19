import React from 'react';
import profileImage from '../assets/profileImage.jpg';

class Profile extends React.Component{

     constructor(){
    super()
this.state = {
    Person: {
      fullName : "Naruto Uzumaki",
      bio : "Hero of the Hidden Leaf Village, Child of Proficy",
      imgSrc : {profileImage},
      profession : "7th Hokage"
    }
  };}
    render(){
  return (
    <div>
        <img style={{borderRadius: "50%"}} src={profileImage} alt="Naruto"></img>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <h1>{this.state.Person.profession}</h1>
        <br></br>
    </div>
        )
  }
  }

  export default Profile;