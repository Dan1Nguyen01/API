const express = require('express');
const User  = require('../../models/user model/user-model');
const router = express.Router();
const {createUser,getAUser,getAllUser,deleteUser,updateUser} = require('../../controllers/admin/user/userControlled')

// Getting all
router.get('/', getAllUser)
  
  // Getting One
  router.get('/:id', getAUser)
  
  // Creating one
  router.post('/',createUser )
  
  // Updating One
  router.patch('/:id', updateUser)
  
  // Deleting One
  router.delete('/:id', deleteUser)
  
  
  module.exports = router