import { Product } from '@prisma/client'

export const calculateProductTotalPrice = (product: Product): number => {
  if (product.discount_percentage === 0) {
    return Number(product.price)
  }

  const discount = Number(product.price) * (product.discount_percentage / 100)
  return Number(product.price) - discount
}

export const formatCurrency = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value)
}
