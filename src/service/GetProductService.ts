import Product from '../model/Product'

class GetProductService {

    public async execute(){

        const productsResult = await Product.find()

        const products = productsResult.map(product => {
            const {productId, price} = product
            return {
                productId,
                price
            }
        })

        return products;
    }
}

export {GetProductService}