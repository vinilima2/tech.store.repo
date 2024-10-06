import { useContext } from 'react'
import ContextCart from '../contexts/ContextCart'

const useCart = () => useContext(ContextCart)
export default useCart
