import React from 'react'

function Content({children}) {
  return (
    <div className='bg-white py-10 px-12 w-full rounded-lg flex flex-col gap-9'>
        {children}
    </div>
  )
}

export default Content