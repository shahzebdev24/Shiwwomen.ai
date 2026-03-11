import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Browse from './components/Browse/Browse';
import BusinessDetails from './components/BusinessDetails/BusinessDetails';
import Resources from './components/Resources/Resources';
import ResourceDetails from './components/ResourceDetails/ResourceDetails';
import SelectPlan from './components/SelectPlan/SelectPlan';
import BusinessInfo from './components/BusinessInfo/BusinessInfo';
import UserProfileSettings from './components/UserProfileSettings/UserProfileSettings';
import Footer from './components/Footer/Footer';
import LoggedInFooter from './components/Footer/LoggedInFooter';

function App() {
  const [isLoggedIn] = useState(true); // Simulating logged in state
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleNavigateToDetails = (business) => {
    setSelectedBusiness(business);
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  const handleNavigateToResource = (article) => {
    setSelectedBusiness(article); // Reusing state for article data
    setCurrentPage('resource-details');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'browse':
        return <Browse onBusinessClick={handleNavigateToDetails} />;
      case 'details':
        return <BusinessDetails business={selectedBusiness} onBack={() => setCurrentPage('browse')} />;
      case 'resources':
        return <Resources onArticleClick={handleNavigateToResource} />;
      case 'resource-details':
        return <ResourceDetails article={selectedBusiness} onBack={(page) => setCurrentPage(page)} navigateToPlan={() => setCurrentPage('select-plan')} />;
      case 'select-plan':
        return <SelectPlan onSubscribe={() => setCurrentPage('business-info')} />;
      case 'business-info':
        return <BusinessInfo onBack={() => setCurrentPage('select-plan')} onNext={() => { setCurrentPage('user-profile-settings'); window.scrollTo(0,0); }} />;
      case 'user-profile-settings':
        return <UserProfileSettings onBack={() => setCurrentPage('business-info')} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main style={{ paddingTop: '72px' }}>
        {renderPage()}
      </main>
      {isLoggedIn ? <LoggedInFooter /> : <Footer />}
    </div>
  );
}

export default App;
