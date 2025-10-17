import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {


  const randomX = gsap.utils.random(-500,500,100);
  const rotateX = gsap.utils.random(-760 , 760 , 200);
  const [xValue , setXVale] = useState(0);
  const [roti , setRoti] = useState(0);

  const boxRef = useRef();

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x:xValue,
      rotate:roti,
      duration:1, 
      delay:0.3
    })
  },[xValue,rotateX]);      // whenever this both changes in dependency array then it calls this 
  

  return (
    <main>
      <button onClick={()=>{
        setXVale(randomX)
        setRoti(rotateX)
      }}>
        Animate
      </button>
      <div ref={boxRef} className="box"></div>
    </main>
  )
}

export default App