"use client";

const Mentors = () => {
  const categories = [
    {
      title: "Technical",
      description: "AI, ASR, NLP, app development",
    },
    {
      title: "Accessibility",
      description: "UX/UI, inclusive design, user testing",
    },
    {
      title: "User/Speech and Language Therapist",
      description: "Expertise in speech therapy and user needs",
    },
    {
      title: "Cultural",
      description: "Ghanaian linguistic and contextual adaptation",
    },
    {
      title: "Business",
      description: "Scaling solution, impact assessment, and market viability",
    },
  ];

  return (
    <section className="py-8 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Mentors</h1>
        <p className="text-center mb-6 text-gray-700">
          Meet our mentors across various categories. Each category will have at least 3 mentors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {/* <li className="text-gray-600 italic">Mentor 1 (Placeholder)</li>
                <li className="text-gray-600 italic">Mentor 2 (Placeholder)</li>
                <li className="text-gray-600 italic">Mentor 3 (Placeholder)</li> */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
