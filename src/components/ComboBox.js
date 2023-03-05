import { Autocomplete, CircularProgress, TextField } from "@mui/material";

const ComboBox = ({
    ListOfItems=[],
    Label='',
    OnChangeHandler,
    Loading,
}) => {
    return (
        <div>
            <Autocomplete
            sx={{width:'200px'}}
            options={ListOfItems}
            renderInput={(p)=><div><TextField {...p} label={Label}/>{Loading && <CircularProgress/>}</div>}
            onChange={OnChangeHandler}
            style={{backgroundColor:'#FFFF', padding:'5px', borderRadius:'5px',}}
            />
        </div>
    )
}

export default ComboBox;