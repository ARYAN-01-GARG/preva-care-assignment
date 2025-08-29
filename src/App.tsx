import FeatureSection from "./components/feature-section/FeatureSection";

function App() {
  const features: Feature[] = [
    {
      title: "Feature 1",
      subtitle: "Subtitle 1",
      description: "Description for Feature 1",
      image: "feature-1.jpg"
    },
    {
      title: "Feature 2",
      subtitle: "Subtitle 2",
      description: "Description for Feature 2",
      image: "feature-2.jpg"
    },
    {
      title: "Feature 3",
      subtitle: "Subtitle 3",
      description: "Description for Feature 3",
      image: "feature-3.jpg"
    },
    {
      title: "Feature 4",
      subtitle: "Subtitle 4",
      description: "Description for Feature 4",
      image: "feature-1.jpg"
    },
    {
      title: "Feature 5",
      subtitle: "Subtitle 5",
      description: "Description for Feature 5",
      image: "feature-3.jpg"
    }
  ];
  return (
    <main className="p-4 flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-4xl font-bold mt-20">Feature Section</h1>
      <FeatureSection features={features} />
    </main>
  )
}

export default App;