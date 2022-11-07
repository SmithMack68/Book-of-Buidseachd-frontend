import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'

const EditSpell = ({ updateSpell }) => {
  const [form, setForm] = useState({
    name: '',
    image: '',
    short_description: '',
    requirements: '',
    incantation: ''
  })
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/spells/${params.id}`)
    .then(resp => resp.json())
    .then(setForm)
  }, [params.id])

 
  const handleChange = (e) => {
    setForm({...form,
      [e.target.name]:e.target.value})
  }

 const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/spells/${params.id}`, {
      method:'PATCH',
      headers,
      body: JSON.stringify(form)
    })
    .then(resp => {
      if(resp.ok){
      resp.json().then(updateSpell)
      navigate(`/spells/${params.id}`)
    }
  })

}

  return (
    <div className="edit-spell-container" style={{ textAlign: "center", fontFamily: 'cursive' }}>
    <div>
      <h1 style={{fontSize: 45}}>Update Spell</h1>
      <form onSubmit={ handleSubmit }>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 30}}
          type='text'
          id='inputID'
          placeholder='Name of Spell:'
          name='name'
          value={form.name}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 30}}
          type='text'
          id='inputID'
          placeholder='Image:'
          name='image'
          value={form.image}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <div>
        <textarea  style={{fontFamily: 'cursive', fontSize: 30}}
          type='text'
          id='inputID'
          rows='2'
          columns='40'
          placeholder='Short Description:'
          name='short_description'
          value={form.short_description}
          onChange={handleChange}></textarea>
      </div>
      <br></br>
      <div>
        <textarea  style={{fontFamily: 'cursive', fontSize: 30}}
          type='text'
          id='inputID'
          rows='2'
          columns='40'
          placeholder='Requirements:'
          name='requirements'
          value={form.requirements}
          onChange={handleChange}></textarea>
      </div>
      <br></br>
      <div>
        <input  style={{fontFamily: 'cursive', fontSize: 30}}
          type='text'
          id='inputID'
          placeholder='Incantation:'
          name='incantation'
          value={form.incantation}
          onChange={handleChange}></input>
      </div>
      <br></br>
      <input style={{ fontFamily: 'cursive', fontSize: 18}}type="submit" value="submit"/>
      </form>
    </div>
  </div>
  )
}

export default EditSpell