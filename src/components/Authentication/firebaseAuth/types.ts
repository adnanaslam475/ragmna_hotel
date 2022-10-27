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
    email: string,
    password: string,
    name: string,
    phoneNumber: string | null,
    countryCode: string | number | undefined
    sname:string
}

export interface LogInRequestBody{
    email: string,
    password: string
}