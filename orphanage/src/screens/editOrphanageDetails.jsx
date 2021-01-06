import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/formContainer'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/loader.jsx'
import Message from '../components/message.jsx'
import { ORPHANAGE_UPDATE_RESET } from '../constants/orphanageConstant'
import {
  getorphanageDetails,
  updateOrphanage,
} from '../actions/orphanageActions'

const EditOrphanageView = ({ match, history }) => {
  const orphanageId = match.params.id

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [contact, setContact] = useState('')
  const [rating, setRating] = useState(1)
  const [image, setImage] = useState('')

  const dispatch = useDispatch()
  const orphanageDetails = useSelector((state) => state.orphanageDetails)
  const { loading, error, orphanage } = orphanageDetails

  const orphanagesUpdate = useSelector((state) => state.orphanagesUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = orphanagesUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ORPHANAGE_UPDATE_RESET })

      history.push('/')
    } else {
      if (!orphanage.name || orphanage._id !== orphanageId) {
        dispatch(getorphanageDetails(orphanageId))
      } else {
        setName(orphanage.name)
        setAddress(orphanage.address.join(','))
        setState(orphanage.state)
        setCity(orphanage.city)
        setContact(orphanage.contact)
        setImage(orphanage.image)
        setRating(orphanage.rating + 1)
      }
    }
  }, [dispatch, history, orphanageId, orphanage, successUpdate])

  const submitHandler = () => {
    dispatch(
      updateOrphanage({
        _id: orphanage._id,
        name: name,
        image: image,
        address: address.split(','),
        city: city,
        state: state,
        contact: contact,
        rating: rating - 1,
      })
    )
  }

  

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Orphanage</h1>
        {loadingUpdate && <Loading />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading && <Loading />}
        {error && <Message variant='danger'>{error}</Message>}
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
          <Form.Label>Conatct</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='image'>
          <Form.Label>Image Url</Form.Label>
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
          Update Orphange
        </Button>
      </FormContainer>
    </>
  )
}

export default EditOrphanageView
