
import { useState } from "react";

export default function AddProject(){
    const[title, setTitle] = useState("")

    function handleSubmit(){
        console.log(title)
    }
    return (
        <div>
            <h1 className="text-3xl">
                Add Project
            </h1>

            <input
            className="border p-2 mt-"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            placeholder="Project name"
           />

           <button
            onClick={handleSubmit}
            className="" >
                Add
            </button>
        </div>

            

    )
}