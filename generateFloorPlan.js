import React, { useState, useEffect } from 'react';
import firebaseApp from '../fireBase';

const FloorPlansPage = () => {
  const [floorPlans, setFloorPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // Fetch floor plans from Firebase
    const fetchFloorPlans = async () => {
      try {
        const snapshot = await firebaseApp.database().ref('floorPlans').once('value');
        const plansData = snapshot.val();
        if (plansData) {
          // Convert Firebase snapshot to array of floor plans
          const plansArray = Object.keys(plansData).map((key) => ({
            id: key,
            ...plansData[key],
          }));
          setFloorPlans(plansArray);
        }
      } catch (error) {
        console.error('Error fetching floor plans:', error);
      }
    };

    fetchFloorPlans();
  }, []);

  const handlePlanSelect = (planId) => {
    // Set the selected plan when clicked
    const selected = floorPlans.find((plan) => plan.id === planId);
    setSelectedPlan(selected);
  };

  return (
    <div>
      <h1>Floor Plans</h1>
      <div className="floor-plan-container">
        {floorPlans.map((plan) => (
          <div key={plan.id} className="floor-plan-item" onClick={() => handlePlanSelect(plan.id)}>
            {/* Display floor plan image or details */}
            <img src={plan.imageUrl} alt={`Floor Plan ${plan.id}`} />
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div>
          <h2>Selected Floor Plan</h2>
          {/* Display details of the selected floor plan */}
          <img src={selectedPlan.imageUrl} alt={`Floor Plan ${selectedPlan.id}`} />
          <p>Dimensions: {selectedPlan.dimensions}</p>
          {/* Add a button to confirm selection */}
          <button onClick={() => console.log('Selected floor plan:', selectedPlan)}>Select This Plan</button>
        </div>
      )}
    </div>
  );
};

export default FloorPlansPage;
