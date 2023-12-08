import ICategory from "./category"

interface IProduct {
    id: number
    name: string
    price: number
    available_stock: number
    active: boolean
    category: ICategory
}

export default IProduct