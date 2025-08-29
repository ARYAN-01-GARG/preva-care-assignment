import { useState, useEffect, useRef } from "react";
import FeatureDetail from "./FeatureDetail";
import FeatureImage from "./FeatureImage";
import FeaturesList from "./FeaturesList";

interface FeatureSectionProps {
  features: Feature[];
}

export default function FeatureSection({ features } : FeatureSectionProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastFeature = features.length - 1;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isSticky) return;
    const section = sectionRef.current;
    if (!section) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && currentFeature < lastFeature) {
        setCurrentFeature((prev) => Math.min(prev + 1, lastFeature));
        e.preventDefault();
      } else if (e.deltaY < 0 && currentFeature > 0) {
        setCurrentFeature((prev) => Math.max(prev - 1, 0));
        e.preventDefault();
      }
    };
    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, [isSticky, currentFeature, lastFeature]);

  const handleNext = () => {
    setCurrentFeature((prev) => Math.min(prev + 1, lastFeature));
  };
  const handlePrev = () => {
    setCurrentFeature((prev) => Math.max(prev - 1, 0));
  };

  const stickyClass = isSticky ? "sticky top-0 z-10 bg-white" : "";

  return (
    <section
      ref={sectionRef}
      className={`px-24 flex justify-center gap-x-12 gap-y-4 items-center w-full min-h-[80vh] rounded-lg transition ${stickyClass}`}>
      <FeatureDetail activeFeature={features[currentFeature]} handleNext={handleNext} handlePrev={handlePrev} />
      <FeatureImage  activeFeature={features[currentFeature]} />
      <FeaturesList features={features} activeFeatureIndex={currentFeature} onClick={setCurrentFeature} />
    </section>
  )
}