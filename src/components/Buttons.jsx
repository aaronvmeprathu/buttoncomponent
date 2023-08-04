import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Buttons() {
    const [buttons,setbuttons]=useState([
        {
            variant:"secondary",
            class:"",
            text:"<Button />",
            stat:false
        },
        {
            variant:"secondary",
            class:"",
            text:"&:hover, &:focus",
            stat:true
        },
        {
            variant:"outline-primary",
            class:"<Button variant=”outline” />",
            text:"<Button variant=”outline” />",
            stat:false
        }
        ,
        {
            variant:"outline-primary",
            class:"<Button variant=”outline” />",
            text:"&:hover, &:focus",
            stat:true
        }
        ,
        {
            variant:"primary",
            class:"<Button variant=”text” />",
            text:"<Button variant=”text” />",
            stat:true
        }
        ,
        {
            variant:"primary",
            class:"<Button variant=”text” />",
            text:"&:hover, &:focus",
            stat:false
        }
        ,
        {
            variant:"primary",
            class:"<Button variant=”text” />",
            text:"<Button disableShadow />",
            stat:true
        }
        ,
        {
            variant:"secondary",
            class:"<Button variant=”text” />",
            text:"<Button disableShadow />",
            stat:true,
            disabled:true
        }
        ,
        {
            variant:"",
            class:"btn",
            text:"<Button variant=”text” disabled />",
            type:"button",
            stat:true,
            disabled:true
        }
    ])
  return (
    <div className='p-5'>

    
    <Row  >
        
        {
            buttons.map(button =><Col md={5}>
             <div>
                
          
            <p>{button.text}</p>
            <Button type={button.type} className={button.class} variant={button.variant} disabled={button.disabled} active={button.stat}>
              Primary
            </Button>
          
            </div>
            </Col> 
                

            )

            

        }
        
        
        
        
        
    </Row>
    </div>
  )
}

export default Buttons