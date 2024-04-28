
import Header from '@/components/Header';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Axios from "axios";

export default function index() {
    
    const [products, setProducts] = useState([]);
    
    // useEffect(async () => {
    //     // Fetch the product data.
    //     await fetch('http://127.0.0.1:8000/api/products')
    //         .then(response => response.json())
    //         .then(data => setProducts(data));

    // }, []);
    useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/products')
            .then((res) => { console.log(res.data); setProducts(res.data) })
            .catch((err) => console.log(err));
    }, []);
    const onLike = async (id)=>{
        Axios.post(`http://127.0.0.1:8001/api/products/like/${id}`)
            .then((res) => { console.log(res); })
            .catch((err) => console.log(err));
            setProducts(products.map((product)=>{
                if(product.id ===id)
                product.likes++;
            return product;
            }));
    }

    return (
        <>
            <div className="products">
                <Head>
                    <title>Tavlorify Store - Products</title>
                </Head>
                <Header />
                <div className="container">
                    <h1 className="text-center mb-5  pb-3">Products</h1>
                    {products.map((product) => (
                        <div  key={product['id']}>
                            <div className="card" >
                                <img src={product['image']} className="card-img" alt={product['title']} />
                                <div class="card-body">
                                    <h5 class="card-title">{product['title']}</h5>
                                    <p class="card-text">{product['likes']} Likes</p>
                                    <button type="button" className="btn btn-primary btn-like" onClick={() => onLike(product.id)} >Like</button>
                                    <a href="#" className="btn btn-primary btn-download">Download</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                
            </div>
        </>

    );
}
