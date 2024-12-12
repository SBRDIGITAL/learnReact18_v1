import { Component } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import HeaderElement from './components/header.jsx'
import { ProjectHelper } from './utils/helpers.js'





class MyReactApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };
    this.title = 'Это тайтл'
    this.ph = ProjectHelper
  }


  async componentDidMount() {
    // Устанавливаем нужный нам title
    await this.ph.setDocumentTitle(this.title)
  }

  #getMainPageComponent() {
    return (
        <>
          <HeaderElement />
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.incrementCount}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
          <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }

  render() {
      return (
        this.#getMainPageComponent()
    )
  }
}


export default MyReactApp