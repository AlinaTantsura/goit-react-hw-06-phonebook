import Container from "./Container.styled";
import Contacts from "./Contacts/Contacts";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";

export const App = () => {
    return(
            <Container>
                <h1>Phonebook</h1>
                    <Form />
                <h2>Contacts</h2>
                    <Filter />
                    <Contacts/>
            </Container>
        )
}