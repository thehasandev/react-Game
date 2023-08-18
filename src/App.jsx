import React, { useState } from 'react'
import Flex from './components/Flex'

function App() {

  let [inputOne,setInputOne] = useState("")
  let [inputTwo,setInputTwo] = useState("")

  let [one,setOne] = useState(true)
  let [result,setResult] = useState("")
  let [chance,setChance]  = useState(5)
  let [error,setError]  = useState("")

let handleChangeOne = (e)=>{
 setInputOne(e.target.value)
}

let handleChangeTwo = (e)=>{
  setInputTwo(e.target.value)
}

let handleClickOne = ()=>{
  setResult("")
  if(!inputOne){
    setError("Please Enter Something")
  }else if(!(inputOne-999)){
    setError("Please Enter Number")
  }else if( inputOne>0 && inputOne<=10){
    setOne(false)
    setError("")
    setResult("")
  }else{
    setError("Please Enter 1 to 10")
  
  }

}


let handleClickTwo = ()=>{
  setError("")

  if(!inputTwo){
    setError("Please Enter Something")
  }else if(!(inputTwo-999.9)){
    setError("Please Enter Number")
  }else if(inputTwo>0 && inputTwo<=10){
   
    if(chance>1){
      setChance(chance-1)
  
      if(inputOne == inputTwo){
        setResult("Player Two is Win")
        setOne(true)
        setChance(5)
        setInputOne("")
        setInputTwo("") 
        setError("")
     }
    }else{
   
      setResult("Player One is Win")
      setOne(true)
      setChance(5)
      setInputOne("")
      setInputTwo("")
      setError("")
  
    } 
  }
  else{
     setError("Please Enter 1 to 10")  
  }
}

  return (
  <div className='relative bg-gray-900 h-[100vh]' >
   <h1 className='absolute left-1/2 -translate-x-1/2 top-5 text-4xl font-extrabold font-roboto text-white'>{result}</h1>
  <Flex className="justify-center pt-24">

    <div>
     <>
       {
         
         one 
         ?
         
      <div className='bg-blue-500 w-[450px] h-[300px] relative'>
        <h2 className='text-4xl font-extrabold absolute left-1/2 -translate-x-1/2 top-5 font-roboto'> Player One</h2>
        <p className=' absolute  left-1/2 -translate-x-1/2 bottom-0 text-[red] font-pop text-lg bg-white w-full text-center'>{error}</p>
        <Flex className="justify-center items-center h-full">
        <div>
        <div>
        <input type="password" onChange={handleChangeOne} className='w-64'/>
        </div>
        <div className='flex justify-center mt-5'>
        <button onClick={handleClickOne} className='font-pop bg-black px-12 py-3 text-lg text-white rounded-[5px]'>Start</button>
        </div>
        </div>
        </Flex>
      </div>
        :
        <div className='bg-[#269900] w-[450px] h-[300px] relative'>
           <h2 className='text-4xl font-bold absolute left-1/2 -translate-x-1/2 top-5'>Player Two </h2>
          <Flex className='justify-center items-center h-full '>
              <div>
                <div>
                  <h2 className='text-lg font-pop text-white'>Chance : {chance} </h2>
                </div>
                <div>
                 <input type="text" onChange={handleChangeTwo} className='w-72 my-5'/>
                </div>
                <div className='flex justify-center'>
                   <button onClick={handleClickTwo} className= ' font-pop bg-black px-12 py-3 text-lg text-white rounded-[5px]'>Gause Number</button>
                </div>
                <div className='absolute  left-1/2 -translate-x-1/2 bottom-0 text-[red] font-pop text-lg bg-white w-full text-center'>
                <p >{error}</p>
                </div>
              </div>
          </Flex>
        </div>

      }
          </>
    </div>  

  </Flex>
  </div>     
  )
}

export default App