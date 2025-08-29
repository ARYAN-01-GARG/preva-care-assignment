interface FeaturesListProps {
  features: Feature[];
  activeFeatureIndex?: number;
  onClick: (index: number) => void;
}

function FeaturesList({ features, activeFeatureIndex, onClick }: FeaturesListProps) {
  return (
    <div className="flex flex-col gap-y-4 p-4 flex-1">
      <h4 className="text-xl font-semibold">Features Showcase</h4>
      {features.map((feature, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className={`
              cursor-pointer
              p-4 pl-12 text-sm text-neutral-400
              font-bold
              transition-colors duration-200 hover:bg-neutral-100 hover:border-l-4 hover:border-blue-500
              ${activeFeatureIndex === index ? "border-l-4 border-blue-500 font-bold text-neutral-600" : "border-l-4 border-transparent"}
          `}>
          {feature.title} : {feature.subtitle}
        </div>
      ))}
    </div>
  )
}

export default FeaturesList