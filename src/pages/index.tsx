import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/Layout"

// Styles
import "../styles/site.css"

// Assets
import github from "../images/github-light-big.png"

export default () => {
  const yo = "https://www.google.com/s2/favicons?sz=64&domain_url=linkedin.com"

  const [isCopied, setIsCopied] = useState(false)
  const email = "atacigin@gmail.com"

  useEffect(() => {
    isCopied &&
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
  }, [isCopied])

  const handleClick = () => {
    const ua = window.navigator.userAgent
    const isIE = /MSIE|Trident/.test(ua)

    if (isIE) {
      return (window.location.href = "https://www.google.com/chrome/")
    }

    navigator.clipboard.writeText(email)
    setIsCopied(true)
  }

  return (
    <>
      <Layout>
        <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around p-8">
          <div className="sm:flex sm:flex-row-reverse sm:items-center">
            <div className="sm:px-2">
              <h1 className="px-4 pt-2 text-2xl text-left text-primary  font-bold sm:text-3xl">
                Andrej Tačigin
              </h1>
              <p className="px-4 pt-10 mt-8 text-lg text-secondary sm:mt-8">
                Frontend developer, born in Zagreb, based in Berlin.
              </p>
              <p className="px-4 mt-8 text-lg text-secondary sm:mt-8">
                Professional experience with React with Typescript, Redux, Redux
                Saga, Material UI, Styled components..
              </p>
              <p className="px-4 mt-8 text-lg text-secondary  sm:mt-8">
                Big fan of React Testing library and Cypress.
              </p>
              <p className="px-4 mt-8 text-lg  text-secondary  sm:mt-8">
                Enjoy clean, well documented code.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-6/12 content-center">
              <a
                href="https://www.linkedin.com/in/andrej-tacigin-tachko/"
                target="blank"
              >
                <img src={yo} className="h-20 w-20 mx-auto" alt="Linkedin" />
              </a>
            </div>
            <div className="w-6/12">
              <a href="https://github.com/tachkoB" target="blank">
                <img src={github} className="h-20 w-20 mx-auto" alt="Github" />
              </a>
            </div>
          </div>

          <div className="flex items-center mx-2 text-secondary shadow-xs sm:mx-auto">
            <p>
              Get in touch through{"  "}
              <span onClick={handleClick} className="cursor-pointer">
                {email}
              </span>
            </p>
          </div>
        </main>
      </Layout>
      {isCopied && (
        <div className="fixed w-full h-full top-0 left-0 z-30 pointer-events-none">
          <div className="fixed w-full h-full flex items-center justify-center pointer-events-none text-white  svelte-1ym8qvd">
            <div
              className="pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto
        rounded items-center shadow-sm h-12 bg-gray-800   bottom-0 "
            >
              Copied to clipboard
            </div>
          </div>
        </div>
      )}
    </>
  )
}
