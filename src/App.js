import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import { myCustomQuery } from "./graphql/queries";
import { myCustomMutation } from "./graphql/mutations";
Amplify.configure(config);

const client = generateClient();

function App() {

  async function fetchNotes() {
    const apiData = await client.graphql({ query: myCustomQuery, variables: { nametq: "retro" } });
    console.log('apiData >>> ', apiData)
    //const notesFromAPI = apiData.data.listNotes.items;
    //setNotes(notesFromAPI);
  }

  async function createNote() {
    const data = {namet: "name Tol"};
    const apiData = await client.graphql({
      query: myCustomMutation,
      variables: {namet: "name Tol"},
    });
    console.log('apiData mut >>> ', apiData)
  }

  const btnClick = async () => {
    //await fetchNotes()
    await createNote()
  }

  return (
    <div className="App">
      <button onClick={btnClick}>Amplify</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
