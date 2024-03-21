import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma"
export async function GET() {
    const dataTasks = await prisma.task.findMany()
    console.log(dataTasks);
    
    return NextResponse.json(dataTasks)
}
export async function POST(req:Request) {
  const dataTasck = await req.json()
  const newTasck = await prisma.task.create({
    data:{
        title:dataTasck.title,
        descripcon: dataTasck.descripcon
    }
  })
  
    return NextResponse.json(newTasck)
}