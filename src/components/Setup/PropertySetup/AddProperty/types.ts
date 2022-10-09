import { string } from "prop-types"

export interface GetPropertyInfoData {
    availableForEntireRental: boolean
    contact: number
    createdAt: string
    facilities: []
    googleMapLocation: []
    images: []
    isActive: boolean
    name: string
    officialEmail: string
    ownerId: string
    propertyLocation: []
    propertyType: string
    reviews: []
    updatedAt: string
    virtualTourVideoLink: string
    __v: number
    _id: string
}

export interface GetPropertyInfo {
    data: GetPropertyInfoData[]
}

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