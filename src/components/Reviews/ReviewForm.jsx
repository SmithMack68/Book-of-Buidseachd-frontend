import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'

const ReviewForm = () => {
  const [ formData, setFormData ] = useState({
    username: '',
    comment: ''
  })
  const navigate = useNavigate()

const handleChange = (e) => {
  setFormData({...formData,
  [e.target.name]:e.target.value })
}

const handleSubmit = (e) => {
  e.preventDefault()

  fetch('/reviews',{
    method: 'POST',
    headers,
    body:JSON.stringify(formData)
  })
  .then(resp => resp.json())
  .then(data => {
    setFormData(data)
    navigate('/reviews')
  })

}



  return (
    <div className='new-review-container' style={{ textAlign: "center", fontFamily: 'cursive' }}>
      <h1 style={{fontSize: 45}}>Leave a Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label style={{ fontSize: 30}}>Username: </label> */}
          <input style={{height: 35, width: 380, fontFamily: 'cursive', fontSize: 30}}
            type="text"
            name="username"
            id='inputID'
            placeholder='Username:'
            value={formData.username}
            onChange={handleChange}>
          </input>
        </div>
        <br></br>
        <div>
        {/* <label style={{ fontSize: 30}}>Comment: </label> */}
          <textarea style={{fontFamily: 'cursive', fontSize: 30}}
            type="text"
            placeholder=' Comment:'
            id='inputID'
            rows='5'
            cols='48'
            name="comment"
            value={formData.comment}
            onChange={handleChange}>
          </textarea>
        </div>
        <input style={{ fontFamily: 'cursive', fontSize: 18}}type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default ReviewForm