import logo from './logo.svg';
import './App.css';
import * as Actions from './Global/Actions'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import Sections from './Components/Sections';
function App(props) {
  const getData=()=>{
    console.log("here2");
props.getData()
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      {"success" in props.data?
      <>
      <Banner></Banner>
      <Menu></Menu>
      <Sections></Sections>
      </>
      :null}
    </div>
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
