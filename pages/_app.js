import Image from 'next/image';
import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Navbar from './Components/Navbar'

export default function App({ Component, pageProps }) {
  
  let [data, setData] = useState([]);
  
  const getData = async()=>{
    const r = await fetch('https://api.github.com/users/kanadOncode-141');
    const da = await r.json();
    setData(da);
  }

  useEffect( ()=>{
    getData();

  },[])
  
  data = [data]
  console.log(data.avatar_url);

  return (
    <>
    <Navbar></Navbar>
    <div>
        {data.map((d)=>(
          <p key={d.id}>{d.name}</p>        
        ))}
    </div>
    <div>
      {data.map((l)=>(
        <Image key ={l.id}  src={l.avatar_url} alt="img"
          width={30}
          height={30} />
      ))}
      {/* <Image src="https://avatars.githubusercontent.com/u/104050054?v=4" alt="ka" width={33} height={33}></Image> */}
    <Component {...pageProps} />
    </div>
    </>
  )
}
