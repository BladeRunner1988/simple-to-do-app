import React, {useState} from 'react';
import {Modal, Button, Form} from "react-bootstrap";

const ModalCreateToDo = (props) => {
    const [toDoTitle, setToDoTitle] = useState('')
    const [toDoDescription, setToDoDescription] = useState('');

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create To-Do
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='toDoTitle'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="title"
                            placeholder="Enter title"
                            onChange={(event)=> {
                                setToDoTitle(event.target.value)}
                            }/>
                    </Form.Group>
                    <Form.Group controlId="toDoDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            onChange={(event)=> {
                                setToDoDescription(event.target.value)}
                            }/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-primary"} onClick={props.onHide}>Cancel</Button>
                <Button variant='primary' onClick={(event)=> {
                    event.preventDefault();
                    props.onCreateTodo(toDoTitle, toDoDescription)
                }}>Create to do</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCreateToDo;