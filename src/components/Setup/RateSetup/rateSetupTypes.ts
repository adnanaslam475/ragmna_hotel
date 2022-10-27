export interface RatePlanTypes {
  name: string;
  description: string;
  displayName: string;
}

export interface RateTypes {
  name: string;
  description: string;
  displayName: string;
  roomTypes: [];
  channels: [];
  restrictions: {
    minimumNights: number;
    maximumNights: number;
    promoCode: string;
  };
  default: boolean;
  depositPolicy: string | undefined;
  cancellationPolicy: string | undefined;
  checkInPolicy: string | undefined;
  noShowPolicy: string | undefined;
}

export interface DerivedRateTypes {
  name: string;
  description: string;
  channels: [];
  offer: {
    type: string;
    calculationType: string;
    amount: number;
  };
  restrictions: {
    minimumNights: number;
    maximumNights: number;
    promoCode: string;
  };
  depositPolicy: string | undefined;
  cancellationPolicy: string | undefined;
  checkInPolicy: string | undefined;
  noShowPolicy: string | undefined;
  roomTypes: [{ roomTypeId: string }];
}

export interface CustomDateTypes {
  startDate: string | undefined;
  endDate: string | undefined;
}

export interface seasonBodyTypes {
    name: string
    startDate: string
    endDate: string
    days: [],
    roomTypes: [
      {
        price: number
        rommTypeId: string
        channels: [],
      },
    ],
    channels: [],
    color: string
    depositPolicy: string
    cancellationPolicy: string
    checkInPolicy: string
    noShowPolicy: string
    restrictions: {
      minimumNights: number
      maximumNights: number
      promoCode: string
    },
}

export interface SeasonDetailsTypes {
        name: string
        startDate: string
        endDate: string
        color: string,
        days: string[],
        roomTypes: [],
  
        channels: [],
        restrictions: {
          minimumNights: 0,
          maximumNights: 0,
          promoCode: string
        },
}