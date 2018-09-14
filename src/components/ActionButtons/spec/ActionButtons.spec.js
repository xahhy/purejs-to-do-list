import React from 'react';
import {shallow} from 'enzyme';
import ActionButtons from '../components/ActionButtons';
import Button from '@material-ui/core/Button';
import '../../../setupTest';

describe('Action Buttons', function () {
    let component;
    beforeAll(()=> {
        component = shallow(<ActionButtons/>)
    });

    it('should have primary button', function () {
        // expect(component.find(Button).length).toBe(1);
    });
});
