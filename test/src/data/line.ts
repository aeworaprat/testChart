export interface ILine {
    label: string,
    value: number,
    other: {
        label: string,
        value: number,
    }[]
}