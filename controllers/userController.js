const User = require("./../models/userModel");

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users: users,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
    });
  }
}

async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newuser: newUser
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Invalid input!'
        })
    }
}

module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser
}
