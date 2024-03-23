import './App.css';
import Layout from './utils/Layout';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Folders from './components/Content/Folders/Folders';
import Detail from './components/Content/Detail/Detail';

function App() {
  return (
    <Layout>
      <Aside/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Content children={<Folders/>} />} />
            <Route path='/detail/:id' element={<Content children={<Detail/>} />} />
          </Routes>
        </BrowserRouter>
    </Layout>
  );
}

export default App;
