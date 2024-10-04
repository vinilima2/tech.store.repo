import { IconTag } from '@tabler/icons-react'
import { Product } from '@tstore/core'
import Tag from '../shared/Tag'

export interface ProductSpecificationProps {
    product: Product
}

export default function ProductSpecification(props: ProductSpecificationProps) {
    const { product } = props
    return product ? (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-3">
                <Tag label={product.specifications.emphasis!} icone={IconTag} outlined />
            </div>
            {product?.specifications &&
                Object.keys(product.specifications)
                    .filter((k) => k !== 'destaque')
                    .map((chave) => (
                        <div key={chave} className="flex gap-1">
                            <span className="p-2 w-1/3 bg-white/5 rounded">{chave}</span>
                            <span className="p-2 w-2/3 bg-white/5 rounded">
                                {product.specifications[chave]}
                            </span>
                        </div>
                    ))}
        </div>
    ) : null
}