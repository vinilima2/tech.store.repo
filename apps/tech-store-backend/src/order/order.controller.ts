import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderPrisma } from './order.prisma';
import { Order } from '@tstore/core';

@Controller('orders')
export class OrderController {

    constructor(private readonly repo: OrderPrisma) { }

    @Post()
    async salvar(@Body() order: Order) {
        return this.repo.save(order);
    }

    @Get()
    async findAll() {
        return this.repo.findAll();
    }

    @Get(':id')
    async findBYId(@Param('id') id: string) {
        return this.repo.findByid(+id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.repo.delete(+id);
    }

}
