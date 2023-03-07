import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DogCard from "../components/DogCard";

describe('Dog Card',()=>{

    const mockHandler = jest.fn();
    let component;
    const imageUri='http://testing.com.png'
    beforeEach(() => {
        component = render(<DogCard ModalHandler={mockHandler} ImageUri={imageUri} />);
        component.findByRole('button')
    });

    test('Component DogCard is inside the document with an image', () => {
        component.findByRole('presentation');
        const a=component.getByRole('img');
        expect(component.container).toBeInTheDocument();
        expect(a).toHaveAttribute('src',imageUri);
    });

    test('Component DogCard can show a modal', () => {
        component.findByRole('presentation');
        const a=component.getByRole('button');
        fireEvent.click(a);
        expect(component.container).toBeInTheDocument();
    });

});