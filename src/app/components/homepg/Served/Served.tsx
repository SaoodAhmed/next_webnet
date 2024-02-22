


interface ClientDataType    {
  id: number,
  name: string,
  image: string,
  sort_order: string,
  link: string,
  is_active: 1,
  created_at: string,
  updated_at: string
}

const fetchClientData = async ()=>{
  try {

    const res = await fetch(`${process.env.BASE_URL}/api/fetch-clients?limit=3`,{cache:'no-store'})
    console.log(res.ok)
    if(!res.ok){
      throw Error("Client Data fetching fail")
    }

    const result  = await res.json()
    return result
    
  } catch (error) {
    console.log(error)
    
  }
}








const Served:React.FC<{data:any}>=async ({data})=>{
  const clientData:ClientDataType[] = await fetchClientData()
  console.log("client site data: ",clientData)
    return (
      <>
      {/* yellow purple orange green pink blue */}
      <section className="brands">
        <div className="container">
          <div className="row">
            {/* text-left text-center */}
            <div className="col-sm-12 text-center">
              <h2>{data.heading}</h2>
              <h3>
                {data.sub_heading}
              </h3>
              <p>
                {data.text}
              </p>

              {/* i have edited it! */}
              <ul className="brands-slider " style={{listStyle:"none", display:"flex", flexWrap:"wrap", gap:"70px"}}>
                {
                  clientData.map((item:ClientDataType)=>(
                    <li>
                      <a href="#" tabIndex={-1}>
                        <img
                          className=" ls-is-cached lazyloaded"
                          data-src={` ${process.env.PUBLIC_URL}${item.image}`}
                          alt="*"
                          src={` ${process.env.PUBLIC_URL}${item.image}`}
                        />
                      </a>
                    </li>

                  ))
                }
                {/* <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo2.png"
                      alt="*"
                      src="img/blogo2.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo3.png"
                      alt="*"
                      src="img/blogo3.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo4.png"
                      alt="*"
                      src="img/blogo4.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" tabIndex={-1}>
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="img/blogo1.png"
                      alt="*"
                      src="img/blogo1.png"
                    />
                  </a>
                </li> */}
              </ul>
              <div className="moreDv">
                <a href="#">
                  <em>&amp;</em>{" "}
                  <b>
                    500 <span>+</span>
                  </b>
                  <em>more...</em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  
    )
}

export default Served;