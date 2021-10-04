import { navigate } from 'gatsby-link';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2'
import HomeComponent from './Home.component';





const LoginComponent = () => {
   

        // const history = useHistory();
        // const [studentInput, setStudent] = useState({
        //     email: '',
        //     password: '',
          
        // });
        let history = useHistory();
        
        const [loader,setLoader] = React.useState(false)
        const on_submit = (e) => {
            e.preventDefault();
            
            let email = document.getElementById('email_input').value
            let password = document.getElementById('password_input').value
    
            if(email === "" || password === ""){
                Swal.fire({
                    position:'top-end',
                    icon: 'error',
                    title: 'Required Data Missing',
                    text: 'Please fill data in all fields',
                })
                return;
            }
            setLoader(true);
            fetch(`http://127.0.0.1:8000/api/login`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            })
            .then(response=>{
                return response.json()
            })
            .then((data)=>{
               
                if(data.message === 'success'){
                    Swal.fire({
                        position:'center',
                        icon: 'success',
                        title: data.succss,
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate("/home", {state:data})
                    })
                  
                }
                else{
                    Swal.fire({
                        position:'center',
                        icon: 'error',
                        title: data.error,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                }
            })
    
        }
    

        
    return (

       <div className="Login-Container">
        <div style={{ width:'300px' }}>
        <h3></h3>
          <div className="form-group">
                <label  htmlFor="email_input"> E-Mail:</label> <br />
                <input type="text" id="email_input" required/>    
          </div>
           <div className="form-group">
                <label  htmlFor="password_input"> Password:</label> <br />
                <input type="password" id="password_input" required/>
          </div>
        <div style={{ marginTop:'10px'}}>
        <button style={{alignSelf:"center"}} onClick={on_submit} className="btn btn-primary btn-block">Submit</button>
        </div>
       </div>
      </div>

    );
        }


export default LoginComponent
