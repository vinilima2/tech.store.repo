import Priceable from "./Priceable"
import Specification from "./Specification"

//Use DDD or another design pathern, use class is more interesting for business rules.
export default interface Product extends Priceable {
    id: number,
    name: string,
    description: string,
    brand: string,
    model: string,
    image: string,
    rating: number,
    videoURL: string,
    tags: string[]
    specifications: Specification
}