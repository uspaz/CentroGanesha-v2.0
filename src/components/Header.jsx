import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

const Header = () => {
  const navList = [
    { name: 'Inicio', link: '/' },
    { name: '¿Qué es Reiki?', link: '/' },
    { name: 'Sobre mi', link: '/' },
    { name: 'Servicios', link: '/' },
    { name: 'Contacto', link: '/' },
  ]
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="w-full h-[100px] md:rounded-full bg-[#2D331E] flex items-center justify-center">
      <span className=" font-caveat text-white text-[38px] order-2">
        Centro Ganesha
      </span>
      {showMenu ? (
        <IoClose
          className="absolute top-5 left-5 text-white z-10"
          size={30}
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <IoMenu
          onClick={() => setShowMenu(true)}
          className="absolute top-8.5 left-6 text-white"
          size={35}
        />
      )}
      <nav
        className={`${
          showMenu ? 'translate-y-0' : '-translate-y-full'
        } w-full h-screen absolute top-0 left-0 flex  items-center font-bai bg-[#1D331e] text-white text-xl transition-all duration-500`}
      >
        <ul className="flex flex-col justify-around w-full h-full">
          {navList.map((item, index) => (
            <li
              key={index}
              className="w-full h-full flex items-center justify-center cursor-pointer  hover:bg-[#A9BC81] transition-all duration-500"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
