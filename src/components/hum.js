import React from 'react'

function hum(props) {
  return (
    <div classname="alert alert-warning alert-dismissible fade show" role="alert">
  {props.alert}
  <button type="button" classname="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default hum

