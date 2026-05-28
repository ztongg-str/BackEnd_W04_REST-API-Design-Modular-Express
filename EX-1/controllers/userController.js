import users from "../models/userModel.js"

// GET /users - List all users
export const getAllUsers = (req, res) => {
    res.json(users);
}

// GET /users/:id - Get one user
export const getUserByID = (req, res) => {
    const userID = parseInt(req.params.id);
    const user = users.find( u => u.id === userID);
    if(!user) return res.status(404).json({"error": 'User not found'});

    res.status(200).json(user)
    
}

// POST /users - Create new user
export const createUser = (req,res) => {
    const {name, email} = req.body
    if (!name || !email){
        return res.status(400).json({"error": "Name and email are required"})
    }

    const newUser = {
        id: users.length + 1,
        "name": name,
        "email": email 
    } 

    users.push(newUser)
    res.status(201).json(newUser);
} 

// PUT /users/:id - Update user
export const updateUser = (req, res) => {
    const userID = parseInt(req.params.id)
    const { name, email} = req.body

    const user = users.find( u => u.id === userID)
    if( !user) return res.status(404).json({error: "User not found" })

    if (user) user.name = name;
    if (email) user.email = email;
    res.json(user)
}

// DELETE /users/:id - Delete user

export const deleteUserbyID = (req, res) => {
    const userID = parseInt(req.params.id)
    const index = users.findIndex( u => u.id === userID)

    if( index === -1) return res.status(404).json({error: "User not found"})
    users.splice(index,1)
    res.status(204).send();

}