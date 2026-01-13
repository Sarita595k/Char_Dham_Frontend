import { useAccordionButton } from "react-bootstrap"


const RegistrationBtn = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        onclick && onclick()
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

export default RegistrationBtn;