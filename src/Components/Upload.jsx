/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css'; // Import the CSS file for the component

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append('pictures', file);
    }

    try {
      await axios.post('/api/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      });
      // Handle successful upload
    } catch (error) {
      // Handle upload error
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload</h2>
      <input type="file" multiple className="upload-input" onChange={handleFileChange} />
      <button onClick={handleUpload} className="upload-button">Upload</button>
      <div className="upload-progress">Upload Progress: {uploadProgress}%</div>
    </div>
  );
};

export default Upload;
