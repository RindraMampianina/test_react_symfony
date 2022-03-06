import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Cars = ({car}) => {

    const [commentData, setCommentData] = useState([])
    const [userEmail, setUserEmail] = useState([])
    const navigate = useNavigate()
    const [comments, setComments] =  useState(car.comments)

    const getData = () => {
        axios.get(`http://127.0.0.1:8000/api/cars/${car.id}`).then((res) =>{
            setComments(res.data.comments)
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        
        axios.post("http://127.0.0.1:8000/api/comments", {
            "comment": commentData,
            "car": car["@id"],
            "userInfo": '/api/users/6'
        }).then((res) =>{
            if(res.statusText =='Created')
            {
                getData()
            }
        })
    }

  
    /*useEffect(() =>{
        getData()
    }, [comments])*/

    return(
        <article className="navigation">
            <div className="card col-md-12 shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            Nom: {car.name} <br />
                            Marque: {car.brand}
                        </div>
                            {
                                localStorage.getItem('token') ?
                                    <div className="col-md-6">
                                    <h5>Votre commentaire</h5>

                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <input type="hidden" onChange={(e) => setUserEmail(e.target.value)} name='user' value="1" />
                                        <div className="form-group">
                                            <textarea onChange={(e) => setCommentData(e.target.value)} className='form-control' name="comment" id="" cols="50" rows="2"></textarea>
                                        </div>

                                        <button className='btn float-right btn-sm btn-secondary'>Ajouter</button>
                                    </form>
                                    </div>
                                : ''
                            }

                    </div>
                    {
                        localStorage.getItem('token') ?
                            <div className="row">
                                <ul>

                                    {
                                        (comments.length > 0) ? 
                                        
                                            comments.map((com) => <li key={com.id}>{com.comment} ({com.userInfo.email})</li>)
                                        : null
                                    }               
                                </ul>
                                
                            </div>
                        : ''
                    }
                </div>

                <div className="row">
                </div>
            </div>
        </article>
    )
}

export default Cars;