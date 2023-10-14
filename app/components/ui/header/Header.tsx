import MyCart from "../../carts/MyCart"
import CategorySidebar from "../../products/categories/CategorySidebar"
import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"
import MainMenu from "./MainMenu"

const Header = () => {
  return (
    <>
    <header className="ec-header">
        <HeaderTop/> 
        <HeaderBottom/>
        <MainMenu/>
        <MyCart/>
        <CategorySidebar/>

</header>
    </>
  )
}

export default Header