import React from 'react';

const CloudinaryUploadWidget = ({ onUpload }) => {
  const handleUpload = () => {
    // eslint-disable-next-line no-undef
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'demo', // TODO: Replace with your Cloudinary cloud name
        uploadPreset: 'unsigned_preset', // TODO: Replace with your unsigned upload preset
        sources: ['local', 'url', 'camera'],
        cropping: false,
        multiple: false,
        defaultSource: 'local',
        styles: {
          palette: {
            window: '#e8f5e9',
            windowBorder: '#b2dfdb',
            tabIcon: '#218c5b',
            menuIcons: '#218c5b',
            textDark: '#218c5b',
            textLight: '#ffffff',
            link: '#4caf50',
            action: '#4caf50',
            inactiveTabIcon: '#b2dfdb',
            error: '#d32f2f',
            inProgress: '#218c5b',
            complete: '#4caf50',
            sourceBg: '#ffffff'
          }
        }
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          onUpload(result.info.secure_url);
        }
      }
    );
  };

  return (
    <button type="button" onClick={handleUpload} style={{background:'#b2dfdb',color:'#218c5b',border:'none',borderRadius:8,padding:'0.5rem 1rem',marginBottom:'0.5rem',cursor:'pointer'}}>
      Upload Image
    </button>
  );
};

export default CloudinaryUploadWidget;
