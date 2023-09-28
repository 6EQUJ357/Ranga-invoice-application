import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Reusenavbar from './reusenavbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import "../../App.css"


import API_BASE_URL from "../components/config";


const Reuseroductlist = (params) => {

   // all products state value
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30; // Number of items to display per page

  //console.log("items", items)

  // search product state value
  const [searchproduct, setSearchproduct] = useState("")

   // purchase transaction state value
  // const [purchase, setpurchase] = useState([])

    // invoice(sales) transaction state value
  //const [invoice, setinvoice] = useState([])

  //all products from database
  useEffect(()=>{
    axios.get(`${API_BASE_URL}/allproductlist`).then(res=>setItems(res.data)).catch(err=>console.log(err))
  },[]) 


   //prgination
   const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageClick(i)}
          className='pegination_button'
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentData = items.slice(startIndex, endIndex);

  //pegination ends




  //purchase transaction from database

//   useEffect(()=>{
//     axios.get("http://localhost:8080/getpurchasetransaction").then(res=>setpurchase(res.data)).catch(err=>console.log(err))
//   },[]) 

  //invoice(sales) transaction from database

//   useEffect(()=>{
//     axios.get("http://localhost:8080/getinvoicetransaction").then(res=>setinvoice(res.data)).catch(err=>console.log(err))
//   },[]) 


  //delete products from DB
  const deleteProductHandle =(id, name)=>{
    let response = window.confirm(`you try to delect the #${name}...`)
    if(response){
        axios.delete(`${API_BASE_URL}/allproductlist/${id}`).then(res=>setItems(res.data)).catch(err=>console.log(err))
    // alert("product deleted successfully...")
    }
  }

