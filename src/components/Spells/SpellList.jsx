import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SpellList = ({ loggedIn }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if( !loggedIn ) {
      navigate('/login')
    }
  }, [loggedIn])


  return (
    <div>
        <h1>Spells</h1>
    </div>
  )
}

export default SpellList