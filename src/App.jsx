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

function App() {
    return (
        <div className="App">
            <Layout>
                <HelpPage />
            </Layout>
        </div>
    );
}

export default App;
