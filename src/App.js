import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Index from "./Pages/Index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <Footer />
      <div className="FixedImage">
        <img
          src="https://drfsb8fjssbd3.cloudfront.net/images/whatsapp_optimized.png"
          alt="..."
        />
      </div>
    </div>
  );
}

export default App;
