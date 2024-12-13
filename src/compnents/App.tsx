import {ThemeProvider} from "./provider-components/theme-provider.tsx";
import {ThemeBtn} from "./theme-btn.tsx";
import '../styles/App.css'

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ThemeBtn/>
      </ThemeProvider>
    </>
  )
}

export default App
