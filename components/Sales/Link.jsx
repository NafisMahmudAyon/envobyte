import React from 'react'
import { ExternalIcon } from '../Icons'

const Link = ({icon,title,link}) => {
  return (
    <div className='flex gap-4 pb-3'>
      {icon}
      <div>
        <p className="text-[14px] leading-[20px] ">{title}</p>
        <p className="text-[16px] font-semibold leading-[22px] flex gap-2 items-center ">{link} <ExternalIcon /></p>
      </div>
    </div>
  )
}

export default Link