import { Card, CardActions, CardContent, Typography } from "@mui/material"
import LinkAtom from "../Atoms/LinkAtom"

const ProductMolecule = ({label, icon}) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {label}
                    </Typography>
                    {icon}
                </CardContent>
                <CardActions>
                    <LinkAtom name={'Browse'} hrefProp={'#'} underlineProp={'hover'}/>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductMolecule;