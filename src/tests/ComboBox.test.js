import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ComboBox from "../components/ComboBox";

describe('ComboBox component', () => {


    const items = ['Dog a', 'Dob b', 'Dog c'];
    const mockHandler = jest.fn();
    let component;
    beforeEach(() => {
        component = render(<ComboBox ListOfItems={items} Label='Testing' OnChangeHandler={mockHandler} />);
    });


    test('Component is inside the document', () => {
        component.findByRole('combobox');
        expect(component.container).toBeInTheDocument();
        expect(component.container).toHaveTextContent('Testing');
        // component.debug();
    });



    test('Component show its options when user types an a letter', () => {
        const c = component.getByRole('combobox');
        fireEvent.click(c);
        fireEvent.change(c, { target: { value: 'a' } });
        const val=component.findByRole('li');
        const a=component.getByRole('option');
        expect(a).toHaveTextContent('Dog a');
       //component.debug();
        expect(mockHandler.mock.calls).toHaveLength(0);
    });
});