import React, {useEffect, useState} from 'react'
import Reusenavbar from './reusenavbar'
import Sidebar from '../components/sidebar'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
import "../../App.css"
import { Link } from 'react-router-dom'


import API_BASE_URL from "../components/config";


const ReuseAddInvoice = (params) => {

    const navigate = useNavigate();

    //present date
  const date = new Date();
  const dateTimeString = date.toLocaleString();

  // generate invoice id

  const [invoicedata, setinvoicedata] = useState([])


    //all products list
      const [items, setItems] = useState([]);
     // console.log("items", items);
      const [productNameBasedOnProducyType, setproductNameBasedOnProducyType] = useState([]);

      const uniqueArrayProductType = [...new Set(items.map(list=>list.producttype))];
      //console.log("product type", uniqueArrayProductType)




      //register user details list (client/customer)

      const [registeruser, setregisteruser] = useState([]);
    

      useEffect(()=>{
        axios.get(`${API_BASE_URL}/allproductlist`).then(res=>setItems(res.data)).catch(err=>console.log(err));

        axios.get(`${API_BASE_URL}/getregisteruserdetails`).then(res=>setregisteruser(res.data)).catch(err=>console.log(err))

        axios.get(`${API_BASE_URL}/getinvoicetransaction`).then(res=>setinvoicedata(res.data)).catch(err=>console.log(err));

       },[])


  const formik = useFormik({
    initialValues : {
        invoiceno : "",
        dateofpurchase : dateTimeString,
        paymentstatus : "",
        lotnumber : "",
        vendorname : "",
        vendorGSTno : null,
        vendoremail : "",
        vendornumber : "",
        vendoraddress : "",
        paymentmethod : "",
        holdername : "",
        cardnumber : "",
        // subtotal : "",
        // SGST : "",
        // CGST : "",
        totalAmount : "",
        receiveAmount : "",
        producttype : "",
        rows: []
        
    },
    validationSchema : Yup.object({
        invoiceno : Yup.string(),
        dateofpurchase : Yup.string(),
        paymentstatus : Yup.string().required("Select Payment Status"),
        lotnumber : Yup.string(),
        vendorname : Yup.string().required("Name Required"),
        // vendorGSTno: Yup.string().required("Enter GST no"),
        vendoremail : Yup.string().required("Email Required"),
        vendornumber : Yup.string().required("Number Required"),
        vendoraddress : Yup.string().required("Address Required"),
        paymentmethod : Yup.string().required("Choose Payment Method"),
        holdername : Yup.string().required("Name Required"), 
        cardnumber : Yup.string().required("Enter Card Number").length(19),
        receiveAmount : Yup.string().required("Enter Amount To Be Paid At Initial"),
        producttype : Yup.string().required("Specify Type")
    }),
    onSubmit :async(values, {resetForm})=>{

       await axios.post(`${API_BASE_URL}/invoicetransaction`, values).then(res=>{
        alert(res.data[0].message);

        if(res.data[0].status === 200){
            navigate('/invoicedetails', { state: values });
            //console.log("values", values)
        }
        }
        ).catch(err=>console.log(err))

      

        resetForm({values : ""});

    }
    
}) 


// add new row
const handleAddRow = () => {
    const newRow = {
      sno: formik.values.rows.length + 1, 
      productname : "",
    //   producttype : "",
      productprice : "",
      quantity : "",
    //   tax : "",
      amount : "",
    //   taxableAmount : "",
    //   hsncode : "",
    };

    formik.setFieldValue('rows', [...formik.values.rows, newRow]);
  };


// onChange input handle
const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRows = [...formik.values.rows];
    updatedRows[index][name] = value;
    formik.setFieldValue('rows', updatedRows);
  };



