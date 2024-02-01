import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("should render", () => {
    render(<Card />);
});

it("should match snapshot", () => {
    const {asFragment} = render(
        <Card
            caption="This is a Shiba Inu"
            src="https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg?w=1024"
            currNum={4}
            totalNum={4}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});