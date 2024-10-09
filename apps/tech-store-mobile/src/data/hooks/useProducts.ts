import { useContext } from 'react'
import ProductsContext from "@/src/data/contexts/ProductsContext";

const useProducts = () => useContext(ProductsContext)
export default useProducts
