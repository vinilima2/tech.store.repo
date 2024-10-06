import { IconShoppingCartOff } from '@tabler/icons-react'

export default function EmptyCart() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-violet-300 py-10">
            <IconShoppingCartOff size={180} stroke={0.5} />
            <span className="text-violet-300 font-light">
                The cart is empty.
            </span>
        </div>
    )
}
