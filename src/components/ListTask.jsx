import React from 'react'
import  {Tabs, Tab, Container, Table, Button, Row, Col} from 'react-bootstrap'

// using react icon
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function ListTask(props) {

    //all list array props
    const datanone = props.tododataNone;
    const datalow = props.tododataLow;
    const datahigh = props.tododataHigh;
    const datamedium = props.tododataMedium;
    const alldata = [...datanone, ...datalow, ...datahigh, ...datamedium]


    // mapping each items in array
    const lowtaskdata = datalow.map((listitem, index) => (
        <>
        <Table  className=" table-hover">
                
                <tbody>
                <Row>
                    
                    {listitem.isdone && (<> 
                    <Col style={{ textDecoration : 'line-through'}} className="text-left" md={4}>{listitem.summary}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={1}>{listitem.priority}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.createdon}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.dueby}</Col>
                     </>)}
                    
                    {!listitem.isdone && (
                        <>
                    <Col className="text-left" md={4}>{listitem.summary}</Col>
                    <Col md={1}>{listitem.priority}</Col>
                    <Col md={2}>{listitem.createdon}</Col>
                    <Col md={2}>{listitem.dueby}</Col>
                        </>
                    )}
                    
                    <Col md={3}><Button className="pt-0">  <FaEdit/>   </Button>
                        {listitem.isdone && (<Button variant='info' onClick={()=>{props.onClickDoneLow(index)}} className="pt-0 mx-2">RE-OPEN</Button>)}
                        {!listitem.isdone && (<Button variant="success" onClick={()=>{props.onClickDoneLow(index)}} className="pt-0 mx-2">DONE</Button>)}
                        <Button variant="danger" onClick={()=>{props.onClickDeleteLow(index)}} className="pt-0"><MdDelete/></Button>
                    </Col>
                </Row>
                </tbody>
            </Table>
        </>
    ))

    // mapping each items in array
    const mediumtaskdata = datamedium.map((listitem, index2) => (
        <>
        
        <Table striped  hover>

        <tbody>
                <Row>
                    {listitem.isdone && (
                    <> 
                    <Col style={{ textDecoration : 'line-through'}} className="text-left" md={4}>{listitem.summary}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={1}>{listitem.priority}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.createdon}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.dueby}</Col>
                    </>)}
                    
                    {!listitem.isdone && (
                    <>
                    <Col className="text-left" md={4}>{listitem.summary}</Col>
                    <Col md={1}>{listitem.priority}</Col>
                    <Col md={2}>{listitem.createdon}</Col>
                    <Col md={2}>{listitem.dueby}</Col>
                    </>
                    )}
                    
                    <Col md={3}><Button className="pt-0"><FaEdit/></Button>
                        {listitem.isdone && (<Button variant='info' onClick={()=>{props.onClickDoneMedium(index2)}} className="pt-0 mx-2">RE-OPEN</Button>)}
                        {!listitem.isdone && (<Button variant="success" onClick={()=>{props.onClickDoneMedium(index2)}} className="pt-0 mx-2">DONE</Button>)}
                        <Button variant="danger" onClick={()=>{props.onClickDeleteMedium(index2)}} className="pt-0"><MdDelete/></Button>
                    </Col>
                </Row>
                </tbody>

            </Table>
        </>
    ))
    
    // mapping each items in array
    const hightaskdata = datahigh.map((listitem, index) => (
        <>
       
        <Table striped  hover>
            <tbody>
                <Row>
                    {listitem.isdone && (
                    <> 
                    <Col style={{ textDecoration : 'line-through'}} className="text-left" md={4}>{listitem.summary}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={1}>{listitem.priority}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.createdon}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.dueby}</Col>
                    </>)}
                    
                    {!listitem.isdone && (
                    <>
                    <Col className="text-left" md={4}>{listitem.summary}</Col>
                    <Col md={1}>{listitem.priority}</Col>
                    <Col md={2}>{listitem.createdon}</Col>
                    <Col md={2}>{listitem.dueby}</Col>
                    </>
                    )}
                    
                    <Col md={3}><Button className="pt-0"><FaEdit/></Button>
                        {listitem.isdone && (<Button variant='info' onClick={()=>{props.onClickDoneHigh(index)}} className="pt-0 mx-2">RE-OPEN</Button>)}
                        {!listitem.isdone && (<Button variant="success" onClick={()=>{props.onClickDoneHigh(index)}} className="pt-0 mx-2">DONE</Button>)}
                        <Button variant="danger" onClick={()=>{props.onClickDeleteHigh(index)}} className="pt-0"><MdDelete/></Button>
                    </Col>
                </Row>
            </tbody>
            </Table>
        </>
    ))

    // mapping each items in array                    
    const nonetaskdata = datanone.map((listitem, index) => (
        <>
            
            <Table striped  hover>
            <tbody>
                <Row>
                    {listitem.isdone && (
                    <> 
                    <Col style={{ textDecoration : 'line-through'}} className="text-left" md={4}>{listitem.summary}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={1}>{listitem.priority}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.createdon}</Col>
                    <Col style={{ textDecoration : 'line-through'}} md={2}>{listitem.dueby}</Col>
                    </>)}
                    
                    {!listitem.isdone && (
                    <>
                    <Col className="text-left" md={4}>{listitem.summary}</Col>
                    <Col md={1}>{listitem.priority}</Col>
                    <Col md={2}>{listitem.createdon}</Col>
                    <Col md={2}>{listitem.dueby}</Col>
                    </>
                    )}
                    
                    <Col md={3}><Button className="pt-0"><FaEdit/></Button>
                        {listitem.isdone && (<Button variant='info' onClick={()=>{props.onClickDoneNone(index)}} className="pt-0 mx-2">RE-OPEN</Button>)}
                        {!listitem.isdone && (<Button variant="success" onClick={()=>{props.onClickDoneNone(index)}} className="pt-0 mx-2">DONE</Button>)}
                        <Button variant="danger" onClick={()=>{props.onClickDeleteNone(index)}} className="pt-0"><MdDelete/></Button>
                    </Col>
                </Row>
            </tbody>
            </Table>
        </>
    ))

    // merge all items to filter pending task
    const pendingtaskdata =alldata.filter(data => data.isdone === false).map((listitem, index) => (
        <>
            <Table striped  hover>
                <Row>
                    <Col className="text-left" md={4}>{listitem.summary}</Col>
                    <Col md={1}>{listitem.priority}</Col>
                    <Col md={2}>{listitem.createdon}</Col>
                    <Col md={2}>{listitem.dueby}</Col>
                </Row>

            </Table>
            
        </>
    ))

    // merge all items to filter completed task
    const completedtaskdata = alldata.filter(data => data.isdone === true).map((listitem, index) => (
        <>
            <Table striped  hover>
                <Row>
                    <Col className="text-left" md={4}>{listitem.summary}</Col>
                    <Col md={1}>{listitem.priority}</Col>
                    <Col md={2}>{listitem.createdon}</Col>
                    <Col md={2}>{listitem.dueby}</Col>
                </Row>

            </Table>
            
        </>
    ))


    return (
        <Container className="mt-5">
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="Home">
        <Table striped  hover>
                <tbody>
                <Row>
                    <Col md={4}>Summary</Col>
                    <Col md={1}>Priority</Col>
                    <Col md={2}>Created On</Col>
                    <Col md={2}>Due by</Col>
                    <Col md={3}>Actions</Col>
                </Row>
                </tbody>
        </Table>
            {lowtaskdata.length >0 && ( <> <h3>Low</h3> <hr/>  </>)}
            {lowtaskdata}

            {mediumtaskdata.length >0 && (<> <h3>Medium</h3> <hr/> </>)}
            {mediumtaskdata}

            {hightaskdata.length >0 && (<> <h3>High</h3> <hr/> </>)}
            {hightaskdata}

            {nonetaskdata.length >0 && (<> <h3>None</h3> <hr/> </>)}
            {nonetaskdata}
        </Tab>
        <Tab eventKey="pending" title="Pending">
        <Table striped  hover>
                <Row>
                    <Col md={4}>Summary</Col>
                    <Col md={1}>Priority</Col>
                    <Col md={2}>Created On</Col>
                    <Col md={2}>Due by</Col>
                </Row>

        </Table>
            {pendingtaskdata}
        </Tab>
        <Tab eventKey="completed" title="Completed">
        <Table striped  hover>
                <Row>
                    <Col md={4}>Summary</Col>
                    <Col md={1}>Priority</Col>
                    <Col md={2}>Created On</Col>
                    <Col md={2}>Due by</Col>
                </Row>

        </Table>
            {completedtaskdata}
        </Tab>
        </Tabs>
        </Container>
    )
}

export default ListTask;
