import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import "./productview.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Navigate } from 'react-router-dom';

import API_BASE_URL from "./config.js";



const ViewProducts = () => {


    let location = useLocation()
    let productData = location.state;
    console.log("first", productData);

    //const {search} = useLocation()
    //console.log(search)
   
    //let params = new URLSearchParams(search); 
    //let arr = params.get("img").split(",")

    const [images, setImages] = useState(productData.img) 
    const [currentImage, setCurrentImage] = useState(productData.img[0])

    useEffect(()=>{ 
      axios.get(`${API_BASE_URL}/viewproduct`, {
          headers :{
              "x-token" : localStorage.getItem("token")
          }
      }).catch(err => console.log(err))  
  },[]) 
  
  if(!localStorage.getItem("token")){
       return <Navigate to="/" />
  }

  

    return (

    <div className="container">
    <div className="card">
        <div className="container-fliud">
            <div className="wrapper row">
                 <div className="preview "> {/*col-md-6 */} 
{/*                     
                    <div className="preview-pic tab-content">
                    <h3 className="product-title">{params.get("name")}</h3>
                      <div className="tab-pane active" id="pic-1"><img src={params.get("img")} alt='img not support...' /></div>
                      <div className="tab-pane" id="pic-2"><img src='' alt='img not support...' /></div>
                      <div className="tab-pane" id="pic-3"><img src='' alt='img not support...' /></div>
                      <div className="tab-pane" id="pic-4"><img src='' alt='img not support...' /></div>
                      <div className="tab-pane" id="pic-5"><img src='' alt='img not support...' /></div>
                    </div>
                    <ul className="preview-thumbnail nav nav-tabs"> 
                      <li className="active"><a href="#pic-1" data-toggle="tab"><img src={params.get("img")} alt='img not support...' /></a></li>
                      <li><a href="#pic-2" data-toggle="tab"><img src='assets/images/products/img-2.png' alt='img not support...' /></a></li>
                      <li><a href="#pic-3" data-toggle="tab"><img src='assets/images/products/img-3.png' alt='img not support...' /></a></li>
                      <li><a href="#pic-4" data-toggle="tab"><img src='assets/images/products/img-4.png' alt='img not support...' /></a></li>
                      <li><a href="#pic-5" data-toggle="tab"><img src='assets/images/products/img-5.png' alt='img not support...' /></a></li>
                    </ul>                   */}

                    <div className="preview-pic tab-content">
                    <h3 className="product-title">{productData.productname}</h3>
                      <div className="tab-pane active" id="pic-1"><img src={`${API_BASE_URL}/Images/${currentImage}`} alt='img not support...'/></div>

                      <ul className="preview-thumbnail nav nav-tabs"> 
                      {images.map((res,id)=>

                        <li key={id} ><img src={`${API_BASE_URL}/Images/${res}`} style={{cursor:'pointer'}} alt='img not support...' onClick={()=>setCurrentImage(res)}/></li>
                  
                        )}
                      {/* <li onClick={()=>setImages(arr[0])}><img src={arr[0]} style={{cursor:'pointer'}} alt='img not support...' /></li>
                      <li onClick={()=>setImages(arr[1])} style={{cursor:'pointer'}}><img src={arr[1]} alt='img not support...' /></li>
                      <li onClick={()=>setImages(arr[2])} style={{cursor:'pointer'}}><img src={arr[2]} alt='img not support...' /></li>
                      <li onClick={()=>setImages(arr[3])} style={{cursor:'pointer'}}><img src={arr[3]} alt='img not support...' /></li>
                      <li onClick={()=>setImages(arr[4])} style={{cursor:'pointer'}}><img src={arr[4]} alt='img not support...' /></li> */}
                    </ul> 

                    </div>
                     
                                        
                </div>

                <div className="details "> {/*col-md-6 */} 
                   
                <h4 className="price">CATEGORY : <span>{productData.producttype}</span></h4> 
                <h4 className="price">current price: <span class="material-symbols-outlined">currency_rupee</span><span>{productData.productprice}</span></h4> 
                <h4 className="price">Stock In Hand: <span>{productData.items}</span></h4> 


                    <div className="rating">
                        <div className="stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <span className="review-no">41 reviews</span>
                    </div>
                    
                    <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>

                    <p>Description : </p>
                    <div className='card' style={{width:"100%", boxShadow:"0px 0px 3px 0px black"}}>
                    <p className="product-description">{productData.productdesc}</p>
                    </div>

                    <Link to="/productlist" className='btn btn-ghost-primary' style={{width:"200px", margin:"auto", fontWeight:"bolder"}}>Back to List</Link>
                    {/* <h5 className="sizes">sizes:
                        <span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <h5 className="colors">colors:
                        <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span className="color green"></span>
                        <span className="color blue"></span>
                    </h5>
                    <div className="action">
                        <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ViewProducts