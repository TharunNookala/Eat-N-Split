import React, { useState } from 'react'
import Button from './Button'

const AddPerson = ({ onAddFriend }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !image) return;
        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0
        }

        onAddFriend(newFriend)

        setName("");
        setImage("https://i.pravatar.cc/48")
    }

    return (
        <form className='grid grid-cols-2 gap-2 justify-center bg-yellow-200 p-4 m-2'
            onSubmit={handleSubmit}
        >
            <label
                className='font-semibold'
                for='friend-name'
            >
                Enter Friend Name:
            </label>
            <input
                className='p-2'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label
                className='font-semibold'
                for='friend-image'
            >
                Enter Friend's Image URL:
            </label>
            <input
                className='p-2'
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <Button>ADD</Button>
        </form>
    )
}

export default AddPerson