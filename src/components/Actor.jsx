import * as React from 'react';
import wildlife1 from './images/actor3.jpg'
import wildlife2 from './images/actor4.jpg'





export default function ActionAreaCard({icon,text1,text2}) {
  return (
    <div style={{
      marginTop:"2%",
      marginLeft:"14%",
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap"
     }}>

      <div><img style={{borderRadius:"4px" ,marginRight:"18px" ,marginTop:"20px",width:"auto", height:"200px"}}src={wildlife1} alt="not shown"/></div>
      <div><img style={{borderRadius:"4px" ,marginRight:"18px" ,marginTop:"20px", width:"auto", height:"200px"}} src={wildlife2} alt="not shown"/></div>
      <div><img style={{ borderRadius:"4px",marginRight:"18px" ,marginTop:"20px", width:"auto", height:"200px"}} src={wildlife1} alt="not shown"/></div>
      <div><img style={{borderRadius:"4px"  ,marginRight:"18px",marginLeft:"100%" ,marginTop:"20px", width:"auto", height:"200px"}} src={wildlife1} alt="not shown"/></div>

     </div>
  );
}