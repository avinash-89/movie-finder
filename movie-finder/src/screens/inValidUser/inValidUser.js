import React from 'react'
import Redirect from '../../components/Redirect/redirect'

const InValidUser = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Redirect
      title="User Not Found"
      text="To register"
      redirectionText="tap here"
      redirectionUrl="/register"
    />
  </div>
  )
}

export default InValidUser