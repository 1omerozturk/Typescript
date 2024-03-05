import React from "react";
import { Todos } from "../Types/types";

type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, deleteMessage }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <div
          key={i}
          className="text-green-500 text-xl relative text-center justify-around items-center 
                 border-2 my-4 max-w-screen-md mx-auto text-nowrap "
        >
          {todo.message}
          <div className=" text-right items-center justify-center relative w-auto -top-3">
            <button
              className="text-red-500 border-2 mx-auto border-black 
                     rounded-2xl size-8 hover:bg-red-500 hover:text-white"
              onClick={() => deleteMessage(todo.id)}
              style={{ cursor: "pointer" }}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
