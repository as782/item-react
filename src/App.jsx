import './App.css';
import Header from './components/Header-app';
import Footer from './components/Footer-app';
import routes from '@/router'
import { useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import MusicPlayBar from './components/Music-play-bar';
import { memo } from 'react';
function App() {
  //使用路由表
  const router_show = useRoutes(routes);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        {/* 展示路由 */}
        {router_show}
        <MusicPlayBar />
        <Footer />
      </div>
    </Provider>
  );
}

export default  memo(App) ;
