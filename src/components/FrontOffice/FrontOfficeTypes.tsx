import { Primitive } from "react-data-table-component/dist/src/DataTable/types"

export interface TableData {
    PROPERTY?: string
    GUEST_NAME?: string
    ACCOUNT_NAME?: string
    RES?: number
    ADULTS?: number
    CHILD?: number
    STATUS?: string
    ROOM?: string
    ARRIVE?: string
    DEPART?:string
    NIGHT?: number
    TASK?: any
    ACCOUNT_NUMBER?: number
    ACCOUNT_SINCE?: string
    RESERVATION?: number
}

export interface Column {
    name?: string
    selector?: (row:any, rowIndex?: number) => Primitive;
    sortable?: boolean
}

export interface ArrivalsDetails {
    id:number
    name?:string
    counts:number
    isActive?:boolean
}

export interface tabArraies {
    eventkey?:string
    tabLable?:string
    isCloseable?:boolean
}

export interface ReservationListProps{
    addTab?:(row:any) => void;
}