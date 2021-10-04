import { navigate } from 'gatsby-link';
import React,{useEffect} from 'react'
import { Redirect, useHistory } from 'react-router';



const HomeComponent = ({userData}) => {
    const data = userData;
    // const data = userData
    const history = useHistory()


    useEffect(() => {
    
        if(history.action === "POP"){
         fetch(`http://127.0.0.1:8000/api/logout`,{
           method:'POST',
           headers:{
               'Accept':'application/json',
               'Content-Type':'application/json',
           }
       }).then(
         navigate("/login")
       )
        }
      
       },[history]);
    
    return (
        <div>
           { data.map(user => {
          return (
            <div>
                { user ? <ul> 
                  <li key={user.id}>
                <th> {user.title}</th> 
                  <tbody> {user.body}</tbody>
                  </li> </ul> : <p>No data found</p>}
            </div>
            
          )
        })}    

        </div>
    )
}

export default HomeComponent
