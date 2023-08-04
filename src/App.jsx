import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SideBar from './components/SideBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Row>
    <Col md={3} ><SideBar/></Col>
      <Col  md={9}><Buttons/></Col>

    </Row>
      
    
    
      
    
    
      
    </>
  )
}

export default App
