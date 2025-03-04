import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ViewList from "./components/ViewList";

export default function App(){
  return(
    <main className="w-full" >
      <Navbar/>
      <ViewList/>
      <Footer/>
    </main>
  )
}