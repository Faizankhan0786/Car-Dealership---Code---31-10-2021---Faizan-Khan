import React,{useEffect,useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Header from "./Header"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { getData,ServerURL } from './FetchNodeServices';
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import CarDealershipInterface  from './CarDealershipInterface';
import styled from 'styled-components';

import Slider from "react-slick";
import Footer from "./Footer"


const useStyles = makeStyles((theme) => ({
root:{
padding:10,
display:'flex',
flexDirection:'column'
},
paperstyle:{
  justifyContent:"flex-start",
  display:'flex',
  padding:10,
  width:215,
  height:310,
  margin:10,
  borderRadius:10,
  flexDirection:'column'
},
imageview:{
  width:160,
  height:160, 
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  padding:10,
  margin:2,
  cursor:"pointer",

  '&:hover':{
    transform:"scale(1.25)",
    transition:"all 0.5s ease 0s"
  }

},
arrowstyle:{
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
}

}))


export default function Home(props) {
  const classes = useStyles();
const [listA,setListA]=useState([])
const [listB,setListB]=useState([])
const [listC,setListC]=useState([])
const [listD,setListD]=useState([])
var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
};

var itemsettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
  arrows:false
};



const fetchAllCategory=async()=>{
var list=await getData('categories/displayall')
setListB(list)
//alert (JSON.stringify(list))
}

const fetchAllSubCategoryOffers=async()=>{
  var list=await getData('subcategories/subcategoryoffers')
  setListC(list)
  //alert (JSON.stringify(list))
  }

  const fetchAllCategorythree=async()=>{
    var list=await getData('')
    setListD(list)
    //alert (JSON.stringify(list))
    }

    const fetchAllCategoryfour=async()=>{
      var list=await getData('')
      setListA(list)
      //alert (JSON.stringify(list))
      }

  const showSlider=()=>{
    return(((item)=>{
     return(
         <div>
          <img src={`${ServerURL}/images/${item.ad}`} width="100%" />
          
         </div>
          
     )
   
    })
    )
   }

   const handleConsoleList=(categoryid)=>{

    props.history.push({'pathname':'/consolelist'},{'categoryid':categoryid})

   }

