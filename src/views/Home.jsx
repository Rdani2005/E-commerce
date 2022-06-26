import React from 'react'
import { Products } from '../components/data/Data'
const Home = () => {
    return (

        <div className="bg-blue-900 min-h-screen grid grid-cols-3">
            {
                Products.map(product => {
                    return (
                        <div className="">
                            <img src={product.photo} alt="phptp" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home