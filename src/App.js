import { useState } from 'react';
import AddPerson from './components/AddPerson';
import FormSplitBill from './components/FormSplitBill';
import PersonsList from './components/PersonsList';
import './index.css';
import Button from './components/Button';
import Navbar from './components/Navbar';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddPerson, setShowAddPerson] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddPerson(p => !p)
  }

  const handleAddFriend = (friend) => {
    setFriends(friends => [...friends, friend]);
    setShowAddPerson(false)
  }

  const handleSelection = (friend) => {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend))
    setShowAddPerson(false)
  }

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend)
    );

    setSelectedFriend(null);
  }

  return (
    <>
      <Navbar />
      <div className='py-2 flex flex-col my-0 items-center sm:m-2 sm:flex-row md:justify-center md:h-full'>
        <div className='text-center'>
          <PersonsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
          />

          {showAddPerson && <AddPerson onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddPerson ? 'Close' : 'Add Friend'}
          </Button>

        </div>

        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
      </div>
    </>
  );
}

export default App;
