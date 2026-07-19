import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import FeaturedBrands from "../components/home/FeaturedBrands";
import FeaturedCollections from "../components/home/FeaturedCollections";
import BestSellers from "../components/home/BestSellers";
import NewArrivals from "../components/home/NewArrivals";
import StaffPicks from "../components/home/StaffPicks";
import DealsOfWeek from "../components/home/DealsOfWeek";
import CategoriesSection from "../components/home/CategoriesSection";
import RecentlyViewed from "../components/home/RecentlyViewed";
import TrustServices from "../components/home/TrustServices";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>HANDDRIP — Premium Electronics for Everyday Life</title>
        <meta name="description" content="Shop premium electronics at HANDDRIP. Curated selection of high-end TVs, smart home devices, computers, and accessories with expert support." />
      </Helmet>

      <Hero />
      <FeaturedBrands />
      <FeaturedCollections />
      <BestSellers />
      <NewArrivals />
      <StaffPicks />
      <DealsOfWeek />
      <CategoriesSection />
      <RecentlyViewed />
      <TrustServices />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
