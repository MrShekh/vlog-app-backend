import express from 'express';

import registerController from '../controller/register_controller.js';

const router = express.Router();
router.post('/register', registerController);

export default router;