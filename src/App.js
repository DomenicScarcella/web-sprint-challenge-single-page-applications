import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Form from './Form'
import formSchema from './Schema'
import * as yup from 'yup'

const initialFormValues = {name: '', size: 'grande', cheese: false, pepperoni: false, onions: false, mushrooms: false, instr: '',}
const initialFormErrors = {name: '',}
const initialOrders = []
const initialDisabled =  true;

function App() {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        setOrders([res.data, ...orders])
      })
      .catch(err => {
        console.log(err)
      })
      console.log(orders)
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <header className='App-header'><h1>Pizza Place</h1></header>

      <Form 
        values={formValues}
        errors={formErrors}
        disabled={disabled}
        change={inputChange}
        submit={postNewOrder}
      />

      <h2><br />Order Status</h2>

      {
        orders.map(order => {
          return (
            <div key={order.id}>
              <p><strong>{order.name}</strong> has ordered a <strong>{order.size}</strong> pizza.<br />Toppings: {order.cheese}<br />
              {order.pepperoni}<br />
              {order.onions}<br />
              {order.mushrooms}<br /></p>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
