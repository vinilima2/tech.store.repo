import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from '@tstore/core';

@Controller('products')
export class ProductController {
    //NOT RECOMMENDED INCLUDE REPOSITORY CALL FROM CONTROLLER
    constructor(private readonly repo: ProductRepository) { }

    @Post()
    save(@Body() product: Product): Promise<void> {
        return this.repo.save(product)
    }

    @Get()
    findAll(): Promise<Product[]> {
        return this.repo.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Product> {
        return this.repo.findById(+id)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.repo.delete(+id)
    }

}