//productname handle change
const handleNameChange = (e, index)=>{
    const { value } = e.target;

    const updatedRows = [...formik.values.rows];
    updatedRows[index].productname = value;
    formik.setFieldValue('rows', updatedRows);

     const ind = items.findIndex(list=>list.productname === value); //product name index
     //console.log("ind", ind)

    //  const ptype = items.filter(list=>list[ind].producttype === formik.values.rows[ind].producttype);
    //  console.log("first", ptype)

    if(value === items[ind]?.productname ) { 
        //updatedRows[index].producttype = items[ind].producttype;
        updatedRows[index].productprice = items[ind].productprice;
        formik.setFieldValue('rows', updatedRows);
    }
    else{
        //updatedRows[index].producttype =""; 
        updatedRows[index].productprice ="";
        formik.setFieldValue('rows', updatedRows);
    } 
   
  }


  //product type handle change
  const handleTyprChange = (e)=>{
    const { value } = e.target;
    formik.setFieldValue("producttype", value);

    // const updatedRows = [...formik.values.rows];
    // updatedRows[index].producttype = value;
    // formik.setFieldValue('rows', updatedRows);

    
    setproductNameBasedOnProducyType(items.filter(list=>list.producttype === e.target.value)); 
  //console.log("prdf efrg", productNameBasedOnProducyType)

    // let namee= updatedRows[index].productname; //product name

    // const ind = items.findIndex(list=>list.producttype === e.target.value); //product type index 

    // if (namee ===items[ind].productname && e.target.value === items[ind].producttype) {
    //   updatedRows[index].productprice = items[ind].productprice;
    //   formik.setFieldValue('rows', updatedRows);
    // }
    // else{
    //     updatedRows[index].productprice ="";
    //     formik.setFieldValue('rows', updatedRows);
    // }   
  }



  // incre / decre quantity   &&  // CALCULATE WHOLE AMOUNT
  const handleAmountChange = (e, index) =>{
    const { value } = e.target;

    const updatedRows = [...formik.values.rows];
    updatedRows[index].quantity = value;
    formik.setFieldValue('rows', updatedRows);

    //TOTAL COUNT
    
    let amountt = (Number(updatedRows[index].productprice) * (updatedRows[index].quantity)).toString();
    updatedRows[index].amount = amountt;
    formik.setFieldValue('rows', updatedRows);

     //sub total
     let amountts = updatedRows.reduce((a,b)=>{ return a+Number(b.amount)},0);
      
    //formik.setFieldValue('subtotal', amountts.toFixed(2).toString());  
    formik.setFieldValue('totalAmount', amountts.toFixed(2).toString());

  }

// const incrementquantity = (index)=>{
//     const updatedRows = [...formik.values.rows];
//     updatedRows[index].quantity = updatedRows[index].quantity + 1;
//     formik.setFieldValue('rows', updatedRows);

//     //TOTAL COUNT
    
//     let amountt = (Number(updatedRows[index].productprice) * (updatedRows[index].quantity)).toFixed(2).toString();
//     updatedRows[index].amount = amountt;
//     formik.setFieldValue('rows', updatedRows);

//      //sub total
//      let amountts = updatedRows.reduce((a,b)=>{ return a+Number(b.amount)},0);
      
//     formik.setFieldValue('subtotal', amountts.toFixed(2).toString());   

// }

// const decrementquantity =(index)=>{
//     if(formik.values.rows[index].quantity > 0){
//         const updatedRows = [...formik.values.rows];
//         updatedRows[index].quantity = updatedRows[index].quantity - 1;
//         formik.setFieldValue('rows', updatedRows);

//         //amount
//         let amountt = (Number(updatedRows[index].productprice) * (updatedRows[index].quantity)).toFixed(2).toString();
//         updatedRows[index].amount = amountt;
//         formik.setFieldValue('rows', updatedRows);

//         //sub total
//         let amountts = updatedRows.reduce((a,b)=>{ return a+Number(b.amount)},0);

//         formik.setFieldValue('subtotal', amountts.toFixed(2).toString());

 
//     }
// }


// calculate taxable amount througH tax field
// const handleTaxChange = (e, index)=>{
//     const { value } = e.target;

//     const updatedRows = [...formik.values.rows];
//     updatedRows[index].tax = value;
//     formik.setFieldValue('rows', updatedRows);

//     //taxable amount
//     let amount = Number(updatedRows[index].amount); 
//     let taxableamounts = amount * (Number(e.target.value) / 100);
//     updatedRows[index].taxableAmount = taxableamounts.toString();
//     formik.setFieldValue('rows', updatedRows);

//     //SGST
//     let estTax = updatedRows.reduce((a,b)=>{ return a+Number(b.taxableAmount)},0);
//     let halftax = estTax / 2;
//     formik.setFieldValue('SGST', halftax.toFixed(2).toString());

//     //CGST
//     formik.setFieldValue('CGST', halftax.toFixed(2).toString());

//     //totalAmount
//      let totalAmo = Number(formik.values.subtotal) + estTax;
//      formik.setFieldValue('totalAmount', totalAmo.toFixed(2).toString());
//   }
 

  //delete row

  const handleDeleteRow = ( index) => {
    let responce = window.confirm(`Are You Delete The Row #${index + 1}`);

    if(responce){
    const updatedRows = [...formik.values.rows];
    updatedRows.splice(index, 1);
    formik.setFieldValue('rows', updatedRows);

    //sub total
    let amountts = updatedRows.reduce((a,b)=>{ return a+Number(b.amount)},0);

    //formik.setFieldValue('subtotal', amountts.toFixed(2).toString());
    formik.setFieldValue('totalAmount', amountts.toFixed(2).toString());

   

    // //SGST
    // let estTax = updatedRows.reduce((a,b)=>{ return a+Number(b.taxableAmount)},0);
    // let halftax = estTax / 2;
    // formik.setFieldValue('SGST', halftax.toFixed(2).toString());

    // //CGST
    // formik.setFieldValue('CGST', halftax.toFixed(2).toString());

    // //totalAmount
    //  let totalAmo = Number(amountts) + estTax;
    //  formik.setFieldValue('totalAmount', totalAmo.toFixed(2).toString()); 
    }

  };



