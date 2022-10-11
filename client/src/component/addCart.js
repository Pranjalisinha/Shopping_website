import React, { useState }from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { AddCart, DeleteCart } from "../Redux/action";
import {useNavigate} from 'react-router-dom';

const AddItem = () =>{
    const Navigate=useNavigate()
    const product = useSelector((state)=>state.handleCart)
    const [Payment, setPayment] = useState("");
    const dispatch=useDispatch()
    const handleButtonplus=(product)=>{
        dispatch(AddCart(product))
    }
    const handleButtonminus=(product)=>{
        dispatch(DeleteCart(product))
    }
    let token=localStorage.getItem('authorization')
    const submitOrder=()=>{
       setPayment("Paid")
       console.log(Payment)
        fetch("http://localhost:3001/order/addOrder", {
            method: "POST",
            body : JSON.stringify({
                 product,
            }), Payment,
            headers : {
                authorization: token,
             "Content-Type": "application/json"
            },
          }).then((res) => {
            Navigate("/")
        
       
          }).catch((err) => {
           console.log(err)
          })
    }
    return (
        <>
                {product.map((product)=>
                 <div className="container py-5">
                 <div className="row ms-4">
                     <div className="col-md-4">
                     <img src={product.image} alt={product.title} height="200px" width="180px"/>
                 </div>
                 <div className="col-md-4">
                     <h3>{product.title}</h3>
                     <p className="lead fw-bold">{product.qty} X Rs {product.price} = Rs{product.qty * product.price}</p>
                     <button className="btn btn-outline-dark me-4" onClick={() => handleButtonminus(product)}>
                         <i className="fa fa-minus"></i>
                     </button>
                     <button className="btn btn-outline-dark me-4" onClick={() => handleButtonplus(product)}>
                         <i className="fa fa-plus"></i>
                     </button>
                 </div>
                 </div>
                 </div>
                )}
                 <div className='container text-center'>
    <button className='btn btn-outline-dark ' onClick={submitOrder}>
                    Order Now
                </button>
    </div>
    
        </>
    )
}
export default AddItem;