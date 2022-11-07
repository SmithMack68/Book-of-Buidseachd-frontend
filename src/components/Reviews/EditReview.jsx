import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'


const EditReview = ({ updateReview }) => {
  const [formData, setFormData] = useState({
      username: '',
      comment: ''
  })

  const navigate = useNavigate()
  // const [errors, setErrors] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`/reviews/${params.id}`)
    .then(resp => resp.json())
    .then(setFormData)
  }, [params.id])


  const handleChange = (e) => {
    setFormData({ ...formData, 
      [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/reviews/${params.id}`, {
      method: 'PATCH',
      headers,
      body:JSON.stringify(formData)
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(updateReview)
        navigate(`/reviews/${params.id}`)
      // } else {
      //   resp.json().then(data => setErrors(data))
      // }
      }
  })

}
  // if(errors) return <h1>{errors}</h1>

 
  return (
    <div className="edit-spell-container" style={{ textAlign: "center", fontFamily: 'cursive' }}>
      <h1 style={{fontSize: 45, fontFamily: "cursive",textAlign: 'center'}}>Edit Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea style={{ fontFamily: 'cursive',fontSize: 20}}
            type="text"
            rows='8'
            cols='50'
            id="inputID"
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