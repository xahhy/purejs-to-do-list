import React from 'react';
import {shallow, mount, render} from 'enzyme';
import ActionButtons from '../components/ActionButtons';
import Button from '@material-ui/core/Button';
import '../../../setupTest';

describe('Action Buttons', () => {
    let component;
    beforeAll(()=> {
        component = mount(<ActionButtons/>)
    });

    it('should have primary button', () => {
        expect(component.find(Button).length).toBe(1);
        expect(component.find(Button).props()).toEqual(expect.objectContaining({
            color: 'primary'
        }));
    });
});
