import { Product } from '@tstore/core'
import Image from 'next/image'
import ProductSpecification from './ProductSpecification'

export interface ProductInfoProps {
    product: Product
}

export default function ProductInfo(props: ProductInfoProps) {
    const { product } = props
    return product ? (
        <div className="flex items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image
                    src={product.image!}
                    fill
                    className="object-cover p-7"
                    alt="Product Image"
                />
            </div>
            <ProductSpecification product={product!}/>
        </div>
    ) : null
}