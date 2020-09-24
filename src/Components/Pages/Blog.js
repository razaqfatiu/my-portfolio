import React from 'react'
import Loading from './Loading'

export default function Blog() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "600px" }}>
      <Loading />
      <h2>Blog page is Loading....</h2>
    </div>
  )
}
