import Image from 'next/image'
import CategoryList from './_components/category-list'
import Header from './_components/header'
import Search from './_components/search-input'
import ProductList from './_components/product-list'
import { Button } from './_components/ui/button'
import { ChevronRightIcon } from 'lucide-react'
import { db } from './_lib/prisma'

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  })

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-2 pt-6">
        <Image
          src="/banners/01.svg"
          alt="Até 30% de desconto em pizzas"
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="flex h-fit items-center p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>
    </>
  )
}

export default Home
