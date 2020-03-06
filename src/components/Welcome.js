import React from 'react'

export default function Welcome(props) {
  console.log(props);
  return (
    <h5>Hello, {props.name}</h5>
  )
}
