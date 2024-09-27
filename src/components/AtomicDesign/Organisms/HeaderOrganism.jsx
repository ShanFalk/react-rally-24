import React from 'react';
import Grid from '@mui/material/Grid2';
import SearchMolecule from '../Molecules/SearchMolecule';
import LogoAtom from '../Atoms/LogoAtom';
import NavigationMolecule from '../Molecules/NavigationMolecule';

const HeaderOrganism = () => {
    const links=[
        {hrefProp: '#', underlineProp: 'hover', name: 'Home'},
        {hrefProp: '#', underlineProp: 'hover', name: 'About'},
        {hrefProp: '#', underlineProp: 'hover', name: 'Products'},
    ]
    return (
        <div>
            <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <LogoAtom />
                <NavigationMolecule links={links}/>
                <SearchMolecule />
            </Grid>
        </div>
    )
}

export default HeaderOrganism;