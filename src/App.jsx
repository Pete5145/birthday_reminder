import React, {useState} from 'react';
import data from './data'

function App() {
  // Use the useState hook to store the users and count in local state
  const [users, setUsers] = useState(data);
  const [count, setCount] = useState(5);

  // Define a function to clear the users and set the count to 0
  function clearBirthdays() {
      setUsers([]);
      setCount(0)
  }

  return (
    // Render a section containing a header, a list of user profiles, and a Clear All button
    <section className="card">
      <h3 className="header">{`${count} birthdays today`}</h3>
      <article>
        {users.map((user) => {
          // Destructure the user object
          const { id, name, age, img } = user;
          return (
            <div className="profile" key={id}>
              <img src={`../images/${img}`} alt={name} />
              <div className="info">
                <h4 className="name">{name}</h4>
                <p className="age">{age}</p>
              </div>
            </div>
          );
        })}
      </article>
      <button type="button" onClick={clearBirthdays}>
        Clear All
      </button>
    </section>
  );
}

export default App


      {/* <Profile name="Hester Hogan" age="32 years" img="hester_hogan.jpg" />
      <Profile name="Larry Little" age="36 years" img="larry_little.jpg" />
      <Profile name="Sean Walsh" age="34 years" img="lola_gardner.jpg" />
      <Profile name="Lola Gardner" age="29 years" img="sean_walsh.jpg" /> */}