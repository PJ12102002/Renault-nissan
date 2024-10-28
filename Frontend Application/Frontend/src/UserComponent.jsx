import { useEffect, useState } from "react";
import axios from 'axios';

const UserComponent = () =>
{
    const [users,setUsers]=useState([]);
    const [name,setName]=useState([]);
    const [email,setEmail]=useState([]);


    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);

    };

    const addUser = async () => {
        const response = await axios.post('http://localhost:5000/users',{name,email})
        setUsers([...users, response.data]);
        setName(' ');
        setEmail(' ');
    };

    useEffect(()=>
    {
        fetchUsers();
    },[]);

return(
    <><h1>Users</h1>'
    <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
        <br />
        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <button onClick={addUser}>Add User</button>
        <ul>
            {users.map(users=>(
                <li key={users.id} > {users.name} - {users.email} </li>
            ))}
        </ul>

        
        
        </>
)
}

export default UserComponent;