import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full h-screen overflow-hidden">
  
    <div className="text-center grid place-items-center  h-full w-full">
        <div>

      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-rose-600 ">
        404
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
        Something's missing.
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 ">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.{" "}
      </p>
      <Link
        to="/"
        className="inline-flex text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
      >
        Back to Homepage
      </Link>
        </div>
    </div>
 
</section>

  )
}

export default Error