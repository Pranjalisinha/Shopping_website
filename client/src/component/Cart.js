import React, {useState, useEffect} from "react";
import { useDispatch} from 'react-redux';
import { AddCart } from "../Redux/action";
import {useParams} from "react-router";
import Skeleton from 'react-loading-skeleton';
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

const Cart =() =>{

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(AddCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                setProduct(await response.json());
                setLoading(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }
    const ShowCart = () =>{
        return(
            <>
            <div className="cart">
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className="Col-md-6">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    Rs {product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to cart</button>
                <Link to="/item" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</Link>
            </div>
            </div>
            </>
        )
    }

    return(
        <>
        <Navbar2/>
        <div className="container py-4">
            <div className="row py-5">
                {loading ? <Loading/> : <ShowCart/>}
            </div>
        </div>
        </>
    )
}
export default Cart