'use client'
import Image from 'next/image'

export default function Page() {
    return (
        <div className="flex flex-col gap-7 container">
            <div className="flex flex-col justify-center items-center gap-5 py-20">
                <div className="relative w-72 h-72">
                    <Image src="/logo.png" alt="Sucesso" fill/>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h1
                        className="
                            text-3xl font-bold
                            bg-gradient-to-r from-white to-emerald-500
                            bg-clip-text text-transparent

                        "
                    >
                        Create order with success!
                    </h1>
                    <p className="text-zinc-500">
                        You will receive an e-mail with purchase details.
                    </p>
                </div>
            </div>
        </div>
    )
}
