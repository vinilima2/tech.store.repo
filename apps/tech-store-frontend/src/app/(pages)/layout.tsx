import Page from "@/components/template/Page"
import {ProductsProvider} from "@/data/contexts/ProductsContext";
import {CartProvider} from "@/data/contexts/ContextCart";
import {PaymentProvider} from "@/data/contexts/PaymentContext";

export default function Layout(props: any) {
    return (
        <ProductsProvider>
            <CartProvider>
                <PaymentProvider>
                    <Page>
                        {props.children}
                    </Page>
                </PaymentProvider>
            </CartProvider>
        </ProductsProvider>
    )
}