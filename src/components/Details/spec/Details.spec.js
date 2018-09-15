import React from 'react';
import {shallow, mount, render} from 'enzyme';
import '../../../setupTest';
import Details from '../components/Details';
import Todo from '../../../data/Todo';
import {STATUS} from '../../../utils';
import TextField from '@material-ui/core/TextField';

describe('Details component', function () {
    let component;
    let details = {
        show: true,
        todo: new Todo(0, 'name', STATUS.TODO, '2018-10-01', ['TWU']),
        backupTodo: new Todo(0, 'name', STATUS.TODO, '2018-10-01', ['TWU'])
    };
    let defaultTags = [
        'Meeting', 'TWU'
    ];
    describe('view', function () {
        beforeAll(() => {
            component = mount(<Details details={details} tags={defaultTags}/>)
        });

        it('should contain name field', function () {
            expect(component.containsMatchingElement(<TextField id='todoName'/>)).toBeTruthy();
            expect(component.find('TextField[id="todoName"]').props().value).toBe('name')
        });

        it('should contain due date field', function () {
            expect(component.containsMatchingElement(<TextField id='todoDueDate'/>)).toBeTruthy();
            expect(component.find('TextField[id="todoDueDate"]').props().value).toBe('2018-10-01')
        });

        it('should contain status field', function () {
            expect(component.find('Select[id="todoStatus"]').length).toBe(1);
            expect(component.find('Select[id="todoStatus"]').props().value).toBe(STATUS.TODO)
        });

        it('should contain tags field', function () {
            expect(component.find('Select[id="todoTags"]').length).toBe(1);
            expect(component.find('Select[id="todoTags"]').props().value).toEqual(['TWU'])
        });
    });

    describe('When change data', function () {
        beforeAll(() => {
            component = shallow(<Details details={details} tags={defaultTags}/>).dive()
        });

        it('should update name', function () {
            let event = {target: {value: 'newName'}};
            component.instance().handleChangeTodoName(event);
            expect(component.state('todo')).toEqual(expect.objectContaining({name: 'newName'}))
        });

        it('should update status', function () {
            let event = {target: {value: STATUS.BLOCKED}};
            component.instance().handleChangeToDoStatus(event);
            expect(component.state('todo')).toEqual(expect.objectContaining({status: STATUS.BLOCKED}))
        });

        it('should update due date', function () {
            let event = {target: {value: '2018-10-01'}};
            component.instance().handleChangeTodoDueDate(event);
            expect(component.state('todo')).toEqual(expect.objectContaining({dueDate: '2018-10-01'}))
        });

        it('should update tags', function () {
            let event = {target: {value: ['TWU', 'MEETING']}};
            component.instance().handleChangeTodoTags(event);
            expect(component.state('todo')).toEqual(expect.objectContaining({tags: ['TWU', 'MEETING']}))
        });
    });
});

