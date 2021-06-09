import logo from './logo.svg';
import './App.css';
import * as Actions from './Global/Actions'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import Sections from './Components/Sections';
import MenuItems from './Components/MenuItems';
function App(props) {
  const getData=()=>{
    console.log("here2");
props.getData()
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      {"success" in props.data?
      <div className="App" style={{ backgroundImage: `url(${props.data.info.image_url})` }}>
      <Banner></Banner>
      <div className='menuContainer'>
      <Menu></Menu>
      <Sections></Sections>
      <MenuItems></MenuItems>
      </div>
      </div>
      :null}
    </>
  );
}
const mapStateToProps=(state)=>{
  return({
      data:state.data
  })
}
const mapActionsToProps=(dispatch)=>{
  return({
    getData:()=>{
      console.log("here3");
      dispatch(Actions.getData())}
  })
}
export default connect(mapStateToProps,mapActionsToProps)(App);
