import React from 'react'
import { redirect } from 'next/navigation'
import clientPromise from '@/lib/mongodb'

const page = async ({params}) => {
    const slug = (await params).url
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const document = await collection.findOne({shorturl: slug})
    if(document){
        redirect(document.url)
    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return (
    <>
    </>
  )
}

export default page