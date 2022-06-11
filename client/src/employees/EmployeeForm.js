import axios from 'axios'
import React, { useState } from 'react'

function EmployeeForm({getEmployees}) {
  const [employeeName, setEmployeeName] = useState('')

  async function saveEmployee(e) {
    e.preventDefault()

    try {
      const employeeData = {
        name: employeeName
      }
      await axios.post('http://localhost:5000/employee/', employeeData)
      getEmployees()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={saveEmployee}>
          <input 
            type='text'
            placeholder='Employee Name'
            onChange={(e) => {
              setEmployeeName(e.target.value)
            }}
            value={employeeName}
            />
            <button type='submit'>Save new Employee</button>
        </form>
      </div>
    </>
  )
}

export default EmployeeForm