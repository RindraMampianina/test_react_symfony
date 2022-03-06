import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Cars from '../components/Cars';

import axios from 'axios';

const Home = () => {

    const [carsData, setCarsData] = useState([])

    const getData = () => {
        axios.get("http://127.0.0.1:8000/api/cars").then((res) => setCarsData(res.data['hydra:member']))
    }

    useEffect(() =>{
        getData()
    }, [])
    return(
        <div className="home">
            <Navigation/>
            <div className="container">
                <ul>
                    {carsData.map((car) => <Cars key={car.id} car={car} />)}
                </ul>
            </div>
        </div>
    )
}

export default Home;