//   let aaa =purchase.map(res=>res.quantity)
//   let bbb =invoice.map(res=>res.quantity)
//    console.log("purchase", aaa[0])
//    console.log("sales", bbb[0])

 //update  user

 let navigate = useNavigate();

 const EditProduct = (data)=>{
     navigate("/editproduct", {state : data})
 }

 //view product 
 const ViewProduct = (data)=>{
    navigate("/viewproduct", {state : data})
}

  return (
    
    <div id="layout-wrapper">
      {/* Begin page */}
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
           

            {/* side bar start*/}

            <Sidebar value1={params.value1} value2 = {params.value2} value3={params.value3}/>
            {/* side bar end*/}

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
                                <h4 className="mb-sm-0">Product List</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#a">Product</a></li>
                                        <li className="breadcrumb-item active">Product List</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* end page title */}

                    <div className="row pb-4 gy-3">
                        {params.value1.userType === "user" ? 
                            <div className="col-sm-4" > 
                            <button className="btn btn-primary addtax-modal" disabled="true"><Link to="/addproduct" className="btn btn-primary addtax-modal"><i className="las la-plus me-1"></i> Add Product</Link></button>
                            </div>
                            :
                            <div className="col-sm-4">
                            <Link to="/addproduct" className="btn btn-primary addtax-modal"><i className="las la-plus me-1"></i> Add Product</Link>
                            </div>
                        }

                        <div className="col-sm-auto ms-auto">
                           <div className="d-flex gap-3">
                            <div className="search-box">
                                <input type="text" className="form-control" id="searchMemberList" placeholder="Search for Product Name" name="searchProducts" value={searchproduct} onChange={(e)=>setSearchproduct(e.target.value)}/>
                                <i className="las la-search search-icon"></i>
                            </div>
                            {/* <div className="">
                                <button type="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-soft-info btn-icon fs-14"><i className="las la-ellipsis-v fs-18"></i></button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li><a className="dropdown-item" href="#a">All</a></li>
                                    <li><a className="dropdown-item" href="#a">Last Week</a></li>
                                    <li><a className="dropdown-item" href="#a">Last Month</a></li>
                                    <li><a className="dropdown-item" href="#a">Last Year</a></li>
                                </ul>
                            </div> */}
                           </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive table-card">

                                         {/* product table */}
                                        <table className="table table-nowrap align-middle mb-0">
                                            <thead>
                                                <tr className="text-muted text-uppercase">
                                                    {/* <th style={{width: "50px"}}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                                        </div>
                                                    </th> */}
                                                    <th scope="col" style={{width: "400px"}}>Product Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">In Stock</th>
                                                    {/* <th scope="col">Rate</th> */}
                                                    <th scope="col" style={{width: "16%"}}>Price</th>
                                                    <th scope="col" style={{width: "6%"}}>Action</th>
                                                </tr>
                                            </thead>
        
                                            {/* mapping product list items start */} 

                                            <tbody >
                                                
                                                {currentData.length >0 ? currentData.filter(list=>list.productname.toLowerCase().startsWith(searchproduct.toLowerCase())).map(res=>
                                                
                                                    <tr key={res._id}>
                                                        {/* <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="check1" value="option" />
                                                            </div>
                                                        </td> */}
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                {/* <div className="flex-shrink-0 me-3 avatar-sm">
                                                                    <div className="avatar-title bg-light rounded"> <img
                                                                            src={res.img[0]} alt="img not displayed..."
                                                                            className="avatar-xs" /> </div>
                                                                </div> */}
                                                                <div className="flex-grow-1">
                                                                    <h6 className="fs-16 mb-1">{res.productname}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{res.producttype}</td>
                                                         {res.items > 0 ? <td>{res.items}</td> : <td style={{color:"red"}}>Out Of Stock</td>}  {/* sales / total stock */}
                                                        {/* <td>
                                                            <span className="badge bg-light text-body fs-12 fw-medium"><i className="mdi mdi-star text-warning me-1"></i>3.9</span>
                                                        </td> */}
                                                        <td><div>{res.productprice}</div></td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="las la-ellipsis-h align-middle fs-18"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <button type='button' onClick={()=>ViewProduct(res)} className="dropdown-item"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                                                            View</button>
                                                                    </li>
                                                                    
                                                                    <li>
                                                                        {params.value1.userType !== "super Admin" ?
                                                                            <button className="dropdown-item" disabled="true"><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                                                Edit</button>
                                                                            : 
                                                                            <button type='button' onClick={()=>EditProduct(res)} className="dropdown-item" ><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
                                                                            Edit</button>
                                                                        }
                                                                    </li>
                                                                    {/* <li>
                                                                        <a className="dropdown-item" href="#a"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                                                            Download</a>
                                                                    </li> */} 
                                                                    <li className="dropdown-divider"></li>
                                                                    <li>
                                                                        {params.value1.userType ==="super Admin"  ?
                                                                        
                                                                            <button className="dropdown-item remove-item-btn" onClick={()=>deleteProductHandle(res._id, res.productname)} >
                                                                                <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                                                Delete
                                                                            </button> 
                                                                            : 
                                                                            <button className="dropdown-item remove-item-btn" disabled="true">
                                                                                <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                                                                Delete
                                                                            </button> 
                                                                        }
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
 
                                                ) 
                                                : 
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <h3 className="form-check-input">Not Yet Added...</h3>
                                                        </div> 
                                                    </td>
                                                </tr>
                                                                                          
                                                }
                                                 <br />
                                                
                                                {/* total count */}
                                                {currentData.length > 0 && 
                                                 <tr style={{fontWeight:"bolder", fontSize:"1rem"}}>
                                                    <td>Total</td>
                                                    <td></td>
                                                    <td>{currentData && currentData.map(list=>list.items).reduce((a,b)=> (Number(a)+ Number(b)))}</td>  
                                                    <td>{currentData && (currentData.map(price=> price.productprice).reduce((a,b)=> Number(a) + Number(b)))}</td>  
                                                    <td></td>
                                                 </tr>
                                                }

                                            {/* mappingproduct list items end */} 
                                                                    
                                         </tbody>  {/* end tbody */}
                                                
                                        </table>{/* end table */}
                                    </div>{/* end table responsive */}
                                </div>
                            </div>

                            <div className="row align-items-center mb-4 gy-3">
                        <div className="col-md-5">
                            <p className="mb-0 text-muted">Showing <b>1</b> to <b>{currentData.length}</b> of <b>{items.length}</b> results</p>
                        </div>

                        <div className="col-sm-auto ms-auto">
                            <nav aria-label="...">
                                <ul className="pagination mb-0">
                                  <button className="page-item "  onClick={handlePrevClick} disabled={currentPage === 1}>
                                    <span>Previous</span>
                                  </button>

                                  {/* <li className="page-item active"><span className="page-link m-lg-1"> {renderPageNumbers()}</span></li> */}
                                  {renderPageNumbers()}

                                  {/* <li className="page-item" aria-current="page">
                                    <span className="page-link">2</span>
                                  </li>
                                  <li className="page-item"><a className="page-link" href='#a'>3</a></li> */}

                                  <button className="page-item" onClick={handleNextClick} disabled={currentPage === totalPages}>
                                    <span>Next</span>
                                  </button>
                                </ul>
                              </nav>
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


    {/* END layout-wrapper */}

    {/*start back-to-top*/}
    <button onclick="topFunction()" className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/*end back-to-top*/}

    {/*preloader*/}
    {/* // <div id="preloader">
    //     <div id="status">
    //         <div className="spinner-border text-primary avatar-sm" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     </div>
    // </div> */}

   

    </div>

  )
}

export default Reuseroductlist