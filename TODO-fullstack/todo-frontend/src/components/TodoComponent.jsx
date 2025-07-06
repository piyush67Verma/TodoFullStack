import React from 'react'
import { useState, useEffect } from 'react';
import { addTodo, getTodoById, updateTodoById } from '../services/TodoService';
import { useNavigate, useParams } from 'react-router-dom';

function TodoComponent() {

  const[title , setTitle] = useState('');
  const[description , setDescription] = useState('');
  const[completed , setCompleted] = useState(false);
  let navigate = useNavigate();
  let {id} = useParams();
  
  function saveorUpdateTodo(e){
    e.preventDefault();
    let todo = {title, description, completed};

    if(id)
    {
        updateTodoById(id, todo).then((resp)=>{
          console.log(resp.data);
          navigate("/todos");
        })
        .catch((error)=>{
          console.error(error);
        })
    }
    else
    {
        addTodo(todo).then((resp)=>{
            console.log(resp.data);
            navigate('/todos');
        },[])
        .catch((error)=>{
            console.error(error);
        })
    }

  }

  function pageTitle(){
      if(id)
      {
        return <h2 className="text-center">Update Todo</h2>
      }
      
      return <h2 className="text-center">Add Todo</h2>
  }


  useEffect(()=>{
    if(id)
    {
        getTodoById(id).then((resp)=>{
          setTitle(resp.data.title);
          setDescription(resp.data.description);
          setCompleted(resp.data.completed);
        })
        .catch((error)=>{
            console.error(error);
        })
    }
  },[])





  return (
    <div className='container'>
        <br/> <br/> <br/> <br/> <br/>
        <div className='row'>
            <div className='card  col-md-6 offset-md-3 offset-md-3'>
                {/* <h2 className='text-center'>Add Todo</h2> */}
                {pageTitle()}
                <div className='card-body'>
                    <form>
                       <div className='form-group mb-2'>
                          <label className='form-label'>Todo Title: </label>
                          <input
                            type='text'
                            className="form-control"
                            placeholder='Enter Todo Title'
                            name='title'
                            value={title}
                            onChange={(e)=>{ setTitle(e.target.value)}}
                          >
                          </input>
                       </div>

                       <div className='form-group mb-2'>
                          <label className='form-label'>Todo Description: </label>
                          <input
                            type='text'
                            className="form-control"
                            placeholder='Enter Todo Description'
                            name='description'
                            value={description}
                            onChange={(e)=>{ setDescription(e.target.value)}}
                          >
                          </input>
                       </div>


                       <div className='form-group mb-2'>
                          <label className='form-label'>Todo Completed: </label>
                         <select
                             className="form-control"
                             value={completed}
                             onChange={(e)=>{setCompleted(e.target.value)}}
                         >
                           <option value="true">Yes</option>
                           <option value="false">No</option>
                         </select>
                       </div>

                       <div className='d-flex justify-content-center'>
                            <button
                                className='btn btn-success'
                                onClick={(e)=>{saveorUpdateTodo(e)}}
                            >Submit</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoComponent