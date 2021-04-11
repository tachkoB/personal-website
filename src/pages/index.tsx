import React from "react"

// Components
import Layout from "../components/Layout"

// Styles
import "../css/tailwind.css"

// Assets
import github from "../images/github-light-big.png"

export default () => {
  const yo = "https://www.google.com/s2/favicons?sz=64&domain_url=linkedin.com"

  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around p-8">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-2 text-2xl text-left text-teal-200 font-bold sm:text-3xl">
              Andrej Tačigin
            </h1>
            <p className="px-4 pt-10 mt-8 text-lg text-teal-500 sm:mt-8">
              Frontend developer, born in Zagreb, based in Berlin.
            </p>
            <p className="px-4 mt-8 text-lg text-teal-500 sm:mt-8">
              Professional experience with React with Typescript, Redux, Redux
              Saga, Material UI, Styled components..
            </p>
            <p className="px-4 mt-8 text-lg text-teal-500  sm:mt-8">
              Big fan of React Testing library and Cypress.
            </p>
            <p className="px-4 mt-8 text-lg  text-teal-500  sm:mt-8">
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

        <div className="flex items-center mx-2 text-teal-500 shadow-xs sm:mx-auto">
          Get in touch through atacigin@gmail.com
        </div>
      </main>
    </Layout>
  )
}
