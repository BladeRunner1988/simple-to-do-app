import React from 'react';
import './ToDo.css'
import {Button, Card, Col, Row} from "react-bootstrap";

const ToDo = (props) => {
    const {title, description} = props.todo

    return(
        <Card style={{marginBottom: '10px'}}>
            <Card.Header><strong>{title}</strong></Card.Header>
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                <Row style={{float: 'right'}}>
                    <Col>
                        <Button variant="danger" onClick={()=>props.onDelete(props.itemIndex)}>Delete</Button>{' '}
                        <Button variant="primary" onClick={()=>props.onShowUpdateTodoModal(props.itemIndex, title, description)}>Update</Button>
                    </Col>

                </Row>
            </Card.Body>
        </Card>
    );
}

export default ToDo;