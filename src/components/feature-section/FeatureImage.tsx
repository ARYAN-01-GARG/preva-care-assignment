function FeatureImage({
    activeFeature
} : {
    activeFeature: Feature
}) {
  return   (
    <div className="transition-all duration-300 ease-in-out flex-1 flex items-center justify-center overflow-hidden">
      <img src={activeFeature.image} alt={activeFeature.title} loading="lazy"/>
    </div>
  )
}

export default FeatureImage