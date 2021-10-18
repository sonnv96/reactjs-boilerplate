import { Customer, ListParams, ListResponse } from "models"
import axiosClient from "./axiosClient"

const studentApi = {
    getAll(params: ListParams): Promise<ListResponse<Customer>> {
        const url = '/customers'
        return axiosClient.get(url, { params })
    },
    add(data: Customer): Promise<Customer> {
        const url = '/customers'
        return axiosClient.post(url, data)
    },
    update(id: string, data: Customer): Promise<Customer> {
        const url = `/customers/${id}`
        return axiosClient.patch(url, data)
    },
    remove(id: string): Promise<any> {
        const url = `/customers/${id}`
        return axiosClient.get(url)
    },
    getById(id: string): Promise<Customer> {
        const url = `/customers/${id}`
        return axiosClient.get(url)
    }
}

export default studentApi