import React from "react";

const ProfileCard = ({ name, profileImage }) => {
  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p>{name}</p>
    </div>
  );
};

export default ProfileCard;
