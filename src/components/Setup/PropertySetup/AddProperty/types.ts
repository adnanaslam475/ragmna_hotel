import { string } from "prop-types"


export enum GoodFor {
    Singles = 1,
    Family = 2,
    Both = 3
}

export enum PropertyTypes {
    Rented = 1
}

export interface CommanDropDownType {
    value: string
    label: string
}

export interface ContactDetail {
    name: string
    phoneNumber: string
    waNumber: string
}

export interface OwnerDetail {
    name: string
    phoneNumber: string
}

export interface LocationDetail {
    address: string
    city: string
    state: string
    country: string
    latitude: string
    longitude: string
}
export interface ProprtyInfo {
    supplierId: string
    name: string
    email: string
    images: []
    amenities: []
    propertyType: string
    goodFor: string
    space: number
    sections: []
}

export enum PropertySetuptypes {
    Reservation = 1,
    CheckIn_Checkout = 2,
    System = 3
}