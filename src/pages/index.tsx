import React from "react"
import Layout from "../components/Layout"
import github from "../../public/github-light-big.png"

export default () => {
  const yo = "https://www.google.com/s2/favicons?sz=64&domain_url=linkedin.com"

  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Andrej Tacigin
            </h1>
            <p className="px-4 mt-8 text-lg text-teal-500 sm:mt-8">
              Born in Zagreb, based in Berlin.
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
          <a href="https://www.linkedin.com" target="blank">
            <img src={yo} />
          </a>
          <a href="https://www.github.com" target="blank">
            <img src={github} alt="" />
          </a>
        </div>

        <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
          Get in touch
        </div>
      </main>
    </Layout>
  )
}
