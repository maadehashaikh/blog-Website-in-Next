import { title } from "process";

export const blog = {
  name : "blog",
  title : "blog",
  type:"document",

  fields:[{
   name : "Title",
   type:'string',
   title:'Title',
  },
  {
    name:"Description",
    type:"text",
    title:"Description"
  }
  , {
    name:"slug",
    type:"slug",
    title:"Slug",
    options:{ 
     source:'Title',  
    }
  },
  {
    name: "Image",
    type: "image",
    title: "Image",
    options: { 
      hotspot: true  // Corrected: Boolean instead of a string
    }
  }
  , 
    {
    title:"metaInfo",
    name:"metaInfo",
    type:"array",
    of:[{type:'block'}]

    }
  
  ]
}