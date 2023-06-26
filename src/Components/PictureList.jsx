/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';

// import axios from 'axios';

// const PictureList = () => {
//   const [pictures, setPictures] = useState([]);

//   useEffect(() => {
//     const fetchPictures = async () => {
//       try {
//         const response = await axios.get('/api/pictures');
//         setPictures(response.data);
//       } catch (error) {
//         // Handle fetch error
//       }
//     };

//     fetchPictures();
//   }, []);

//   return (
//     <div>
//       <h2 className='picture-list-title'>Picture List</h2>
//       {pictures.map((picture) => (
//         <div key={picture.id}>
//           <img src={picture.url} alt={picture.title} />
//           <div className=''>Title: {picture.title}</div>
//           <div className='picture-list-title'>Size: {picture.size}</div>
//           <div>Location: {picture.location}</div>
//           {/* Display additional picture metadata */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PictureList;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PictureList.css'; // Import the CSS file for the component

const PictureList = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('/api/pictures');
        setPictures(response.data);
      } catch (error) {
        // Handle fetch error
      }
    };

    fetchPictures();
  }, []);

  return (
    <div className="picture-list-container">
      <h2 className="picture-list-title">Picture List</h2>
      <div className="picture-list-grid">
        {pictures.map((picture) => (
          <div key={picture.id} className="picture-item">
            <img src={picture.url} alt={picture.title} className="picture-img" />
            <div className="picture-info">
              <div className="picture-title">Title: {picture.title}</div>
              <div className="picture-size">Size: {picture.size}</div>
              <div className="picture-location">Location: {picture.location}</div>
              {/* Display additional picture metadata */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureList;
