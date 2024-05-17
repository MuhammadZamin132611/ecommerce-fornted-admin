import axios from "axios";
import { base_url } from "../../utils/base_url";


const getBCategory = async () => {
    const response = await axios.get(`${base_url}blogcategory/`);

    return response.data;
};




const bCategoryService = {
    getBCategory,
}

export default bCategoryService;