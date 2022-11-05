import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'


const EditReview = ({ updateReview, user, loggedIn }) => {
  const [formData, setFormData] = useState({
      username: '',
      comment: ''
  })

  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`/reviews/${params.id}`)
    .then(resp => resp.json())
    .then(setFormData)
  }, [params.id])
// // console.log(user)
// //   useEffect((user) => {
// //     debugger
// //   }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, 
      [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/reviews/${params.id}`,{
      method: 'PATCH',
      headers,
      body:JSON.stringify(formData)
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(updateReview)
        navigate(`/reviews/${params.id}`)
      } else {
        resp.json().then(data => setErrors(data))
      }
    })
  }
  if(errors) return <h1>{errors}</h1>

 
  return (
    <div className="edit-spell-container" style={{ textAlign: "center", fontFamily: 'cursive' }}>
      <h1 style={{fontSize: 45, fontFamily: "cursive",textAlign: 'center'}}>Edit Review</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label style={{ fontSize: 30}}>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}>
          </input>
        </div> */}
        <div>
        <label style={{ fontSize: 30}}></label>
          <textarea
            type="text"
            rows='8'
            cols='50'
            name="comment"
            value={formData.comment}
            onChange={handleChange}>
          </textarea>
        </div>
        <input style={{ fontFamily: 'cursive'}}type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default EditReview