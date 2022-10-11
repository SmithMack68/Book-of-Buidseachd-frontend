import React from 'react'

const UserPage = ({ user }) => {
  // const [ user, setUser] = useState("")
  // const [errors, setErrors] = useState(false)

  // const params = useParams()
  // const {id} = params


//   useEffect(()=> {
//     fetch("/me")
//     .then(resp => {
//         if(resp.ok){
//             resp.json().then(user => {
//                setUser(user)
//                console.log(user)
//             })
//         }else {
//             resp.json().then(data => setErrors(data.error))
//         }
//     })
   
// }, [])


  // if(errors) return <h1>{errors}</h1>
  return (
    <div style={{textAlign: 'center', fontFamily: 'cursive'}}>
      {/* <user key={user.id}></user> */}
        <h1>Welcome {user.username}</h1>
        <h2>Spells Cast & Reviewed</h2>
        {/* <ul>
            {user.casts.map(cast => (
              <li>
                <h2>{cast.spell.name}</h2>
              </li>
            ))}
        </ul> */}
    </div>
  )
}

export default UserPage