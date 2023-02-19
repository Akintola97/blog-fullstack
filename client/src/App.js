import Index from './components/Index';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Post from './components/CreatePost';
import ClickedPost from './components/ClickedPost';



function App() {
  return (
    <>
<Routes>
<Route path = '/' element={
<div>
<Header />
<Index />
</div>
} 
/>
<Route path = {'/login'} element={
    <Login />
}/>
<Route path = {'/Register'} element={
<Register />
}/>
<Route path = {'/Post'} element={
<Post />
}/>
<Route path = {'/post/:id'} element={
<ClickedPost />
}/>
</Routes>
</>
  );
}

export default App;
