import Product from './Product'

export default class Filter {
    execute(search: string, products: Product[]): Product[] {
        const words = search.toLowerCase().split(' ')
        return products.filter((p) => {
            const text = `
                ${p.name}
                ${p.description}
                ${Object.values(p.specifications).join(' ')}
                ${p.brand}
            `.toLowerCase()
            return words.every((word) => text.includes(word))
        })
    }
}