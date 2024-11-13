import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2">
        <div className=" flex flex-col justify-center items-center p-2">

          <p className="text-3xl font-bold">The best URL shortner in the market</p>
          <p className="text-center px-28 text-xl">We are the straight forward URL shortner in the world. Most of the URL will track you or ask for you details for login. We understand your needs  and hence we created this  URL shortner.</p>
          
          <div className="buttons mt-5 text-xl">
            <li className='flex gap-4'>
              <Link href={"/generate"}><button className='bg-purple-500 rounded-lg p-3 py-1 shadow-lg '>Try Now</button></Link>
              <Link href={"/github"}><button className='bg-purple-500 rounded-lg p-3 py-1 shadow-lg'>Github</button></Link>
            </li>
          </div>

        </div>



        <div className=" flex justify-end">
          <Image className="mix-blend-darken" alt="An image of the vector" src={'/vector.png'} width={600} height={500} />

        </div>


      </section>

    </main>
  );
}
