import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
  
interface IProduct {
    title: string,
    description: string,
    price: number,    
    image: string,
    category: {
            category: string
          }  
    }
  

export default async function Home() {
  const res:IProduct[] = await client.fetch('*[_type == "product"]')
  return (
   <div>
        {
          res.map((data)=> {
            return (
              <div>
                <h1>{data.title}</h1>
                <h1>{data.description}</h1>
                <h1>{data.price}</h1>
                <Image src={urlFor(data.image).url()} alt="Sanity Image" width={200} height={200}/>
                               
                
              </div>
            )
          }
        )

        }
 

   </div>
  );
}





// import { client } from "@/sanity/lib/client";
// import { title } from "process";
// import { Image as IImage} from 'sanity'


// export const getProductData = async () => {
//   const res = await client.fetch('*[_type=="product"]{
//     title,
//     description,
//     price
//   }')
//       return res
//   }    

//   interface IProduct {
//     title: string,
//     _id: string,
//     description: string,
//     image: IImage,
//     price: number,
//     category: {
//       name:string
//     }
//   }

// export default async function Home() {
//   const data:IProduct[] = await getProductData()
//   console.log(data);
//   return (
//    <div>
 

//    </div>
//   );
// }


 
