"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState(false)

  const handleOnChange = () => {

  }

  const generate = async () => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    let response = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.json();
    console.log(data);
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setUrl("");
    setShorturl("")
    alert(data.message)

  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center'>Generate Your Short URLS</h1>
      <div className='bg-blue-100 flex flex-col gap-5 mx-auto max-w-lg p-5 '>
        <input className='p-5 focus:outline-blue-300' value={url} type="text" placeholder='Enter Your URLS' onChange={(e) => { setUrl(e.target.value) }} />
        <input className='p-5 focus:outline-blue-300' value={shorturl} type="text" placeholder='Enter Your preferred short URL text' onChange={(e) => { setShorturl(e.target.value) }} />
        <button className='bg-blue-400 py-2 text-center text-2xl rounded-2xl' onClick={generate}>Generate</button>
        <div className="links">
          {generated && <><span className='font-bold'>Your Links: </span> <code><Link target="_blank" href={generated}>{generated}</Link></code> </>}
        </div>
      </div>
    </>
  )
}

export default page
