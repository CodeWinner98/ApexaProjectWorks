import React, { useState } from 'react';
import database from '../fireBase';
import { getDatabase, ref, set, push } from 'firebase/database';

const UserInputs = () => {

  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [hasLandAngle, setHasLandAngle] = useState(false);
  const [landDimensions, setLandDimensions] = useState({ length: '', width: '' });

  const handleNumberOfRoomsChange = (event) => {
    let value = parseInt(event.target.value) || 1;
    if (value > 5) value = 5; // Limiting to 5 rooms
    setNumberOfRooms(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const db = getDatabase(database);
    const newDocRef = push(ref(db, "form/formdata"));
    set(newDocRef, {
      Number_of_Room: numberOfRooms,
      Land_Status: hasLandAngle,
      Land_Dimension: landDimensions
    }).then(() => {
        console.log('Form data stored successfully!');
        //alert('Form data stored successfully!');
      })
      .catch((error) => {
        console.error('Error storing form data: ', error);
        //alert('Error storing form data: ' + error.message);
      });
  };

  return (
    <div className="App">
      <h1>This is a new project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Number of Rooms:
            <input
              type="number"
              value={numberOfRooms}
              onChange={handleNumberOfRoomsChange}
              min="1"
              max="5"
            />
          </label>
        </div>
        {/* Input for land dimensions */}
        <div>
          <label>
            Land Length:
            <input
              type="text"
              value={landDimensions.length}
              onChange={(e) => setLandDimensions({ ...landDimensions, length: e.target.value })}
            />
          </label>
          <label>
            Land Width:
            <input
              type="text"
              value={landDimensions.width}
              onChange={(e) => setLandDimensions({ ...landDimensions, width: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Land Angle (Angled or Not):
            <input
              type="checkbox"
              checked={hasLandAngle}
              onChange={() => setHasLandAngle(!hasLandAngle)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInputs;
