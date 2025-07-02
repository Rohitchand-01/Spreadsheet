import Excel from "./components/Excel"
import Footer from "./components/footer"
import Header from "./components/Header"
import SubHeader from "./components/SubHeader"

function App() {
  return (
    <div className="min-h-screen pb-[40px]">
      <Header />
      <SubHeader />
      <Excel />
      <Footer />
    </div>
  );
}



export default App
