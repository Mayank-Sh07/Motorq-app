import Header from "./Header";
import Footer from "./Footer";

// Layout Component that adds Header and Footer to all pages
export default function Layout({ children }) {
  return (
    <div>
      <div className="container m-auto">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
