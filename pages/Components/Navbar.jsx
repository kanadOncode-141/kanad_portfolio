import Link from 'next/link'
import React from 'react'

const Navbar = () => {


  return (
    <div className='nav' style={{display:"flex", gap:'20px', color:'black', backgroundColor:"#0CD7E5", padding:'10px' }}>
        <p>
           <Link href='/' >Kanad baran Biswas</Link> 
        </p>
        <p>
            <Link href='/ProjectPage'>Project</Link>
        </p>
        <p>
            <Link href='/Experience'>Experience</Link>
        </p>
    </div>
  )
}

export default Navbar