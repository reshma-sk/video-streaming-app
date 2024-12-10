import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Songs","Live","Soccer","Cricket","Cooing","Valentines"]
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((btn)=>(
        <Button name={btn}/>
      ))}
    </div>
  )
}

export default ButtonList