import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const List = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <div className=" container-fluid w-50">
            <div>
                <h1 className="text-center mt-5 text-danger display-1">TODOS</h1>
            </div>
            <div className="container ">
                <ul className="list-group list-group-flush border mt-2 d-flex justify-content-between">
                    <li className="list-group-item">
                        <input
                            className="w-100 border-0"
                            type="text border-0"
                            placeholder="What do you need to do ?"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                            onKeyUpCapture={(e) => e.key === 'Enter' ? setTodos([...todos, inputValue]) : []}
                        >
                        </input>
                    </li>
                    {todos.map((el, i) =>
                        <li className="list-group-item d-flex justify-content-between" key={i}>
                            <span>{el}</span> <FontAwesomeIcon icon={faX} onClick={() => setTodos([...todos.slice(0, i), ...todos.slice(i + 1)])} />
                        </li>)}
                </ul>
                <div className="py-2">
                    <p>{todos.length > 0 ? `${todos.length} items` : 'No hay tareas, añadir tareas'}</p>
                </div>
            </div>
        </div>
    );
};

export default List;