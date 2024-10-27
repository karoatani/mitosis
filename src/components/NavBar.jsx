import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between text-white text-2xl'>
        <div>
            <h2 className=''>mitosis</h2></div>
        <div>
            <ul className='flex gap-2'>
                <li>Privacy Policy</li>
                <li>About me</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar