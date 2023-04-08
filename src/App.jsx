import './App.css';
import Header from './components/Header-app';
import Footer from './components/Footer-app';
import routes from '@/router'
import {useRoutes } from 'react-router-dom'
function App() {
  //使用路由表
  const router_show = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      {/* 展示路由 */}
      {router_show}
      <Footer />
    </div>
  );
}

export default App;
