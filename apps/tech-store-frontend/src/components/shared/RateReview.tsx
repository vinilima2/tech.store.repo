import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

export interface RateReviewProps {
    rate: number
    size?: number
}

export default function RateReview(props: RateReviewProps) {
    function countStars(rate: number) {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (rate >= i) {
                stars.push(<IconStarFilled key={i} size={props.size ?? 12} />)
            } else if (rate >= i - 0.5) {
                stars.push(<IconStarHalfFilled key={i} size={props.size ?? 12} />)
            } else {
                stars.push(<IconStar key={i} size={props.size ?? 12} />)
            }
        }
        return stars
    }

    return <div className="flex gap-0.5 text-emerald-400">{countStars(props.rate)}</div>
}