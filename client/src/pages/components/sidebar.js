import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"

import API_BASE_URL from "./config.js";


const Sidebar = (params) => {
  return (
    <div  className='slidebarm' >

         {/* LOGO */}
         {params.value3 &&
            <div className="navbar-brand-box">
               {/* Dark Logo*/}
                <Link to="/" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src={`${API_BASE_URL}/companyprofileimg/${params.value3?.[0].company_logo}`} alt="no img" className='c_profile_img'/>
                        <span className='c_profile_name c_profile_sidebar_name' >{params.value3?.[0].company_name}</span>
                    </span>
                    <span className="logo-lg">
                        <img src={`${API_BASE_URL}/companyprofileimg/${params.value3?.[0].company_logo}`} alt="no img" className='c_profile_img' />
                        <span className='c_profile_name c_profile_sidebar_name' >{params.value3?.[0].company_name}</span>
                    </span>
                </Link>
               {/* Light Logo*/}
                <a href="#" className="logo logo-light">
                    <span className="logo-sm">
                        <img src={`${API_BASE_URL}/companyprofileimg/${params.value3?.[0].company_logo}`} alt="no img" className='c_profile_img' />
                        <span className='c_profile_name c_profile_sidebar_name' >{params.value3?.[0].company_name}</span>
                    </span>
                    <span className="logo-lg">
                        <img src={`${API_BASE_URL}/companyprofileimg/${params.value3?.[0].company_logo}`} alt="no img" className='c_profile_img' />
                        <span className='c_profile_name c_profile_sidebar_name' >{params.value3?.[0].company_name}</span>
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>
        }
        <div id="scrollbar" >
                <div className="container-fluid scrollBar_Style" >

                    <div id="two-column-menu">
                    </div>

                   
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li className="nav-item">
                            <Link className="nav-link menu-link" to="/dashboard">
                                <i className="las la-house-damage"></i> <span data-key="t-dashboard">Dashboard</span>
                            </Link>
                        </li>

                        {/* <li className="menu-title"><i className="ri-more-fill"></i> <span data-key="t-pages">Pages</span></li> */}

                        <li className="nav-item">
                            {/* <a className="nav-link menu-link" href="#sidebarInvoiceManagement" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarInvoiceManagement">
                                <i className="las la-file-invoice"></i> <span data-key="t-invoices">Invoices Management </span>
                            </a> */}
                            {/* <div className="collapse menu-dropdown" id="sidebarInvoiceManagement"> */}
                                <ul className="nav  flex-column">  {/* nav-sm */}
                                    <li className="nav-item">
                                        <Link to="/invoice" className="nav-link" data-key="t-invoice"><i className="las la-file-invoice"></i> All Invoice </Link>
                                    </li>

                                    {params.value1.userType !== "user" && 
                                    <li className="nav-item">
                                        <Link to="/addinvoice" className="nav-link" data-key="t-add-invoice"><i className="las la-receipt"></i> Create Invoice </Link>
                                    </li>
                                    }

                                    <li className="nav-item">
                                        <Link to="/registeruser" className="nav-link" data-key="t-users"><i className="las la-user"></i> Customers</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/quotation" className="nav-link" data-key="t-add-invoice"><i className="las la-file-signature"></i> Quotation </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/purchase" className="nav-link" data-key="t-add-invoice"><i className="las la-credit-card"></i> Purchase Products </Link>
                                    </li>


                                    {/* <li className="nav-item">
                                        <Link to="/invoicedetails" className="nav-link" data-key="t-invoice-details"> Invoice Details </Link>
                                    </li> */}

                                    <li className="nav-item">
                                        <a className="nav-link" href="#sidebarPayments" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPayments"
                                           data-key="t-products"><i className="las la-money-bill-wave"></i> Payments
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarPayments">
                                            <ul className="nav flex-column"> {/* nav-sm */}

                                                <li className="nav-item">
                                                    <Link to="/salespayment" className="nav-link" data-key="t-payments"><i className="las la-rupee-sign"></i> Sales Payments</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/purchasepayment" className="nav-link" data-key="t-add-product"><i className="las la-rupee-sign"></i> Purchase Payments </Link>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <Link to="/producttable" className="nav-link" data-key="t-add-product"> Product Table </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/inventorytable" className="nav-link" data-key="t-add-product"> Inventory Table </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </li>

                                   

                                    {/* <li className="nav-item">
                                        <Link to="/taxes" className="nav-link" data-key="t-taxes">Taxes</Link>
                                    </li> */}

                                    <li className="nav-item">
                                        <a className="nav-link" href="#sidebarProducts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProducts"
                                           data-key="t-products"><i className="las la-gifts"></i> Products
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarProducts">
                                            <ul className="nav  flex-column"> {/*nav-sm */}
                                                <li className="nav-item">
                                                    <Link to="/productlist" className="nav-link" data-key="t-product-list"><i className="las la-list-alt"></i> Product List </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/addproduct" className="nav-link" data-key="t-add-product"><i className="las la-plus-square"></i> Add Product </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/producttable" className="nav-link" data-key="t-add-product"><i className="las la-table"></i> Product Table </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/inventorytable" className="nav-link" data-key="t-add-product"><i className="las la-border-all"></i> Inventory Table </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link menu-link" href="#sidebarReport" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarReport"
                                            data-key="t-report"> <i className="las la-clipboard-list"></i> Reports
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarReport">
                                            <ul className="nav flex-column"> {/*nav-sm  */}

                                                <li className="nav-item">
                                                    <Link to="/salepaymentsummary" className="nav-link" data-key="t-payment-summary"><i className="las la-money-check"></i> Payment Summary (Sales) </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/purchasepaymentsummary" className="nav-link" data-key="t-payment-summary"><i className="las la-money-check"></i> Payment Summary (Purchase) </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/salereport" className="nav-link" data-key="t-sale-report"><i className="las la-clipboard-check"></i> Sale Report </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/clientwisesalereport" className="nav-link" data-key="t-sale-report"><i className="las la-database"></i> Customer Wise Sale Report </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/saleperiod" className="nav-link" data-key="t-sale-report"><i className="las la-clipboard-list"></i> Sale Period </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/purchasereport" className="nav-link" data-key="t-sale-report"><i className="las la-clipboard-check"></i> Purchase Report </Link>
                                                </li>


                                                <li className="nav-item">
                                                <Link to="/clientwisepurchasereport" className="nav-link" data-key="t-sale-report"><i className="las la-database"></i> Company Wise Purchase Report </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/purchaseperiod" className="nav-link" data-key="t-sale-report"><i className="las la-clipboard-list"></i> Purchase Period </Link>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <Link to="/expansesreport" className="nav-link" data-key="t-expenses-report"> Expenses Report </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </li>

                                    {/* <li className="nav-item">
                                        <a className="nav-link menu-link" href="#sidebarTransaction" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTransaction"
                                            data-key="t-transaction">Transaction
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarTransaction">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <Link to="/transcationlist" className="nav-link" data-key="t-transaction-list"> Transaction List </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/newtranscation" className="nav-link" data-key="t-new-transaction"> New Transaction </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li> */}

                                    {params.value1.userType !== "user" && 
                                    <>

                                    <li className="nav-item">
                                        <Link to="/categories" className="nav-link" data-key="t-users"><i className="las la-stream"></i> Categories</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/users" className="nav-link" data-key="t-users"><i className="las la-user-friends"></i> Users</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/companyprofiledata" className="nav-link" data-key="t-users"><i className="las la-address-card"></i> Company Profile</Link>
                                    </li>

                                    </>

                                    }
                                    
                                </ul>
                            {/* </div> */}
                        </li>

                        {/* <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarAuthentication" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuthentication">
                                <i className="las la-cog"></i> <span data-key="t-authentication">Authentication</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarAuthentication">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <Link  onClick={params.value2} className="nav-link" data-key="t-signin">Sign Out</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to ="/signup" className="nav-link" data-key="t-signup">Sign Up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/resetpassword" className="nav-link" data-key="t-password-reset">Password Reset</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="auth-lockscreen.html" className="nav-link" data-key="t-lock-screen">Lock Screen</a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}

                        {/* <li className="menu-title"><i className="ri-more-fill"></i> <span data-key="t-components">Components</span></li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarUI">
                                <i className="las la-pen-nib"></i> <span data-key="t-bootstrap-ui">Bootstrap UI</span>
                            </a>
                            <div className="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a href="ui-alerts.html" className="nav-link" data-key="t-alerts">Alerts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-badges.html" className="nav-link" data-key="t-badges">Badges</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-buttons.html" className="nav-link" data-key="t-buttons">Buttons</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-colors.html" className="nav-link" data-key="t-colors">Colors</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-cards.html" className="nav-link" data-key="t-cards">Cards</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-carousel.html" className="nav-link" data-key="t-carousel">Carousel</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-dropdowns.html" className="nav-link" data-key="t-dropdowns">Dropdowns</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-grid.html" className="nav-link" data-key="t-grid">Grid</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a href="ui-images.html" className="nav-link" data-key="t-images">Images</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-tabs.html" className="nav-link" data-key="t-tabs">Tabs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-accordions.html" className="nav-link" data-key="t-accordion-collapse">Accordion & Collapse</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-modals.html" className="nav-link" data-key="t-modals">modals</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-offcanvas.html" className="nav-link" data-key="t-offcanvas">Offcanvas</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-placeholders.html" className="nav-link" data-key="t-placeholders">Placeholders</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-progress.html" className="nav-link" data-key="t-progress">Progress</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-notifications.html" className="nav-link" data-key="t-notifications">Notifications</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a href="ui-media.html" className="nav-link" data-key="t-media-object">Media object</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-embed-video.html" className="nav-link" data-key="t-embed-video">Embed Video</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-typography.html" className="nav-link" data-key="t-typography">Typography</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-lists.html" className="nav-link" data-key="t-lists">Lists</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-general.html" className="nav-link" data-key="t-general">General</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="ui-utilities.html" className="nav-link" data-key="t-utilities">Utilities</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAdvanceUI">
                                <i className="las la-share-alt"></i> <span data-key="t-advance-ui">Advance UI</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarAdvanceUI">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="advance-ui-sweetalerts.html" className="nav-link" data-key="t-sweet-alerts">Sweet Alerts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="advance-ui-nestable.html" className="nav-link" data-key="t-nestable-list">Nestable List</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="advance-ui-scrollbar.html" className="nav-link" data-key="t-scrollbar">Scrollbar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="advance-ui-swiper.html" className="nav-link" data-key="t-swiper-slider">Swiper Slider</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="advance-ui-ratings.html" className="nav-link" data-key="t-ratings">Ratings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="advance-ui-highlight.html" className="nav-link" data-key="t-highlight">Highlight</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="advance-ui-scrollspy.html" className="nav-link" data-key="t-scrollSpy">ScrollSpy</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarForms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarForms">
                                <i className="lab la-wpforms"></i> <span data-key="t-forms">Forms</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarForms">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="forms-elements.html" className="nav-link" data-key="t-basic-elements">Basic Elements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-select.html" className="nav-link" data-key="t-form-select"> Form Select </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-checkboxs-radios.html" className="nav-link" data-key="t-checkboxs-radios">Checkboxs & Radios</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-pickers.html" className="nav-link" data-key="t-pickers"> Pickers </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-masks.html" className="nav-link" data-key="t-input-masks">Input Masks</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-advanced.html" className="nav-link" data-key="t-advanced">Advanced</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-range-sliders.html" className="nav-link" data-key="t-range-slider">Range Slider</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-validation.html" className="nav-link" data-key="t-validation">Validation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-wizard.html" className="nav-link" data-key="t-wizard">Wizard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-editors.html" className="nav-link" data-key="t-editors">Editors</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-file-uploads.html" className="nav-link" data-key="t-file-uploads">File Uploads</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-layouts.html" className="nav-link" data-key="t-form-layouts">Form Layouts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="forms-tom-select.html" className="nav-link" data-key="t-tom-select">Tom Select</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarTables" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTables">
                                <i className="las la-table"></i> <span data-key="t-tables">Tables</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarTables">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="tables-basic.html" className="nav-link" data-key="t-basic-tables">Basic Tables</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="tables-gridjs.html" className="nav-link" data-key="t-grid-js">Grid Js</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="tables-listjs.html" className="nav-link" data-key="t-list-js">List Js</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="tables-datatables.html" className="nav-link" data-key="t-datatables">Datatables </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts">
                                <i className="las la-chart-pie"></i> <span data-key="t-apexchart">Apexcharts</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarCharts">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="charts-apex-line.html" className="nav-link" data-key="t-line"> Line
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-area.html" className="nav-link" data-key="t-area"> Area
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-column.html" className="nav-link" data-key="t-column"> Column </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-bar.html" className="nav-link" data-key="t-bar"> Bar </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-mixed.html" className="nav-link" data-key="t-mixed"> Mixed
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-timeline.html" className="nav-link" data-key="t-timeline"> Timeline </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-candlestick.html" className="nav-link" data-key="t-candlstick"> Candlstick </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-boxplot.html" className="nav-link" data-key="t-boxplot"> Boxplot </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-bubble.html" className="nav-link" data-key="t-bubble">
                                            Bubble </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-scatter.html" className="nav-link" data-key="t-scatter">
                                            Scatter </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-heatmap.html" className="nav-link" data-key="t-heatmap">
                                            Heatmap </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-treemap.html" className="nav-link" data-key="t-treemap">
                                            Treemap </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-pie.html" className="nav-link" data-key="t-pie"> Pie </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-radialbar.html" className="nav-link" data-key="t-radialbar"> Radialbar </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-radar.html" className="nav-link" data-key="t-radar"> Radar
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="charts-apex-polar.html" className="nav-link" data-key="t-polar-area">
                                            Polar Area </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarIcons">
                                <i className="las la-gift"></i> <span data-key="t-icons">Icons</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarIcons">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="icons-remix.html" className="nav-link" data-key="t-remix">Remix</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="icons-boxicons.html" className="nav-link" data-key="t-boxicons">Boxicons</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="icons-materialdesign.html" className="nav-link" data-key="t-material-design">Material Design</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="icons-bootstrap.html" className="nav-link" data-key="t-bootstrap">Bootstrap</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="icons-lineawesome.html" className="nav-link" data-key="t-line-awesome">Line Awesome</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarMaps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMaps">
                                <i className="las la-map-marked"></i> <span data-key="t-maps">Maps</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarMaps">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="maps-google.html" className="nav-link" data-key="t-google">
                                            Google
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="maps-vector.html" className="nav-link" data-key="t-vector">
                                            Vector
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="maps-leaflet.html" className="nav-link" data-key="t-leaflet">
                                            Leaflet
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarMultilevel" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMultilevel">
                                <i className="las la-share-square"></i> <span data-key="t-multi-level">Multi Level</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarMultilevel">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href='#a' className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#sidebarAccount" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAccount" data-key="t-level-1.2"> Level
                                            1.2
                                        </a>
                                        <div className="collapse menu-dropdown" id="sidebarAccount">
                                            <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                    <a href='#a' className="nav-link" data-key="t-level-2.1"> Level 2.1 </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#sidebarCrm" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrm" data-key="t-level-2.2"> Level 2.2
                                                    </a>
                                                    <div className="collapse menu-dropdown" id="sidebarCrm">
                                                        <ul className="nav nav-sm flex-column">
                                                            <li className="nav-item">
                                                                <a href='#a' className="nav-link" data-key="t-level-3.1"> Level 3.1
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href='#a' className="nav-link" data-key="t-level-3.2"> Level 3.2
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <div className="help-box text-center">
                            <img src="assets/images/create-invoice.png" className="img-fluid" alt="img not Support..." />
                            <p className="mb-3 mt-2 text-muted">Upgrade To Pro For More Features</p>
                            <div className="mt-3">
                                <a href="invoice-add.html" className="btn btn-primary"> Create Invoice</a>
                            </div>
                        </div> */}

                    </ul>
                   
                    
                </div>
               {/* Sidebar */}
            </div>

            <div className="sidebar-background"></div>

    </div>
  )
}

export default Sidebar