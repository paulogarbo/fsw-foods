import { Prisma } from '@prisma/client'
import Image from 'next/image'
import { calculateProductTotalPrice, formatCurrency } from '../_helpers/price'
import { Badge } from './ui/badge'
import { ArrowDownIcon } from 'lucide-react'

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true
        }
      }
    }
  }>
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-4">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discount_percentage > 0 && (
          <div className="absolute left-2 top-2">
            <Badge className="gap-[2px] px-2 py-[2px]">
              <ArrowDownIcon size={12} />
              <span className="text-xs font-semibold">
                {product.discount_percentage}%
              </span>
            </Badge>
          </div>
        )}
      </div>

      <div>
        <h2 className="truncate text-sm">{product.name}</h2>

        <div className="flex items-center gap-2">
          <span className="font-semibold">
            {formatCurrency(calculateProductTotalPrice(product))}
          </span>
          {product.discount_percentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>

        <span className="block text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  )
}

export default ProductItem
