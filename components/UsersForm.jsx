import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";



function Usersform({ getUsers, userSelected, deselectUser }) {

    
    const { register, handleSubmit, reset} = useForm();

    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        }
    }, [userSelected])


    const submit = (data) => {
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => getUsers())
                .catch((error) => console.log(error.response))
        } else {
            
            axios.post("https://users-crud1.herokuapp.com/users/", data)
                .then(() => getUsers())
                .catch((error) => console.log(error.response))
                // console.log(data)
        }
        clear();
    }

    const clear = () => {
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
        })
        deselectUser();
    }

    return (
        <form onSubmit={handleSubmit(submit)} >
            <div className="userList-container">
                <label htmlFor="first_name" >First name</label>
                <input type="text" id='first_name' placeholder='Karina' {...register("first_name")} />
                <label htmlFor="last_name">Last name</label>
                <input type="text" id='last_name' placeholder='Medina' {...register("last_name")} />
            </div>
            <div className="userList-container">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='example@mail.com' {...register("email")} />
            </div>
            <div className="userList-container">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='password' {...register("password")} />
            </div>
            <div className="userList-container">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' {...register("birthday")} />
            </div>
            <div className="add-btns">
                <button className='upload-btn'>Upload</button>
                <button onClick={clear} className='upload-btn'>Clear</button>
            </div>
            
        </form>

    )
}

export default Usersform