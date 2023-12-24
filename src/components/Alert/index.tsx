import React, { memo } from 'react'

type Props = {
    children: React.ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className='alert'>
      {children}
    </div>
  )
}

export default memo(Alert);
