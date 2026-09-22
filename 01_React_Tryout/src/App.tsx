import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Horny Hehle</h1>
          <p>
            Sebastian ist der größte Hoe in seiner Mannschaft
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Sebi mag Männer</h2>
          <p>Bilder unter diesem link</p>
          <ul>
            <li>
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=E%2fEnczQE&id=8A78CDC7F49FEDBB3318F7B35DD5A85F2A30A2AD&thid=OIP.E_EnczQEs-QBbfeOzg4YWwHaEK&mediaurl=https%3a%2f%2fwww.hchard.at%2fwp-content%2fuploads%2f2015%2f09%2fSebastian-Kainz-640x360.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.13f127733404b3e4016df78ece0e185b%3frik%3draIwKl%252bo1V2z9w%26pid%3dImgRaw%26r%3d0&exph=360&expw=640&q=sebastian+hehle&FORM=IRPRST&ck=E7E3DA449F897061487B907416285B9D&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://www.oefb.at/Profile/Spieler/1240766?Sebastian-Jan-Hehle" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Wollt ihr noch mehr Informationen?</h2>
          <p>Geht unter diesen links</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