//payment Status Handle

const paymentStatusHandle = (e)=>{
    formik.setFieldValue("paymentstatus", e.target.value);

    if(e.target.value === "Unpaid"){
        formik.setFieldValue("paymentmethod","nill");
        formik.setFieldValue("cardnumber","XXXX XXXX XXXX XXXX");
        formik.setFieldValue("holdername","nill");
        formik.setFieldValue("receiveAmount","0");
    }
    if(e.target.value === "Paid"){
        formik.setFieldValue("paymentmethod","");
        formik.setFieldValue("cardnumber","");
        formik.setFieldValue("holdername","");
        formik.setFieldValue("receiveAmount","0");
    }
}

//format Card Number
const formatCardNumber = (e)=>{
    const formattedValue = e.target.value
    .replace(/\s/g, "")   // Remove any existing spaces
    .match(/.{1,4}/g)     // Split the string into groups of 4 characters
    .join(" ");           // Join the groups with a space in between

  formik.setFieldValue("cardnumber", formattedValue);
}


//filter vendor name from Api

const changes = (e)=>{
    formik.setFieldValue("vendorname", e.target.value);

    const index = registeruser.findIndex(list=>list.registerusername === e.target.value)
    //console.log("registeruser", registeruser)
   // console.log("index", index);

    formik.setFieldValue("vendoremail", registeruser[index].registeruseremail);
    formik.setFieldValue("vendornumber", registeruser[index].registerusernumber);
    formik.setFieldValue("vendorGSTno", registeruser[index].registerusergstno);
    formik.setFieldValue("vendoraddress", registeruser[index].registeruseraddress);
    formik.setFieldValue("invoiceno", invoicedata.length > 0 ? (Number(invoicedata.map(list=>list.invoiceno)[invoicedata.length - 1]) + 1).toString() : "1000")
}


