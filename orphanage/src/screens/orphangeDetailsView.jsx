import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
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
    console.log(JSON.stringify(orphanage))
    if (orphanageId !== orphanage._id) {
      dispatch(getorphanageDetails(orphanageId))
    }
  }, [dispatch, match, success])

  const pushToEdit = () => {
    history.push(`/orphanage/${orphanage._id}/edit`)
  }

  const deleteOrphanag = () => {
    dispatch(deleteOrphanage(orphanageId))
  }

  function Map() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat: Number(orphanage.address[0]),
          lng: Number(orphanage.address[1]),
        }}
      >
        <Marker
          position={{
            lat: Number(orphanage.address[0]),
            lng: Number(orphanage.address[1]),
          }}
        />
      </GoogleMap>
    )
  }

  const MapScript = withScriptjs(withGoogleMap(Map))

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
                <Button variant='Link' type='button' onClick={deleteOrphanag}>
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
                <MapScript
                  googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCXpbKdlST52FIWkboP_NmK5RtXmk2uv0M'
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default OrphanageDetailsView
