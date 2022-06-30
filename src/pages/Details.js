import React from 'react';
import Header from '../parts/Header';
import Breadcrumbs from '../components/Breadcrumbs/';
// import Hero from '../parts/Hero';
// import JustArrived from '../parts/HomePage/JustArrived';
// import BrowseRoom from '../parts/HomePage/BrowseRoom';
import Clients from '../parts/Clients';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
import ProductDetails from '../parts/Details/ProductDetails';
import Sugestion from '../parts/Details/Sugestion';

export default function HomePage() {
  return (
    <>
        <Header theme="black"></Header>

        <Breadcrumbs list={[
          {url: "/", name: "Home"},
          {url: "/categories/91231", name: "Office Room"},
          {url: "/categories/91231/Products/7888", name: "Details"}
        ]}>
        </Breadcrumbs>
        <ProductDetails></ProductDetails>
        <Sugestion></Sugestion>
        <Clients></Clients>
        <Sitemap></Sitemap>
        <Footer></Footer>
    </>
  )
}
