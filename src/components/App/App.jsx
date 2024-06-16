import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import Modal from 'pages/Modal/Modal';
import Page404 from 'pages/Page404/Page404';
import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { Component } from 'react';

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
          {this.state.isShowModal && <Modal hideModal={this.hideModal} />}
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalog"
            element={<Catalog showModal={this.showModal} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Page404 />} />
          {/* {true && <Route path="/modal" element={<Modal />} />} */}
        </Routes>
      </Container>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <Container>
//       <Header>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/catalog">Catalog</Link>
//           <Link to="/favorites">Favorites</Link>
//         </nav>
//       </Header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/catalog" element={<Catalog />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="*" element={<Page404 />} />
//         {true && <Route path="/modal" element={<Modal />} />}
//       </Routes>
//     </Container>
//   );
// };
