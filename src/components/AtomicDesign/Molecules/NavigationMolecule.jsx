import LinkAtom from '../Atoms/LinkAtom';
import { Box } from '@mui/material';
export default function NavigationMolecule({links}) {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                    ml: 2,
                    },
                }}
            >
            {links.map((link) => <LinkAtom hrefProp={link.hrefProp} underlineProp={link.underlineProp} name={link.name} key={link.name} />)}
            </Box>
        </div>
    )
}