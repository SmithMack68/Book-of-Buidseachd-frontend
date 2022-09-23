// export const baseUrl = 'http://localhost:3001';
// export const headers = {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
// }



export const createAccount = async details => {

}

export const login = async details => {

}

export const logout = async () => {

}

export const getCurrentUser = async (handleCurrentUser) => {
  const resp = await fetch(baseUrl + '/current-user')
  const data = await resp.json()

  handleCurrentUser(data);
}
