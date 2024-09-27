import ProductMolecule from "../Molecules/ProductMolecule";
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import Grid from '@mui/material/Grid2';

const ProductsOrganism = () => {
    const products = [
        {label: 'Tea', icon: <EmojiFoodBeverageIcon />},
        {label: 'Coffee', icon: <CoffeeIcon />},
        {label: 'Soda', icon: <LocalDrinkIcon />},
    ]
    return(
        <div>
            <Grid display={'flex'} justifyContent={'space-evenly'} sx={{margin: '2rem'}}>
                {products.map((product) => <ProductMolecule label={product.label} icon={product.icon} key={product.label}/>)}
            </Grid>
        </div>
    )
}

export default ProductsOrganism;