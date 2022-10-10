export interface BusinessInfo {
    name: string
    crNumber: string
    vatNumber: string
    businessContactPerson: string
    businessContactNumber: number,
    logo: any
    currency: string
    timeZone: string
}

export interface UpdateSupplierById {
    id?: string,
    name?: string,
    crNumber?: string,
    contact?: {
        name?: string,
        phone?: number
    },
    subscriptionDetails?: SubscriptionDetails
}

export interface SubscriptionDetails {
    validTill: string,
    name: string,
    type: string,
    frequency: string,
    amount: number
}

export interface GetSupplierById {
    data:{
        contact:{
            name:string
            phone:number
        }
        crNumber:string
        createdAt:string
        isActive:boolean
        name:string
        subscriptionDetails: string | null
        updatedAt:string
        vatNumber:string
        __v:number
        _id:string
    }
}
