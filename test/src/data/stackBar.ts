interface IStackBar {
    name: string
    new: number
    follow: number
    quote: number
    decision: number
    won: number
    lost: number
};

export const column: string[] = ['new', 'follow','quote','decision', 'won', 'lost']

export const colors: string[] = ['#4410D5','#12A5F8','#F2A244','#FF7182','#978EFB','#5A6A76']

export const data: IStackBar[] = [
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