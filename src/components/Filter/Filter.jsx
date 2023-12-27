import Input from "components/Form/Input.styled";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "reduxToolkit/filterSlice";
import { getFilterWord } from "reduxToolkit/selectors";

const Filter = () => {
    const filter = useSelector(getFilterWord);
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(addFilter(event.target.value));
    }

    return (
        <div>
        <p>Find contacts by name</p>
            <Input type="text" name="filter" value={filter} onChange={handleChange} />       
        </div>
    )
}

export default Filter;