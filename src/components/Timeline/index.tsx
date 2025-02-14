import React from 'react';

const Timeline = () => {
  const events = [
    { date: '2023-01-01', description: 'Project Kickoff' },
    { date: '2023-03-15', description: 'First Milestone Achieved' },
    { date: '2023-06-30', description: 'Beta Version Released' },
    { date: '2023-09-01', description: 'User Feedback Collection' },
    { date: '2023-12-01', description: 'Final Release' },
  ];

  return (
    <div className="timeline">
      <h2 className="text-3xl font-bold text-center mb-6">Project Timeline</h2>
      <ul className="list-disc list-inside">
        {events.map((event, index) => (
          <li key={index} className="mb-4">
            <span className="font-semibold">{event.date}:</span> {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;