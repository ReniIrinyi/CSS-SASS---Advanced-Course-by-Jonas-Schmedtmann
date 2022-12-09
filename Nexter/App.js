import "./App.scss";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Realtors from "./components/realtors";
import Features from "./components/features";
import Story from "./components/story";
import StoryContent from "./components/storyContent";
import Footer from "./components/footer";
import Homes from "./components/homes";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
