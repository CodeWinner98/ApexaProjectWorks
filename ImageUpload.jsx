// ImageUpload.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './ImageUpload.css';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (file) => {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(URL.createObjectURL(file));
    } else {
      alert('Only JPG and PNG files are allowed!');
      setSelectedFile(null);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFileChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log('File submitted:', selectedFile);
    } else {
      alert('Please select a valid image file before submitting.');
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
  };

  return (
    <div className="upload-container">
      <h2>Upload an Image</h2>
      <label
        htmlFor="upload-input"
        className={`upload-label ${dragActive ? 'drag-active' : ''} ${selectedFile ? 'file-selected' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{ backgroundImage: selectedFile ? `url(${selectedFile})` : 'none' }}
      >
        {!selectedFile && (
          <>
            <FontAwesomeIcon icon={faCloudUploadAlt} className='icon' size="7x" />
            <span><br />Choose an Image or Drag and Drop here!</span>
          </>
        )}
        <input
          type="file"
          accept="image/jpeg,image/png"
          onChange={handleChange}
          style={{ display: 'none' }}
          id="upload-input"
        />
      </label>
      {selectedFile && (
        <div>
          <button onClick={handleSubmit} className="upload-button">Submit</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
