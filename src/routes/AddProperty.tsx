import { PropertyStateProvider} from "../store/PropertyState";
import AddNewProperty from './AddNewProperty';

const AddProperty = () => {
  return (
    <PropertyStateProvider>
        <AddNewProperty/>
    </PropertyStateProvider>
  )
}

export default AddProperty