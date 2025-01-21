import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const LandingPage = ({ data }: { data: Blog[] }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap gap-20 justify-center py-4">
      {data.map((blog) => (
        <div key={blog.slug} className="p-4 md:w-1/4 sm:w-1/2 bg-gray-500">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={urlFor(blog.image).url()}
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {blog.Title}
              </h1>
              <p className="leading-relaxed mb-3 text-white">
                {blog.Description.length > 100
                  ? blog.Description.slice(0, 100) + "..."
                  : blog.Description}
              </p>
              <div className="flex items-center flex-wrap">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="bg-white text-black font-bold p-2 rounded-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
