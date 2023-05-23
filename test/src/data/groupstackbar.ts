export interface IGroupBar {
    group: string
    name: string
    new: number
    inprogress: number
    hold: number
    close: number
};

export const colors: string[] = ['#4410D5','#12A5F8','#F2A244','#FF7182','#978EFB','#5A6A76', '#18BFBF', '#0E868D']

export const data = [
  {
		name: "cat1",
		task_call_in: 26,
		task_call_out: 38,
		follow: 33,
		email: 32,
		meeting: 20,
		support: 12,
		call_call_in: 20,
		call_call_out: 10
	},
	{
		name: "cat2",
		task_call_in: 100,
		task_call_out: 100,
		follow: 200,
		email: 32,
		meeting: 20,
		support: 12,
		call_call_in: 20,
		call_call_out: 10
	},
	{
		name: "cat3",
		task_call_in: 100,
		task_call_out: 100,
		follow: 200,
		email: 32,
		meeting: 20,
		support: 12,
		call_call_in: 20,
		call_call_out: 10
	},
	{
		name: "cat4",
		task_call_in: 100,
		task_call_out: 100,
		follow: 200,
		email: 32,
		meeting: 20,
		support: 12,
		call_call_in: 20,
		call_call_out: 10
	}
]


// export const data: IGroupBar[] = [
//     {
//         group: 'A',
//         name: 'นาย 1',
//         new: 26,
//         inprogress: 38,
//         hold: 33,
//         close: 32,
//     },
//     {
//         group: 'A',
//         name: 'นาย 2',
//         new: 20,
//         inprogress: 16,
//         hold: 12,
//         close: 16,
//     },
//     {
//         group: 'B',
//         name: 'นาย 3',
//         new: 30,
//         inprogress: 26,
//         hold: 29,
//         close: 31,
//     },
//     {
//         group: 'B',
//         name: 'นาย 4',
//         new: 61.6,
//         inprogress: 25.8,
//         hold: 50,
//         close: 50,
//     },
// ]