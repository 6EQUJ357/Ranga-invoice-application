import React, {useState, useEffect} from 'react'
import Reusenavbar from './reusenavbar'
import Sidebar from '../components/sidebar'
import { useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import "../../App.css"


import API_BASE_URL from "../components/config";


const Reuseaddproduct = (params) => {


    
        const formik = useFormik({
        initialValues : {
            productname : "",
            producttype : "",
            productprice : "",
            items : "",
            productdesc : "",
            img : []
            
        },
        validationSchema:Yup.object({
            productname : Yup.string(),
            producttype : Yup.string(),
            productprice : Yup.string(),
            items : Yup.number(),
            productdesc : Yup.string(),
            img :  Yup.array()
            // .of(
            //     Yup.mixed()
            //       .test('fileType', 'Only image files are allowed', (value) => {
            //         return value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
            //       })
            //       .test('fileSize', 'File size should be below 1MB', (value) => {
            //         return value && value.size <= 1048576; // 1MB = 1048576 bytes
            //       })
            //   )
        }),
        onSubmit :(values, {resetForm})=>{
            //console.log("product data", values);

            const formData = new FormData();
            for (let i = 0; i < values.img.length; i++) {
                formData.append('img', values.img[i]);
            }

            formData.append("productname",values.productname)
            formData.append("producttype",values.producttype)
            formData.append("productprice", values.productprice)
            formData.append("items",values.items)
            formData.append("productdesc", values.productdesc)

            axios.post(`${API_BASE_URL}/addproducts`, formData).then(res=>alert(res.data))
            .catch(err=> console.log(err))

            //resetForm({values : ""});

        }
 
    })

    const handleImageChange = (e)=>{
        const selectedImages = Array.from(e.target.files);
        formik.setFieldValue('img', [...formik.values.img, ...selectedImages]);
      
    }
    // console.log(typeof formik.values.img)
    // console.log(formik.values.img)
    // console.log(formik.values.img[0])
    // console.log(typeof formik.values.img[0])
    // console.log("img name", formik.values.img[0])

    const handleDeleteProductImg = (index)=>{
        formik.setFieldValue(
            'img',
            formik.values.img.filter((_, i) => i !== index)
          );
    }

   
     //get category details
     const [Category, setCategory] = useState([]);

     useEffect(()=>{
        axios.get(`${API_BASE_URL}/getcategory`).then(res=>setCategory(res.data)).catch(err => console.log(err))
    },[])
 
  return (
    <div>
            {/* Begin page */}
    <div id="layout-wrapper">
     <Reusenavbar value1 ={params.value1} value2 = {params.value2} value3 = {params.value3}/>


{/* removeNotificationModal */}
<div id="removeNotificationModal" className="modal fade zoomIn" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
            </div>
            <div className="modal-body">
                <div className="mt-2 text-center">
                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:"100px",height:"100px"}}></lord-icon>
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!</button>
                </div>
            </div>

        </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
</div>{/* /.modal */}
        {/* ========== App Menu ========== */}
        <div className="app-menu navbar-menu">
            {/* LOGO */}

            {/* sidebar start */}
            <Sidebar value1={params.value1} value2 = {params.value2} value3={params.value3}/>
            {/* sidebar end */}

        </div>
        {/* Left Sidebar End */}
        {/* Vertical Overlay*/}
        <div className="vertical-overlay"></div>

        {/* ============================================================== */}
        {/* Start right Content here */}
        {/* ============================================================== */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">New Product</h4>
                                
                            
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#a">Product</a></li>
                                        <li className="breadcrumb-item active">New Product</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <Link to="/productlist" className="btn btn-primary addtax-modal">Go To List</Link>
                    </div> 
                    {/* end page title */}


                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                   <div className="p-2">
                                    
                                    {/* add product form */}
                                    <form onSubmit={formik.handleSubmit} enctype="multipart/form-data" autoComplete='off'>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label" for="productname">Product Name</label>
                                                <input id="productname" name="productname" placeholder="Enter Product Name" type="text" className="form-control" {...formik.getFieldProps("productname")}/>
                                                {(formik.errors.productname && formik.touched.productname)  ? <small style={{color:"red"}}>{formik.errors.productname}</small> : null}
                                            </div>
                                        </div>

                                        <div className="col-md-6 position-relative">
                                            <div className="mb-3 ">
                                                <label className="form-label" for="product type">Category</label>  {/* Product Type */}

                                                     <input list="vendorname"  id="product type" name="producttype" className="form-control" onChange={formik.handleChange} />
                                                     {/* <span className="down_arrow_style"><i className="las la-angle-down fs-20 ms-1"></i></span> */}

                                                        <datalist id="vendorname" >
                                                        {Category.map((list)=>
                                                        <option key={list._id} value={list.producttype}>{list.producttype}</option>)}
                                                        </datalist> 

                                                        {(formik.errors.producttype && formik.touched.producttype) ? <small style={{color:"red"}}>{formik.errors.producttype}</small> : null} 

                                                    {/* <input id="product type" name="producttype"  type="string" className="form-control" {...formik.getFieldProps("producttype")}/>
                                                    {(formik.errors.producttype && formik.touched.producttype) ? <small style={{color:"red"}}>{formik.errors.producttype}</small> : null} */}

                                            </div>
                                        </div>
                                    </div>
                                      
                                    <div className="dropzone mb-3"> 
                                        <div className="fallback">
                                            <input name="img" type="file"  onChange={handleImageChange}  multiple= "multiple" />
                                            {(formik.errors.img && formik.touched.img)  ? <small style={{color:"red"}}>{formik.errors.img}</small> : null}

                                            <div  style={{ display: 'flex', flexWrap: 'wrap'}}>
                                                {formik.values.img && Array.from(formik.values.img).map((image, index) => (
                                                    <div className='position-relative m-3' key={index}>
                                                        <img
                                                            key={index}
                                                            src={URL.createObjectURL(image)}
                                                            alt={`Image ${index + 1}`}
                                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                        />
                                                        <button type='button' className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
                                                        onClick={()=>handleDeleteProductImg(index)}><i className="las la-trash-alt  align-middle"></i></button>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            
                                        </div> 
                                         {/*
                                        <div className="dz-message needsclick">
                                            <div className="mb-3">
                                                <i className="display-4 text-muted ri-upload-cloud-2-fill"></i>
                                            </div>

                                            <h4>Drop files here or click to upload.</h4>
                                        </div> */}
                                    </div> 

                                        {/* <ul className="list-unstyled" id="dropzone-preview">
                                            <li className="mt-2" id="dropzone-preview-list">
                                                 This is used as the file preview template 
                                                <div className="border rounded">
                                                    <div className="d-flex p-2">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar-sm bg-light rounded">
                                                                <img data-dz-thumbnail className="img-fluid rounded d-block" src="assets/images/new-document.png" alt="img not support..." />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="pt-1">
                                                                <h5 className="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                                                                <p className="fs-13 text-muted mb-0" data-dz-size></p>
                                                                <strong className="error text-danger" data-dz-errormessage></strong>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-3">
                                                            <button data-dz-remove className="btn btn-sm btn-danger">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul> */}
                                        {/* end dropzon-preview */}

                                        <div className="row">
                                            {/* <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="brand">Product Brand</label>
                                                    <input id="brand" name="productbrand" placeholder="Enter Product Brand" type="text" className="form-control" />
                                                </div>
                                            </div> */}
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="price">Product Price</label>
                                                    <input id="price" name="productprice" placeholder="Enter Price" type="text" className="form-control" {...formik.getFieldProps("productprice")} />
                                                    {(formik.errors.productprice && formik.touched.productprice) ? <small style={{color:"red"}}>{formik.errors.productprice}</small> : null}

                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                <label className="form-label" for="no.of items">No.of Items</label>
                                                    <input id="no.of items" name="items"  type="number" className="form-control" {...formik.getFieldProps("items")}/>
                                                    {(formik.errors.items && formik.touched.items) ? <small style={{color:"red"}}>{formik.errors.items}</small> : null}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label for="choices-single-default" className="form-label">Category</label>
                                                    <select className="form-select" data-trigger name="choices-single-category"
                                                        id="choices-single-category">
                                                        <option value="SL">Select</option>
                                                        <option value="EL">Electronic</option>
                                                        <option value="FA">Fashion</option>
                                                        <option value="FI">Fitness</option>
                                                    </select>
                                                </div>
                                            </div> */}

                                            {/* <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label for="choices-single-specifications" className="form-label">Specifications</label>
                                                    <select className="form-select" data-trigger name="choices-single-category"
                                                        id="choices-single-specifications">
                                                        <option value="HI" defaultValue>High Quality</option>
                                                        <option value="LE" defaultValue>Leather</option>
                                                        <option value="NO">Notifications</option>
                                                        <option value="SI">Sizes</option>
                                                        <option value="DI">Different Color</option>
                                                    </select>
                                                </div>
                                            </div> */}

                                            
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" for="productdesc">Product Description</label>
                                            <textarea className="form-control" id="productdesc" name='productdesc' placeholder="Enter Description" rows="4" {...formik.getFieldProps("productdesc")}></textarea>
                                            {(formik.errors.productdesc && formik.touched.productdesc) ? <small style={{color:"red"}}>{formik.errors.productdesc}</small> : null}

                                        </div>

                                        <div className="hstack gap-2 mt-4">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                        {/* <button type="button" className="btn btn-light" >Discard</button> */}
                                    </div> 
                                    </form>

                                   

                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* container-fluid */}
            </div>
            {/* End Page-content */}

            <Footer value3 ={params.value3}/>
        </div>
        {/* end main content*/}

    </div>
    {/* END layout-wrapper */}

    {/*start back-to-top*/}
    <button onclick="topFunction()" className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/*end back-to-top*/}

    {/* preloader
    <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

   
    </div>
  )
}

export default Reuseaddproduct