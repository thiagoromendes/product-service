import { Request, Response } from "express";
import { CreateProductSerivce } from "../service/CreateProductSerivce";
import { GetProductService } from "../service/GetProductService";

class ProductController {

    async create(request:Request, response:Response){

        const productBody = request.body

        const createProduct = new CreateProductSerivce()

        const product = await createProduct.execute(productBody)

        return response.json(product);

    }

    async show(request:Request, response:Response){

        const getProduct = new GetProductService()

        const products = await getProduct.execute()

        return response.json(products)
    }
}

export {ProductController}