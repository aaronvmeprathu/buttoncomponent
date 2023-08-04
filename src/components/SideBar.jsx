import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <div className='sidebar d-inline-block'>
        <div className='m-5 '>
            <h5 className='pb-5'>Devchallenges.io</h5>
            <ul className='list  pt-5'>
              <li>Colors</li>
              <li>Typography</li>
              <li>Spaces</li>
              <li>Buttons</li>
              <li>Inputs</li>
              <li>Grid</li>
            </ul>

        </div>
    </div>
  )
}

export default SideBar