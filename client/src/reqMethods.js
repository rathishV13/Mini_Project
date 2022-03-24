import axios from "axios";

const _baseURL = "http://localhost:5000/api/"
const _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzQ5MmE4Mjg2MjNjOGRkNjI4ZmQxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODEwNjk1OCwiZXhwIjoxNjQ4MzY2MTU4fQ.cO2NDqq34wyjiUVvbAIUfVVwII888Mz4CGAtVmA_Xpk"

export const publicReq = axios.create({
    baseURL: _baseURL,
})

export const userReq = axios.create({
    baseURL: _baseURL,
    header: {token: `Bearer ${_token}`}
})