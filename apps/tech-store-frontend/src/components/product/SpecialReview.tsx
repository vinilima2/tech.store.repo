import { Product } from '@tstore/core'

export interface SpecialReviewProps {
    product: Product
}

export default function SpecialReview(
    props: SpecialReviewProps,
) {
    const { product } = props
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    <span className="text-2xl font-semibold">
                        Special Review
                    </span>
                </div>
                <p className="font-light text-zinc-300">
                    *The reviews we present are not developed by
                    us, but rather through channels specialized in technology, which
                    provide an in-depth and impartial analysis of products.
                </p>
            </div>
            <div className="relative lg:h-[500px]">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={product?.videoURL}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}