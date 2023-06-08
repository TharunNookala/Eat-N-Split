import React, { useState } from 'react'
import Button from './Button'

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
    const [bill, setBill] = useState('')
    const [paidByUser, setPaidByUser] = useState('')
    const [whoIsPaying, setWhoIsPaying] = useState('user')
    const paidByFriend = bill ? bill - paidByUser : "";

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
    }
    return (
        <div className='bg-yellow-200 w-[450px] h-full md:w-[450px] sm:w-auto p-4 m-2 rounded'>
            <form className='grid p-2' onSubmit={handleSubmit}>
                <h2 className='font-bold uppercase m-2 text-xl'>Split a bill with {selectedFriend.name}</h2>
                <div className='grid grid-cols-2 gap-2 rounded p-2'>
                    <label className='font-semibold' for='bill-value'>Bill Value:</label>
                    <input
                        className='p-2 w-full'
                        type="text"
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                    />

                    <label className='font-semibold' for='your-expense'>Your expense:</label>
                    <input
                        className='p-2 w-full'
                        type="text"
                        value={paidByUser}
                        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser :
                            Number(e.target.value))}
                    />

                    <label className='font-semibold' for='friend-expense'>{selectedFriend.name}'s expense:</label>
                    <input
                        className='p-2 w-full'
                        type="text"
                        disabled
                        value={paidByFriend}
                    />

                    <label className='font-semibold' for='your-expense'>Who is paying the bill?</label>
                    <select className='p-2 w-full'
                        value={whoIsPaying}
                        onChange={(e) => setWhoIsPaying(e.target.value)}
                    >
                        <option value="user">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                </div>
                <Button>Split Bill</Button>
            </form>
        </div>
    )
}

export default FormSplitBill