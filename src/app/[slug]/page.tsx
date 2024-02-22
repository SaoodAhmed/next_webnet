import React from 'react'

const  fetchHomePageData = async (slug:any)=>{
  try {
      const res = await fetch(`${process.env.BASE_URL}/api/page/${slug}`,{cache:'no-store'})
      console.log("Home response: " + res.ok)
      if(!res.ok){
          throw new Error('Data fetching fail')
      }

      const result = await res.json()
      return result
      
      
  } catch (error) {
      console.log(error)
      
  }

}




const dynamicPage = ({params}:{ params: { slug: string }}) => {
    console.log(params)
  return (
    <div className=' text-4xl'>{params.slug}</div>
  )
}

export default dynamicPage