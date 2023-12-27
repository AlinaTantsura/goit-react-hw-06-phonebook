import Button from "components/Form/Button.styled";
import Item from "./Item.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "reduxToolkit/contactsSlice";
import { getContacts, getFilterWord } from "reduxToolkit/selectors";
import { Notify } from "notiflix";

const Contacts = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterWord);
    const dispatch = useDispatch();

    const getFiltredContacts = (contacts, filter) => {
        if(filter) return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        return contacts;
    }
    const filtredContacts = getFiltredContacts(contacts, filter);

    return (
            <ul>
                {filtredContacts.map(({ name, id, number }) => (<Item key={id} id={id}>{name}: {number}   
                    <Button type='button'
                        onClick={() => {
                            Notify.success(`The contact '${name}' is successfully deleted`);
                            return dispatch(deleteContact(id))
                        }}>Delete</Button> </Item>
                ))}
            </ul>
    )
}

export default Contacts;