import { useState } from "react";


export default function EventHandling() {

    const [name, setName]=useState("");

     const [isActive, setIsActive] = useState(false);
        const [gender, setGender] = useState("");
    
    const [department, setDepartment] = useState("");

    function handleSelect(event) {
        setDepartment(event.target.value);
    }

    function handleRadiobutton(event) {
        setGender(event.target.value);
    }

    function handleCheckbox(event) {
        setIsActive(event.target.checked);
    }

    function handleChange(event) {

        setName(event.target.value);
        console.log(event);
        
    }

    function handleDelete(id) {
    console.log("Deleting employee:", id);
}

const id = 101;

function handleAdd() {
        console.log("Add employee");
    }

    function handleEdit() {
        console.log("Edit employee");
    }

    function handleDelete() {
        console.log("Delete employee");
    }

     function handleKeyDown(event) {
        console.log("Key:", event.key);
    }

     function handleMouseEnter() {
        console.log("Mouse entered");
    }

    function handleMouseLeave() {
        console.log("Mouse left");
    }


    return (

         <div>
            <h2>React Events</h2>
            <input
                type="text"
                value={name}
                onChange={handleChange}
            />

            <p>Name: {name}</p>

             <button onClick={() => handleDelete(id)}>
            Delete
        </button>

         <button onClick={handleAdd}>
                Add
            </button>

            <button onClick={handleEdit}>
                Edit
            </button>

            <button onClick={handleDelete}>
                Delete
            </button><br/>
                    <input
            type="text"
            onKeyDown={handleKeyDown}
        />

            <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Move mouse here
        </div>
        <h2>Checkbox Events</h2>

<div>
            <input
                type="checkbox"
                checked={isActive}
                onChange={handleCheckbox}
            />

            <p>
                Status: {isActive ? "Active" : "Inactive"}
            </p>
        </div>

<h2>Radio Button Events</h2>


 <div>

            <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={handleRadiobutton}
            />
            Male

            <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={handleRadiobutton}
            />
            Female

            <p>Selected Gender: {gender}</p>

        </div>

         <div>
<h2>Select / Dropdown Event</h2>
            <select
                value={department}
                onChange={handleSelect}
            >
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="Garment">Garment</option>
                <option value="Education">Education</option>
            </select>

            <p>
                Department: {department}
            </p>

        </div>
        
        </div>

    );
    
}