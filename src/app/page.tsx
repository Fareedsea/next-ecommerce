import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { category } from "@/sanity/category";

const res = await client.fetch(`*[_type=="product"] {
  price,
    _id,
    title,
    image,
    category -> {
    name
    }
    
}`)

interface IProduct {
    title: string,
    description: string,
    price: number,    
    image: string,
    category: {
            name: string
          }  
    }
  

export default async function Home() {
 
  return (
   <div>
        {
          res.map((data)=> {
            return (
              <div>
                <Image src={urlFor(data.image).url()} alt="Sanity Image" width={200} height={200}/>
                <h1>{data.title}</h1>
                <h1>{data.description}</h1>
                <h1>{data.price}</h1>                
                <h1>{data.category.name}</h1>
                               
                
              </div>
            )
          }
        )

        }
 

   </div>
  );
}


// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
  
// interface IProduct {
//     title: string,
//     description: string,
//     price: number,    
//     image: string,
//     category: {
//             category: string
//           }  
//     }
  

// export default async function Home() {
//   const res:IProduct[] = await client.fetch('*[_type == "product"]')
//   return (
//    <div>
//         {
//           res.map((data)=> {
//             return (
//               <div>
//                 <h1>{data.title}</h1>
//                 <h1>{data.description}</h1>
//                 <h1>{data.price}</h1>
//                 <Image src={urlFor(data.image).url()} alt="Sanity Image" width={200} height={200}/>
                               
                
//               </div>
//             )
//           }
//         )

//         }
 

//    </div>
//   );
// }

