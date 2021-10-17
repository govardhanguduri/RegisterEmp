import './index.css'

const EmployeeItem = props => {
  const {EmployeeDetails} = props
  const {EmployeeId, name, Designation, mobileNo, Salary} = EmployeeDetails

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{EmployeeId}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{Designation}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p className="mobile-no-value">{mobileNo}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{Salary}</p>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default EmployeeItem
