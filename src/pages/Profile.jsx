import React from 'react'
import Header from '../component/header/Header'
import ProfileLeftSide from '../component/profileApp/ProfileLeftSide'
import ProfileRightSide from '../component/profileApp/ProfileRightSide'

const Profile = () => {
  return (
    <div className='bg-body-color'>
        <Header />

        <div className="">
            <div className="row">
                <div className="col-3 ">
                    <ProfileLeftSide />
                </div>

                <div className="col-9 mainProfile bg-white">
                    <ProfileRightSide />
                    

                </div>
            </div>
       </div>
      
    </div>
  )
}

export default Profile
