// import express from 'express';
// import { loginUser,registerUser,adminLogin } from '../controllers/userController.js';

// const userRouter = express.Router();

// userRouter.post('/register',registerUser)
// userRouter.post('/login',loginUser)
// userRouter.post('/admin',adminLogin)

// export default userRouter;

import express from 'express';
import { loginUser, registerUser, forgotPassword, adminLogin ,resetPassword } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/forgot-password', forgotPassword); // New route for password reset
userRouter.post('/admin', adminLogin);
userRouter.post('/reset-password', resetPassword);

export default userRouter;
