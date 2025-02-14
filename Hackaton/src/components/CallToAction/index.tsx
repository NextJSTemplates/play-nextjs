// filepath: /Hackaton/Hackaton/src/components/Timeline/index.tsx
import React from 'react';

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="text-3xl font-bold text-center mb-6">Project Timeline</h2>
      <ul className="timeline-list">
        <li className="timeline-item">
          <h3 className="timeline-title">Milestone 1</h3>
          <p className="timeline-description">Description of milestone 1.</p>
        </li>
        <li className="timeline-item">
          <h3 className="timeline-title">Milestone 2</h3>
          <p className="timeline-description">Description of milestone 2.</p>
        </li>
        <li className="timeline-item">
          <h3 className="timeline-title">Milestone 3</h3>
          <p className="timeline-description">Description of milestone 3.</p>
        </li>
        {/* Add more milestones as needed */}
      </ul>
    </section>
  );
};

export default Timeline;