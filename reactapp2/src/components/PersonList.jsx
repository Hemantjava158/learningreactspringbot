import { useEffect, useState } from "react";

const API_URL = "http://localhost:8088/api/persons";

function PersonList({ onEdit, refresh }) {

  const [employees, setEmployees] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  async function fetchEmployees() {

    try {

      setLoading(true);

      const response =
        await fetch(API_URL);

      if (!response.ok) {
        throw new Error(
          "Failed to fetch employees"
        );
      }

      const data =
        await response.json();

      setEmployees(data);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {

    fetchEmployees();

  }, [refresh]);


  async function handleDelete(id) {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this employee?"
      );

    if (!confirmed) {
      return;
    }


    try {

      const response =
        await fetch(
          `${API_URL}/${id}`,
          {
            method: "DELETE"
          }
        );


      if (!response.ok) {
        throw new Error(
          "Failed to delete employee"
        );
      }


      setEmployees(
        currentEmployees =>
          currentEmployees.filter(
            employee =>
              employee.id !== id
          )
      );

    } catch (error) {

      setError(error.message);

    }

  }


  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>{error}</p>;
  }


  return (

    <div>

      <h2>Person List</h2>


      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Gender</th>

            <th>Skills</th>

            <th>Department</th>

            <th>Address</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>


        <tbody>

          {employees.map(employee => (

            <tr key={employee.id}>

              <td>
                {employee.id}
              </td>

              <td>
                {employee.name}
              </td>

              <td>
                {employee.email}
              </td>

              <td>
                {employee.gender}
              </td>

              <td>
                {employee.skills}
              </td>

              <td>
                {employee.department}
              </td>

              <td>
                {employee.address}
              </td>

              <td>
                {employee.status}
              </td>

              <td>

                <button
                  onClick={() =>
                    onEdit(employee)
                  }
                >
                  Edit
                </button>


                {" "}


                <button
                  onClick={() =>
                    handleDelete(employee.id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>


      {employees.length === 0 && (
        <p>No employees found.</p>
      )}

    </div>

  );
}

export default PersonList;