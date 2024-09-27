import { Link } from "@mui/material";

export default function LinkAtom({name, hrefProp, underlineProp}) {
    return (
        <div>
            <Link href={hrefProp} underline={underlineProp}>{name}</Link>
        </div>
    )
}