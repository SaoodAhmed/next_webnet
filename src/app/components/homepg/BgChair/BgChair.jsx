import dynamic from "next/dynamic";

const BgChair = () => {
  return (
    <section
      className="bg-chair"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="container text-center">
        <div className="col-sm-12">
          <h2>Professional Ecommerce Website</h2>
          <h3>For The Most Advanced Online Store</h3>
          <p>
            A beautifully designed Professional top web presence for your
            ecommerce is a must. Webnet Pakistan's
            <strong> ecommerce web design and development packages </strong> are
            affordable to help you assist with the making of your professional
            e-commerce or online shop. Please take advantage of our highly
            functional and most powerful eCommerce Content Management System
            (CMS) that no one has yet offered in Pakistan. We believe in
            bringing innovation to the market to boost your online business. We
            have challenged and exceeded other Pakistan's eCommerce solutions
            and developed our own user-friendly CMS that follows the
            International pattern. You can go Live in 48 Hours.
          </p>
          <a href="#">Best Ecommerce Packages</a>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(BgChair), { ssr: false });
