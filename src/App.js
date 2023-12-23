import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 2, packed: true },
];

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Far Away 💼</h1>;
}

function Form() {
  const [description, setDescription] = useState('');

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: Date.now(), description, quantity, packed: false };
    console.log(newItem);

    setDescription('');
    setQuantity(1);
  }
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  function handleInputChange(e) {
    setDescription(e.target.value);
  }

  function handleSelectChange(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleSelectChange}>
        {numbers.map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <spa style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}

        {item.description}
      </spa>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have packed X items of your X (X%)</em>
    </footer>
  );
}
