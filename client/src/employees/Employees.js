import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'

function Employees() {
  const [employees, setEmployees] = useState([])

  async function getEmployees() {
    const employeesRes = await axios.get('http://localhost:5000/employee/')
    setEmployees(employeesRes.data)
  }  

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className='container frame mt-5'>
        <EmployeeForm getEmployees={getEmployees} />
        <EmployeeList employees={employees} />
    </div>
  )
}

export default Employees