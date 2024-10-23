import React from "react";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import EcommerceFeatures from "@/components/shared/product/ecommerce-features";
import ProductPromotion from "@/components/shared/product/product-promotion";
import ProductList from "@/components/shared/product/home-productlist";
import SparklesText from "@/components/magicui/sparkles-text";
import Footer from "@/components/shared/footer";
import AllProductList from "@/components/shared/product/all-products";
import DiscountProductList from "@/components/shared/product/discountedProductList";
import confetti from "canvas-confetti";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Infinitetestimonials } from "./Testimonials";
import ShoesCategory from "./product/shoesCategory";
import Electronics from "./product/techCategory";
import Watches from "./product/watchesCategory";
import CategoryCarousel from "./product/categoryCarousel";
import HowItWorks from "./HowItWorks";
import Cakes from "./CakeSection";
import LastViewedCarousel from "./product/last-viewed-product";

const handleClick = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) return clearInterval(interval);

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};

interface HomeContentProps {
  latestProducts: any;
  allProducts: any;
  discountedProducts: any;
}

const HomeContent: React.FC<HomeContentProps> = ({
  latestProducts,
  allProducts,
  discountedProducts,
}) => {
  return (
    <div>
      {/* Hero Section with Purple Branding */}
      <div className="bg-gradient-to-b from-white to-purple-50">
        <MaxWidthWrapper>
          <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
            <h1 className="tracking-tight text-4xl font-bold bg-clip-text text-purple-800 sm:text-6xl">
              Seamless Selling and Shopping for Riara University
            </h1>
            <p className="mt-6 max-w-prose text-lg text-purple-800">
              A platform built for Riara University students, offering 24/7
              access to student-run shops
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/seller"
                className={`${buttonVariants({
                  variant: "secondary",
                })} text-base text-purple-500 bg-yellow-400 hover:bg-yellow-300`}
              >
                <SparklesText
                  onClick={handleClick}
                  text="🎉Start selling"
                  className="text-base text-purple-500"
                />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <HowItWorks />

      {/* Main Product Section with Purple Accents */}
      <div className="space-y-8 bg-gradient-to-b from-white to-purple-50">
        <ProductList title="Newest Arrivals ✨" data={latestProducts} />
        <ProductPromotion />
        <LastViewedCarousel />
        <ShoesCategory />
        <Cakes />

        <Electronics />
        <Watches />
        <DiscountProductList
          title="Discounted Products 💸"
          data={discountedProducts.data || []}
        />
        <CategoryCarousel />
        <AllProductList title="More to love 💖" data={allProducts.data || []} />
        <EcommerceFeatures />
        <Infinitetestimonials />
        <Footer />
      </div>
    </div>
  );
};

export default HomeContent;