const handlePaymentMethodOnCash = (e)=>{
    formik.setFieldValue("paymentmethod", e.target.value);

    if(e.target.value === "Cash") {
        formik.setFieldValue("cardnumber","XXXX XXXX XXXX XXXX");
        formik.setFieldValue("holdername","nill")
    }
    else{
        formik.setFieldValue("cardnumber","");
        formik.setFieldValue("holdername","")
    }
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
                                <h4 className="mb-sm-0">New Invoice</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href='#a'>Invoice</a></li>
                                        <li className="breadcrumb-item active">New Invoice</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* end page title */}

                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <div className="card">

                                <form className="needs-validation" id="invoice_form" onSubmit={formik.handleSubmit} autoComplete='off'>

                                    <div className="card-body border-bottom border-bottom-dashed p-1">
                                        
                                        <div className="row">

                                            {/* logo row */}
                                            <div className='row'>
                                                <div className='col-lg-4 col-0'></div>
                                                <div className='col-lg-4 col-12'>
                                                {params.value3 && 
                                                        <div className="profile-user mx-auto  mb-3">
                                                            {/* <input id="profile-img-file-input" type="file" className="profile-img-file-input" /> */}

                                                            <label htmlFor="profile-img-file-input" className='addinvoice_lable'  tabIndex="0" style={{width:"20rem"}}>
                                                                
                                                                <span className="overflow-hidden  d-flex align-items-center justify-content-left rounded" >

                                                                    <img src={`${API_BASE_URL}/companyprofileimg/${params.value3?.[0].company_logo}`} className="card-logo card-logo-dark user-profile-image img-fluid  c_profile_addinvoice_img" alt="logo dark" />
    
                                                                    <span className='c_profile_name c_profile_addinvoice_name' >{params.value3?.[0].company_name}</span>
                                                                    
                                                                    {/* <img src={params.value3?.[0].company_logo} className="card-logo card-logo-light user-profile-image img-fluid" alt="logo light" /> */}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    }
                                                </div>
                                                <div className='col-lg-4 col-0'></div>
                                            </div>
                                        
                                        {/* invoice no row */}
                                            <div className="col-lg-6 col-12" >
                                                <div className="row g-3" >
                                                    <div className="col-lg-8 col-sm-6">
                                                        <label htmlFor="invoicenoInput">Invoice No</label>
                                                      
                                                        <input type="text" className="form-control bg-light border-0" id="invoicenoInput" placeholder="Invoice No" name="invoiceno"  readOnly = "readonly" value={invoicedata.length > 0 ? (Number(invoicedata.map(list=>list.invoiceno)[invoicedata.length - 1]) + 1).toString() : "1000"}/>
                                                       
                                                    </div>
                                                    {/*end col*/}
                                                    <div className="col-lg-8 col-sm-6">
                                                        <div>
                                                            <label htmlFor="date-field">Date</label>
                                                            <input type="text" className="form-control bg-light border-0 flatpickr-input" id="date-field" data-provider="flatpickr" data-time="true" placeholder="Select Date-time" name ="dateofpurchase" readOnly = "readonly"  {...formik.getFieldProps("dateofpurchase")}/> 
                                                        </div>
                                                    </div>
                                                    {/*end col*/}
                                                    {/* {formik.values.rows.map((row, index) => ( */}
                                                    <div className="col-lg-8 col-sm-6 mb-5">
                                                        <label htmlFor="choices-payment-status">Category</label>
                                                         <div className="input-light">
                                                               {/* <input list="brow1" name={`rows[${index}].producttype`} id="productName-11"  onChange={(e) => handleTyprChange(e, index)} />  */}

                                                               <input list="brow1" name="producttype" id="productName-11"  onChange={(e) => handleTyprChange(e)} /> 

                                                                <datalist id="brow1"  >
                                                                    {uniqueArrayProductType.map((list,id)=>
                                                                    <option key={id} value={list}>{list}</option>)}
                                                                </datalist> 
                                                                </div> 

                                                                {(formik.errors.producttype && formik.touched.producttype) && <div style={{color:"red"}}>{formik.errors.producttype}</div>}
                                                        
                                                    </div>
                                                    {/* ))} */}
                                                    {/*end col*/}
                                                    
                                                    {/*end col*/}
                                                </div>
                                                 
                                            </div>
                                            {/*end col*/}
                                            <div className="col-lg-6 ms-auto col-12" >

                                                <div className='row' >
                                                    <div className="col-lg-6 mb-2">

                                                    {/* <input list="vendorname"  id="vendorname"  name="vendorname" onChange={changes} />
                                                                        <datalist id="vendorname"  >
                                                                        {registeruser.map((list)=>
                                                                        <option key={list._id} value={list.registerusername}>{list.registerusername}</option>)}
                                                                        </datalist>  */}
                                                        <label>Customer Name</label>
                                                        <select className="form-control bg-light border-0" id="vendorname"  name="vendorname" onChange={changes} >
                                                            <option>-- Select -- </option>
                                                            {registeruser.length > 0 && registeruser.map((res)=>
                                                            <option key={res._id} value={res.registerusername} >{res.registerusername}</option>
                                                            )}
                                                        </select>
                                                        
                                                        {(formik.touched.vendorname && formik.errors.vendorname) ? <small style={{color:"red"}}>{formik.errors.vendorname}</small> : null}

                                                    </div>

                                                    <div className='col-lg'>
                                                        <br/>
                                                        <Link to="/registeruser" className='btn btn-primary'>Add New Customer</Link>
                                                    </div>

                                                </div>
 
                                               
                                                {/* <div className="mb-2">
                                                    <input className="form-control bg-light border-0" id="vendorGSTno"  name="vendorGSTno" placeholder="GST no" {...formik.getFieldProps("vendorGSTno")} readOnly/>
                                                    <div className="invalid-feedback">
                                                        Please enter GST no
                                                    </div>
                                                    {(formik.touched.vendorGSTno && formik.errors.vendorGSTno) ? <small style={{color:"red"}}>{formik.errors.vendorGSTno}</small> : null}

                                                </div> */}


                                                {/* <div>
                                                    <label htmlFor="companyAddress">Address</label>
                                                </div> */}
                                                <div className="mb-2">
                                                <textarea className="form-control bg-light border-0" id="companyAddress" rows="3" placeholder="Company Address" name="vendoraddress" {...formik.getFieldProps("vendoraddress")} readOnly></textarea>
                                                    <div className="invalid-feedback">
                                                        Please enter a address
                                                    </div>
                                                    {(formik.touched.vendoraddress && formik.errors.vendoraddress) ? <small style={{color:"red"}}>{formik.errors.vendoraddress}</small> : null}

                                                </div>
                                                {/* <div className="mb-2">
                                                    <input type="text" className="form-control bg-light border-0" id="companyaddpostalcode" minlength="5" maxlength="6" placeholder="Enter Postal Code" required="" />
                                                    <div className="invalid-feedback">
                                                        The US zip code must contain 5 digits, Ex. 45678
                                                    </div>
                                                </div> */}
                                                
                                                <div className="mb-2">
                                                <input type="email" className="form-control bg-light border-0" id="companyEmail" placeholder="Email Address" name="vendoremail"  {...formik.getFieldProps("vendoremail")} readOnly />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email, Ex., example@gamil.com
                                                    </div>
                                                    {(formik.touched.vendoremail && formik.errors.vendoremail) ? <small style={{color:"red"}}>{formik.errors.vendoremail}</small> : null}

                                                </div>
                                                {/* <div className="mb-2">
                                                    <input type="text" className="form-control bg-light border-0" id="companyWebsite" placeholder="Website" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a website, Ex., www.example.com
                                                    </div>
                                                </div> */}
                                                <div>
                                                <input type="text" className="form-control bg-light border-0" data-plugin="cleave-phone" id="compnayContactno" placeholder="Contact No" name='vendornumber' {...formik.getFieldProps("vendornumber")} readOnly />
                                                    <div className="invalid-feedback">
                                                        Please enter a contact number
                                                    </div>
                                                    {(formik.touched.vendornumber && formik.errors.vendornumber) ? <small style={{color:"red"}}>{formik.errors.vendornumber}</small> : null}

                                                </div>
                                            </div>
                                        </div>
                                        {/*end row*/}
                                    </div>
                                    {/* <div className="card-body p-4 border-top border-top-dashed">
                                        <div className="row">
                                            {/* <div className="col-lg-4 col-sm-6">
                                                <div>
                                                    <label htmlFor="billingName" className="text-muted text-uppercase fw-semibold">Billing Address</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input type="text" className="form-control bg-light border-0" id="billingName" placeholder="Full Name" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a full name
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <textarea className="form-control bg-light border-0" id="billingAddress" rows="3" placeholder="Address" required></textarea>
                                                    <div className="invalid-feedback">
                                                        Please enter a address
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <input type="text" className="form-control bg-light border-0" data-plugin="cleave-phone" id="billingPhoneno" placeholder="(123)456-7890" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a phone number
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="text" className="form-control bg-light border-0" id="billingTaxno" placeholder="Tax Number" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a tax number
                                                    </div>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="same" name="same" onchange="billingFunction()" />
                                                    <label className="form-check-label" htmlFor="same">
                                                        Will your Billing and Shipping address same?
                                                    </label>
                                                </div>
                                            </div> 
                                            {/*end col
                                            <div className="col-sm-6 ms-auto">
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <div>
                                                            <label htmlFor="shippingName" className="text-muted text-uppercase fw-semibold">Shipping Address</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input type="text" className="form-control bg-light border-0" id="shippingName" placeholder="Full Name" required />
                                                            <div className="invalid-feedback">
                                                                Please enter a full name
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <textarea className="form-control bg-light border-0" id="shippingAddress" rows="3" placeholder="Address" required></textarea>
                                                            <div className="invalid-feedback">
                                                                Please enter a address
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input type="text" className="form-control bg-light border-0" data-plugin="cleave-phone" id="shippingPhoneno" placeholder="(123)456-7890" required />
                                                            <div className="invalid-feedback">
                                                                Please enter a phone number
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <input type="text" className="form-control bg-light border-0" id="shippingTaxno" placeholder="Tax Number" required />
                                                            <div className="invalid-feedback">
                                                                Please enter a tax number
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end col
                                        </div>
                                        {/*end row
                                    </div> */}
                                    <div className="card-body p-2">
                                        <div className="table-responsive">
                                            <table className="invoice-table table table-borderless table-nowrap mb-0">
                                                <thead className="align-middle">

                                                    <tr className="table-active">

                                                        <th>S.no</th>
                                                        {/* <th scope="col" >Category</th> */}
                                                        <th scope="col" >Product Name</th>
                                                        <th scope="col" >
                                                            <div className="d-flex currency-select input-light align-items-center">
                                                                Rate (₹)
                                                                {/* <select className="form-selectborder-0 bg-light" data-choices data-choices-search-false id="choices-payment-currency" onchange="otherPayment()">
                                                                    <option value="$">($)</option>
                                                                    <option value="£">(£)</option>
                                                                    <option value="₹">(₹)</option>
                                                                    <option value="€">(€)</option>
                                                                </select> */}
                                                                
                                                            </div>
                                                        </th>
                                                        <th scope="col" >Quantity</th>
                                                        <th scope="col" >Amount</th>
                                                        {/* <th scope="col" className="text-end" >Tax (%)</th>
                                                        <th scope="col" className="text-end" >Taxable Amount</th>
                                                        <th scope="col" className="text-end">HSN Code</th> */}
                                                        <th scope="col" className="text-end"></th>
                                                    </tr>
                                                </thead>

                                                <tbody id="newlink">

                                                {formik.values.rows.map((row, index) => (
                                                    <tr id="1" className="product" key={index}>
                                                        <td>{row.sno}</td> 

                                                        {/* <td className="text-start">
                                                        <div className="mb-2 position-relative" >

                                                            // <input className="form-control bg-light border-0" id="productName-1" name={`rows[${index}].producttype`}  value={row.producttype}  onChange={(e) => handleInputChange(e, index)} />

                                                            <input list="brow1" name={`rows[${index}].producttype`} id="productName-11"  onChange={(e) => handleTyprChange(e, index)} />

                                                                <datalist id="brow1"  >
                                                                    {uniqueArrayProductType.map((list,id)=>
                                                                    <option key={id} value={list}>{list}</option>)}
                                                                </datalist> 

                                                            //  <select className="form-control bg-light border-0" id="productName-1" name={`rows[${index}].producttype`}  onChange={(e) => handleTyprChange(e, index)} >
                                                            //     <option>--Select--</option>
                                                            //     {items.map((list,id)=><option key={id} value={list.producttype}>{list.producttype}</option>)}
                                                            //     </select>
                                                                
                                                                // <input type="text" className="form-control bg-light border-0" id="productName-1" placeholder="Product Type" name="producttype" {...formik.getFieldProps("producttype")} />
                                                                // <div className="invalid-feedback">
                                                                //     Please enter a product type
                                                                // </div>

                                                                // {formik.errors.rows && formik.errors.rows[index]?.producttype && (
                                                                //             <div>{formik.errors.rows[index].producttype}</div>
                                                                //         )}                                                                                                                      
                                                         </div>
                                                        </td> */}

                                                        <td className="product-id" >
                                                                <div className="mb-2 position-relative">

                                                                    <input list="brow" name={`rows[${index}].productname`} id="productName-1" onChange={(e) => handleNameChange(e, index)} className='product_name'/>
                                                                    {/* <span className="down_arrow_style"><i className="las la-angle-down fs-20 ms-1"></i></span> */}
 
                                                                        <datalist id="brow"  >
                                                                        {productNameBasedOnProducyType && productNameBasedOnProducyType.map((list,id)=>
                                                                        <option key={id} value={list.productname}>{list.productname}</option>)}
                                                                        </datalist> 
                                                                
                                                                    {/* <select className="form-control bg-light border-0" id="productName-1" name={`rows[${index}].productname`}  onChange={(e) => handleNameChange(e, index)}>
                                                                    
                                                                    <option>--Select--</option>
                                                                    {items.map((list,id)=>
                                                                    <option key={id} value={list.productname}>{list.productname}</option>)}
                                                                    </select> */}

                                                                    {/* <input type="text" className="form-control bg-light border-0" id="productName-1" placeholder="Product Name" name='productname' {...formik.getFieldProps("productname")}/>
                                                                    <div className="invalid-feedback">
                                                                        Please enter a product name
                                                                    </div> */}
                                                                
                                                                    {/* {formik.errors.rows && formik.errors.rows[index]?.name && (
                                                                                <div>{formik.errors.rows[index].name}</div>
                                                                            )} */}

                                                                </div>
                                                                {/* <textarea className="form-control bg-light border-0" id="productDetails-1" rows="2" placeholder="Product Details"></textarea> */}
                                                        </td>
                                                        
                                                        <td >
                                                        <div className="input-step w-100" > 
                                                        <input type="text" className="form-control product-price  border-0 product_name" id="productRate-1" placeholder='0' name={`rows[${index}].productprice`} value={row.productprice}  onChange={(e) => handleInputChange(e, index)} readOnly />
                                                            <div className="invalid-feedback"> 
                                                                Please enter a rate
                                                            </div>
                                                             {/* {formik.errors.rows && formik.errors.rows[index]?.productprice && (
                                                                            <div>{formik.errors.rows[index].productprice}</div>
                                                                        )}    */}
                                                        </div>
                                                        </td>

                                                        <td>
                                                            <div className="input-step section_width"> 
                                                                {/* <button type="button" className='minus' onClick={()=>decrementquantity(index)}>–</button> */}
                                                                <input style={{width:"100%"}} type="text" className="product-quantity product_name" id="product-qty-1"  name={`rows[${index}].quantity`} value={row.quantity} onChange={(e) => handleAmountChange(e, index)}/>
                                                                {/* <button type="button" className='plus'onClick={()=>incrementquantity(index)}>+</button> */}
                                                                    {/* {formik.errors.rows && formik.errors.rows[index]?.quantity && (
                                                                            <div>{formik.errors.rows[index].quantity}</div>
                                                                        )}  */}
                                                            </div>
                                                        </td>
                                                       
                                                        <td className="text-start">
                                                            <div className="input-step section_width" >
                                                            <input style={{width:"100%"}} type="text" className=" form-control  border-0 product-line-price section_width_inner"  id="productPric-1" placeholder="₹0.00" readOnly = "readonly" name={`rows[${index}].amount`} value={row.amount}  onChange={(e) => handleInputChange(e, index)}/>
                                                            </div>
                                                        </td>
                                                        {/* <td className="text-end">
                                                            <div>
                                                            <input type="text" className="form-control bg-light border-0 product-line-price" id="productPrice1" placeholder="₹0.00" name={`rows[${index}].tax`} value={row.tax} onChange={(e) => handleTaxChange(e, index)} />
                                                            </div>
                                                                                                                   
                                                        </td> */}
                                                        {/* <td className="text-end">
                                                            <div>
                                                            <input type="text" className="form-control bg-light border-0 product-line-price" id="taxable amount" placeholder="₹0.00" name={`rows[${index}].taxableAmount`} value={row.taxableAmount} onChange={(e) => handleInputChange(e, index)} readOnly/>
                                                            </div>
                                                            
                                                        </td> */}

                                                        {/* <td>
                                                            <div className="input-step"> 
                                                            <input type='text' className="product-quantity" id="hsn-code" placeholder="code" name="hsncode" value={row.hsncode} onChange={(e) => handleInputChange(e, index)}/>
                                                               
                                                            </div>
                                                        </td> */}
                                                        
                                                        
                                                        <td className="product-removal">
                                                        <button type='button' onClick={(e)=>handleDeleteRow(index)} className="btn btn-success">Delete</button>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>

                                                <tbody>
                                                    <tr id="newForm" style={{display: "none"}}><td className="d-none" colSpan="5"><p>Add New Form</p></td></tr> 
                                                    <tr>
                                                        <td colSpan="5">
                                                            <button id="add-item" type='button' onClick={handleAddRow} className="btn btn-soft-secondary fw-medium"><i className="ri-add-fill me-1 align-bottom"></i> Add Item</button>
                                                        </td>
                                                    </tr>
                                                     <tr className="border-top border-top-dashed mt-2">
                                                        <td colSpan="3"></td>
                                                        <td colSpan="2" className="p-0">
                                                            <table className="table table-borderless table-sm table-nowrap align-middle mb-0">
                                                                <tbody>
                                                                    {/* <tr>
                                                                        <th scope="row">Sub Total</th>
                                                                        <td>
                                                                            <input type="text" className="form-control bg-light border-0" id="cart-subtotal" placeholder="₹0.00" readOnly = "readonly" name="subtotal" value={formik.values.subtotal} style={{width:"100px"}}/>
                                                                        </td>
                                                                    </tr> */}

                                                                    {/* <tr>
                                                                        <th scope="row">SGST (%)</th>
                                                                        <td>
                                                                        <input type="text" className="form-control bg-light border-0" id="cart-tax" placeholder="₹0.00"name='SGST' value={formik.values.SGST} readOnly  onChange={formik.values.SGST} style={{width:"100px"}}/>
                                                                        </td>
                                                                    </tr> */}

                                                                    {/* <tr>
                                                                        <th scope="row">CGST (%)</th>
                                                                        <td>
                                                                        <input type="text" className="form-control bg-light border-0" id="cart-discount" placeholder="₹0.00" name='CGST' value={formik.values.CGST} readOnly  onChange={formik.values.CGST} style={{width:"100px"}}/>
                                                                        </td>
                                                                    </tr> */}
                                                                   
                                                                    <tr className="border-top border-top-dashed">
                                                                        <th scope="row">Total Amount</th>
                                                                        <td>
                                                                        <input type="text" className="form-control bg-light border-0" id="cart-total" placeholder="₹0.00" readOnly = "readonly" name='totalAmount' value={formik.values.totalAmount} style={{width:"100px"}}/>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            {/* end table */}
                                                        </td>
                                                    </tr> 
                                                </tbody>
                                            </table>
                                            {/*end table */}
                                        </div>

                                        

                                    <div className='row mt-3'>
                                        <div className="col-lg-4 col-sm-6">
                                                        <label htmlFor="choices-payment-status">Payment Status</label>
                                                        <div className="input-light">
                                                            <select className="form-control bg-light border-0" data-choices data-choices-search-false id="choices-payment-status" name='paymentstatus' value={formik.values.paymentstatus} onChange={paymentStatusHandle}>
                                                                <option>--Select Payment Status--</option>
                                                                <option value="Paid">Paid</option>
                                                                <option value="Unpaid">Unpaid</option>
                                                                <option value="Pending">Pending</option>
                                                            </select>
                                                        </div>
                                                        {(formik.touched.paymentstatus && formik.errors.paymentstatus) ? <small style={{color:"red"}}>{formik.errors.paymentstatus}</small> : null}
                                        </div>

                                        <div className='col-lg-4 col-sm-0'></div>

                                        <div className="col-lg-4 col-sm-6">
                                            <label htmlFor="lotnumber">Lot Number</label>
                                            
                                            <input type="text" className="form-control bg-light border-0" id="lotnumber" placeholder="Lot Number" name="lotnumber"  value={formik.values.lotnumber} onChange={formik.handleChange}/>
                                                       
                                        </div>

                                    </div>


                                       
                                        <div className="row mt-3">

                                        {formik.values.paymentstatus !== "Unpaid" &&
                                            <div className="col-lg-4">
                                                <div className="mb-2">
                                                    <label htmlFor="choices-payment-type" className="form-label text-muted text-uppercase fw-semibold">Payment Details</label>
                                                    <div className="input-light">
                                                        <select className="form-control bg-light border-0" data-choices data-choices-search-false data-choices-removeItem id="choices-payment-type" name="paymentmethod" value={formik.values.paymentmethod} onChange={handlePaymentMethodOnCash}> {/*{...formik.getFieldProps("paymentmethod")} */}
                                                            <option>--Payment Method--</option>
                                                            <option value="Mastercard">Mastercard</option>
                                                            <option value="Credit Card">Credit Card</option>
                                                            <option value="Visa">Visa</option>
                                                            <option value="Paypal">Paypal</option>
                                                            <option value="Cash">Cash</option>
                                                        </select>
                                                    </div>
                                                    {(formik.touched.paymentstatus && formik.values.paymentstatus === "Paid") ? <small style={{color:"red"}}>{formik.errors.paymentmethod}</small> : null}
                                                </div>

                                                {(formik.values.paymentmethod !== "Cash") &&
                                                <>
                                                <div className="mb-2">
                                                    <input className="form-control bg-light border-0" type="text" id="cardholderName" placeholder="Card Holder Name"  name='holdername' {...formik.getFieldProps("holdername")}/>
                                                </div>
                                                {(formik.touched.paymentstatus && formik.values.paymentstatus === "Paid")  ? <small style={{color:"red"}}>{formik.errors.holdername}</small> : null}

                                                <div className="mb-2">
                                                    <input className="form-control bg-light border-0" type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" name='cardnumber' value={formik.values.cardnumber} onChange={formatCardNumber}/>
                                                </div>
                                                {(formik.touched.paymentstatus && formik.values.paymentstatus === "Paid")  ? <small style={{color:"red"}}>{formik.errors.cardnumber}</small> : null}

                                               
                                                </>
                                                }


                                                <div className="mb-2">
                                                    <input className="form-control  bg-light border-0" type="text" id="amountTotalPay" placeholder="₹0.00" readOnly = "readonly" name='totalAmount' value={formik.values.totalAmount} />
                                                </div>

                                                {formik.values.paymentstatus === "Pending" &&
                                                <div>
                                                    <input className="form-control product-quantity" type="text" id="receiveAmount" placeholder="₹0.00" name='receiveAmount' value={formik.values.receiveAmount} title='amount to be paid' onChange={formik.handleChange}/>
                                                </div> 
                                                }

                                            </div>
                                        } 


                                         
                                            {/*end col */}
                                        </div>
                                        
                                        {/*end row*/}
                                        <div className="mt-4">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-muted text-uppercase fw-semibold">NOTES</label>
                                            <textarea className="form-control alert alert-info" id="exampleFormControlTextarea1" placeholder="Notes" rows="2" readOnly>All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</textarea>
                                        </div>
                                        <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                        {/* <button type="submit" className="btn btn-info"><i className="ri-printer-line align-bottom me-1"></i> Save</button> */}
                                            <button type="submit" className="btn btn-info">Generate Invoice</button>
                                            {/* <a href='#a' className="btn btn-primary"><i className="ri-download-2-line align-bottom me-1"></i> Download Invoice</a>
                                            <a href='#a' className="btn btn-danger"><i className="ri-send-plane-fill align-bottom me-1"></i> Send Invoice</a> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}


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
    <button onClick="topFunction()" className="btn btn-danger btn-icon" id="back-to-top">
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

export default ReuseAddInvoice