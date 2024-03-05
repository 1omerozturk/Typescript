import React from "react"


type IProps={
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    addMessage:() => void, 
}

const Input:React.FC<IProps>=({todo,setTodo,addMessage})=>{

    return (
        <div  className="mt-4 gap-8 flex justify-center items-start w-[500px] mx-auto">
        <input width={100} className="w-2/3 px-4 text-center placeholder:text-green-500 input:border-orange-800 border-2 border-green-400 relative rounded-xl h-[49px] text-xl" value={todo} onChange={e=>setTodo(e.target.value)} type="text" placeholder="  Yazınız...."/>
        <button className="w-1/3 my-2 h-full border-2 bg-indigo-400 hover:bg-indigo-600 hover:border-black rounded-lg hover:text-white hover:scale-95 size-12 text-xl font-semibold " onClick={addMessage}>Save</button>
        </div>
    )
}

export default Input;