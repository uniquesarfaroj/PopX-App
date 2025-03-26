import '../styles/AccountSettings.css';

const AccountSettings = () => {
  // Base64-encoded 50x50 gray circle image
  const profilePicBase64 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADDSURBVGhD7dYxCsJAEEXRI7h0d3cIbsGduwQ3YFdwF9yCG/Au3AXXICaSkPjjfUgyU5zlvE2yS7JrsuO81XaYk+w47zhvtx1mJTvOW22HGclOcpzX2g4zkp3kOK+1HWYkO8l5rmsbzEh2kuO81naYkewk53mt7TAj2UnO81rbYUayk5zntbbDjGQnOc5rbYcZyU5ynNfaDjOSneQ4r7UdZiQ7yXFeazvMSHaS47zWdpiR7CTHea3tMCPZSY7zWtthRrKTnOe1tsOMZCc5zmtthxnJTvJ/AO4rOTvRZgIAAAAASUVORK5CYII=';

  return (
    <div className="accountsettings-container">
      <h2>Account Settings</h2>
      <div className="profile-section">
        <div className="profile-pic">
          <img src={profilePicBase64} alt="Profile" />
          <span className="camera-icon">📷</span>
        </div>
        <div className="profile-info">
          <h3>MARRY DOE</h3>
          <p>MARRY@GMAIL.COM</p>
        </div>
      </div>
      <p className="bio">
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR SADIPSCING ELITR, SED DIAM NONUMY
        EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUYAM ERAT, SED DIAM
      </p>
    </div>
  );
};

export default AccountSettings;