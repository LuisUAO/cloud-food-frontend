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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/common/login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<RestaurantsPage/>}/>
                        <Route path="/restaurant" element={<ProductsPage/>}/>
                        <Route path="/location" element={<LocationPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/tickets" element={<TicketsPage/>}/>
                        <Route path="/notifications" element={<NotificationsPage/>}/>
                        <Route path="/config" element={<ConfigPage/>}/>
                        <Route path="/help" element={<HelpPage/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>

            <LoginForm />
        </div>
    );
}

export default App;
