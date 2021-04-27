import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const ModalUpdateToDo = (props) => {
    const [updatedTitle, setUpdatedTitle] = useState('')
    const [updatedDescription, setUpdatedDescription] = useState('');

    const indexOfItemToUpdate = props.itemIndex
    const previousTitle = props.itemToUpdate.title
    const previousDescription = props.itemToUpdate.description

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
                            defaultValue={previousTitle}
                            onChange={(event)=> {
                                setUpdatedTitle(event.target.value)}
                            }/>
                    </Form.Group>
                    <Form.Group controlId="toDoDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            defaultValue={previousDescription}
                            onChange={(event)=> {
                                setUpdatedDescription(event.target.value)}
                            }/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-primary"} onClick={props.onHide}>Cancel</Button>
                <Button variant='primary' onClick={(event)=> {
                    event.preventDefault();
                    props.onUpdateToDo(indexOfItemToUpdate, updatedTitle, updatedDescription)
                }}>Update to do</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUpdateToDo;