import { Body,Controller , Get,Post,Put,Delete,Res,HttpStatus,Param,NotFoundException, Query} from '@nestjs/common';
import {CreateProductDTO} from './dto/product.dto';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {

constructor(private productService: ProductService){}

    @Post('/create')
    async httpCreateProduct(@Res() res,@Body() createProductDTO:CreateProductDTO){
      //console.log(createProductDTO);

      const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product,
        });
    }

    @Get()
    async httpGetProducts(){
        const products = await  this.productService.getProducts();
        return products;
    }

    @Get('/:productID')
    async httpGetProduct(@Res() res,@Param('productID') productID){
       // try{
        const product = await this.productService.getProduct(productID)
    if(!product){
        throw new NotFoundException(`Product Does not exists`);
    }        

        return res.status(HttpStatus.OK).json(product);
    //}catch(err){
    //    throw new NotFoundException(`Product Does not exists`);

    //}
    }

    @Delete('/delete')
    async httpDeleteProduct(@Res() res,@Query('productID')productID){
     const productDeleted = await   this.productService.deleteProduct(productID);
     if(!productDeleted){
        throw new NotFoundException(`Product Does not exists`);
    } 
    return res.status(HttpStatus.OK).json({
        message: 'Product Deleted Succesfully',
        productDeleted
    });
    }
    
@Put('/update')
async httpUpdateProduct(@Res() res,@Body() createProductDTO: CreateProductDTO,@Query('productID') productID){

const productUpdated = await this.productService.updateProduct(productID,createProductDTO);
if(!productUpdated){
    throw new NotFoundException(`Product Does not exists`);
} 

return res.status(HttpStatus.OK).json({
    message: 'Product Updated Succesfully',
    productUpdated
});

}

}
