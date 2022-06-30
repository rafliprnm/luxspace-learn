import React from "react";
import Header from "../parts/Header";
import Breadcrumbs from "../components/Breadcrumbs/";
import Footer from "../parts/Footer";
// import ProductDetails from '../parts/Details/ProductDetails';
// import Sugestion from '../parts/Details/Sugestion';
import Sitemap from "../parts/Sitemap";
import Shoppingcart from "../parts/Cart/Shoppingcart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

export default function HomePage() {
  return (
    <>
      <Header theme="black"></Header>

      <Breadcrumbs
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      ></Breadcrumbs>
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <Shoppingcart></Shoppingcart>
            <ShippingDetails></ShippingDetails>
          </div>
        </div>
      </section>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
