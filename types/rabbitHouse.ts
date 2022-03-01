export enum RabbitHouseType {
    'coffee',
    'straight coffee',
    'arrange coffee',
    'others',
    'food'
}

export type RabbitHouse = Record<RabbitHouseType, RabbitHouseMenu[]>

export interface RabbitHouseMenu {
    name: {
        en: string
        jp: string
    }
    price: {
        jpy: number
        usd: number
    }
}
