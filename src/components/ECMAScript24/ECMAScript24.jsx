import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import GroupExample from './GroupExample';
import { inventory, indexes, stock, officers } from './ECMAHelper';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function ECMAScript24(){
    const [groupMdn, setGroupMdn] = React.useState(false);
    const [groupMdnTwo, setGroupMdnTwo] = React.useState(false);
    const [groupIndirect, setGroupIndirect] = React.useState(false);
    const [groupIndirectTwo, setGroupIndirectTwo] = React.useState(false);

    
    const type = Object.groupBy(inventory, ({ type }) => type);
    const name = Object.groupBy(indexes, ({name}) => name);

    const quantity = Map.groupBy(stock, ({quantity}) => quantity);

    const insufficient = {insufficient: true};
    const sufficient = {insufficient: false};

    const pullThrough = Map.groupBy(officers, ({pull_through_rate}) => 
     pull_through_rate < 0.6 ? insufficient : sufficient,
    );

    return(
        <div>
            <div>
                <h2>ECMAScript 24</h2>
                <h3>Examples</h3>
            </div>
            <Grid container spacing={2} sx={{marginBottom: '6rem'}}>
                <Grid size={6}>
                    <h3>MDN</h3>
                    <Button variant="contained" onClick={()=>setGroupMdn((prevState) => !prevState)}>Object.groupBy</Button>
                    <Item>
                        <GroupExample group={groupMdn} iterable={inventory} result={type}/>
                    </Item>
                </Grid>
                <Grid size={6}>
                <h3>nCino Indirect Lending</h3>
                <Button variant="contained" onClick={()=>setGroupIndirect((prevState) => !prevState)}>Object.groupBy</Button>
                    <Item><GroupExample group={groupIndirect} iterable={indexes} result={name}/></Item>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: '6rem'}}>
                <Grid size={6}>
                    <h3>MDN</h3>
                    <Button variant="contained" onClick={()=>setGroupMdnTwo((prevState) => !prevState)}>Map.groupBy</Button>
                    <Item>
                    <GroupExample group={groupMdnTwo} iterable={stock} result={quantity} mapKey={5}/>
                    </Item>
                </Grid>
                <Grid size={6}>
                <h3>nCino Indirect Lending</h3>
                <Button variant="contained" onClick={()=>setGroupIndirectTwo((prevState) => !prevState)}>Map.groupBy</Button>
                    <Item><GroupExample group={groupIndirectTwo} iterable={officers} result={pullThrough} mapKey={insufficient}/></Item>
                </Grid>
            </Grid>
        </div>
    )
}