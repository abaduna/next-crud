import TasksCard, { TasckProps } from "@/componets/TasksCard";
import {prisma}  from "@/libs/prisma"
async function loadTasck() {
  const tasks = await prisma.task.findMany()
  return  tasks

}

export default async function HomePage() {
 const tasks:TasckProps[] = await  loadTasck()
 console.log(tasks);
 
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
      {tasks.map((task,index)=>(
        <TasksCard {...task} key={index}/>
          ))}
    </div>
    </section>
  );
}
