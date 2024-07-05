import React from 'react';
import './MyProfile.css';

const ProfilePage: React.FC = () => {
  const userData = {
    name: "Test",
    username: "@test",
    email: "test@test.com",
    profileImage: "https://via.placeholder.com/150",  // Generic user icon
    coverImage: "https://via.placeholder.com/600x200",  // Generic cover image
    topicsStarted: 223,
    topicsFollowed: "1.2k",
    postsCount: "3.5k",
    savesCount: "3.5k",
    profileCompletion: 80,
    occupation: "Student",
    university: "MIT, Meerut",
    department: "Engineering",
    course: "B Tech CSE",
    contactNumber: "+91 77777777",
    age: 19,
    posts: [
      {
        id: 1,
        title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
        content: "1 ndasnfionofsdoifnsdionfkjsdnfndifhnsdiobndpjofb...",
        link: "#"
      },
      {
        id: 2,
        title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
        content: "1 ndasnfionofsdoifnsdionfkjsdnfndifhnsdiobndpjofb...",
        link: "#"
      },
      // Add more posts as needed
    ],
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="cover-image" style={{ backgroundImage: `url(${userData.coverImage})` }}></div>
        <div className="profile-info">
          <img src={userData.profileImage} alt="Profile" className="profile-image" />
          <div className="profile-text">
            <h1>{userData.name}</h1>
            <p>{userData.username}</p>
            <p>{userData.email}</p>
          </div>
        </div>
      </header>

      <div className="profile-container">
        <aside className="sidebar">
          <section className="profile-completion">
            <h2>Complete your Profile</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${userData.profileCompletion}%` }}></div>
            </div>
            <p>Profile {userData.profileCompletion}% Completed</p>
            <button className="btn-primary">Edit Profile</button>
          </section>

          <section className="about-me">
            <h2>About Me</h2>
            <ul>
              <li><strong>Occupation:</strong> {userData.occupation}</li>
              <li><strong>University or School:</strong> {userData.university}</li>
              <li><strong>Department:</strong> {userData.department}</li>
              <li><strong>Course:</strong> {userData.course}</li>
              <li><strong>Contact Number:</strong> {userData.contactNumber}</li>
              <li><strong>Age:</strong> {userData.age}</li>
            </ul>
          </section>

          <section className="topics-started">
            <h2>Topics you Started</h2>
            {userData.posts.map(post => (
              <article key={post.id} className="topic">
                <img src={userData.profileImage} alt="Profile" className="profile-image-small" />
                <div className="topic-content">
                  <p className="topic-category">Entrepreneurship</p>
                  <h3>{post.title}</h3>
                  <a href="#" className="link-blue">Check out topic</a>
                </div>
              </article>
            ))}
          </section>
        </aside>

        <main className="main-content">
          <section className="create-post">
            <h2>Post Something</h2>
            <div className="post-buttons">
              <button className="btn-primary">Choose your Topic First</button>
              <button className="btn-secondary">Create a new Discussion Topic</button>
            </div>
            <div className="post-input">
              <img src={userData.profileImage} alt="Profile" className="profile-image-small" />
              <input type="text" placeholder="What's on your Mind..." />
              <button className="btn-secondary attach-button">
                <i className="material-icons">attach_file</i> Attach
              </button>
              <button className="btn-primary send-button">
                <i className="material-icons">send</i> Send
              </button>
            </div>
          </section>

          <section className="user-posts">
            <h2>Your Posts</h2>
            <div className="scrollable-container">
              {userData.posts.map(post => (
                <article key={post.id} className="post">
                  <img src={userData.profileImage} alt="Profile" className="profile-image-small" />
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <a href={post.link} className="link-blue">check out replies</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
