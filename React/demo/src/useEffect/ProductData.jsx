import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductData() {

    const [product, setproduct] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setproduct(res.data)
    }

    return (
        <div>
            <h1>Hello this Product data</h1>
            <div className="container">
                <div className="row">
                    {
                        product && product.map((data) => {
                            // console.log(data)
                            const {id,title,price,description,image} = data
                            return (
                                <div className="col-md-4" key={id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                             <h5 className="card-title">{id}</h5>
                                            <h5 className="card-title">{title}</h5>
                                             <h5 className="card-title">{price} $ </h5>
                                            <p className="card-text">{description.slice(0,100)}..</p>
                                            <button className='btn btn-success'>Buy now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductData
