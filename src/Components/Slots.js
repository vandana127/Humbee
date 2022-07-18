import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
//import {Cars} from './data';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const arr = [];


function Slots() {
    const [range, setRange] = useState(50);
    const [cardata, setCardata] = useState([])
    const [allocatedList, setAllocatedList] = useState([2, 8, 10]);
    const emprtyslots = [];
    for(let i=1;i<=range;i++){
        if(allocatedList.includes(i) == true ){
            arr[i] = {'id':i,'title':'Parking '+i,'freestatus':true};  

        }else if(allocatedList.includes(i) == false ){
            
            arr[i] = {'id':i,'title':'Parking '+i,'freestatus':false};
            //emprtyslots[i] = i;
        }
        //console.log(emprtyslots);
    }
    const addMore = ()=>{
        setRange(range + 10)
    }
    const fillSlot = (num) =>{
        const index = emprtyslots.indexOf(num)
        // console.log(index)
        // if(index > -1){
        //     emprtyslots.splice(index, 1)
        //     console.log(emprtyslots)
        //     //arr = emprtyslots;
        // }
        setAllocatedList(allocatedList => [...allocatedList, num])
    }


    const popover = (data) => (
    
        <Popover id="popover-basic">
        <Popover.Header as="h3">Slot information</Popover.Header>
        <Popover.Body>
        {/* {data.title} */}
        {data.freestatus==true ? 'Already Booked ' :
        <Button onClick={()=>{fillSlot(data.id)}}>Book now</Button>
        }
        </Popover.Body>
        </Popover>
    )

    return (
        <Container>
        <Row>
            <h3 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px",color:"white",textDecoration:"underline"}}>Car Booking Slots</h3>
            {
                arr.map((car, index)=>{
                    return(
                    <Col style={{marginTop:"10px",marginLeft:"10px"}} md={2} key={index}>
                        <div className="ranga1">
                            <div className="border1 top text-center" style={{color:"white"}}> {car.title} 
                            <br/>
                        <OverlayTrigger trigger="click" rootClose  placement="right" overlay={popover(car)}>
                        <Button variant="success">Click</Button>
                        </OverlayTrigger>
                            
                            </div>
                        </div>
                    </Col>
                    )
                })
            }
        </Row>
            <Button variant="primary" style={{marginTop:"10px"}} onClick={addMore}>More...</Button>
    </Container>   
    );
}

export default Slots;