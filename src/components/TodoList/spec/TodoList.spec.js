import React from 'react';
import {shallow} from 'enzyme';
import '../../../setupTest';
import TodoList from '../components/TodoList';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableHead from '@material-ui/core/TableHead/TableHead';
import Todo from '../../../data/Todo';
import {STATUS} from '../../../utils';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Chip from '@material-ui/core/Chip/Chip';
import Button from '@material-ui/core/Button/Button';

describe('Todo List', function () {
    let component;
    let mockProps = {
        todos: [
            new Todo(0, 'name', STATUS.TODO, '2018-10-01', [])
        ]
    };
    let mockFn = jest.fn();
    describe('Do not have todos', function () {
        beforeAll(() => {
            let mockProps = {
                todos: []
            };
            component = shallow(<TodoList {...mockProps} />).dive()
        });

        it('should contain todo list table head', function () {
            expect(component.containsMatchingElement(
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Tags</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
            )).toBeTruthy();
        });

        it('should not contain todo list in table body', function () {
            expect(component.containsMatchingElement(
                <TableBody>
                    <TableRow>{expect.anything()}</TableRow>
                </TableBody>
            )).toBeFalsy();
        });
    });

    describe('Have one todo', function () {
        let mockProps;
        beforeAll(() => {
            mockProps = {
                todos: [
                    new Todo(0, 'name', STATUS.TODO, '2018-10-01', [])
                ],
                deleteTodos: jest.fn()
            };
            component = shallow(<TodoList {...mockProps} />).dive();
        });

        it('should have one todo in table body', function () {
            expect(component.containsMatchingElement(
                    <TableRow key={0}>
                        <TableCell item-id={0}>
                            name
                        </TableCell>
                        <TableCell>
                        </TableCell>
                        <TableCell>
                            2018-10-01
                        </TableCell>
                        <TableCell>
                            {STATUS.TODO}
                        </TableCell>
                        <TableCell>
                            <Button>Details</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
            )).toBeTruthy();
        });

        it('should delete one todo and nothing listed in the todo list', function () {
            // component.instance().handleDeleteTodo(mockProps.todos[0].id);
            expect(component.find('Table').length).toBe(1);
            // expect(mockProps.deleteTodos).toBeCalledWith([0]);
        });
    });
});