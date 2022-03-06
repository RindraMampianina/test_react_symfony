import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {

    const [email, setEmail] = useState([])
    const [pass, setPass] = useState([])

    const [showRegisterMessage, setShowRegisterMessage] = useState(false);
    const [message, setmessage] = useState("");

    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()
        
        axios.post("http://127.0.0.1:8000/api/users", {
            "email": email,
            "password": pass,
        }).then((res) =>{
            setShowRegisterMessage(true)
            setmessage("Inscription éfféctué avec succès")
            if(res.status == 201 || res.status == 200)
            {
                navigate('/login')
            }
        }).catch(error => {
            
            console.log(error);
            
        });
    }

    return(
        <div className="home">
            <Navigation/>

            <div className="d-flex justify-content-center">
                <div className="col-md-4">

                    {
                        showRegisterMessage ? 
                        <div className="alert alert-success">
                            {message}
                        </div>
                        : null
                    }

                    <h2 className='mb-3 text-center'>S'inscrire</h2>
                    <form onSubmit={(e) => handleSubmit(e) }>

                        <div className="form-group">
                            <label htmlFor="email">Adresse email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" name='email' className='form-control' />
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="pass">Mots de passe</label>
                            
                            <input type="password" id='pass' onChange={(e) => setPass(e.target.value)} name='password' className='form-control' />
                        </div>
                        <button className='btn btn-primary'>S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;