import client from "./client";


export const fetchJobCodeList = () => client.get('/codes/job');
export const fetchCompanyList = () => client.get("/company/list");