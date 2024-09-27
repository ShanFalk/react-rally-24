import PageTemplate from "../Templates/PageTemplate"
import ProductsOrganism from "../Organisms/ProductsOrganism";

const HomePage = () => {
    return (
        <PageTemplate main={<ProductsOrganism />}/>
    )
}

export default HomePage;