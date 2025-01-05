import { Restaurant } from '@prisma/client'
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from 'lucide-react'
import Image from 'next/image'
import { formatCurrency } from '../_helpers/price'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface RestaurantItemProps {
  restaurant: Restaurant
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-64 max-w-64 space-y-3">
      <div className="relative h-32 w-full">
        <Image
          src={restaurant.image_url}
          alt={restaurant.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        <div className="absolute left-2 top-2">
          <Badge className="gap-[2px] px-2 py-[2px]" variant={'secondary'}>
            <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold">5.0</span>
          </Badge>
        </div>

        <Button
          size={'icon'}
          className="absolute right-2 top-2 size-7 rounded-full bg-muted-foreground/40"
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>

      <div>
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <BikeIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.delivery_fee) === 0
                ? 'Entrega grátis'
                : formatCurrency(Number(restaurant.delivery_fee))}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <TimerIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {restaurant.delivery_time_minutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantItem
