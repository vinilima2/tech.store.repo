import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaProvider extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    async onModuleDestroy() {
        await this.$disconnect();
    }
    
    async onModuleInit() {
        await this.$connect();
    }
}
