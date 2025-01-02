import { Category } from '@prisma/client'
import Image from 'next/image'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-md">
      <Image
        src={category.image_url}
        alt={category.name}
        width={25}
        height={25}
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  )
}

export default CategoryItem
