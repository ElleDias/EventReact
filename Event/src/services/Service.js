//acesso que tem como base o local da nossa api

import axios from "axios";
const apiPorta = "5289"

const apiAzure = "apieventdanielle-gperchadevhqh5b8.brazilsouth-01.azurewebsites.net";

//apiLocal ela recebe o endereco da api
const apilocal = `http://localhost:${apiPorta}/api/`;

const api = axios.create({
  baseURL: apilocal  
});

export default api;