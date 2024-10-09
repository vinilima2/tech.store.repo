import { useContext } from 'react'
import ContextCart from "@/src/data/contexts/ContextCart";

const useCart = () => useContext(ContextCart)
export default useCart
