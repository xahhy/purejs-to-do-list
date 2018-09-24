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
        // minWidth: 120,
        // maxWidth: 300,
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
        this.state = {tags: []}
    }

    handleChangeTags = (event) => {
        this.setState({tags: event.target.value});
        this.props.filterByTags(event.target.value);
    };

    componentDidUpdate(){
    }

    render() {
        const {tags, theme} = this.props;
        return (
            <FormControl fullWidth={true} className={theme.formControl}>
                <InputLabel shrink htmlFor="select-multiple-tags-for-search">Tags</InputLabel>
                <Select
                    multiple
                    value={this.state.tags}
                    onChange={(event)=>this.handleChangeTags(event)}
                    input={<Input id="select-multiple-tags-for-search"/>}
                    renderValue={selected => (
                        <div>
                            {selected.map(tagId => tags.find(tag=>tag.id === tagId)).map(tag => (
                                <Chip key={tag.id} label={tag.name} className={theme.chip}/>
                            ))}
                        </div>
                    )}
                    fullWidth={true}
                >{
                    tags.map(tag =>
                        <MenuItem
                            key={tag.id}
                            value={tag.id}
                            style={{
                                fontWeight:
                                    this.state.tags.indexOf(tag.id) === -1
                                        ? theme.typography.fontWeightRegular
                                        : theme.typography.fontWeightMedium,
                            }}
                        >
                            {tag.name}
                        </MenuItem>
                    )
                }
                </Select>
            </FormControl>
        );
    }
}

export default withStyles(styles, {withTheme: true})(SearchTags);
