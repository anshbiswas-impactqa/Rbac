import React from 'react'

function EmployeeList({employees}) {
  function renderEmployees() {
    return employees.map((employee, i) => {
      return <li key={i}>{employee.name}</li>
    })
  }

  return (
    <div>
        <ul>
            {renderEmployees()}
        </ul>
    </div>
  )
}

export default EmployeeList