import React, {useState} from 'react';
import data from './data'
// import Header from './assets/components/Header';
// import Profile from './assets/components/Profile';
// import Button from './assets/components/Button';

function App() {
  const [users, setUsers] = useState(data);
  const [count, setCount] = useState(5);

  function clearBirthdays() {
      setUsers([]);
      setCount(0)
  }

  return (
    <section className="card">
      <h3 className="header">{`${count} birthdays today`}</h3>
      <article>
        {users.map((user) => {
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