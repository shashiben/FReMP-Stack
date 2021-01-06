import React from 'react'
import HomeView from '../src/screens/homeView'
import AddOrphanageView from '../src/screens/addOrphanageView'
import OrphangeDetailsView from '../src/screens/orphangeDetailsView'
import EditOrphanageView from '../src/screens/editOrphanageDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/addOrphanage' component={AddOrphanageView} />
          <Route path='/orphanage/:id/edit' component={EditOrphanageView} exact/>
          <Route path='/orphanage/:id' component={OrphangeDetailsView} exact/>
          <Route path='/' component={HomeView} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
