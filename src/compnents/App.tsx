import {ThemeProvider} from "./provider-components/theme-provider.tsx";
import {ThemeBtn} from "./theme-btn.tsx";
import '../styles/App.css'
import {Game} from "./game.tsx";

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ThemeBtn/>
          <Game/>
      </ThemeProvider>
    </>
  )
}

export default App
