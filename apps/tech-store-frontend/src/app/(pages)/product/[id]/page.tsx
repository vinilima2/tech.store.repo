'use client'
import ProductInfo from "@/components/product/ProductInfo";
import ProductNotFound from "@/components/product/ProductNotFound";
import ProductTitle from "@/components/product/ProductTitle";
import PurchaseBanner from "@/components/product/PurchaseBanner";
import { products } from "@tstore/core";
import PriceMeter from "@/components/product/PriceMeter";
import UserReview from "@/components/product/UserReview";
import SpecialReview from "@/components/product/SpecialReview";
import useProducts from "@/data/hooks/useProducts";

export default function ProductPage(props: any) {
    const id = +props.params.id;
    const { findById } = useProducts();
    const product = findById(id)
    
    return product ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <ProductTitle product={product} />
                <ProductInfo product={product} />
                <PurchaseBanner product={product} />
                <PriceMeter product={product} />
            </div>
            <UserReview product={product} />
            <SpecialReview product={product} />
        </div>)
        : (<ProductNotFound />)

}