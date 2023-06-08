import React from 'react'

const Button = ({ children, onClick }) => {
    return (
        <button
            className='bg-orange-500 px-4 py-2 rounded-md font-bold'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button