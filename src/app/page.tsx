"use client";
import styles from "./page.module.css";
import { links } from "../components/Card/link.props";
import Hero1 from "../components/Hero/Hero";
import CardDrip from "../components/Card/CardDrip";
import Heading from "@/components/Heading/Heading";
import Features from "../components/Featuresection/featureSection";
import Navbar from "../components/ui/navbar";
import OurTeam from "@/components/Team/OurTeam";
import Footer from "../components/Footer/Footer";
import Prices from "../components/Prices/Prices";

function Page() {
  const dripstoreLink = links.find(link => link.label === "DripStore");

  // Definindo as propriedades do Prices
  const pricePlan1 = {
    title: "Basic Plan",
    price: 29,
    currency: "$",
    period: "month",
    features: [
      { name: "10 Projects", available: true },
      { name: "24/7 Support", available: true },
      { name: "Analytics", available: false },
    ],
  };

  const pricePlan2 = {
    title: "Pro Plan",
    price: 49,
    currency: "$",
    period: "month",
    features: [
      { name: "Unlimited Projects", available: true },
      { name: "Priority Support", available: true },
      { name: "Advanced Analytics", available: true },
    ],
  };

  return (
    <section id="topo">
      {/* Navbar fixa */}
      <Navbar />

      {/* Ajuste para evitar sobreposição da Navbar */}
      <div className="lg:pt-16"> {/* Compensando a altura da Navbar */}
        <div className={styles.navbar}>
          <div className="flex justify-between md:justify-center mt-10">
            <Heading />
          </div>
        </div>

        {/* Seção de Hero */}
        <div className="flex justify-center pb-28">
          <Hero1 />
        </div>

        {/* Seção Features */}
        <div id="features">
          <Features />
        </div>

        {/* Seção Time que ocupa a tela inteira */}
        <div className="lg:py-20 lg:px-40 flex" id="team">
          <OurTeam />
        </div>

        {/* Seção Prices */}
        <div className="flex justify-evenly gap-20 flex-wrap bg-gray-900 dark:bg-white py-40">
          <Prices {...pricePlan1} /> {/* Passando o primeiro plano */}
          <Prices {...pricePlan2} /> {/* Passando o segundo plano */}
        </div>

        {/* Seção Cards */}
        <div className="flex justify-center bg-white dark:bg-gray-900" id="cards">
          <div className="flex justify-evenly lg:gap-20 flex-wrap  lg:m-20 lg:p-10">
            <div className="flex mb-20 mt-10 gap-10 justify-center flex-wrap">
              {dripstoreLink && <CardDrip link={dripstoreLink} />}
            </div>
            <div className="flex mb-20 mt-10 gap-10 justify-center flex-wrap">
              {dripstoreLink && <CardDrip link={dripstoreLink} />}
            </div>
            <div className="flex mb-20 mt-10 gap-10 justify-center flex-wrap">
              {dripstoreLink && <CardDrip link={dripstoreLink} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
