import { Status } from './Status'
import { PaymentType } from './PaymentType'
import OrderItem from './OrderItem'
import DeliveryOrder from './DeliveryOrder'

export default interface Order {
    id: number
    date: Date
    items: OrderItem[]
    totalValue: number
    status: Status
    paymentType: PaymentType
    delivery: DeliveryOrder
}
