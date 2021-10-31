import React,{useEffect, useState} from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from "@material-ui/core/Avatar"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import swalhtml from "@sweetalert/with-react"
import swal from "sweetalert"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import {isBlank} from "./Checks"


import renderHTML from "react-render-html"
const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    subdiv:{
        padding:20,
        width:700,
        marginTop:20,
        background:'#FFF'
   },
   input: {
    display: 'none',
  },
  formControl: {
    
    minWidth: 700,
  },
  }));

export default function CategoryInterface(props)
{ const classes = useStyles();
 const [fullName,setFullName]=useState('')
 const [drivingSchoolName,setDrivingSchoolName]=useState('')
 const [dealershipOrganizationName,setDealershipOrganizationName]=useState('')
 const [phoneNumber,setPhoneNumber]=useState('')
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState('')
 const [pincode, setPincode]=useState('')

 




  const handleClick=async()=>{
  var error=false
  var msg="<div>"
  if(isBlank(fullName))
  {error=true
   msg+="<font color='green'><b>Name Should not be blank..</b></font><br>"
  }
  if(isBlank(drivingSchoolName))
  {error=true
    msg+="<font color='green'><b>School Name Should not be blank..</b></font><br>"
  }
  if(isBlank(dealershipOrganizationName))
  {error=true
    msg+="<font color='green'><b>Dealership Organization Name Should not be blank..</b></font><br>"
  }
  if(isBlank(phoneNumber))
  {error=true
    msg+="<font color='green'><b>Phone number Should not be blank..</b></font><br>"
  }
  if(isBlank(email))
  {error=true
    msg+="<font color='green'><b>Email Should not be blank..</b></font><br>"
  }
  if(isBlank(password))
  {error=true
    msg+="<font color='green'><b>Password Should not be blank..</b></font><br>"
  }
  if(isBlank(pincode))
  {error=true
    msg+="<font color='green'><b>Pincode Should not be blank..</b></font><br>"
  }
msg+="</div>"
if (error)
{
swalhtml(renderHTML(msg))
}
else{

  var formData=new FormData()
  formData.append("fullName",fullName)
  formData.append("drivingSchoolName",drivingSchoolName)
  formData.append("dealershipOrganizationName",dealershipOrganizationName)
  formData.append("phoneNumber",phoneNumber)
  formData.append("email",email)
  formData.append("password",password)
  formData.append("pincode",pincode)
  var config={headers:{"content-type":"multipart/form-data"}}
  var result= await ('categories/addnewcategory',formData,config)

  if(result)
  {
    swal({
      title: "Car Dealership Submitted Successfully",
      icon: "success",
      dangerMode: true,
    })
  }
  }
  }

return( <div className={classes.root}>
<div className={classes.subdiv}>
 <Grid container spacing={1}>
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
     Car Dealership Interface
    </div>
   </Grid>

   <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button onClick={()=>handleClick()} fullWidth variant="contained" color="primary">Log In</Button>
   </Grid>

   <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button onClick={()=>handleClick()} fullWidth variant="contained" color="secondary">Sign Up</Button>
   </Grid>

     <Grid item xs={12}>
     <TextField onChange={(event)=>setFullName(event.target.value)} label="Full Name" variant="outlined" fullWidth/>
     </Grid>

     <Grid item xs={12}>
     <TextField onChange={(event)=>setDrivingSchoolName(event.target.value)} label="Driving School Name" variant="outlined" fullWidth/>
     </Grid>

     <Grid item xs={12}>
     <TextField onChange={(event)=>setDealershipOrganizationName(event.target.value)} label="Dealership Organizatiom Name" variant="outlined" fullWidth/>
     </Grid>

     <Grid item xs={12}>
     <TextField onChange={(event)=>setPhoneNumber(event.target.value)} label="Phone Number" variant="outlined" fullWidth/>
     </Grid>
     <Grid item xs={12}>
     <TextField onChange={(event)=>setEmail(event.target.value)} label="Email" variant="outlined" fullWidth/>
     </Grid>
     <Grid item xs={12}>
     <TextField onChange={(event)=>setPassword(event.target.value)} label="Password" variant="outlined" fullWidth/>
     </Grid>
     <Grid item xs={12}>
     <TextField onChange={(event)=>setPincode(event.target.value)} label="Pincode" variant="outlined" fullWidth/>
     </Grid>


 <Grid item xs={12} sm={3}  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button onClick={()=>handleClick()} fullWidth variant="contained" color="primary">Submit</Button>
   </Grid>
   


</Grid>
</div>

</div> )

}