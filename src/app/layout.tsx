import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './styles/style.css'
//import './styles/globals.css'
import './styles/bootstrap.min.css'
import Head from "next/head";
import Footer from "./components/header_footer/footer";
import Header from "./components/header_footer/header";





const fetchMenuData = async ()=>{

  try {
    const res = await fetch(`https://webnet.imagiacian.com/api/primary-menu`,{cache:'no-store'})
    if(!res.ok){
      throw new Error('Error in fetching data')
    }
    const result = res.json()
    return result;

  } catch (error) {
    console.log('Fetch error: ' + (error as any).message);

  }

}


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webnet",
  description: "Generated Saud Ahmed",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menu = await  fetchMenuData();
  console.log("menu: ",menu)
  return (
    <html lang="en">
      <Head>
        <script
          async
          src='https://use.fontawesome.com/releases/v6.1.0/js/all.js'
          crossOrigin='anonymous'
        ></script>
        {/* <!-- Google fonts--> */}
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,700'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <body className={inter.className}>


        <Header data = {menu}/>
        {children}
        <Footer/>


        {/* Custom JS files */}
        <script
          async
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        ></script>

        {/* theme js */}
        <script async src='/js/scripts.js'></script>

        {/* startbootstrap forms */}
        <script
          async
          src='https://cdn.startbootstrap.com/sb-forms-latest.js'
        ></script>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> */}


        <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js"></script>

        <script src=" https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js "></script>

        <script src="js/bootstrap.bundle.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>


        <script src="js/scripts.js"></script>

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> */}

        {/* <script>
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
          utilsScript= "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
        });
      </script> */}

      </body>
    </html>
  );
}
