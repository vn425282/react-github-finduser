import React, { useEffect } from 'react';
import './userinfo.scss';
import { useSelector, shallowEqual } from "react-redux";

function UserInfo (props) {
  // mapStateToProps
  const githubSelector = useSelector(state => state.githubReducers, shallowEqual);

  useEffect(() => {
    console.log('aaa', githubSelector);
  });

  return (
    <>
      <div className="col-lg-3 container-lg px-md-2 mt-lg-4 clearfix">
        <div className="infomation">
          <img className="img-circle" src="https://avatars3.githubusercontent.com/u/4383128?v=4" alt="avatar" width="140" height="140" />
          <h2>Tri Nguyen</h2>
          <h4>vn425282</h4>
          <p></p>
          <p>Location: </p>
          <p>Github user since: 2019 </p>
        </div>
      </div>
    </>
  );
}


export default UserInfo;
