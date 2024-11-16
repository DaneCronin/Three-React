import React from 'react'


//Need to pass in type and text as props to Alert because we are getting these from the hook
const Alert = ({type, text}) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
        {/* Another div that will change depending if failed to check type if danger or sent if type success */}
        <div className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center `} role="alert">
            {/* If type returned is equal to Danger type, return failed message, else, return success */}
   <p className= {`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
    <p className='mr-2 text-left'>{text}</p>
        </div>
      
    </div>
  )
}

export default Alert
