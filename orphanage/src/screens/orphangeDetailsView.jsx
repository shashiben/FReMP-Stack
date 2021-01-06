import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getorphanageDetails,
  deleteOrphanage,
} from '../actions/orphanageActions'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/rating'
import Loading from '../components/loader.jsx'
import Message from '../components/message.jsx'
import { ORPHANAGE_DELETE_RESET } from '../constants/orphanageConstant'

const OrphanageDetailsView = ({ history, match }) => {
  const orphanageId = match.params.id
  const dispatch = useDispatch()
  const orphanageDetails = useSelector((state) => state.orphanageDetails)
  const { loading, error, orphanage } = orphanageDetails
  const orphanageDelete = useSelector((state) => state.orphanageDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success,
  } = orphanageDelete
  useEffect(() => {
    if (success) {
      dispatch({ type: ORPHANAGE_DELETE_RESET })
      history.push('/')
    }
    console.log(orphanageId)
    if (orphanageId !== orphanage._id) {
      dispatch(getorphanageDetails(orphanageId))
    }
  }, [dispatch, match, success])

  const pushToEdit = () => {
    history.push(`/orphanage/${orphanage._id}/edit`)
  }

  const deleteOrphanage = () => {
    dispatch(deleteOrphanage(orphanageId))
  }
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loadingDelete && <Loading />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={orphanage.image} alt={orphanage.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{orphanage.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={orphanage.rating}
                  text={`${orphanage.rating} `}
                />
              </ListGroup.Item>

              <ListGroup.Item>
                <Button variant='primary' type='button' onClick={pushToEdit}>
                  Edit Details
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant='Link' type='button' onClick={deleteOrphanage}>
                  Delete Orphanage
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Contact:</Col>
                    <Col>
                      <strong>{orphanage.contact}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Address:</Col>
                    <Col>
                      {orphanage.city},{orphanage.state}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className='btn-block' type='button'>
                    Navigate
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      )}
    </>
  )
}

export default OrphanageDetailsView
