import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'

const AddSpell = ({ addSpell }) => {
  const [form, setForm] = useState({
    name: '',
    image: '',
    short_description: '',
    requirements: '',
    incantation: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({...form,
      [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/spells', {
      method:'POST',
      headers,
      body: JSON.stringify(form)
    })
    .then(resp => {
      if(resp.ok){
      resp.json().then(addSpell)
      navigate('/spells')
    }
  })

}
  return (
    <div className="new-spell-container" style={{ textAlign: "center", fontFamily: 'cursive' }}>
    <div>
      <h1 style={{fontSize: 45}}>Add a Spell</h1>
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

export default AddSpell

