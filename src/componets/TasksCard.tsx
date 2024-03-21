"use client"
import { useRouter } from "next/navigation"

export interface TasckProps  {
        id: number
        title:string
        descripcon?:string | null
        creadtAt:Date

}

const TasksCard = ({title,descripcon,creadtAt,id}: TasckProps) => {
    const router = useRouter()
    const handlerRederectCLicl =(id:number)=>{
        router.push(`/task/edit/${id}`)
}
  return (
    <div  className="bg-slate-900 p-3 hover:bg-slate-700 hover:cursor-pointer" onClick={()=>handlerRederectCLicl(id)}>
          <h3 className="font-bold text-2xl">{title}</h3>
          <p>{descripcon}</p>
          <p>
            {new Date(creadtAt).toLocaleDateString()}
          </p>
          </div>
  )
}

export default TasksCard