import './App.css';
import { Layout } from './components/common/layout';
import { CartPage } from './pages/cart';
import { LocationPage } from './pages/location';
import { ProductsPage } from './pages/products';
import { RestaurantsPage } from './pages/restaurants';
import { TicketsPage } from './pages/tickets';
import { NotificationsChatPage, NotificationsPage } from './pages/notifications';
import { ConfigPage } from './pages/config';
import { HelpPage } from './pages/help';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/common/login';
import { RegisterForm } from './components/common/register';
import { useState } from 'react';
import { ChatPage } from './pages/chat';

function App() {
    //TODO: LLEVAR EL LOGGED A UN REDUCER
    let [logged, setLogged] = useState(false);
    let [visibleLogin, setVisibleLogin] = useState(false);
    let [visibleRegister, setVisibleRegister] = useState(false);
    let [restaurantRegister, setRestaurantRegister] = useState(false);

    const onLogin = () => {
        setLogged(true);
        setVisibleLogin(false);
        setVisibleRegister(false);
    };

    const showLogin = () => 
        setVisibleLogin(true);

    const showRegister = () => {
        setRestaurantRegister(false);
        setVisibleRegister(true);
    }
    const showRegisterRestaurant = () => {
        setRestaurantRegister(true);
        setVisibleRegister(true);
    }

    const onLoginCancel = () => {
        setVisibleLogin(false);
        setVisibleRegister(false);
    };

    const onLogout = () => setLogged(false);

    return (
        <div className="App">
            <BrowserRouter>
                <Layout 
                    logged={logged} 
                    requestLogin={showLogin} 
                    requestRegister={showRegister}
                    requestRegisterRestaurant={showRegisterRestaurant}
                    requestLogout={onLogout}
                >
                    <Routes>
                        <Route path="/" element={<RestaurantsPage/>}/>
                        <Route path="/restaurant" element={<ProductsPage/>}/>
                        <Route path="/location" element={<LocationPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/tickets" element={<TicketsPage/>}/>
                        <Route path="/notifications" element={<NotificationsPage/>}/>
                        <Route path="/chat/:id" element={<ChatPage/>}/>
                        <Route path="/config" element={<ConfigPage/>}/>
                        <Route path="/help" element={<HelpPage/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>

            <LoginForm visible={visibleLogin} onLogin={onLogin} onCancel={onLoginCancel}/>
            <RegisterForm restaurant={restaurantRegister} visible={visibleRegister} onRegister={onLogin} onCancel={onLoginCancel}/>
        </div>
    );
}

export default App;
