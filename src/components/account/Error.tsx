import React from 'react'

interface IError {
  isEditing: boolean;
  isError: any;
}

function Error({ isError, isEditing }: IError) {
  return (
    <>
      {isEditing && isError && <>
        <div className='article-error'>
          <img src="/images/modal-error.svg" alt="" />
          <span>{isError}</span>
        </div>
      </>}
    </>
  )
}

export { Error }