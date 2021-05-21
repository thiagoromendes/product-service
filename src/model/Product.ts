import {Schema, model} from 'mongoose'

interface IProduct {
    productId: String,
    price: Number
}

const ProductSchema = new Schema<IProduct>({
    productId: {type: String, require: true},
    price: {type: Number, require: true}
})

const Product = model<IProduct>("Product", ProductSchema)

export default Product;