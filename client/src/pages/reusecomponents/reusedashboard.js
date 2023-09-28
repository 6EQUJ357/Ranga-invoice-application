import React from 'react'
import Sidebar from '../components/sidebar'
import Reusenavbar from './reusenavbar'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import '../../App.css'


const ReuseDashboard = (params) => {

    //console.table("dashboard", params.value3); 
      
  return (
    <div>
           {/* Begin page */}
    <div id="layout-wrapper">

    {/* navbar start */}
    <div>
      {/* {params.value1.userType === "super Admin" && <Reusenavbar />}
      {params.value1.userType === "admin" && <Reusenavbar />}
      {params.value1.userType === "user" && <Reusenavbar />} */}

      <Reusenavbar value1 ={params.value1} value2 = {params.value2} value3 ={params.value3}/>


    </div>

    {/* navbar end */}

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
        <div className="app-menu navbar-menu" >

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
                            <div className="page-title-box d-sm-flex align-items-center justify-content-center">
                                <h1 className="mb-sm-0 mt-3" style={{fontWeight :"bolder"}}>Dashboard</h1>

                                {/* <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#a">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li> 
                                    </ol>
                                </div> */}

                            </div>
                        </div>
                    </div>
                   {/* end page title */}

                    <div className='container'>
                        <center>
                            <div className='row mt-3' >

                                <div className='col-12 col-lg-6 dbutton'>
                                <Link to="/invoice" className="btn btn-primary dlink" ><i className="las la-file-invoice"></i> All Invoice</Link> 
                                </div>

                                <div className='col-12 col-lg-6 dbutton'>

                                    <div class="btn-group dlink">
                                        <button type="button" className="btn btn-primary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false"><i className="las la-money-bill-wave"></i> Payments</button>

                                        <ul class="dropdown-menu w-100">
                                            <li><Link to="/salespayment" className="dropdown-item" ><i className="las la-rupee-sign"></i>&emsp;Sales Payments</Link></li>
                                            <li><Link to="/purchasepayment" className="dropdown-item" ><i className="las la-rupee-sign"></i>&emsp;Purchase Payments</Link></li>
                                        </ul>
                                    </div>

                                </div>

                               

                                <div className='col-12 col-lg-6 dbutton'>
                                <Link to="/addinvoice" className="btn btn-primary dlink" ><i className="las la-receipt"></i> Create Invoice</Link>
                                </div>

                                <div className='col-12 col-lg-6 dbutton'>
                                <Link to="/categories" className="btn btn-primary dlink" ><i className="las la-stream"></i> Categories</Link> 
                                </div>

                               
                                <div className='col-12 col-lg-6 dbutton'>
                                    <Link to="/purchase" className="btn btn-primary dlink" ><i className="las la-credit-card"></i> Purchase Products</Link> 
                                </div>

                                <div className='col-12 col-lg-6 dbutton'>
                                    <div className="btn-group dlink">
                                        <button type="button" className="btn btn-primary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false" >
                                        <i className="las la-clipboard-list"></i> Reports
                                        </button>
                                            <ul className="dropdown-menu w-100">
                                                <li><Link className="dropdown-item" to="/salepaymentsummary"><i className="las la-money-check"></i>&emsp;Payment Summary (Sales)</Link></li>
                                                <li><Link className="dropdown-item" to="/purchasepaymentsummary"><i className="las la-money-check"></i>&emsp;Payment Summary (Purchase)</Link></li>
                                                <li><Link className="dropdown-item" to="/salereport"><i className="las la-clipboard-check"></i>&emsp;Sale Report</Link></li>
                                                <li><Link className="dropdown-item" to="/clientwisesalereport"><i className="las la-database"></i>&emsp;Customer Wise Sale Report</Link></li>
                                                <li><Link className="dropdown-item" to="/saleperiod"><i className="las la-clipboard-list"></i>&emsp;Sale Period</Link></li>
                                                <li><Link className="dropdown-item" to="/purchasereport"><i className="las la-clipboard-check"></i>&emsp;Purchase Report</Link></li>
                                                <li><Link className="dropdown-item" to="/clientwisepurchasereport"><i className="las la-database"></i>&emsp;Company Wise Purchase Report</Link></li>
                                                <li><Link className="dropdown-item" to="/purchaseperiod"><i className="las la-clipboard-list"></i>&emsp;Purchase Period</Link></li>
                                                {/* <li><Link className="dropdown-item" to="/expansesreport">&emsp;Expenses Report</Link></li> */}
                                            </ul>
                                    </div>
                                </div>


                                <div className='col-12 col-lg-6 dbutton'>
                                <Link to="/quotation" className="btn btn-primary dlink" ><i className="las la-file-signature"></i> Quotation</Link> 
                                </div>


                                <div className='col-12 col-lg-6 dbutton'>
                                <Link to="/registeruser" className="btn btn-primary dlink" ><i className="las la-user"></i> Customer</Link> 
                                </div>

                                <div className='col-12 col-lg-6 dbutton'> 

                                    <div class="btn-group dlink">
                                        <button type="button" className="btn btn-primary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false"><i className="las la-gifts"></i> Products</button>

                                        <ul class="dropdown-menu w-100">
                                            <li><Link to="/productlist" className="dropdown-item" ><i className="las la-list-alt"></i>&emsp;Product List</Link></li>
                                            <li><Link to="/addproduct" className="dropdown-item" ><i className="las la-plus-square"></i>&emsp;Add Product</Link></li>
                                            <li><Link to="/producttable" className="dropdown-item" ><i className="las la-table"></i>&emsp;Product Table</Link></li>
                                            <li><Link to="/inventorytable" className="dropdown-item" ><i className="las la-border-all"></i>&emsp;Inventory Table</Link></li>
                                        </ul>
                                    </div>

                                </div>

                                

                                <div className='col-12 col-lg-6 dbutton'>
                                    <Link to="/users" className="btn btn-primary dlink" ><i className="las la-user-friends"></i> Users</Link> 
                                </div>

                                <div className='col-12 col-lg-6 dbutton'>
                                    <Link to="/companyprofiledata" className="btn btn-primary dlink" ><i className="las la-address-card"></i> Company Profile</Link> 
                                </div>

                            </div>
                        </center>
                                    
                    </div>
                   

                    {/* <div style={{textAlign:"center", paddingTop:"50px"}}>

                    <div className="btn-group" >
                    <button type="button" className="btn btn-primary"  data-bs-toggle="dropdown" aria-expanded="false" >
                        Reports
                    </button>
                        <ul className="dropdown-menu w-100" style={{textAlign:"center"}}>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/salepaymentsummary">Payment Summary (Sales)</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/purchasepaymentsummary">Payment Summary (Purchase)</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/salereport">Sale Report</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/clientwisesalereport">Client Wise Sale Report</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/saleperiod">Sale Period</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/purchasereport">Purchase Report</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/clientwisepurchasereport">Client Wise Purchase Report</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/purchaseperiod">Purchase Period</Link></li>
                            <li><Link className=" btn btn-info w-100 m-1 opacity-15" to="/expansesreport">Expenses Report</Link></li>
                        </ul>
                    </div>

                    </div> */}
                </div>
               {/* container-fluid */}
            </div>
           {/* End Page-content */}

            <Footer value3 ={params.value3}/>
            {/* <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script> © Invoika.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Msoft
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </div>
       {/* end main content*/}

    </div>
   {/* END layout-wrapper */}



   {/*start back-to-top*/}
    <button onClick="topFunction()" className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
   {/*end back-to-top*/}

   {/*preloader*/}
    {/* <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

    {/* <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div> */}

   {/* Theme Settings */}
    {/* <div className="offcanvas offcanvas-end border-0" tabindex="-1" id="theme-settings-offcanvas">
        <div className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
            <h5 className="m-0 me-2 text-white">Theme Customizer</h5>

            <button type="button" className="btn-close btn-close-white ms-auto" id="customizerclose-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
            <div data-simplebar className="h-100">
                <div className="p-4">
                    <h6 className="mb-0 fw-semibold text-uppercase">Layout</h6>
                    <p className="text-muted">Choose your layout</p>

                    <div className="row">
                        <div className="col-4">
                            <div className="form-check card-radio">
                                <input id="customizer-layout01" name="data-layout" type="radio" value="vertical" className="form-check-input" />
                                <label className="form-check-label p-0 avatar-md w-100" for="customizer-layout01">
                                    <span className="d-flex gap-1 h-100">
                                        <span className="flex-shrink-0">
                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                            </span>
                                        </span>
                                        <span className="flex-grow-1">
                                            <span className="d-flex h-100 flex-column">
                                                <span className="bg-light d-block p-1"></span>
                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                           
                            <h5 className="fs-13 text-center mt-2">Vertical</h5>
                        </div>
                        <div className="col-4">
                            <div className="form-check card-radio">
                                <input id="customizer-layout02" name="data-layout" type="radio" value="horizontal" className="form-check-input" />
                                <label className="form-check-label p-0 avatar-md w-100" for="customizer-layout02">
                                    <span className="d-flex h-100 flex-column gap-1">
                                        <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span className="d-block p-1 bg-soft-primary rounded me-1"></span>
                                            <span className="d-block p-1 pb-0 px-2 bg-soft-primary ms-auto"></span>
                                            <span className="d-block p-1 pb-0 px-2 bg-soft-primary"></span>
                                        </span>
                                        <span className="bg-light d-block p-1"></span>
                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                        </div>
                       end col
                    </div>

                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Color Scheme</h6>
                    <p className="text-muted">Choose Light or Dark Scheme.</p>

                    <div className="colorscheme-cardradio">
                        <div className="row">
                            <div className="col-4">
                                <div className="form-check card-radio">
                                    <input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-light" value="light" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="layout-mode-light">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Light</h5>
                            </div>

                            <div className="col-4">
                                <div className="form-check card-radio dark">
                                    <input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-dark" value="dark" />
                                    <label className="form-check-label p-0 avatar-md w-100 bg-dark" for="layout-mode-dark">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-soft-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-soft-light d-block p-1"></span>
                                                    <span className="bg-soft-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Dark</h5>
                            </div>
                        </div>
                    </div>

                    <div id="layout-width">
                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Layout Width</h6>
                        <p className="text-muted">Choose Fluid or Boxed layout.</p>

                        <div className="row">
                            <div className="col-4">
                                <div className="form-check card-radio">
                                    <input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-fluid" value="fluid" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="layout-width-fluid">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Fluid</h5>
                            </div>
                            <div className="col-4">
                                <div className="form-check card-radio">
                                    <input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-boxed" value="boxed" />
                                    <label className="form-check-label p-0 avatar-md w-100 px-2" for="layout-width-boxed">
                                        <span className="d-flex gap-1 h-100 border-start border-end">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Boxed</h5>
                            </div>
                        </div>
                    </div>

                    <div id="layout-position">
                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Layout Position</h6>
                        <p className="text-muted">Choose Fixed or Scrollable Layout Position.</p>

                        <div className="btn-group radio" role="group">
                            <input type="radio" className="btn-check" name="data-layout-position" id="layout-position-fixed" value="fixed" />
                            <label className="btn btn-light w-sm" for="layout-position-fixed">Fixed</label>

                            <input type="radio" className="btn-check" name="data-layout-position" id="layout-position-scrollable" value="scrollable" />
                            <label className="btn btn-light w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
                        </div>
                    </div>
                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Topbar Color</h6>
                    <p className="text-muted">Choose Light or Dark Topbar Color.</p>

                    <div className="row">
                        <div className="col-4">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-light" value="light" />
                                <label className="form-check-label p-0 avatar-md w-100" for="topbar-color-light">
                                    <span className="d-flex gap-1 h-100">
                                        <span className="flex-shrink-0">
                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                            </span>
                                        </span>
                                        <span className="flex-grow-1">
                                            <span className="d-flex h-100 flex-column">
                                                <span className="bg-light d-block p-1"></span>
                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <h5 className="fs-13 text-center mt-2">Light</h5>
                        </div>
                        <div className="col-4">
                            <div className="form-check card-radio">
                                <input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-dark" value="dark" />
                                <label className="form-check-label p-0 avatar-md w-100" for="topbar-color-dark">
                                    <span className="d-flex gap-1 h-100">
                                        <span className="flex-shrink-0">
                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                            </span>
                                        </span>
                                        <span className="flex-grow-1">
                                            <span className="d-flex h-100 flex-column">
                                                <span className="bg-primary d-block p-1"></span>
                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                            </span>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <h5 className="fs-13 text-center mt-2">Dark</h5>
                        </div>
                    </div>

                    <div id="sidebar-size">
                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Size</h6>
                        <p className="text-muted">Choose a size of Sidebar.</p>

                        <div className="row">
                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-default" value="lg" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-size-default">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Default</h5>
                            </div>

                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-compact" value="md" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-size-compact">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 bg-soft-primary rounded mb-2"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Compact</h5>
                            </div>

                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small" value="sm" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-size-small">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                    <span className="d-block p-1 bg-soft-primary mb-2"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Small (Icon View)</h5>
                            </div>

                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small-hover" value="sm-hover" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-size-small-hover">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                    <span className="d-block p-1 bg-soft-primary mb-2"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Small Hover View</h5>
                            </div>
                        </div>
                    </div>

                    <div id="sidebar-view">
                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar View</h6>
                        <p className="text-muted">Choose Default or Detached Sidebar view.</p>

                        <div className="row">
                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-default" value="default" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-view-default">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Default</h5>
                            </div>
                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-detached" value="detached" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-view-detached">
                                        <span className="d-flex h-100 flex-column">
                                            <span className="bg-light d-flex p-1 gap-1 align-items-center px-2">
                                                <span className="d-block p-1 bg-soft-primary rounded me-1"></span>
                                                <span className="d-block p-1 pb-0 px-2 bg-soft-primary ms-auto"></span>
                                                <span className="d-block p-1 pb-0 px-2 bg-soft-primary"></span>
                                            </span>
                                            <span className="d-flex gap-1 h-100 p-1 px-2">
                                                <span className="flex-shrink-0">
                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                        <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="bg-light d-block p-1 mt-auto px-2"></span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Detached</h5>
                            </div>
                        </div>
                    </div>
                    <div id="sidebar-color">
                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Color</h6>
                        <p className="text-muted">Choose a color of Sidebar.</p>

                        <div className="row">
                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                    <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-light" value="light" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-color-light">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Light</h5>
                            </div>
                            <div className="col-4">
                                <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                    <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-dark" value="dark" />
                                    <label className="form-check-label p-0 avatar-md w-100" for="sidebar-color-dark">
                                        <span className="d-flex gap-1 h-100">
                                            <span className="flex-shrink-0">
                                                <span className="bg-primary d-flex h-100 flex-column gap-1 p-1">
                                                    <span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                </span>
                                            </span>
                                            <span className="flex-grow-1">
                                                <span className="d-flex h-100 flex-column">
                                                    <span className="bg-light d-block p-1"></span>
                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 className="fs-13 text-center mt-2">Dark</h5>
                            </div>

                        </div>
                        end row 
                    </div>

                </div>
            </div>

        </div>
        <div className="offcanvas-footer border-top p-3 text-center">
            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-light w-100" id="reset-layout">Reset</button>
                </div>
                <div className="col-6">
                    <a href="https://1.envato.market/Invoika-admin" target="_blank" rel='noreferrer' className="btn btn-primary w-100">Buy Now</a>
                </div>
            </div>
        </div>
    </div> */}

    
    </div>
  )
}

export default ReuseDashboard