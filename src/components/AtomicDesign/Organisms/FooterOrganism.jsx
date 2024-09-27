import React from 'react';
import Grid from '@mui/material/Grid2';
import LogoAtom from '../Atoms/LogoAtom';
import NavigationMolecule from '../Molecules/NavigationMolecule';

const FooterOrganism = () => {
    const links=[
        {hrefProp: '#', underlineProp: 'hover', name: 'Privacy Policy'},
        {hrefProp: '#', underlineProp: 'hover', name: 'Careers'},
        {hrefProp: '#', underlineProp: 'hover', name: 'Contact'},
    ]
    return (
        <div>
            <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <LogoAtom />
                <NavigationMolecule links={links}/>
            </Grid>
        </div>
    )
}

export default FooterOrganism;