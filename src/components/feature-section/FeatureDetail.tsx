import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export default function FeatureDetail({
  activeFeature,
  handleNext,
  handlePrev
} : {
  activeFeature: Feature,
  handleNext: () => void,
  handlePrev: () => void
}) {
  return (
    <div className="flex flex-col justify-start gap-y-8 transition-all duration-300 ease-in-out flex-1 h-full">
      <h2 className="text-xl font-semibold text-blue-700 py-4">{activeFeature.title}</h2>
      <h3 className="text-2xl font-medium py-4">{activeFeature.subtitle}</h3>
      <p className="font-sm text-neutral-500 overflow-hidden font-normal">{activeFeature.description}</p>
      <div className="my-4">
        <button onClick={handlePrev} className="px-4 py-2 pb-4 hover:font-medium hover:text-neutral-500 cursor-pointer hover:bg-neutral-100"><BsArrowLeft size={20} /></button>
        <span className="border-2 border-blue-500 py-3"></span>
        <button onClick={handleNext} className="px-4 py-2 pb-4 hover:font-medium hover:text-neutral-500 cursor-pointer hover:bg-neutral-100"><BsArrowRight size={20} /></button>
      </div>
    </div>
  )
}
