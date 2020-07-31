import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {}, []);
  return (
    <div style={{ maxWidth: '80%', margin: '0px auto' }}>
      <div
        style={{
          display: 'flex',
          margin: '18px 0px 50px',
          borderBottom: '1px solid lightgrey'
        }}
      >
        <div className="profile-image">
          <img
            style={{ width: '160px', height: '160px', borderRadius: '80px' }}
            alt=""
            src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
          />
        </div>
        <div>
          <h4>ramesh verma</h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '110%'
            }}
          >
            <h6>40 posts</h6>
            <h6>150 followers</h6>
            <h6>22 following</h6>
          </div>
        </div>
      </div>

      <div className="gallery">
        <img
          className="item"
          alt=""
          src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        />
        <img
          className="item"
          alt=""
          src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        />
        <img
          className="item"
          alt=""
          src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        />
        <img
          className="item"
          alt=""
          src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        />
        <img
          className="item"
          alt=""
          src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        />
        <img
          className="item"
          alt=""
          src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        />
      </div>
    </div>
  );
};

export default Profile;
