import React from 'react'
import  { Table, Row, Col, Dropdown, Button} from 'react-bootstrap'
import { useState } from 'react';

function Search(props) {

    //using states to manage filter
    const [ searchTerm, setSearchTerm] = useState('$%E_D^&*<<(yedtwfwss%wswsws^')
    const alldata = props.alldata
    
    return (
        <div>
            <Table  className=" table-hover mt-4">
                <Row>
                <Col className="text-center " md={3}>Group By
                </Col> 
                <Col style={{marginLeft: "5.5rem"}} className="text-left"> Search
                </Col>
                </Row>
                <Row>
                <Col md={3}>
                <Dropdown>
                        <Dropdown.Toggle  style={{backgroundColor: 'white', color: 'black', width : "8rem"}}  id="dropdown-basic">
                            Priority
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >None</Dropdown.Item>
                            <Dropdown.Item >Low</Dropdown.Item>
                            <Dropdown.Item >Medium</Dropdown.Item>
                            <Dropdown.Item >High</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                </Col>
                <Col  style={{width: "80%"}} >
                    <input style={{width: "80%", height: "2.5rem"}} onChange={event => {setSearchTerm(event.target.value)}}
                    placeholder='Type to Search' type="text"></input>
                    <Button  onClick={event => {setSearchTerm('$%E_D^&*<<(yedtwfwss%wswsws^')} } style={{marginBottom: ".4rem"}}>Hide Search Items</Button>
                </Col>
                </Row>
                
                {alldata.filter((val => {
                    if (val.summary.includes(searchTerm)){
                        return val
                    }
                })).map((value, key) =>{
                    return(
                            <Table striped bordered hover>
                            <Row>
                            <Col md={4}>Summary</Col>
                            <Col md={4}>Priority</Col>
                            <Col md={2}>Created on</Col>
                            <Col md={2}>Due on</Col>
                            </Row>
                            <Row>
                            <Col md={4}>{value.summary}</Col>
                            <Col md={4}>{value.priority}</Col>
                            <Col md={2}>{value.createdon}</Col>
                            <Col md={2}>{value.dueby}</Col>
                            </Row>
                            </Table>
                    )
                })}
               
            </Table>
        </div>
    )
}

export default Search;
