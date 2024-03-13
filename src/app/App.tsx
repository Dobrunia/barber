import { AboutUs } from '../pages/AboutUs';
import { Catalog } from '../pages/Catalog';
import { Contacts } from '../pages/Contacts';
import { MainPage } from '../pages/MainPage';
import { OurWorks } from '../pages/OurWorks';
import { Footer } from '../widgets/Footer';
import { Header } from '../widgets/Header';
import './App.scss';

function App() {
  return (
    <div className='bg-AboutUs'>
      <Header />
      <MainPage />
      <AboutUs />
      <Catalog />
      <OurWorks />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
