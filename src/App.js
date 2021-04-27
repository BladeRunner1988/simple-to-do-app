// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import ToDo from "./Component/ToDo/ToDo";
import {Button, Container, Jumbotron, ListGroup} from "react-bootstrap";
import ModalCreateToDo from "./Component/ModalCreateToDo/ModalCreateToDo";
import ModalUpdateToDo from "./Component/ModalUpdateToDo/ModalUpdateToDo";

function App() {
    const [modalCreateTodoShow, setModalCreateToDoShow] = useState(false);
    const [modalUpdateTodoShow, setModalUpdateTodoShow] = useState(false);
    const [toDoList, setToDoList] = useState([]);
    const [indexOfItemToUpdate, setIndexOfItemToUpdate] = useState(-1);
    const [itemToUpdate, setItemToUpdate] = useState({});

    const onCreateToDo = (toDoTitle, toDoDescription) => {
        createToDo(toDoTitle, toDoDescription)
    }

    const onUpdateToDo = (itemIndex, updatedTitle, updatedDescription) => {
        updateToDo(itemIndex, updatedTitle, updatedDescription)
    }

    const onDeleteTodo = (itemIndex) => {
        deleteToDo(itemIndex)
    }

    const onShowUpdateToDoModal = (itemIndex, title, description) => {
        setIndexOfItemToUpdate(itemIndex)
        setItemToUpdate({title: title, description: description})
        setModalUpdateTodoShow(true)
    }

    const createToDo = (toDoTitle, toDoDescription) => {
        setToDoList([...toDoList, {title: toDoTitle, description: toDoDescription}]);
        setModalCreateToDoShow(false)
    }

    const updateToDo = (toDoItemIndex, updatedTitle, updatedDescription) => {
        const updatedToDoList = toDoList.map((value, index) => {
            if(index === toDoItemIndex) {
                return {title: updatedTitle, description: updatedDescription}
            }
            return value
        })
        setToDoList(updatedToDoList)
        setModalUpdateTodoShow(false)
    }

    const deleteToDo = (toDoItemIndex) => {
        const updatedList = toDoList.filter((value, index) => {
            return index !== toDoItemIndex;
        })
        setToDoList(updatedList);
    }

    return (
        <Container style={{marginTop: '15px'}}>
            <Jumbotron>
                <h1>Simple To-Do App</h1>
                <p style={{marginTop: '50px'}}>This is a simple To-Do application.</p>
                <p>Data is stored in LocalStorage through React 'States' and the UI is designed with React-Bootstrap.</p>
                <p style={{marginBottom: '50px'}}>Start with creating a new To-Do by clicking the 'Create to do' button below.</p>
                <p>
                    <Button variant='primary' onClick={()=> {
                        setModalCreateToDoShow(true)
                    }}>
                        Create to do
                    </Button>
                </p>
            </Jumbotron>
            <h4>{toDoList.length===0?`No To-Do's added yet`:`Number of To-do's: ${toDoList.length}`}</h4>
            <ListGroup>
                {toDoList.map((toDo, index)=> {
                    return <ToDo todo={toDo} key={index} onDelete={onDeleteTodo} onShowUpdateTodoModal={onShowUpdateToDoModal} itemIndex={index}/>
                })}
            </ListGroup>
            <ModalCreateToDo
                show={modalCreateTodoShow}
                onHide={
                    () => setModalCreateToDoShow(false)
                }
                onCreateTodo={onCreateToDo} />
            <ModalUpdateToDo
                show={modalUpdateTodoShow}
                onHide={
                    () => setModalUpdateTodoShow(false)
                }
                onUpdateToDo={onUpdateToDo}
                itemIndex={indexOfItemToUpdate} itemToUpdate={itemToUpdate}/>
        </Container>
    );
}

export default App;
