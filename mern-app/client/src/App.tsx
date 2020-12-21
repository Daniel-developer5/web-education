import React, { useEffect, useState } from 'react'

import Axios from 'axios'

interface IFriend {
  name: string,
  age: number | string | null,
  description?: string,
}

interface ReceivedFriend extends IFriend {
  readonly id: string,
}

const App: React.FC = () => {
  const 
    [ name, setName ] = useState<string>(''),
    [ age, setAge ] = useState<string>(''),
    [ description, setDescription ] = useState<string>(''),
    [ friends, setFriends ] = useState<ReceivedFriend[]>([])

  useEffect(() => {
    Axios.get(`/read`)
      .then(res => setFriends(res.data))
      .catch(() => console.log('ERR'))
  }, []) 

  const addFriend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const friend: IFriend = {
      name, age: +age, description,
    }
    
    Axios.post(`/addfriend`, friend)
      .then(() => {
        setFriends([...friends, { 
          name, age: +age, id: Date.now().toString(), description,
        }])
      })

    setName('')
    setAge('')
    setDescription('')
  }

  const updateFriend = (id: string) => {
    const age = prompt('Enter new age')
    const newAge = age && +age

    Axios.put(`/update`, { newAge, id, })
      .then(() => {
        setFriends(friends.map(friend => {
          return friend.id === id ? { ...friend, age: newAge } : friend
        }))
      })
  }

  const removeFriend = (id: string) => {
    Axios.delete(`/delete/${id}`)
      .then(() => {
        setFriends(friends.filter(friend => friend.id !== id))
      })
  }

  return (
    <>
      <form className="p-4" onSubmit={addFriend}>
        <input 
          type="text" 
          className="form-control mt-2 mb-2" 
          placeholder="Friend Name" 
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <input 
          type="number" 
          className="form-control mt-2 mb-2" 
          placeholder="Friend Age" 
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
        />
        <textarea 
          className="form-control" 
          placeholder="Description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-2">Add Friend</button>
      </form>
      <ul className="friends m-0 p-4">
        { 
          friends.length ?
          friends.map(({ name, age, description, id }) => (
            <div className="card p-2 mt-1 mb-1" key={id}>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
              {description ? <p>Description: {description}</p> : null}
              <div>
                <button className="btn btn-danger mr-1" onClick={() => removeFriend(id)}>Remove</button>
                <button className="btn btn-success" onClick={() => updateFriend(id)}>Update</button>
              </div>
            </div>
          )) :
          null
        } 
      </ul>
    </>
  )
}

export default App;
