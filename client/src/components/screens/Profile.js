import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
  const [myPics, setPics] = useState([]);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch('/myposts', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    })
      .then((res) => res.json())
      .then((result) => {
        setPics(result.myposts);
      });
  }, []);

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
          <h4>{state ? state.name : 'Loading...'}</h4>
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
        {myPics.map((item) => {
          return (
            <img
              className="item"
              key={item._id}
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
