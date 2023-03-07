import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DogModal from "../components/DogModal";

describe('Dog modal',()=>{

    const mockHandler = jest.fn();
    let component;
    const imageUri='http://testing.com.png'
    beforeEach(() => {
        component = render(<DogModal Open={true} Close={mockHandler} ImageUri={imageUri} />);
    });

    test('Component DogModal is inside the document with an image', () => {
        component.findByRole('presentation');
        const a=component.getByRole('img');
        expect(component.container).toBeInTheDocument();
        expect(a).toHaveAttribute('src',imageUri);
    });

});