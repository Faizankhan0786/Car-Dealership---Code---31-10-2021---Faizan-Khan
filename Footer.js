import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import {FilledInput, makeStyles} from "@material-ui/core";
import icons from '@material-ui/icons';
import {LocalShipping, SportsEsports} from '@material-ui/icons';

const Box= styled.div`
padding: 30px 30px;
background:#1e6b7b;
position: absolute;
width: 97.5%;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
`;

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
color:#fff;
`;

const ColumnCat = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
color:#fff;
`;

const Column2 = styled.div`
display: flex;
flex-direction: row;
margin-left:'40px';
text-align: center;
color:#fff;
width: 400px;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
grid-gap: 80px
`;

const FooterLink = styled.a`
color:#fff;
margin-bottom:20px;
font-size:14px;
text-decoration:none;

&:hover{
    color:green;
    transition:200ms ease-in;
 }
 `;

 const FooterData = styled.a`
  color:#fff;
  margin-bottom:20px;
  font-size:14px;
  text-decoration:none;
 `;

 const Heading = styled.p`
 font-size:14px;
 color:#fff;
  margin-bottom:20px;
  font-weight:bold;
 `;

 const useStyles = makeStyles((theme) => ({
    divider:{
        background:"#fff",
    },

    dividerBottom:{
       background:"#fff",
       marginTop: "40px",
    },
}));

const Footer = () => {
const classes = useStyles();


    return (
        <Box>
           <Container>
             <Row>
             <ColumnCat>
                  <Heading>MOST POPULAR CATEGORIES</Heading>
                  <FooterLink href="#">Category 1</FooterLink>
                <FooterLink href="#">Category 2</FooterLink>
                <FooterLink href="#">Category 3</FooterLink>
                <FooterLink href="#">Category 4</FooterLink>

                </ColumnCat> 

                <Column>
                <Heading>CUSTOMER SERVICES</Heading>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Terms and Condition</FooterLink>
                <FooterLink href="#">FAQ</FooterLink>
                <FooterLink href="#">Privacy policy</FooterLink>


                <div
                 style={{
                     marginTop:"110px",
                 display:"flex",
                 alignItems:"center",
                 justifyContent:"left",
                 textAlign:"left",
                 width:175
                 }}
                ></div>


               </Column>

               <ColumnCat>
                  <Heading>Visit</Heading>
                  <FooterLink href="#">Home</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Offers</FooterLink>

                  <div style={{ marginTop:"110px", display:"flex",  alignItems:"left", justifyContent:"left", textAlign:"left",alignItems:'center' }} >
                   
                    GENUINE PRODUCTS
                  </div>
                </ColumnCat>

                <Column2>
                   <Divider orientation={"vertical"} classes={{root:classes.divider}} />
                   <Column>
                        <div style={{marginTop:'10px'}}>
                            <Heading>Contact Us</Heading>
                            <FooterData> Call Us : 92xxxxxxxx </FooterData>
                            </div>

                            <div style={{marginTop:'10px'}}>
                            <FooterData> Email : xxxxx@gmail.com </FooterData>
                            </div>

                        
                            <div style={{marginTop:'30px',display:'flex'}}>
                               <FooterData>
                                Car Dealership is your destination for beacome a rated dealership partner
                                   join over 250 instructions growing their business with dealership.
                                   Ready To Grow your business with us.
                               </FooterData>
                           </div>

                           <ColumnCat>

                  <div 
                  style={{marginTop:"145px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"left",
                  }} >
                    
                  </div>
                </ColumnCat> 

                             
                             <div style={{textAlign:'center'}}>
                                <Heading>Download APP</Heading>
                                <FooterLink href="#">
                                  
                                </FooterLink>
                            </div> 
                   </Column>
                  </Column2>

             </Row>
             </Container>

    <Divider classes={{root:classes.dividerBottom}} />

        <div style={{padding:'5px',textAlign:'center',color:'#fff'}}>
            
             Copyright © 2021  All rights reserved <FooterLink target="_blank" href="">
               Car Dealership Pvt Ltd 
                  </FooterLink>
        </div>
    </Box>

 )
};

export default Footer;