import React from "react"
import SEO from "../SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-black">
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Andrej Tacigin 2021
        </footer>
      </div>
    </>
  )
}

export default Layout
