import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutPage from "./pages/AbouPage";
import ProfilePage from "./pages/ProfilePage";
import Main from "./pages/Main";

class App extends React.Component {
  render() {
    return (
      <>
      <main className="all-Pages">
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </main>
        
      </>
    );
  }
}

export default App;
