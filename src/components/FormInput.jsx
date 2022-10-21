import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './formInput.css'



const FormInput = () => {

    const URL = 'https://sheet.best/api/sheets/467b28b1-9c4b-4dde-ae83-7d4332f51064'
    const URL1 = 'https://script.google.com/macros/s/AKfycbx6mf1CTQYKI20R1jqubUi42Vxy-O_Zh8Dzhi9N5y42Uw_wrQD0g-ee2pAq0S2D5un9Pg/exec?action=data'


  
    
    const defaultData = {
        name: 'empty',
        email: 'empty',
        age: 'empty'
    }

    const [getData, setGetData] = useState(defaultData)


    const { register, handleSubmit, reset } = useForm()
    
    const resetData = {
        name: '',
        email: '',
        age: ''
    }

    const submit = (data) => {
        setGetData(data)
        axios.post(URL,data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        reset(resetData)
    }


    return (
        <article className="form-main">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor ullam impedit, deleniti architecto pariatur itaque laboriosam explicabo! Necessitatibus dolor aliquid nesciunt et accusantium mollitia amet laudantium nam inventore deserunt!</p>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" autoComplete='off' placeholder='Write your name' {...register('name')} />
                <input type="text" autoComplete='off' placeholder='Write your email' {...register('email')} />
                <input type="text" autoComplete='off' placeholder='Write your age' {...register('age')} />
                <button>send data</button>
            </form>

     
        </article>
    )
}

export default FormInput