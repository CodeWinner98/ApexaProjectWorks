import React, { useState } from 'react';
import firebaseApp from '../fireBase';

const DownloadDataPage = () => {
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleDownloadData = async () => {
    try {
      // Fetch the data from Firebase (replace 'yourPath' with the actual path)
      const snapshot = await firebaseApp.database().ref('yourPath').once('value');
      const data = snapshot.val();

      // Convert the data to a downloadable format (e.g., JSON)
      const jsonData = JSON.stringify(data);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      // Set the download URL
      setDownloadUrl(url);
    } catch (error) {
      console.error('Error downloading data:', error);
    }
  };

  return (
    <div>
      <h1>Download Data</h1>
      <button onClick={handleDownloadData}>Download Data</button>
      {downloadUrl && (
        <div>
          {/* Display a download link */}
          <a href={downloadUrl} download="firebase_data.json">Download Here</a>
        </div>
      )}
    </div>
  );
};

export default DownloadDataPage;
