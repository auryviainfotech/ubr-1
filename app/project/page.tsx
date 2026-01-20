import { MasterPlan } from "../../components/MasterPlan";
import { UnitPlansTabs } from "../../components/UnitPlansTabs";
import { AmenitiesList } from "../../components/AmenitiesList";
import { GalleryLightbox } from "../../components/GalleryLightbox";
import { LocationAdvantage } from "../../components/LocationAdvantage";
import { CallBookingBanner } from "../../components/CallBookingBanner";
import { Hero } from "../../components/Hero";

export default function ProjectPage() {
  return (
    <>
      <Hero />
      <MasterPlan />
      <UnitPlansTabs />
      <AmenitiesList />
      <GalleryLightbox />
      <LocationAdvantage variant="full" />
      <CallBookingBanner />
    </>
  );
}

