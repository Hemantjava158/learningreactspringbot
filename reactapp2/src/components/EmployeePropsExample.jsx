import Employee from "./EmployeeProps";

const EmployeePropsExample = () => {

    let name = "Hemant kumar";
    let dept = "IT";
    let salary = 105000;

    const emp={
      name : "Hemant kumar", 
      department :"IT", 
      salary : 105000,
      skills:["HTML", "CSS", "JavaScript", "TypeScript"]
    }

    return (
        // <div>
        //     <Employee
        //         name={name}
        //         department={dept}
        //         salary={salary}
        //     />
        // </div>

        <div>
            <Employee employee={emp}               
            />
        </div>
    );
};

export default EmployeePropsExample;