import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { StorySection } from "../components/StorySection";
import { AmenitiesGrid } from "../components/AmenitiesGrid";
import { LocationAdvantage } from "../components/LocationAdvantage";
import { CallBookingBanner } from "../components/CallBookingBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <StorySection />
      <AmenitiesGrid />
      <LocationAdvantage variant="preview" />
      <CallBookingBanner />
    </>
  );
}

