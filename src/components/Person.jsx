import React from 'react'
import Button from './Button'

const Person = ({ friend, onSelection, selectedFriend }) => {
    const isSelected = selectedFriend?.id === friend.id;
    return (
        <div className={`w-full h-full flex items-center justify-between text-center hover:bg-yellow-200 p-4 mb-2 rounded ${isSelected ? 'bg-yellow-200' : ''}`}>
            <div className='w-[80px] h-[80px]'>
                <img className='w-full h-full rounded-[50%]' src={friend.image} alt='/' />
            </div>
            <div className='text-left'>
                <h1 className='text-2xl font-bold'>{friend.name}</h1>
                {friend.balance < 0 && <p className='text-red-600 font-semibold'>You owe ${Math.abs(friend.balance)} to {friend.name} </p>}
                {friend.balance > 0 && <p className='text-green-500 font-semibold'>You get ${Math.abs(friend.balance)} from {friend.name} </p>}
                {friend.balance === 0 && <p className='font-semibold'>You and {friend.name} are even</p>}
            </div>
            <Button onClick={() => onSelection(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
        </div >
    )
}

export default Person