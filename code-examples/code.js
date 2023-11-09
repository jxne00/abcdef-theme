import React, { useState } from 'react';

// this is an example of the abcdef theme!
export default function Example() {
  const [name, setName] = useState('Mary');
  const [age, setAge] = useState(42);

  const hello = 'Hello, world!';

  return (
    <>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setName('')}>abcdef</button>
      </label>

      <label>
        Age:
        <input value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={() => setAge(age + 3)}>Add 3 years</button>
      </label>

      {name !== '' && <p>Your name is {name}.</p>}
      {age !== '' && <p>Your age is {age}.</p>}
    </>
  );
}
