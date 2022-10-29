import { Primitive } from "react-data-table-component/dist/src/DataTable/types"

export interface TableData {
    TOTAL?: string | number
    TAX?: string | number
    AMOUNT?: string | number
    QTY?: string | number
    PROPERTY?: string
    GUEST_NAME?: string
    ACCOUNT_NAME?: string
    RES?: number
    ADULTS?: number
    CATEGORY?: string,
    DESC?: string,
    CHILD?: number
    STATUS?: string
    ROOM?: string
    ARRIVE?: string | Date
    DEPART?: string
    id?: string | number
    NIGHT?: number
    TASK?: any
    ACCOUNT_NUMBER?: number
    ACCOUNT_SINCE?: string
    RESERVATION?: number
    FILE_NAME?: string
    FILE_TYPE?: string
    ORIGIN?: string
    DATE_ADDED?: string
}

export interface LedgerTableData {
    TOTAL?: string | number
    TAX?: string | number
    AMOUNT?: string | number
    QTY?: string | number
    
}

export interface Column {
    name?: string
    selector?: (row: any, rowIndex?: number) => Primitive;
    sortable?: boolean
}

export interface ArrivalsDetails {
    id: number
    name?: string
    counts: number
    isActive?: boolean
}

export interface tabArraies {
    eventkey?: string
    tabLable?: string
    isCloseable?: boolean
}

export interface ReservationListProps {
    // addTab?:(row:any) => void;
    addTab?: (row: any) => void;
}

export interface GuestTableDataItemsProps {
    ACCOUNT_NUMBER: number
    ACCOUNT_NAME: string
    ACCOUNT_SINCE: string
    RESERVATION: number
    STATUS: string
}

export interface DetailsTabProps {
    id: number
    name: string
    counts: number
    isActive: boolean
}