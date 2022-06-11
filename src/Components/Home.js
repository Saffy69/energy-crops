import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            We are
            <br className="hidden lg:inline-block" />
            Energy crops
          </h1>
          <p className="mb-8 leading-relaxed">
            We started on our project a long time ago. The start of this project
            was to have a clear concept about the plastic production having an
            adverse effect on human life. After all of that we came up with a
            motive that was to produce biodergadable products.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://video.fktm1-1.fna.fbcdn.net/v/t1.15752-9/253343629_4496846463698640_1695152347011468985_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Bk4xzzIUZLYAX_KVm3W&_nc_ht=video.fktm1-1.fna&oh=03_AVIjw3U9e0MuS86DRTlQ8mnB7nejaVgRI0jNEbYFyICaJg&oe=62C82575"
          />
        </div>
      </div>
      <article className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://video.fktm1-1.fna.fbcdn.net/v/t1.15752-9/258767794_1292611917819156_2850558020038049165_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6jTbYD-SMWYAX81dOr5&_nc_ht=video.fktm1-1.fna&oh=03_AVIKrI8zV9md3GWdY_ZlTjHgG-LxUu7mBsKWD2-PdKnWwA&oe=62C83FEF"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Summary about our Work
            </h1>
            <p className="leading-relaxed mb-8">
              The project we have been working on has had the most investment
              from our share holders belonging from different countries. The
              distinct idea was inspired by different idols which helped us to
              reach at this stage. Take a look at few of our products -
            </p>
            <div className="flex justify-center">
              <Link to="/products">
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