const showCategories=()=>{
 return(((item)=>{
  return(
      <div style={{border:'1px solid #ecf0f1',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',padding:10,margin:5}} onClick={()=>handleConsoleList(item.categoryid)} >
       <img src={`${ServerURL}/images/${item.icon}`} width="60%" />
       <div style={{fontSize:22,fontWeight:'bold',padding:10}}>{item.categoryname.toUpperCase()}</div>
      </div>
       
  )

 })
 )
}

const showOffers=()=>{
  return(((item)=>{
   return(
       
        <div>
        
       
          <Paper elevation={3} className={classes.paperstyle}>
            <div className={classes.imageview}>
        <img src={`${ServerURL}/images/${item.icon}`} width="150" />
            </div>
       <div style={{fontSize:18,fontWeight:'bold',padding:10}}>
         {item.subcategoryname.length<=20?item.subcategoryname.toUpperCase():item.subcategoryname.toUpperCase().substring(0,18)+"..."}
         </div>
       <div style={{fontSize:16,padding:10}}>

        Day Price:Price<s>&#8377; {item.rentamt}</s> <span><b>	&#8377; {item.offer} </b></span>

       </div>
       <div style={{fontSize:18,padding:10}}>
       <span style={{color:'greenyellow'}}><b>You Save</b></span><b>	&#8377; {item.rentamt-item.offer} </b>
       </div>
       </Paper>
      </div>
       
   )
 
  })
  )
 }

 const showAllCategoryfour=()=>{
  return(((item)=>{
   return(
       <div style={{
        // border:'1px solid #ecf0f1',
         width:250,
         justifyContent:'center',
         alignItems:'center',
         display:'flex',
         flexDirection:'column',
         padding:10,
         margin:5,
         }}
         >
         <Paper elevation={3} className={classes.paperstyle} >
            <div className={classes.imageview}>
        <img src={`${ServerURL}/images/${item.picture}`} width="150" />
            </div>

        <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
       <div style={{fontSize:18,fontWeight:'bold',padding:10}}>{item.gamename.toUpperCase()}</div>
       <div style={{fontSize:16,padding:10}}>

        Day Price:Price<s>&#8377; {item.rentamt}</s> <span><b>	&#8377; {item.offer} </b></span>

       </div>
       <div style={{fontSize:18,padding:10}}>
       <span style={{color:'greenyellow'}}><b>You Save</b></span><b>	&#8377; {item.rentamt-item.offer} </b>
       </div>
      </div>
      </Paper>
       </div>
      )
    })
  )
}
 
const showOffersfive=()=>{
  return(((item)=>{
   return(
       <div style={{
        // border:'1px solid #ecf0f1',
         width:250,
         justifyContent:'center',
         alignItems:'center',
         display:'flex',
         flexDirection:'column',
         padding:10,
         margin:5,
         }}
         >
         <Paper elevation={3} className={classes.paperstyle} >
            <div className={classes.imageview}>
        <img src={`${ServerURL}/images/${item.picture}`} width="150" />
            </div>

        <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
       <div style={{fontSize:18,fontWeight:'bold',padding:10}}>{item.accessoryname.toUpperCase()}</div>
       <div style={{fontSize:16,padding:10}}>

        Day Price:Price<s>&#8377; {item.rentamt}</s> <span><b>	&#8377; {item.offer} </b></span>

       </div>
       <div style={{fontSize:18,padding:10}}>
       <span style={{color:'greenyellow'}}><b>You Save</b></span><b>	&#8377; {item.rentamt-item.offer} </b>
       </div>
      </div>
      </Paper>
       </div>
     )
   })
  )
 }


useEffect(function(){
fetchAllCategory()
fetchAllSubCategoryOffers()
fetchAllCategorythree()
fetchAllCategoryfour()
},[])

  return(<div>
  <Header history={props.history}/>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

  <div style={{width:"100%"}}>
    <Slider {...settings}>{showSlider()}</Slider>
  </div>
  </div>


  <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
  Connect to the right car dealers  
    </div>
    </Grid>
   
    <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
    1. Maruti Suzuki
    2. Hyundai
    3. Honda
    4. TATA
    5. Renault
    6. Ford
    7. Nissan
    8. Dastun
    9. Toyota 
    10. MG
    11. KIA
    <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
    12. Volksvagen
    13. Jeep
    14. Fiat
    </div>
    </div>
   </Grid>

   <Divider style={{marginTop:5,marginBottom:5}} />
  <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
  Innovation is calling and we would like you to be a part of our future forward journey. Please fill the form below to apply for Dealerships.
    </div>
  <div>
    <CarDealershipInterface /> 
  </div>

  <Divider style={{marginTop:5,marginBottom:5}} />

  
   <div className={classes.root}>
   
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
     <div style={{fontSize:70,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
   Become A Partner In Our Journey
   
   </div>
   
   <Divider style={{marginTop:5,marginBottom:5}} />

  <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
   Locate authorized car showrooms in your own city in India by just clicking on your preferred car brand.
    </div>
 
  </div>

  <Divider style={{marginTop:5,marginBottom:5}} />
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",alignItems:'center',padding:10}}>
   New car dealers and showrooms
   </div>

   <div><Divider style={{marginTop:5,marginBottom:5}} /> </div>
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",alignItems:'center',padding:10}}>
   Tools to help you
   </div>
  

   <div style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
   <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,left:5,opacity:0.5}} >
     <ArrowBackIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>
   <div style={{width:"98%"}}>
    <Slider {...itemsettings}>{showOffers()}</Slider>
  </div>
  <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,right:5,opacity:0.5}} >
     <ArrowForwardIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>
  </div>

   {/* <div  style={{display:'flex',flexDirection:'row', flexWrap:'wrap', alignItems:'center',justifyContent:'center',marginTop:'5'}}>
       {//showOffers()}
  </div>*/}
   </div>
  
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
    1. New Cars 
    2. Service Centres
    3. Car Videos 
    4. User Reviews 
    5. Loan
    6. Insurance
    </div>
   </Grid>

   <Divider style={{marginTop:5,marginBottom:5}} />
   

   <div style={{display:'flex',flexDirection:'column'}}>
   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',justifyContent:"center",padding:10}}>
   Offer's
   </div>
   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
   Stay updated pay less
  </div>

  <Divider style={{marginTop:5,marginBottom:5}} />

   <div style={{fontSize:30,color:"#636e72",fontWeight:'normal',letterSpacing:"3.9px",fontFamily:'Georgia,Times,"Times New Roman",serif',alignItems:"center",justifyContent:"center",padding:10}}>
   Compare
  </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
    Decode the right car
   </div>

 
   

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
    Partner success tools 
   </div>

   <div  style={{display:'flex',flexDirection:'row',marginTop:'5',justifyContent:'center',alignItems:'center'}}>
    Reach more learners 
   </div>
   
   <Divider style={{marginTop:5,marginBottom:5}} />
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button   variant="contained" color="secondary"> Register </Button>
   </Grid>

   <div style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
   <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,left:5,opacity:0.5}} >
     <ArrowBackIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>

   <div style={{width:"98%"}}>
    <Slider {...itemsettings}>{showOffers()}</Slider>
  </div>

      
       <IconButton className={classes.arrowstyle} style={{background:'#1e6b7b',position:'absolute',zIndex:1,right:5,opacity:0.5}} >
     <ArrowForwardIosIcon style={{color:'#FFF',fontSize:'large'}} />
   </IconButton>
   </div>
  </div>


  </div>
   <Footer />
  </div>)



}