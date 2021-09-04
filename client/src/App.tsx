import ButtonLink from './components/button-link';
import Cyberse from './cyberse.png';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const markdown = `
  ## Commands
  
  - addrelated (Adds a related song based on the current one playing)
  - flipcoin
  - help
  - isplaying
  - join
  - leave
  - matchup *participants names*
  - mtg *card name* (Returns an image, cardname and legaility in commander and standard if on the list)
  - play *song name or url*
  - pokemon *card code* (Returns an image, cardname and legality in standard if on the list)
  - queue
  - rolldie "number of rolls" (Can be run without any number of rolls argument or up to the max of 6)
  - skip
  - stop
  - yugioh *card name* (Returns an image, cardname and banlist status if on the list)
  `;
  return (
    <div className="cover-container d-flex p-3 mx-auto flex-column">
      <main role="main" className="inner cover" style={{ textAlign: 'center' }}>
        <h1 className="cover-heading">Cyberse - The Discord Bot</h1>
        <ButtonLink
          name={'Add To Your Server'}
          link={
            'https://discord.com/api/oauth2/authorize?client_id=848116082861801522&permissions=8&scope=bot'
          }
        />
        <img
          src={Cyberse}
          alt="linkuriboh"
          height="50px"
          style={{ margin: '5%' }}
        />
        <ButtonLink
          name={'Suggest New Commands'}
          link={'https://github.com/BrendonLapp/Cyberse-Discord-Bot/issues'}
        />
        <ReactMarkdown children={markdown} />
      </main>
    </div>
  );
}

export default App;
