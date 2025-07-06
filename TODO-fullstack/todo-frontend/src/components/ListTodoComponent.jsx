import React from 'react'
import { useState, useEffect } from 'react';
import { completeTodo, deleteById, getAllTodo, incompleteTodo } from '../services/TodoService';
import {useNavigate} from 'react-router-dom';
import { isAdminUser } from '../services/AuthService';

let dummyData = [
    {
        id:1,
        title:"Learn JAVA",
        description:"Learn core java with examples",
        completed:false
    },
    {
        id:2,
        title:"Learn React",
        description:"Learn React with projects",
        completed:false
    },
    {
        id:3,
        title:"Learn Spring Boot",
        description:"Learn Spring Boot with projects",
        completed:false
    }

]

function ListTodoComponent() {

    let[todos, setTodos]=useState([]);
    let navigator = useNavigate();

    let isAdmin = isAdminUser();


    useEffect(()=>{
       allTodo();
    },[])


    function allTodo(){
        getAllTodo().then((response)=>{
            setTodos(response.data);
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    function addNewTodo(){
        navigator("/add-todo");
    }

    function updateTodo(id){
        navigator(`/update-todo/${id}`);
    }

    function removeTodo(todoId){

        deleteById(todoId).then((resp)=>{
            console.log(resp.data);
            allTodo();
        })
        .catch((error)=>{
            console.error(error);
        })

    }

    function handleComplete(id, completed){

        if(completed==false)
        {
            completeTodo(id).then((resp)=>{
                allTodo();
            })
            .catch((error)=>{
                console.error(error);
            })
        }
        else
        {
            incompleteTodo(id).then((resp)=>{
                allTodo();
            })
            .catch((error)=>{
                console.error(error);
            })
        }

    }
  return (
    <div className='container mt-5'>
        <h2 className='text-center'>List of Todos</h2>
        {
            isAdmin && <button className='btn btn-primary mb-2' onClick={()=>{ addNewTodo()}}>Add Todo</button>
        }
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        todos.map((obj)=>{
                            return(
                            <tr key={obj.id}>
                                <td>{obj.title}</td>
                                <td>{obj.description}</td>
                                <td>{obj.completed ? "Yes":"No"}</td>
                                <td>
                               {

                                isAdmin &&  <button 
                                className='btn btn-primary m-2'
                                onClick={()=>{updateTodo(obj.id)}}
                                >Update</button>

                               }
                                
                                {
                                    isAdmin && 
                                    <button 
                                    className='btn btn-danger m-2'
                                    onClick={()=>{removeTodo(obj.id)}}
                                    >Delete</button>
                                }

                                <button 
                                className={"btn"+`${obj.completed ?" btn-danger ":" btn-success"}`}
                                onClick={()=>{handleComplete(obj.id, obj.completed)}}
                                >{obj.completed ? "Mark Incomplete" : "Mark Complete"}</button>
                                </td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListTodoComponent