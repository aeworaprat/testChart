export interface IGroupBar {
    name: string
    new: number
    inprogress: number
    hold: number
    close: number
};

export const column: string[] = ['new', 'inprogress','hold','close']

export const colors: string[] = ['#4410D5','#12A5F8','#F2A244','#FF7182','#978EFB','#5A6A76']

export const data: IGroupBar[] = [
    {
        name: 'นาย 1',
        new: 26,
        inprogress: 38,
        hold: 33,
        close: 32,
    },
    {
        name: 'นาย 2',
        new: 20,
        inprogress: 16,
        hold: 12,
        close: 16,
    },
    {
        name: 'นาย 3',
        new: 30,
        inprogress: 26,
        hold: 29,
        close: 31,
    },
    {
        name: 'นาย 4',
        new: 61.6,
        inprogress: 25.8,
        hold: 50,
        close: 50,
    },
    {
        name: 'นาย 5',
        new: 61.6,
        inprogress: 25.8,
        hold: 50,
        close: 50,
    },
    {
        name: 'นาย 6',
        new: 61.6,
        inprogress: 25.8,
        hold: 20,
        close: 50,
    },
    {
        name: 'นาย 7',
        new: 61.6,
        inprogress: 25.8,
        hold: 50,
        close: 50,
    },
    {
        name: 'นาย 8',
        new: 61.6,
        inprogress: 25.8,
        hold: 50,
        close: 50,
    },
    {
        name: 'นาย 9',
        new: 61.6,
        inprogress: 25.8,
        hold: 50,
        close: 50,
    },
    {
        name: 'นาย 10',
        new: 28,
        inprogress: 32 ,
        hold: 19,
        close: 73,
    },
]