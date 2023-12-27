import FormStyled from "./Form.styled";
import Button from "./Button.styled";
import Input from "./Input.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "reduxToolkit/contactsSlice";
import { getContacts } from "reduxToolkit/selectors";
import { Notify } from "notiflix";

const Form = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const obj = { name, number };
        if (contacts.find(contact => contact.name === name)) {
            Notify.warning(`${name} is already in your contacts`)
            
        }
        else {
            dispatch(addContact(obj));
            Notify.success(`New contact '${name}' is successfully created`)
        }
        form.reset();
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
        <label>
            Name
                    <Input
                        type="text"
                        name="name"
                        required
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name must contain only letters" />
        </label>
        <label>
            Number
                    <Input
                        type="tel"
                        name="number"
                        required
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="'123-45-67'   Number must contain only numbers"/>
        </label>
        <Button type="submit">Add contact</Button>
    </FormStyled>
    )

}

export default Form;