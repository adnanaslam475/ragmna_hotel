
export interface GetPropertyInfoData {
    availableForEntireRental:boolean
    contact:number
    createdAt:string
    facilities:[]
    googleMapLocation:[]
    images:[]
    isActive:boolean
    name:string
    officialEmail:string
    ownerId:string
    propertyLocation:[]
    propertyType:string
    reviews:[]
    updatedAt:string
    virtualTourVideoLink:string
    __v:number
    _id:string
}

export interface GetPropertyInfo {
    data:GetPropertyInfoData[]
}