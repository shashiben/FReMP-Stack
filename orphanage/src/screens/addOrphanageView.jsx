import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/formContainer'

const AddOrphanageView = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [contact, setContact] = useState('')
  const [rating, setRating] = useState(0)
  const [image, setImage] = useState('')

  const submitHandler = () => {}

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Add Orphanage</h1>
        <Form onSubmit={submitHandler}></Form>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter State'
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='contact'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='image'>
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Image Url'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as='select'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' onClick={submitHandler}>
          Add Orphange
        </Button>
      </FormContainer>
    </>
  )
}

export default AddOrphanageView
