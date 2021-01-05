import React from 'react'
import HomeView from '../src/screens/homeView'
import AddOrphanageView from '../src/screens/addOrphanageView'
import OrphangeDetailsView from '../src/screens/orphangeDetailsView'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeView} />
          <Route path='/addOrphanage' component={AddOrphanageView} />
          <Route path='/orphanage/:id' component={OrphangeDetailsView} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
