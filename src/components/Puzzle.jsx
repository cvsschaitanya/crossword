import React, {Suspense} from 'react'
import {useImage} from 'react-image'
 
function MyImageComponent() {
  const {src} = useImage({
    srcList: 'https://assets.eenadu.net/article_img/060222PADHA1A.jpg',
  })
 
  return <img src={src} />
}
 
export default function MyComponent() {
  return (
    <Suspense>
      <MyImageComponent />
    </Suspense>
  )
}