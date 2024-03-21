"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface propsParams {
  params:any
}
function NewPage({params}:propsParams) {
 const [title,setTitle] = useState("")
 const [descricion,setDescricion] = useState("")
  const router = useRouter()

  useEffect(()=>{
    if (params.id) {
      fetch(`/Api/tasck/${params.id}`)
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      setTitle(data.title)
      setDescricion(data.descripcon)
    }) }
    
  },[])
  const handerFormCLick = async(e: any)=>{
    console.log(`handerFormCLick`);
    
    e.preventDefault()
    console.log(e.target);
    
   
   if (!title) {
    return 
   }
   if (!params.id) {
      const rest = await fetch("Api/tasck",{
      method:"POST",
      body: JSON.stringify({title,descripcon:descricion}),
      headers:{
        "Content-Type":" aplication/json"
      }})
      const data = await rest.json() 
    }else{
      const rest = await fetch(`/Api/tasck/${params.id}`,{
        method:"PUT",
        body: JSON.stringify({title,descripcon:descricion}),
        headers:{
          "Content-Type":" aplication/json"
        },
       })
        const data = await rest.json() 
    }
      router.refresh()
      router.push("/")
  }
  const handlerDeletdClick = async(id:string)=>{
    const rest = await fetch(`/Api/tasck/${params.id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":" aplication/json"
      },
     })
      const data = await rest.json() 
      router.refresh()
      router.push("/")
  }
  return (
    <div className='h-screen felx justify-center items-center'>
      <form className='bg-slate-800 p-10  items-center' onSubmit={handerFormCLick}>
        <label htmlFor='title' className='font-bold text-sm' >
          titulo de la tarea
        </label>
        <input type='text' 
        value={title}
        className='border border-gray-400 p-2 mb-4 w-full text-black' 
        placeholder='title'
        id='title'
        onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor='descricion'  className='font-bold text-sm' >
          descripcion de la tarea
        </label>
        <textarea value={descricion} rows={10} className='border border-gray-400 p-2 mb-4 w-full  text-black' id="descripcon" placeholder='descricion'
        onChange={(e)=>setDescricion(e.target.value)}></textarea>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Crear
        </button>
        {
          params.id && 
          <button type='button'  
          className='bg-red-500 hover:bg-red-700 items-end text-white font-bold py-2 ml-10 px-4 rounded'
          onClick={()=>handlerDeletdClick(params.id)}>
          ELIMINAR
        </button>
        }
      </form>
    </div>
  )
}

export default NewPage