import logo from './logo.svg';
import './App.css';
import * as Actions from './Global/Actions'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import Sections from './Components/Sections';
import MenuItems from './Components/MenuItems';
import Header from './Components/Header';
function App(props) {
  const getData = () => {
    props.getData()
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {"success" in props.data ?
        <div className="App" style={{ backgroundImage: `url(${props.data.info.image_url})` }}>
          <Header></Header>
          <Banner></Banner>
          <div className='menuContainer'>
            <Menu></Menu>
            <Sections></Sections>
            <MenuItems></MenuItems>
          </div>
        </div>
        : <div class="loader">Loading...</div>}
    </>
  );
}
const mapStateToProps = (state) => {
  return ({
    data: state.data
  })
}
const mapActionsToProps = (dispatch) => {
  return ({
    getData: () => {
      dispatch(Actions.getData())
    }
  })
}
export default connect(mapStateToProps, mapActionsToProps)(App);
