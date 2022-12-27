/* Style */
import './style.scss';

/* Modules */
import { Route, Routes } from 'react-router-dom';

/* Components */
import Header from '../Header/Header';
import Main from '../Main/Main';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Artwork from '../Artwork/Artwork';
import Artists from '../Artists/Artists'
import Collections from '../Collections/Collections';
import Collection from '../Collections/Collection/Collection';
import Charity from '../Charity/Charity';
import Contact from '../Contact/Contact';
import Protected from '../Admin/Protected/Protected';
import NotFound404 from '../NotFound404/NotFound404';

import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
    <div className="App">
      <AnimatedCursor
      innerSize={10}
      outerSize={50}
      color='44, 42, 43'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={1.8}
      trailingSpeed={1}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Routes>

        {/* HOME */}
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>}
        />

        {/* ARTISTS */}
        <Route path='/artists' element={<Artists />} />

        {/* COLLECTIONS */}
        <Route path='/collections' element={<Collections />} />
        {/* COLLECTION */}
        <Route path='/collections/collection' element={<Collection />} />

        {/* CHARITY */}
        <Route path='/charity' element={<Charity />} />

        {/* SIGN UP */}
        <Route path='/signup' element={<SignUp />} />

        {/* SIGN IN */}
        <Route path='/signin' element={<SignIn />} />

        {/* PROFILE */}
        <Route path='/profile' element={<Profile />} />



        {/* CONTACT */}
        <Route path='/contact' element={<Contact />} />

        {/* Admin */}
        {/* <Route path='/login-team' element={<Admin />} /> */}
        <Route path='/admin/dashboard' element={<Protected />} />

        {/* ARTWORK DETAIL PAGE */}
        <Route path='/artwork/:id' element={<Artwork />} />

        {/* 404 */}
        <Route path='*' element={<>
          <Header />
          <NotFound404 />
          <Footer />
        </>}
        />
      </Routes>
    </div>
  );
}

export default App;
