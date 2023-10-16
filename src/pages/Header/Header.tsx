import React, { useState } from "react"
import "./Header.css"
import { Link, Outlet } from "react-router-dom"

function Header() {
  const navItems = [
    { name: "Shop", link: "/shop" },
    { name: "Features", link: "/features" },
    { name: "Recipes", link: "/recipes" },
    { name: "Hotline", link: "/hotline" },
  ]
  const [selected, setSelcted] = useState("")

  const titleClick = () => {}

  const selectOption = (e) => {
    setSelcted(e.target.innerHTML)
  }

  return (
    <>
      <nav className="innerWidth paddings">
        {/* innerWidth will put space beside the content */}
        <div className="flexBetween">
          <Link to={"./"}>
            <div onClick={() => titleClick()} style={{ fontSize: "3rem", fontWeight: "bold", cursor: "pointer" }}>
              Ronald's
            </div>
          </Link>
          <div className="flex menu-mid">
            {navItems.map((item, index) => (
              <div key={index} className={selected == item.name ? "selectedMenu" : ""} onClick={(e) => selectOption(e)}>
                <Link to={item.link}>{item.name}</Link>
              </div>
            ))}
          </div>
          <div className="flex menu-right">
            <button className="boderless-button">Log in</button>
            <button className="button">Sign Up</button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header
