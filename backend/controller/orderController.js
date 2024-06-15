const orderModel = require('../models/orderModel')

exports.createOrder  = async(req,res,next) => {
    console.log("test",req.body);
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,items) => (acc + items.product.price * items.qty),0)).toFixed(2);
    const status = 'hold';
    const createdAt = new Date();
   
    const order = await orderModel.create({cartItems,amount,status,createdAt})

    res.json({
        success: true,
        message: 'create order',
        order
    })
}