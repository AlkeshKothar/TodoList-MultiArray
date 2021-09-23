import React from 'react'
import {Container, Button, Modal, Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import ListTask from './ListTask';
import Search from './Search';

//for auto-created on using function
let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let created_on = date + "-" + month + "-" + year
    
    
    

function AddTask(props) {

    // setting all usestates for different array and values
    const [summary, setSummary] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [value, onChange] = useState(new Date())
    const [show, setShow] = useState(false);
    const [todoListNone, setTodoListNone] = useState([]);
    const [todoListLow, setTodoListLow] = useState([]);
    const [todoListHigh, setTodoListHigh] = useState([]);
    const [todoListMedium, setTodoListMedium] = useState([]);

    const alldata = [...todoListNone, ...todoListLow, ...todoListHigh, ...todoListMedium]
    const handleSumit = (event)=>{
        // to prevent default behaviour since using form to save values
        event.preventDefault();

        const taskadded = { 
            summary,
            description, 
            priority ,
            isdone: false,
            createdon: created_on,
            dueby : value,
            isedit: false};

        // using datepicker so modifying the current string to default requirement
        let tempdate = String(taskadded.dueby)
        let updateddueby = tempdate.substring(4,16)
        taskadded.dueby = updateddueby

        // dismiss req if below request not fullfilled
        if (taskadded.summary.length > 140 ||taskadded.description.length > 500){
            alert("Summary Max length can be 140 \nDescription Max length can be 500")
            return false;
        }

        if (taskadded.summary.trim() < 10 ||taskadded.description.trim() < 10){
            alert("You need to Enter text to add items")
            return false;
        }

        // dismiss req if below request not fullfilled
        if (taskadded.summary.length < 10 || taskadded.description.length < 10){
            alert("Summary Min length should be 10 \nDescription Max length should be 10")
            return false;
        }
        
        // using priority feild to set value to respective array
        if (taskadded.priority === 'None') {
            const list = [...todoListNone]
            list.push(taskadded)
            setTodoListNone(list)
        }

        if (taskadded.priority === 'Low') {
            const list = [...todoListLow]
            list.push(taskadded)
            setTodoListLow(list)
        }

        if (taskadded.priority === 'High') {
            const list = [...todoListHigh]
            list.push(taskadded)
            setTodoListHigh(list)
        }

        if (taskadded.priority === 'Medium') {
            const list = [...todoListMedium]
            list.push(taskadded)
            setTodoListMedium(list)
        }

        //resetting the input feilds
        handleClose()
        setSummary('')
        setDescription('')
        setPriority('')
    };

    // function to handle modal used for submit
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // delete function as per array type
    const deleteHandlerNone = (listIndex)=>{
        const list = [...todoListNone];
        list.splice(listIndex, 1);
        setTodoListNone(list);
    };

    const deleteHandlerLow = (listIndex)=>{
        const list = [...todoListLow];
        list.splice(listIndex, 1);
        setTodoListLow(list);
    };

    const deleteHandlerHigh = (listIndex)=>{
        const list = [...todoListHigh];
        list.splice(listIndex, 1);
        setTodoListHigh(list);
    };

    const deleteHandlerMedium = (listIndex)=>{
        const list = [...todoListMedium];
        list.splice(listIndex, 1);
        setTodoListMedium(list);
    };


    // setting boolena field to done undone as per user for all array
    const isDoneHandlerNone = (listIndex)=>{
        console.log("Clicked None")
        console.log(listIndex)
        const list = [...todoListNone];
        if (list[listIndex].isdone){
            list[listIndex].isdone = false;
        }
        else {
            list[listIndex].isdone = true;
        }
        setTodoListNone(list);
    };

    const isDoneHandlerMedium = (listIndex)=>{
        const list = [...todoListMedium];
        if (list[listIndex].isdone){
            list[listIndex].isdone = false;
        }
        else {
            list[listIndex].isdone = true;
        }
        setTodoListMedium(list);
    };

    const isDoneHandlerHigh = (listIndex)=>{
        console.log("Clicked High")
        console.log(listIndex)
        const list = [...todoListHigh];
        if (list[listIndex].isdone){
            list[listIndex].isdone = false;
        }
        else {
            list[listIndex].isdone = true;
        }
        setTodoListHigh(list);
    };

    const isDoneHandlerLow = (listIndex)=>{
        const list = [...todoListLow];
        if (list[listIndex].isdone){
            list[listIndex].isdone = false;
        }
        else {
            list[listIndex].isdone = true;
        }
        setTodoListLow(list);
    };

    
    return (
        <div>
            <Container className= "mt-5">
                <Row>
                    <Col className="font-size-large"  ><h1>ToDo App</h1></Col>
                    <Col><Button style={{borderRadius: "50%"}} variant="primary" onClick={handleShow}>+</Button></Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>
                   
                    <Form className='px-3' onSubmit={handleSumit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Summary</Form.Label>
                                <Form.Control name="summary" value={summary} onChange={(e)=> setSummary(e.target.value)} type="text" placeholder="Enter Summary" />
                                <Form.Text name="summary"  className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Description" as="textarea" rows={3} />
                            </Form.Group>
                            <Row>
                                <Col>
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                onChange={onChange}
                                value={value}
                                />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Priority</Form.Label>
                                <Form.Control as="select" defaultValue="..." value={priority} onChange={(e)=> setPriority(e.target.value)}>
                                    <option>...</option>
                                    <option>None</option>
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="success" type="submit" >Save</Button>
                    </Modal.Footer>
                    </Form>  
                </Modal>


                <div>
                    <Search
                    alldata = {alldata}
                    ></Search>
                    <ListTask
                     tododataNone = {todoListNone}
                     tododataHigh = {todoListHigh}
                     tododataMedium = {todoListMedium}
                     tododataLow = {todoListLow}
                     onClickDeleteNone={deleteHandlerNone}
                     onClickDeleteLow={deleteHandlerLow}
                     onClickDeleteMedium={deleteHandlerMedium}
                     onClickDeleteHigh={deleteHandlerHigh}
                     onClickDoneNone = {isDoneHandlerNone}
                     onClickDoneLow = {isDoneHandlerLow}
                     onClickDoneHigh = {isDoneHandlerHigh}
                     onClickDoneMedium = {isDoneHandlerMedium}
                    />
                    
                </div>
            </Container>
        </div>
    )
}

export default AddTask;
