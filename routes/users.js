import Express from 'express'

import {getUsers, createUser, foundUser, deleteUser, patchUser} from '../controllers/users.js'

const router = Express.Router();

router.get('/', getUsers);

router.post('/', createUser)

router.get('/:id', foundUser)

router.delete('/:id', deleteUser)

router.patch('/:id', patchUser)

export default router;