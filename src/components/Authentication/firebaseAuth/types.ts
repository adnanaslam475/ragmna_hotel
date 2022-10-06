export interface Supplier {
    name: string,
    crNumber: string,
    vatNumber: string,
    contact: {
        name: string,
        phone: number
    }
}
export interface SignupRequestBody {
    supplier: Supplier
    email: string,
    password: string,
    name: string,
    phoneNumber: number,
    countryCode: number
}

export interface LogInRequestBody{
    email: string,
    password: string
}