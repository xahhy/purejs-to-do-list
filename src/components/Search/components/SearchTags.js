import React from 'react';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import Input from '@material-ui/core/Input/Input';
import Chip from '@material-ui/core/Chip/Chip';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Grid from '@material-ui/core/Grid/Grid';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

class SearchTags extends React.Component{

    constructor(props) {
        super(props);
        this.state = {_tags: []}
    }

    handleChangeTags = (event) => {
        this.setState({_tags: event.target.value});
    };

    render() {
        const {tags, theme} = this.props;
        return (
            <FormControl fullWidth={true}>
                <InputLabel shrink htmlFor="select-multiple-tags-for-search">Tags</InputLabel>
                <Select
                    multiple
                    value={this.state._tags}
                    onChange={(event)=>this.handleChangeTags(event)}
                    input={<Input id="select-multiple-tags-for-search"/>}
                    renderValue={selected => (
                        <div>
                            {selected.map(value => (
                                <Chip key={value} label={value}/>
                            ))}
                        </div>
                    )}
                    fullWidth={true}
                >{
                    tags.map(name =>
                        <MenuItem
                            key={name}
                            value={name}
                            style={{
                                fontWeight:
                                    this.state._tags.indexOf(name) === -1
                                        ? theme.typography.fontWeightRegular
                                        : theme.typography.fontWeightMedium,
                            }}
                        >
                            {name}
                        </MenuItem>
                    )
                }
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles, {withTheme: true})(SearchTags);
