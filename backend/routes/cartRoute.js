import express from 'express';
import { addToCart,clearCart,deleteCartItem,getCart,updateCartItem } from '../controllers/CartController';

import authMiddleware from '../middlewares/authMiddleware.js';

const router=express.Router();

router.route('/')
    .get(authMiddleware,getCart)
    .post(authMiddleware,addToCart)

router.route('/clear',authMiddleware,clearCart)

router.route('/:id')
    .put(authMiddleware,updateCartItem)
    .delete(authMiddleware,deleteCartItem)

export default router;