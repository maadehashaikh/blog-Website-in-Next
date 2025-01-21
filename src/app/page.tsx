import React from 'react'
import LandingPage from './Components/LandingPage'
import { client } from '@/sanity/lib/client';

const page = async() => {
  const query = `*[_type=="blog"] | order(_updatedAt asc){
  Title,Description, metadata,
  "image":Image.asset._ref,
  "slug":slug.current 
}`;

const data:Blog[] = await client.fetch(query);
console.log(data);
  return (
    <div>
          <LandingPage data={data} />
    </div>
  )
}

export default page
