import Image from 'next/image'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex justify-between px-5 pt-6">
      <Image src="/Logo.svg" alt="FSW Foods" width={100} height={30} />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <Menu />
      </Button>
    </header>
  )
}

export default Header
