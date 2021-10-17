import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import EmployeeItem from './components/EmployeeItem'

import './App.css'

const initialEmployeesList = [
  {
    id: uuidv4(),
    EmployeeId: 1,
    name: 'Ram',
    Designation: 'Developer',
    mobileNo: 9999988888,
    Salary: 25000,
    isFavorite: false,
  },
]

class App extends Component {
  state = {
    EmployeesList: initialEmployeesList,
    EmployeeId: '',
    name: '',
    Designation: '',
    mobileNo: '',
    Salary: '',
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAddEmployee = event => {
    event.preventDefault()
    const {EmployeeId, name, Designation, mobileNo, Salary} = this.state
    const newEmployee = {
      id: uuidv4(),
      EmployeeId,
      name,
      Designation,
      mobileNo,
      Salary,
      isFavorite: false,
    }

    this.setState(prevState => ({
      EmployeesList: [...prevState.EmployeesList, newEmployee],
      EmployeeId: '',
      name: '',
      Designation: '',
      mobileNo: '',
      Salary: '',
    }))
  }

  onChangeEmployeeId = event => {
    this.setState({EmployeeId: event.target.value})
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeDesignation = event => {
    this.setState({Designation: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSalary = event => {
    this.setState({Salary: event.target.value})
  }

  render() {
    const {EmployeeId, name, Designation, mobileNo, Salary} = this.state

    const {searchInput, EmployeesList} = this.state
    const searchResults = EmployeesList.filter(eachEmployee =>
      eachEmployee.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Employees Registration</h1>
          <form
            className="Employee-form-container"
            onSubmit={this.onAddEmployee}
          >
            <input
              value={EmployeeId}
              onChange={this.onChangeEmployeeId}
              className="input"
              placeholder="Employee-Id"
            />
            <br />
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <br />
            <input
              value={Designation}
              onChange={this.onChangeDesignation}
              className="input"
              placeholder="Designation"
            />
            <br />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <br />
            <input
              value={Salary}
              onChange={this.onChangeSalary}
              className="input"
              placeholder="Salary"
            />
            <br />
            <button type="submit" className="button">
              Save
            </button>
          </form>
          <div className="searchInput">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="Search Employee"
            />
          </div>
          <ul className="Employees-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Employee-Id</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Designation</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Mobile Number</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Salary</p>
              <hr className="separator" />
            </li>
            {searchResults.map(eachEmployee => (
              <EmployeeItem
                key={eachEmployee.id}
                EmployeeDetails={eachEmployee}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
