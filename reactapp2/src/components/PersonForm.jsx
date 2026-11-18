import { useEffect, useState } from "react";

const API_URL = "http://localhost:8088/api/persons";

function PersonForm({ employee, onSave, onCancel }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    department: "",
    address: "",
    status: "Active"
  });

  const [error, setError] = useState("");

  /*
   * Load employee data when Edit is clicked
   */
  useEffect(() => {

    if (employee) {

      setFormData({
        name: employee.name || "",
        email: employee.email || "",
        password: employee.password || "",
        gender: employee.gender || "",
        skills: employee.skills
          ? employee.skills.split(",")
          : [],
        department: employee.department || "",
        address: employee.address || "",
        status: employee.status || "Active"
      });

    } else {

      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        skills: [],
        department: "",
        address: "",
        status: "Active"
      });

    }

  }, [employee]);


  /*
   * Handle text input
   */
  function handleChange(event) {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }


  /*
   * Handle radio buttons
   */
  function handleGenderChange(event) {

    setFormData({
      ...formData,
      gender: event.target.value
    });
  }


  /*
   * Handle checkboxes
   */
  function handleSkillChange(event) {

    const { value, checked } = event.target;

    if (checked) {

      setFormData({
        ...formData,
        skills: [
          ...formData.skills,
          value
        ]
      });

    } else {

      setFormData({
        ...formData,
        skills: formData.skills.filter(
          skill => skill !== value
        )
      });

    }
  }


  /*
   * Submit form
   */
  async function handleSubmit(event) {

    event.preventDefault();

    setError("");

    // Validation

    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }

    if (!formData.password.trim()) {
      setError("Password is required");
      return;
    }

    if (!formData.gender) {
      setError("Please select gender");
      return;
    }

    if (formData.skills.length === 0) {
      setError("Please select at least one skill");
      return;
    }

    if (!formData.department) {
      setError("Please select department");
      return;
    }

    if (!formData.address.trim()) {
      setError("Address is required");
      return;
    }


    /*
     * Convert skills array into String
     *
     * Example:
     *
     * ["Java", "React"]
     *
     * becomes:
     *
     * "Java,React"
     */
    const employeeData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      gender: formData.gender,
      skills: formData.skills.join(","),
      department: formData.department,
      address: formData.address.trim(),
      status: formData.status
    };


    try {

      let response;

      if (employee) {

        // UPDATE

        response = await fetch(
          `${API_URL}/${employee.id}`,
          {
            method: "PUT",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify(employeeData)
          }
        );

      } else {

        // CREATE

        response = await fetch(
          API_URL,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify(employeeData)
          }
        );

      }


      if (!response.ok) {
        throw new Error(
          "Failed to save employee"
        );
      }


      const savedEmployee =
        await response.json();

      onSave(savedEmployee);


      // Reset form

      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        skills: [],
        department: "",
        address: "",
        status: "Active"
      });

    } catch (error) {

      setError(error.message);

    }

  }


  return (
    <div>

      <h2>
        {employee
          ? "Update Person"
          : "Create Person"}
      </h2>


      {error && (
        <p>{error}</p>
      )}


      <form onSubmit={handleSubmit}>

        {/* NAME */}

        <div>

          <label>Name:</label>

          <br />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

        </div>


        <br />


        {/* EMAIL */}

        <div>

          <label>Email:</label>

          <br />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>


        <br />


        {/* PASSWORD */}

        <div>

          <label>Password:</label>

          <br />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

        </div>


        <br />


        {/* RADIO BUTTON */}

        <div>

          <label>Gender:</label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleGenderChange}
            />

            Male
          </label>


          {" "}


          <label>

            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleGenderChange}
            />

            Female

          </label>


          {" "}


          <label>

            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleGenderChange}
            />

            Other

          </label>

        </div>


        <br />


        {/* CHECKBOX */}

        <div>

          <label>Skills:</label>

          <br />


          <label>

            <input
              type="checkbox"
              value="Java"
              checked={formData.skills.includes("Java")}
              onChange={handleSkillChange}
            />

            Java

          </label>


          {" "}


          <label>

            <input
              type="checkbox"
              value="Spring Boot"
              checked={formData.skills.includes(
                "Spring Boot"
              )}
              onChange={handleSkillChange}
            />

            Spring Boot

          </label>


          {" "}


          <label>

            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleSkillChange}
            />

            React

          </label>


          {" "}


          <label>

            <input
              type="checkbox"
              value="SQL"
              checked={formData.skills.includes("SQL")}
              onChange={handleSkillChange}
            />

            SQL

          </label>

        </div>


        <br />


        {/* DROPDOWN */}

        <div>

          <label>Department:</label>

          <br />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >

            <option value="">
              -- Select Department --
            </option>

            <option value="IT">
              IT
            </option>

            <option value="HR">
              HR
            </option>

            <option value="Finance">
              Finance
            </option>

            <option value="Admin">
              Admin
            </option>

          </select>

        </div>


        <br />


        {/* TEXTAREA */}

        <div>

          <label>Address:</label>

          <br />

          <textarea
            name="address"
            rows="4"
            cols="40"
            value={formData.address}
            onChange={handleChange}
          />

        </div>


        <br />


        {/* STATUS */}

        <div>

          <label>Status:</label>

          <br />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </select>

        </div>


        <br />


        {/* BUTTONS */}

        <button type="submit">

          {employee
            ? "Update Person"
            : "Create Person"}

        </button>


        {" "}


        {employee && (

          <button
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>

        )}

      </form>

    </div>
  );
}

export default PersonForm;