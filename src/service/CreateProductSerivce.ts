import Product from '../model/Product'

interface ProductBody {
    productId: String,
    price: Number
}

class CreateProductSerivce {

    public async execute({productId,price}:ProductBody){

        const product = new Product({productId, price})

        product.save()

        return product;
    }
}

export {CreateProductSerivce}