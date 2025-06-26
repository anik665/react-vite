import { useState, useEffect } from 'react'

function App() {
  const [users, setusers] = useState([])

  const Card = ({ name, email, phone }) => {
    return (
      <div className="border-2 border-blue-500 rounded-lg shadow-xl p-4 m-4 bg-white flex flex-col justify-between w-[250px] h-[200px]">
        <div>
          <h3 className="bg-red-500 p-1 rounded"><strong>Name : </strong>{name}</h3>
          <h3 className="mt-2"><strong>Email : </strong>{email}</h3>
        </div>
        <h4 className="text-gray-700"><strong>Phone : </strong>{phone}</h4>
      </div>
    )
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setusers(data))
  }, [])

  return (
    <div className="flex flex-wrap justify-center bg-gray-100 min-h-screen p-6">
      {users.map(user => (
        <Card
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>
  )
}

export default App
