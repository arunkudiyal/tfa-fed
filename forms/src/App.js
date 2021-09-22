import { useState } from "react";

const App = () => {

  // App States
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFirstName = (e) => {
      setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    if(firstName === '' || lastName === '' || email === '' || password === '') {
      alert('Please fill the form correctly...')
    } else {
      const data = {firstName, lastName, email, password}

      // POST REQUEST AND SEND DATA TO API
      console.log(data);

      setFirstName('')
    }
  }

  return (
      <div className="container">
          <form style={{ marginTop: '25px' }} >
              <div className="form-group">
                  <label>First Name : </label>
                  <input 
                    className="form-control" type="text" placeholder="Enter your first name"
                    onChange={handleFirstName} />
              </div>

              <div className="form-group">
                  <label>Last Name : </label>
                  <input 
                    className="form-control" type="text" placeholder="Enter your last name"
                    onChange={handleLastName}/>
              </div>

              <div className="form-group">
                  <label>Email : </label>
                  <input 
                    className="form-control" type="email" placeholder="Enter your Email"
                    onChange={handleEmail} />
              </div>

              <div className="form-group">
                  <label>Password : </label>
                  <input 
                    className="form-control" type="password" placeholder="Enter your password"
                    onChange={handlePassword} />
              </div>

              <div className="form-group">
                  <label>Gender : </label>
                  <select className="form-control" >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                  </select>
              </div>

              <div className="form-group">
                  <label>Message : </label>
                  <textarea className="form-control" ></textarea>
              </div>

              <div className="form-group">
                  <input type="checkbox" /> I agree with the terms & conditions
              </div>

              <div className="form-group">
                  <input className="form-control" type="file" />
              </div>

              <input className="btn btn-success btn-lg" type="submit" onClick={submitFormHandler} />
          </form>
      </div>
  );
}

export default App;