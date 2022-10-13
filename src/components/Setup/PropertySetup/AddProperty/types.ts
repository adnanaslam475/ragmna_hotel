
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
    Reservation = 0,
    CheckIn_Checkout = 1,
    System = 2
}

export enum AmenityType {
    Hotel = 0,
    Room = 1,
    Both = 2
}

export interface AmenitiesTypes {
    propertyId: string
    name: string
    description: string
    type: number
}

export interface GetAmenities {
    data: AmenitiesDetails[]
}

export interface AmenitiesDetails {
    addedBy: string
    createdAt: string
    deletedAt: string
    description: string
    isActive: boolean
    name: string
    type: string
    updatedAt: string
    __v: number
    _id: string
}

/* Reservation - system - checkin-out */

export interface ReservationDetail {
    propertyId: string
    type: PropertySetuptypes
    configurations: ConfigurationsDetails
}

export interface ConfigurationsDetails {
    automaticRoomAssignment?: string
    emailDisplayName?: string
    replyToEmailAddress?: string
    sendCCOnAllEmails?: string
    setOccupiedRoomToDirty?: string
    allowOverBookingManually?: string
    addMarketSegment?: []
    timeZone?: string
    checkInTime?: string
    checkOutTime?: string
    autoGuestRegistrationCreationDuringCheckIn?: boolean
    autoGuestStatementUponCheckInIfTheRoomIsDirty?: boolean
    sendNotificationToConfirmRoomIfDirty?: boolean
    allowNonZeroBalanceDuringCheckout?: boolean
    allowRefundApplyUponCheckOut?: boolean
    autoRefundApplyUponCheckOut?: boolean
    includeRoomMovesOnArrivalAndDepartureList?: boolean
}