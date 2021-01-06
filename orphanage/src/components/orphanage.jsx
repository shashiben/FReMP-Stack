import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Rating from './rating'
import { Link } from 'react-router-dom'
const Orphanage = ({ product: orphanage }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/orphanage/${orphanage._id}`}>
        <Card.Img src={orphanage.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/orphanage/${orphanage._id}`}>
          <Card.Title as='div'>
            <strong>{orphanage.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={orphanage.rating} text={`${orphanage.rating}`} />
        </Card.Text>
        <Row>
          <Col>City:{orphanage.city}</Col>
        </Row>
        <Row>
          <Col>State:{orphanage.state}</Col>
        </Row>

        <Card.Text>
          Contact:
          <a href={`tel:${orphanage.contact}`}>{orphanage.contact}</a>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Orphanage
