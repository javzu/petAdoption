import { fireEvent, render,screen } from "@testing-library/react";
import ComboBox from "../components/ComboBox";

describe('ComboBox component', () => {

    let comboBox;
    let options;
    beforeEach(()=>{
        render(<ComboBox/>);
        comboBox= screen.getByRole('combobox');
        options= screen.getByRole('option');
    });

    test('Component is inside the document', () => {
        expect(comboBox).toBeInTheDocument();
     });

     test('Options available after click event',()=>{
        fireEvent.click(comboBox);
        expect(options).toBeInTheDocument();
     });
});