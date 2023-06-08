import React from 'react'
import Person from './Person';

const PersonsList = ({ friends, onSelection, selectedFriend }) => {
    return (
        <div className='sm:w-[450px] text-center rounded h-full m-2 border-2'>
            {friends.map((friend) => {
                return <Person
                    friend={friend}
                    key={friend.id}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                />
            })}
        </div>
    )
}

export default PersonsList