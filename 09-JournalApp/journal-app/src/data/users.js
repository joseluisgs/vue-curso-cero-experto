const users = [
  {
    uid: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'jdoe',
    password: 'password',
  },
  {
    uid: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    username: 'jdoe',
    password: 'password',
  },
]

export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users[0])
    }, 1000)
  })
}

export default users
