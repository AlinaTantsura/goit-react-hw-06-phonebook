import Container from "./Container.styled";
import Contacts from "./Contacts/Contacts";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import { useSelector } from "react-redux";
import { getContacts } from "reduxToolkit/selectors";

export const App = () => {
    const contacts = useSelector(getContacts);
    return(
            <Container>
                <h1>Phonebook</h1>
                <Form />
            
            {(contacts.length !== 0) && (
                <>
                    <h2>Contacts</h2>
                    <Filter />
                    <Contacts />
                </>
                )}
                
            </Container>
        )
}