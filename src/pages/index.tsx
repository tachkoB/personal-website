import React from "react"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              My website yall
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Born in Zagreb, based in Berlin.
            </p>
          </div>
        </div>
        <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto"></div>
      </main>
    </Layout>
  )
}
