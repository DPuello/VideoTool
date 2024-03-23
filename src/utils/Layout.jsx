import React from 'react'

function Layout({children}) {
  return (
    <div className='bg-grayLight min-h-screen flex p-5 gap-5'>
        {children}
    </div>
  )
}

export default Layout