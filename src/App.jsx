import './App.css';
import { Layout } from './components/common/layout';
import { CartPage } from './pages/cart';
import { LocationPage } from './pages/location';
import { ProductsPage } from './pages/products';
import { RestaurantsPage } from './pages/restaurants';

function App() {
    return (
        <div className="App">
            <Layout>
                <LocationPage />
            </Layout>
        </div>
    );
}

export default App;
