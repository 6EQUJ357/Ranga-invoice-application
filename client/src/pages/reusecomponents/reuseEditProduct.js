import React from 'react'
import Reusenavbar from './reusenavbar'
import Sidebar from '../components/sidebar'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import Footer from '../components/footer'


import API_BASE_URL from "../components/config";


const ReuseEditProduct = (params) => {

    let location = useLocation()
    let productData = location.state;

    // const values = {};
    // productData.forEach((value, key) => {
    //     values[key] = value;
    //   });

    //   values.img = values.img.split(",")

    let image =  productData.img
    const formik = useFormik({
        initialValues : {
            productname : productData.productname,
            producttype : productData.producttype,
            productprice : productData.productprice,
            items : productData.items, 
            productdesc : productData.productdesc,
            img : []
        },
        validationSchema:Yup.object({
            productname : Yup.string().required("Name Required"),
            producttype : Yup.string().required("Type Required"),
            productprice : Yup.string().required("Price Required"),
            items : Yup.number().required("Specify no.of items"),
            productdesc : Yup.string().required("Description Required"),
            // img :  Yup.array().min(1,  'Please select at least one file')
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

              const formData = new FormData();
             
            for (let i = 0; i < values.img.length; i++) {
                formData.append('img', values.img[i]);
            }
            formData.append("productname",values.productname)
            formData.append("producttype",values.producttype)
            formData.append("productprice", values.productprice)
            formData.append("items",values.items)
            formData.append("productdesc", values.productdesc)

            // values.img.forEach((image, index) => {
            //     formData.append(`img${index + 1}`, image);
            //   });

           
            axios.put(`${API_BASE_URL}/updateproducts/${productData._id}`, formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }).then(res=>alert(res.data.message)).catch(err=>console.log(err))

        }
 
    })


    const handleImageChange = (e)=>{
        const selectedImages = Array.from(e.target.files);
        formik.setFieldValue('img', [...formik.values.img, ...selectedImages]);
      
    }

    const handleDeleteProductImg = (index)=>{
        formik.setFieldValue(
            'img',
            formik.values.img.filter((_, i) => i !== index)
          );
    }



  
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
                                        <li className="breadcrumb-item"><a href='#a'>Product</a></li>
                                        <li className="breadcrumb-item active">New Product</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* end page title */}


                    <div className="row">

                    <div className="col-sm-4">
                            <Link to="/productlist" className="btn btn-primary addtax-modal"> Go To Product List</Link>
                            </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                   <div className="p-2">
                                    
                                    {/* add product form */}
                                    <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                                        
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label" for="productname">Product Name</label>
                                                <input id="productname" name="productname" placeholder="Enter Product Name" type="text" className="form-control" {...formik.getFieldProps("productname")}/>
                                                {formik.errors.productname ? <small style={{color:"red"}}>{formik.errors.productname}</small> : null}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" for="product type">Category</label>
                                                    <input id="product type" name="producttype"  type="text" className="form-control" {...formik.getFieldProps("producttype")}/>
                                                    {formik.errors.producttype ? <small style={{color:"red"}}>{formik.errors.producttype}</small> : null}

                                            </div>
                                        </div>
                                    </div>
                                        
                                        {/* <div className="dropzone mb-3"> 
                                            <div className="fallback">
                                                <input name="img" type="file"  onChange={handleImageChange} accept='image/*' multiple= "multiple" />
                                                {formik.errors.img ? <small style={{color:"red"}}>{formik.errors.img}</small> : null}

                                            </div> */}

                                        
                                          {/* {image.length >0 ? image.map((image,id)=>
                                          <div key={id} style={{display:"inline-block", margin:"20px"}} className='position-relative'>
                                            {<img src={image} alt='img not support' class="img-fluid img-thumbnail" style={{width:"150px", height:"150px"}}/>}
                                            <button className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" onClick={()=>handleDeleteProductImg(id)}><i className="las la-trash-alt fs-18 align-middle"></i></button>
                                            </div>
                                          )
                                          :
                                          <p>Images are not available in DataBase...</p>
                                          } */}

                                            {/* <div  style={{ display: 'flex', flexWrap: 'wrap'}}>
                                                {formik.values.img && Array.from(formik.values.img).map((image, index) => (
                                                    <div className='position-relative m-3' key={index}>
                                                        <img
                                                            key={index}
                                                            src={URL.createObjectURL(image)}
                                                            alt={`Image ${index + 1}`}
                                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                        />
                                                        <button  type="button" className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
                                                        onClick={()=>handleDeleteProductImg(index)}><i className="las la-trash-alt  align-middle"></i></button>
                                                    </div>
                                                ))}
                                            </div> */}
                                            
                                        {/* </div> */}
                                        
                                        <div className="row">

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label" for="price">Product Price</label>
                                                    <input id="price" name="productprice" placeholder="Enter Price" type="text" className="form-control" {...formik.getFieldProps("productprice")} />
                                                    {formik.errors.productprice ? <small style={{color:"red"}}>{formik.errors.productprice}</small> : null}

                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                <label className="form-label" for="no.of items">No.of Items</label>
                                                    <input id="no.of items" name="items"  type="number" className="form-control" {...formik.getFieldProps("items")}/>
                                                    {formik.errors.items ? <small style={{color:"red"}}>{formik.errors.items}</small> : null}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                                                                                            
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" for="productdesc">Product Description</label>
                                            <textarea className="form-control" id="productdesc" name='productdesc' placeholder="Enter Description" rows="4" {...formik.getFieldProps("productdesc")}></textarea>
                                            {formik.errors.productdesc ? <small style={{color:"red"}}>{formik.errors.productdesc}</small> : null}

                                        </div>

                                        <div className="hstack gap-2 mt-4">
                                        <button type="submit" className="btn btn-primary">Save</button>
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

export default ReuseEditProduct
