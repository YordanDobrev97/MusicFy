import React from 'react'

const Profile = () => {
  return (
    <div className="row py-5 px-4">
      <div className="col-md-5 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-head">
                    <div className="profile mr-3">
                        <img src="https://img.favpng.com/10/14/2/avatar-computer-icons-user-profile-business-png-favpng-uVq05zLDgFqFDHD2EF87qrVMA.jpg" alt="avatar" width="130"
                        className="rounded mb-2 img-thumbnail" />
                    </div>
                    <div className="media-body mb-5 text-white">
                        <h4 className="mt-0 mb-0">Mark Williams</h4>
                    </div>
                </div>
            </div>
            <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recent photos</h5>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-2 pr-lg-1">
                        <img
                        src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""
                        className="img-fluid rounded shadow-sm"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile
