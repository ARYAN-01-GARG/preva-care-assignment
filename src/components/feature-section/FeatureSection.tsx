import { useState } from "react";
import FeatureDetail from "./FeatureDetail";
import FeatureImage from "./FeatureImage";
import FeaturesList from "./FeaturesList";

interface FeatureSectionProps {
  features: Feature[];
}

export default function FeatureSection({ features } : FeatureSectionProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  const handleNext = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };
  const handlePrev = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="px-24 flex justify-center gap-x-12 gap-y-4 items-center w-full min-h-[80vh] rounded-lg transition">
      <FeatureDetail activeFeature={features[currentFeature]} handleNext={handleNext} handlePrev={handlePrev} />
      <FeatureImage  activeFeature={features[currentFeature]} />
      <FeaturesList features={features} activeFeatureIndex={currentFeature} onClick={setCurrentFeature} />
    </section>
  )
}
