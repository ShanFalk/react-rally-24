import InputAtom from "../Atoms/InputAtom"
import ButtonAtom from "../Atoms/ButtonAtom"
import Grid from '@mui/material/Grid2';
import React from "react"
export default function SearchMolecule() {
    return (
        <div>
            <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <InputAtom label={'Search...'} defaultValue={''} required={false} styles={{marginRight: '1rem'}}/>
                <ButtonAtom label={'Search'} onClick={()=>console.log('Searching...')}/>
            </Grid>
        </div>
    )
}