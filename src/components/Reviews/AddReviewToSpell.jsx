import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'

const AddReviewToSpell = ({ addReview }) => {
  const [state, setState] = useState({
    username:'',
    comment: ''
  })

  const { spell_id } = useParams()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({...state,
    [e.target.name]:e.target.value})
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    fetch(`/reviews`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        spell_id: parseInt(spell_id),
        username: state.username,
        comment: state.comment,
      })
    })
    .then(resp => {
      if(resp.ok){
        resp.json().then(addReview)
        navigate(`/spells/${spell_id}`)
      }
    })
   

  }
  return (
    <div className="new-review-container" style={{ textAlign: "center", fontFamily: 'cursive' }}>
      <div>
        <h1 style={{fontSize: 45}}>Add a Review</h1>
        <form onSubmit={ handleSubmit }>
        <div>
          <textarea  style={{fontFamily: 'cursive', fontSize: 30}}
            type='text'
            id='inputID'
            placeholder='Comment:'
            rows='5'
            cols='48'
            name='comment'
            value={state.comment}
            onChange={handleChange}></textarea>
        </div>
        <input style={{ fontFamily: 'cursive', fontSize: 18}}type="submit" value="submit"/>
        </form>
      </div>
    </div>
  )
}

export default AddReviewToSpell