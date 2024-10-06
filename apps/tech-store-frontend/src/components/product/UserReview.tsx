import {Product} from '@tstore/core'
import RateReview from '../shared/RateReview'

export interface UserReviewProps {
    product: Product
}

export default function UserReview(props: UserReviewProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-2xl font-semibold">
                    User Reviews
                </span>
            </div>
            <p className="font-light text-zinc-300">
                The product is praised for its performance, sound quality and
                practicality. Customers highlight the good value for money, the
                quality of the built-in microphone and ease of installation.
                Some mention that the product is ideal for gaming and that the
                Performance is excellent, even without a dedicated graphics card.
                Others highlight the sound quality and comfort of the headphones.
                heard.
            </p>
            <div className="flex items-center gap-5 mt-5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="text-7xl text-pink-600">
                        {props.product.rating}
                    </div>
                    <RateReview rate={props.product.rating} size={18}/>
                    <div className="font-light text-sm text-zinc-300">
                        (5 Comments)
                    </div>
                </div>
                <div className="flex-1 flex items-center bg-violet-dark/50 h-32 rounded-xl">
                    <ul className="flex flex-col list-disc px-10 gap-1">
                        <li>Excellent performance.</li>
                        <li>Dedicated graphic.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}