import {ThemeProvider} from "./provider-components/theme-provider.tsx";
import {ThemeBtn} from "./theme-btn.tsx";
import '../styles/App.css'
import {Game} from "./game.tsx";
import {UserProvider} from "./provider-components/user-provider.tsx";

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ThemeBtn/>
          <div className="container">
              <h1>Connect 4</h1>
              <UserProvider>
                  <Game/>
              </UserProvider>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
