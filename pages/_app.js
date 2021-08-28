import { supabase } from "../supabase";
import { UserContextProvider } from "../supabase/authentication";
import "tailwindcss/tailwind.css";
import "react-awesome-button/dist/styles.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default App;
