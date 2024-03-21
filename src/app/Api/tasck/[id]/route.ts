import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma"
interface Params {
    params:{
        id:ResponseInit | undefined
    }
}
export async function GET(req:Request, {params}:Params) {
    
    const task = await prisma.task.findUnique({
       where:{
        id: Number(params.id)  
       }
    })
    
    
    return NextResponse.json(task)
}
export async function PUT(req:Request, {params}:Params) {
    try {
      const data = await req.json()
      const taskDate = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data
      } )
      return NextResponse.json({update: taskDate})  
    } catch (error) {
        return NextResponse.json({message: `ocurio un error `,error})
    }
    
}

export  async function DELETE(req:Request, {params}:Params) { 
    try {
    const tasckRemove = await prisma.task.delete({
        where:{
            id: Number(params.id)
        }
     })
    return NextResponse.json(tasckRemove)
} catch (error) {
    return NextResponse.json({message: `ocurio un error `,error})
}
   
}

