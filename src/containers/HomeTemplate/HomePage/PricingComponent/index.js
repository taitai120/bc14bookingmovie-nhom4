import React from "react";
import "./css/style.css";
import PricingItem from "./PricingItem";

export default function PricingMovie() {
  const renderPricingItem = () => {
    return (
      <>
        <PricingItem /> <PricingItem type="Premium" price="$35.99" />{" "}
        <PricingItem type="VIP" price="$99.99" />
      </>
    );
  };

  return (
    <section className="pricing-section">
      <h2 className="title">Pricing Movies</h2>
      <div className="row">{renderPricingItem()}</div>
    </section>
  );
}
