import { useState } from "react";

import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

function App() {

  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  const [refresh, setRefresh] =
    useState(0);


  function handleSave(employee) {

    console.log(
      "Employee saved:",
      employee
    );

    // Exit edit mode
    setSelectedEmployee(null);

    // Refresh list
    setRefresh(
      value => value + 1
    );

  }


  function handleEdit(employee) {

    setSelectedEmployee(employee);

  }


  function handleCancel() {

    setSelectedEmployee(null);

  }


  return (

    <div>

      <h1>
       ReactJS Employee Management
      </h1>


      <PersonForm
        employee={selectedEmployee}
        onSave={handleSave}
        onCancel={handleCancel}
      />


      <hr />


      <PersonList
        onEdit={handleEdit}
        refresh={refresh}
      />

    </div>

  );
}

export default App;