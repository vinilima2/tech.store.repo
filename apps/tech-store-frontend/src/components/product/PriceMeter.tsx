import {Product} from '@tstore/core'
import {
    IconChevronDown,
    IconMoodConfuzed,
    IconMoodHappy,
    IconMoodSad,
} from '@tabler/icons-react'

export interface PriceMeterProps {
    product: Product
}

export default function PriceMeter(props: PriceMeterProps) {
    const {
        lowestPrice: min,
        highestPrice: max,
        promotionalPrice: actual,
        averagePrice: average,
    } = props.product

    let percentage
    if (actual > average) {
        percentage = ((actual - average) / (max - average)) * 50 + 50
    } else {
        percentage = (1 - (average - actual) / (average - min)) * 50
    }

    return (
        <div className="flex flex-col border border-white/10 p-7 rounded-xl gap-4 bg-violet-dark">
            <div className="flex items-center gap-2">
                {percentage >= 40 && percentage < 60 ? (
                    <IconMoodConfuzed
                        size={40}
                        stroke={1.5}
                        className="text-yellow-500"
                    />
                ) : percentage >= 60 ? (
                    <IconMoodSad
                        size={40}
                        stroke={1.5}
                        className="text-red-500"
                    />
                ) : (
                    <IconMoodHappy
                        size={40}
                        stroke={1.5}
                        className="text-green-500"
                    />
                )}
                <div className="flex flex-col">
                    <div className="flex gap-1.5">
                        <span>The product price is</span>
                        <div className="font-bold">
                            {percentage >= 40 && percentage < 60 ? (
                                <span className="text-yellow-500">
                                    on average
                                </span>
                            ) : percentage >= 60 ? (
                                <span className="text-red-500">
                                    above average
                                </span>
                            ) : (
                                <span className="text-green-500">
                                    below average
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="text-zinc-400 text-sm">
                        Based on the price of the last{' '}
                        <span className="text-white">30 days</span>.
                    </div>
                </div>
            </div>

            <div
                className="
                    flex items-center h-2 bg-gradient-to-r
                    from-green-500 via-yellow-400 to-red-500
                    rounded-full relative border-2 border-black
                "
            >
                <div
                    className="absolute flex justify-center items-center h-4 w-4 bg-white rounded-full"
                    style={{
                        left: `${percentage}%`,
                    }}
                >
                    <IconChevronDown
                        size={20}
                        className="absolute text-white -mt-8"
                    />
                    <div className="h-2.5 w-2.5 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    )
}