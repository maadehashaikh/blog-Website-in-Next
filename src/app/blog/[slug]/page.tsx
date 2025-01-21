import Comments from "@/app/Components/Comments";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type=="blog" && slug.current == "${slug}"]
  {
    Title,Description, metaInfo,
    "image":Image.asset._ref,
    slug
  }[0]`;
  const data = await client.fetch(query);

  return (
    <div className="container mx-auto p-6">
      {/* Meta Information */}
      <meta name="title" content="Dummy Blog Title" />
      <meta
        name="description"
        content="This is a dummy description for the blog page."
      />
      <meta name="keywords" content="dummy, blog, example, meta data" />
      <meta name="author" content="John Doe" />

      {/* Blog Content */}
      <h1 className="text-3xl font-bold mb-4">{data.Title}</h1>
      <p className="text-gray-700 mb-4">{data.Description}</p>

      {/* Image */}
      <img
        src={urlFor(data.image).url()}
        alt="Dummy Blog"
        className="w-1/3 h-[60vh] object-cover mb-4"
      />

      {/* Meta Info */}

      <div className="p-4 bg-gray-100 rounded-md">
        {data.metaInfo?.map((data: any) => (
          <p key={data._key} className="text-gray-900 mb-2">
            {data.children?.map((child: any, index: number) =>
              child.marks?.length > 0 ? (
                <strong key={index}>{child.text}</strong> // Make marked text bold
              ) : (
                child.text
              )
            )}
          </p>
        )) || <p className="text-gray-500">No metadata available</p>}
      </div>

      <Comments />
    </div>
  );
};

export default page;
