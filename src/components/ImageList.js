import React from 'react'

const ImageList = (props) => {
   const imgs = props.images.map((img) => {
        return <div key={img.id}>
            <img src={img.webformatURL} alt='imgs'></img>
        </div>
    })

  return (
    <div>
    {imgs}    
    </div>
  )
}

export default ImageList;