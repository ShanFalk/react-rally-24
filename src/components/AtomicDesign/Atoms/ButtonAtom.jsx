import { Button } from "@mui/material";

export default function ButtonAtom({label, onClick}) {

    return (
        <div>
        <Button variant="contained" onClick={onClick}>{label}</Button>
        </div>
    )
}