// import { FormControl,  MenuItem, Select, Button } from '@mui/material'
import { Box, Button, FormControl, Typography } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
function ButtonCompo(props) {
    const { handle, label, type, variant } = props;

    return (
        <Box mt={3} width={'100%'} height={'100%'} maxWidth={80}>
            <FormControl fullWidth>
                <Button
                    onClick={handle}
                    variant={variant}
                    // color="success"
                    size={type}
                    startIcon={<SearchIcon />}
                >
                    {label}
                </Button>
            </FormControl>
        </Box>
    );
}

export default ButtonCompo;