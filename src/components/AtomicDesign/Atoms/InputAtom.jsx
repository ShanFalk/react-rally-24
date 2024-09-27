import { TextField } from "@mui/material"

export default function InputAtom({label, defaultValue, required, styles}) {

    return (
        <div>
        <TextField variant="outlined" label={label} defaultValue={defaultValue} required={required} sx={styles}/>
        </div>
    )
}