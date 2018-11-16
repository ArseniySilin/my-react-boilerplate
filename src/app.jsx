import React, { Component } from 'react';
import Button from './button/button';
import styles from './styles/main.scss';


const hello = 'Hello World!';

class App extends Component {

  render() {
    return (
      <div className={styles["container"]}>
        <Button label={hello} />
      </div>
    );
  }
}

export default App;
