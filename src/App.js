import React, { useState, useEffect } from 'react';
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
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    // Set initial state for history
    window.history.replaceState({ page: 'login' }, '', '');

    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setPageOnly(event.state.page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setPageOnly = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navigate = (page) => {
    setPageOnly(page);
    window.history.pushState({ page }, '', '');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('home');
  };

  const handleNavigateToDetails = (business) => {
    setSelectedBusiness(business);
    navigate('details');
  };

  const handleNavigateToResource = (article) => {
    setSelectedBusiness(article); // Reusing state for article data
    navigate('resource-details');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login setCurrentPage={navigate} onLogin={handleLogin} />;
      case 'browse':
        return <Browse onBusinessClick={handleNavigateToDetails} />;
      case 'details':
        return <BusinessDetails business={selectedBusiness} onBack={() => navigate('browse')} />;
      case 'resources':
        return <Resources onArticleClick={handleNavigateToResource} />;
      case 'resource-details':
        return <ResourceDetails article={selectedBusiness} onBack={(page) => navigate(page)} navigateToPlan={() => navigate('select-plan')} />;
      case 'select-plan':
        return <SelectPlan onSubscribe={() => navigate('business-info')} />;
      case 'business-info':
        return <BusinessInfo onBack={() => navigate('select-plan')} onNext={() => { navigate('user-profile-settings'); }} />;
      case 'user-profile-settings':
        return <UserProfileSettings onBack={() => navigate('business-info')} />;
      default:
        return <Home />;
    }
  };


  if (currentPage === 'landing') {
    return <Landing setCurrentPage={navigate} />;
  }

  return (
    <div className="App">
      <Header setCurrentPage={navigate} currentPage={currentPage} />
      <main style={{ paddingTop: '72px' }}>
        {renderPage()}
      </main>
      {isLoggedIn ? <LoggedInFooter /> : <Footer />}
    </div>
  );
}

export default App;
