import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcorn from '@material-ui/icons/Search';

class Search extends React.Component{
    render() {
        return (
                <FormControl>
                    <Input
                        placeholder={'Search Words'}
                        startAdornment={
                            <InputAdornment position="start">
                            <IconButton>
                                <SearchIcorn/>
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
        );
    }
}
export default Search;