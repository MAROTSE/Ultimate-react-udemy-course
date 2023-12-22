const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 12, packed: true },
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
  function handleSubmit(e) {
    e.preventDefault();
  }
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {numbers.map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item...." />
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
