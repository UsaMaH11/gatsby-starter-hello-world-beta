import React from 'react'

import HomeComponent from '../components/Home.component';
// import { useLocation } from 'react-router-dom'



 const Home = (props) => {


    //  console.log(useHistory())
    const people = props.location.state.data;
    console.log(people)
    // const token = props.location.state.access_token;
    // let userData = (Object.keys(people[0]))
    // console.log(userData)
    const data = Object.values(people);
    console.log(data)
    
   
  return(
    <div>
      <HomeComponent userData={data}/>
    </div>
  
  )}
    
export default Home


