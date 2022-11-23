import './App.css';
import { Layout } from './components/common/layout';
import { CartPage } from './pages/cart';
import { LocationPage } from './pages/location';
import { ProductsPage } from './pages/products';
import { RestaurantsPage } from './pages/restaurants';
import { TicketsPage } from './pages/tickets';
import { NotificationsPage } from './pages/notifications';
import { ConfigPage } from './pages/config';
import { HelpPage } from './pages/help';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/common/login';
import { RegisterForm } from './components/common/register';
import { useState } from 'react';
import { ChatPage } from './pages/chat';
import { UserContext, useUser } from './hooks/user';
import { useEffect } from 'react';

function App() {
    let [logged, setLogged] = useState(false);
    let [visibleLogin, setVisibleLogin] = useState(false);
    let [visibleRegister, setVisibleRegister] = useState(false);
    let [restaurantRegister, setRestaurantRegister] = useState(false);
    // Estado Del Usuario
    let [user, userLogin, userLogout, userRegister] = useUser();

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

    useEffect(() => {
        if (user && user.ok) {
            setLogged(true);
            setVisibleLogin(false);
            setVisibleRegister(false);
        } else if (user && !user.ok) {
            alert("usuario invalido");
        }
    }, [user]);

    const onLogin = (email, password) => {
        userLogin(email, password);
    };

    const onRegister = (information) => {
        userRegister(information);
    }

    const onForbiden = <Navigate to="/"/>;
    const onLoginCancel = () => {
        setVisibleLogin(false);
        setVisibleRegister(false);
    };

    const onLogout = () => {
        userLogout();
        setLogged(false);
    };

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
                    <UserContext.Provider value={user}>
                        <Routes>
                            <Route path="/" element={<RestaurantsPage/>}/>
                            <Route path="/restaurant/:id" element={<ProductsPage/>} />
                            <Route path="/location" element={user ? <LocationPage/> : onForbiden}/>
                            <Route path="/cart" element={<CartPage/>}/>
                            <Route path="/tickets" element={user ? <TicketsPage/> : onForbiden}/>
                            <Route path="/notifications" element={user ? <NotificationsPage/> : onForbiden}/>
                            <Route path="/chat/:id" element={user ? <ChatPage/> : onForbiden}/>
                            <Route path="/config" element={user ? <ConfigPage/> : onForbiden}/>
                            <Route path="/help" element={user ? <HelpPage/> : onForbiden}/>
                        </Routes>
                    </UserContext.Provider>
                </Layout>
            </BrowserRouter>

            <LoginForm visible={visibleLogin} onLogin={onLogin} onCancel={onLoginCancel}/>
            <RegisterForm restaurant={restaurantRegister} visible={visibleRegister} onRegister={onRegister} onCancel={onLoginCancel}/>
        </div>
    );
}

export default App;
