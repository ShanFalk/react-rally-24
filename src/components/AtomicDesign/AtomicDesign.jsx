import React from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ButtonAtom from './Atoms/ButtonAtom';
import SearchMolecule from './Molecules/SearchMolecule';
import HeaderOrganism from './Organisms/HeaderOrganism';
import HomePage from './Pages/HomePage';
import PageTemplate from './Templates/PageTemplate';
export default function AtomicDesign() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));

    return(
        <div>
             <div>
                <h2>Atomic Design</h2>
            </div>
            <Grid container spacing={2} sx={{marginBottom: '4rem'}} justifyContent={'center'}>
                <Grid size={6}>
                    <h3>Atom</h3>
                    <Item>
                        <ButtonAtom label={'Button'} onClick={()=>console.log('Atom')}/>
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: '4rem'}} justifyContent={'center'}>
                <Grid size={6}>
                    <h3>Molecule</h3>
                    <Item>
                        <SearchMolecule />
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: '4rem'}} justifyContent={'center'}>
                <Grid size={6}>
                    <h3>Organism</h3>
                    <Item>
                        <HeaderOrganism />
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: '4rem'}} justifyContent={'center'}>
                <Grid size={6}>
                    <h3>Template</h3>
                    <Item>
                        <PageTemplate main={<h1>Main Content Here!</h1>} />
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: '4rem'}} justifyContent={'center'}>
                <Grid size={6}>
                    <h3>Page</h3>
                    <Item>
                        <HomePage />
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
}