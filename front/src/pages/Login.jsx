import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    const [email, setEmail] = useState([])
    const [pass, setPass] = useState([])

    const navigate = useNavigate()
    const [showLoginMessage, setshowLoginMessage] = useState(false);
    const [message, setmessage] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(email!== "" && pass !== ""){

            axios.post("http://127.0.0.1:8000/api/login_check", {
                "email": email,
                "password": pass,
            }).then(async (res) =>{
                if(res.data.token){
                    await localStorage.setItem("token", res.data.token)
                    await localStorage.setItem("user", res.data.user)
                    navigate('/')
                }
                else {
                    setmessage('Login ou mot de passe incorrect.');
                    setshowLoginMessage(true);
                    setTimeout(() => {
                        setshowLoginMessage(false);
                    }, 3000);
                }

            }).catch(error => {
                
                setmessage('Login ou mot de passe incorrect.');
                setshowLoginMessage(true);
                setTimeout(() => {
                    setshowLoginMessage(false);
                }, 3000);
                
            });
        }
        else
        {
            setmessage("Veuillez remplir tous les champs");
            setshowLoginMessage(true);
            setTimeout(() => {
                setshowLoginMessage(false);
            }, 3000);
        }
    }


    return(
        <div className="home">
            <Navigation/>

            <div className="d-flex justify-content-center">     
                <div className="col-md-4 ">
                    <h2 className='text-center mb-3'>Se connecter</h2>
                    {
                        showLoginMessage ? 
                        <div className="alert alert-warning">
                            {message}
                        </div>
                        : null
                    }
                    <form onSubmit={(e) => handleSubmit(e) }>
                        <div className="form-group">
                            <label htmlFor="email">Adresse email</label>
                            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} name='email' className='form-control' />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="pass">Mots de passe</label>
                            <input type="password" onChange={(e) => setPass(e.target.value)} name='password' className='form-control' />
                        </div>
                        <button className='btn btn-primary'>Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;