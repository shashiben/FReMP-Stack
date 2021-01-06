import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Orphanage from '../components/orphanage'
import Loading from '../components/loader.jsx'
import Message from '../components/message.jsx'
import { listOrphanages } from '../actions/orphanageActions'

const HomeView = () => {
  const dispatch = useDispatch()
  const orphanagesList = useSelector((state) => state.orphanagesList)
  const { loading, error, orphanages } = orphanagesList
  useEffect(() => {
    dispatch(listOrphanages())
  }, [dispatch])
  return (
    <>
      <h1>Orphanages</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {orphanages.map((orphanage) => (
            <Col key={orphanage._id} sm={12} md={6} lg={4} xl={3}>
              <Orphanage product={orphanage} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeView
