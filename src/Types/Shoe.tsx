export interface Shoe {
  __v: number,
  updatedAt: string,
  _id: string,
  model: string,
  brand: string,
  category: any,
  color: string,
  size: number,
  img: string,
  country: string,
  price: number,
  quantity: number,
  description?: string,
  gender?: "Male" | "Female",
  Material?: string,
  reviews?: any,
  isfav: boolean
}