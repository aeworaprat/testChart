interface IStackBar {
    name: string
    new: number
    follow: number
    quote: number
    decision: number
    won: number
    lost: number
};
export interface ITest {
    name: string
    data: {
        label: string
        value: number
        color: string
    }[]
};

export const column: string[] = ['new', 'follow','quote','decision', 'won', 'lost']

export const colors: string[] = ['#4410D5','#12A5F8','#F2A244','#FF7182','#978EFB','#5A6A76']

export const data1: ITest[] = [
    {
        name: 'นาย 1',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 2',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 3',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 4',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 5',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 6',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 7',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 8',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 9',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
    {
        name: 'นาย 10',
        data: [
            { label: 'New', value: 26, color: '#4410D5'},
            { label: 'Follow', value: 26, color: '#12A5F8'},
            { label: 'Quote', value: 26, color: '#F2A244'},
            { label: 'Decision', value: 26, color: '#FF7182'},
            { label: 'Won', value: 26, color: '#978EFB'},
            { label: 'Lost', value: 26, color: '#5A6A76'},
        ],
    },
]

export const data2: IStackBar[] = [
    {
        name: 'นาย 1',
        new: 26,
        follow: 38,
        quote: 33,
        decision: 32,
        won: 26,
        lost: 12,
    },
    {
        name: 'นาย 2',
        new: 20,
        follow: 16,
        quote: 12,
        decision: 16,
        won: 10,
        lost: 5, 
    },
    {
        name: 'นาย 3',
        new: 30,
        follow: 26,
        quote: 29,
        decision: 31,
        won: 39 ,
        lost: 15, 
    },
    {
        name: 'นาย 4',
        new: 61.6,
        follow: 25.8,
        quote: 50,
        decision: 50,
        won: 50,
        lost: 40, 
    },
    {
        name: 'นาย 5',
        new: 61.6,
        follow: 25.8,
        quote: 50,
        decision: 50,
        won: 50,
        lost: 40, 
    },
    {
        name: 'นาย 6',
        new: 61.6,
        follow: 25.8,
        quote: 20,
        decision: 50,
        won: 40,
        lost: 40, 
    },
    {
        name: 'นาย 7',
        new: 61.6,
        follow: 25.8,
        quote: 50,
        decision: 50,
        won: 50,
        lost: 40, 
    },
    {
        name: 'นาย 8',
        new: 61.6,
        follow: 25.8,
        quote: 50,
        decision: 50,
        won: 50,
        lost: 40, 
    },
    {
        name: 'นาย 9',
        new: 61.6,
        follow: 25.8,
        quote: 50,
        decision: 50,
        won: 50,
        lost: 40, 
    },
    {
        name: 'นาย 19',
        new: 28,
        follow: 32 ,
        quote: 19,
        decision: 26,
        won: 26,
        lost: 18, 
    },
]