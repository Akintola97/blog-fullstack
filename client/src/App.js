
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import ClickedPost from './components/ClickedPost';
import {UserContextProvider} from './UserContext'
import Layout from './Layout'
import Index from './components/Index'
import Editpost from './components/Editpost';

function App() {
  return (
    
    <UserContextProvider>
<Routes>
<Route path = '/' element={<Layout />}>
<Route index element = {<Index />} />
<Route path = {'/login'} element={<Login/>}/>
<Route path = {'/Register'} element={<Register />}/>
<Route path = {'/create'} element={<CreatePost />}/>
<Route path = {'/post/:id'} element={<ClickedPost />}/>
<Route path = {'/edit/:id'} element={<Editpost />}/>
</Route> 
</Routes>
</UserContextProvider>
);
}

export default App;
