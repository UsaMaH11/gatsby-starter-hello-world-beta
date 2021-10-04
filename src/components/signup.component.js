import React from 'react'
import Swal from 'sweetalert2'

const SignupComponent = () => {
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
        fetch(`http://127.0.0.1:8001/api/signup`,{
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
            console.log(data)
            if(data.success === true){
                console.log('hello') 
            }
            else{
                Swal.fire({
                    position:'middle',
                    icon: 'error',
                    title: data.error,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }


    return (

        <div>
        <form>
                <h3></h3>



                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email_input" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password_input" placeholder="Enter password" />
                </div>

                <button onClick={on_submit} className="btn btn-primary btn-block">Sign Up</button>

            </form>
      </div>
    )
}

export default SignupComponent
