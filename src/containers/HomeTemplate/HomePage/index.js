import React from "react";
import HeroMovie from "./HeroMovieComponent";
import ShowcaseMovie from "./ShowcaseMovieComponent";
import LatestMovie from "./LatestMovieComponent";
import PricingMovie from "./PricingComponent";

export default function HomePage() {
  return (
    <>
      <HeroMovie />
      <ShowcaseMovie />
      <LatestMovie />
      <PricingMovie />
    </>
  );
}
