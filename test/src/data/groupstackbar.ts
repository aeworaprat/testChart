export interface IGroupBar {
    group: string
    name: string
    new: number
    inprogress: number
    hold: number
    close: number
};

export const column: string[] = ['new', 'inprogress','hold','close']

export const colors: string[] = ['#4410D5','#12A5F8','#F2A244','#FF7182','#978EFB','#5A6A76']



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

export const data = [
    {
      name: "CA",
      group: "Under 5 labels",
      label: '1990',
      value: 2704659
    },
    {
      name: "CA",
      group: "Under 5 labels",
      label: '2000',
      value: 2677612
    },
    {
      name: "CA",
      group: "Under 5 labels",
      label: '2010',
      value: 2623519
    },
    {
      name: "CA",
      group: "5 to 13 labels",
      label: '1990',
      value: 4499890
    },
    {
      name: "CA",
      group: "5 to 13 labels",
      label: '2000',
      value: 5489866
    },
    {
      name: "CA",
      group: "5 to 13 labels",
      label: '2010',
      value: 7469817
    },
    {
      name: "CA",
      group: "14 to 17 labels",
      label: '1990',
      value: 2159981
    },
    {
      name: "CA",
      group: "14 to 17 labels",
      label: '2000',
      value: 2635177
    },
    {
      name: "CA",
      group: "14 to 17 labels",
      label: '2010',
      value: 3585568
    },
    {
      name: "CA",
      group: "18 to 24 labels",
      label: '1990',
      value: 3853788
    },
    {
      name: "CA",
      group: "18 to 24 labels",
      label: '2000',
      value: 4624546
    },
    {
      name: "CA",
      group: "18 to 24 labels",
      label: '2010',
      value: 6166061
    },
    {
      name: "CA",
      group: "25 to 44 labels",
      label: '1990',
      value: 10604510
    },
    {
      name: "CA",
      group: "25 to 44 labels",
      label: '2000',
      value: 12513322
    },
    {
      name: "CA",
      group: "25 to 44 labels",
      label: '2010',
      value: 16330945
    },
    {
      name: "CA",
      group: "45 to 64 labels",
      label: '1990',
      value: 8819342
    },
    {
      name: "CA",
      group: "45 to 64 labels",
      label: '2000',
      value: 7937408
    },
    {
      name: "CA",
      group: "45 to 64 labels",
      label: '2010',
      value: 6173539
    },
    {
      name: "CA",
      group: "65 labels and Over",
      label: '1990',
      value: 4114496
    },
    {
      name: "CA",
      group: "65 labels and Over",
      label: '2000',
      value: 4443656
    },
    {
      name: "CA",
      group: "65 labels and Over",
      label: '2010',
      value: 5101975
    },
    {
      name: "TX",
      group: "Under 5 labels",
      label: '1990',
      value: 2027307
    },
    {
      name: "TX",
      group: "Under 5 labels",
      label: '2000',
      value: 2290857
    },
    {
      name: "TX",
      group: "Under 5 labels",
      label: '2010',
      value: 2817957
    },
    {
      name: "TX",
      group: "5 to 13 labels",
      label: '1990',
      value: 3277946
    },
    {
      name: "TX",
      group: "5 to 13 labels",
      label: '2000',
      value: 2884592
    },
    {
      name: "TX",
      group: "5 to 13 labels",
      label: '2010',
      value: 2097885
    },
    {
      name: "TX",
      group: "14 to 17 labels",
      label: '1990',
      value: 1420518
    },
    {
      name: "TX",
      group: "14 to 17 labels",
      label: '2000',
      value: 1434723
    },
    {
      name: "TX",
      group: "14 to 17 labels",
      label: '2010',
      value: 1463134
    },
    {
      name: "TX",
      group: "18 to 24 labels",
      label: '1990',
      value: 2454721
    },
    {
      name: "TX",
      group: "18 to 24 labels",
      label: '2000',
      value: 2111060
    },
    {
      name: "TX",
      group: "18 to 24 labels",
      label: '2010',
      value: 1423738
    },
    {
      name: "TX",
      group: "25 to 44 labels",
      label: '1990',
      value: 7017731
    },
    {
      name: "TX",
      group: "25 to 44 labels",
      label: '2000',
      value: 6666844
    },
    {
      name: "TX",
      group: "25 to 44 labels",
      label: '2010',
      value: 5965071
    },
    {
      name: "TX",
      group: "45 to 64 labels",
      label: '1990',
      value: 5656528
    },
    {
      name: "TX",
      group: "45 to 64 labels",
      label: '2000',
      value: 7070660
    },
    {
      name: "TX",
      group: "45 to 64 labels",
      label: '2010',
      value: 9898924
    },
    {
      name: "TX",
      group: "65 labels and Over",
      label: '1990',
      value: 2472223
    },
    {
      name: "TX",
      group: "65 labels and Over",
      label: '2000',
      value: 2472223
    },
    {
      name: "TX",
      group: "65 labels and Over",
      label: '2010',
      value: 2472223
    },
    {
      name: "NY",
      group: "Under 5 labels",
      label: '1990',
      value: 1208495
    },
    {
      name: "NY",
      group: "Under 5 labels",
      label: '2000',
      value: 1087646
    },
    {
      name: "NY",
      group: "Under 5 labels",
      label: '2010',
      value: 845947
    },
    {
      name: "NY",
      group: "5 to 13 labels",
      label: '1990',
      value: 2141490
    },
    {
      name: "NY",
      group: "5 to 13 labels",
      label: '2000',
      value: 2655448
    },
    {
      name: "NY",
      group: "5 to 13 labels",
      label: '2010',
      value: 3683363
    },
    {
      name: "NY",
      group: "14 to 17 labels",
      label: '1990',
      value: 1058031
    },
    {
      name: "NY",
      group: "14 to 17 labels",
      label: '2000',
      value: 1227316
    },
    {
      name: "NY",
      group: "14 to 17 labels",
      label: '2010',
      value: 1565886
    },
    {
      name: "NY",
      group: "18 to 24 labels",
      label: '1990',
      value: 1999120
    },
    {
      name: "NY",
      group: "18 to 24 labels",
      label: '2000',
      value: 2159050
    },
    {
      name: "NY",
      group: "18 to 24 labels",
      label: '2010',
      value: 2478909
    },
    {
      name: "NY",
      group: "25 to 44 labels",
      label: '1990',
      value: 5355235
    },
    {
      name: "NY",
      group: "25 to 44 labels",
      label: '2000',
      value: 5622997
    },
    {
      name: "NY",
      group: "25 to 44 labels",
      label: '2010',
      value: 6158520
    },
    {
      name: "NY",
      group: "45 to 64 labels",
      label: '1990',
      value: 5120254
    },
    {
      name: "NY",
      group: "45 to 64 labels",
      label: '2000',
      value: 6349115
    },
    {
      name: "NY",
      group: "45 to 64 labels",
      label: '2010',
      value: 8806837
    },
    {
      name: "NY",
      group: "65 labels and Over",
      label: '1990',
      value: 2607672
    },
    {
      name: "NY",
      group: "65 labels and Over",
      label: '2000',
      value: 2946669
    },
    {
      name: "NY",
      group: "65 labels and Over",
      label: '2010',
      value: 3624664
    },
    {
      name: "FL",
      group: "Under 5 labels",
      label: '1990',
      value: 1140516
    },
    {
      name: "FL",
      group: "Under 5 labels",
      label: '2000',
      value: 1231757
    },
    {
      name: "FL",
      group: "Under 5 labels",
      label: '2010',
      value: 1414240
    },
    {
      name: "FL",
      group: "5 to 13 labels",
      label: '1990',
      value: 1938695
    },
    {
      name: "FL",
      group: "5 to 13 labels",
      label: '2000',
      value: 2287660
    },
    {
      name: "FL",
      group: "5 to 13 labels",
      label: '2010',
      value: 2985590
    },
    {
      name: "FL",
      group: "14 to 17 labels",
      label: '1990',
      value: 925060
    },
    {
      name: "FL",
      group: "14 to 17 labels",
      label: '2000',
      value: 1063819
    },
    {
      name: "FL",
      group: "14 to 17 labels",
      label: '2010',
      value: 1341337
    },
    {
      name: "FL",
      group: "18 to 24 labels",
      label: '1990',
      value: 1607297
    },
    {
      name: "FL",
      group: "18 to 24 labels",
      label: '2000',
      value: 1446567
    },
    {
      name: "FL",
      group: "18 to 24 labels",
      label: '2010',
      value: 1125108
    },
    {
      name: "FL",
      group: "25 to 44 labels",
      label: '1990',
      value: 4782119
    },
    {
      name: "FL",
      group: "25 to 44 labels",
      label: '2000',
      value: 5977649
    },
    {
      name: "FL",
      group: "25 to 44 labels",
      label: '2010',
      value: 8368708
    },
    {
      name: "FL",
      group: "45 to 64 labels",
      label: '1990',
      value: 4746856
    },
    {
      name: "FL",
      group: "45 to 64 labels",
      label: '2000',
      value: 4556982
    },
    {
      name: "FL",
      group: "45 to 64 labels",
      label: '2010',
      value: 4177233
    },
    {
      name: "FL",
      group: "65 labels and Over",
      label: '1990',
      value: 3187797
    },
    {
      name: "FL",
      group: "65 labels and Over",
      label: '2000',
      value: 3857234
    },
    {
      name: "FL",
      group: "65 labels and Over",
      label: '2010',
      value: 5196109
    },
    {
      name: "IL",
      group: "Under 5 labels",
      label: '1990',
      value: 894368
    },
    {
      name: "IL",
      group: "Under 5 labels",
      label: '2000',
      value: 912255
    },
    {
      name: "IL",
      group: "Under 5 labels",
      label: '2010',
      value: 948030
    },
    {
      name: "IL",
      group: "5 to 13 labels",
      label: '1990',
      value: 1558919
    },
    {
      name: "IL",
      group: "5 to 13 labels",
      label: '2000',
      value: 1808346
    },
    {
      name: "IL",
      group: "5 to 13 labels",
      label: '2010',
      value: 2307200
    },
    {
      name: "IL",
      group: "14 to 17 labels",
      label: '1990',
      value: 725973
    },
    {
      name: "IL",
      group: "14 to 17 labels",
      label: '2000',
      value: 813090
    },
    {
      name: "IL",
      group: "14 to 17 labels",
      label: '2010',
      value: 987323
    },
    {
      name: "IL",
      group: "18 to 24 labels",
      label: '1990',
      value: 1311479
    },
    {
      name: "IL",
      group: "18 to 24 labels",
      label: '2000',
      value: 1613119
    },
    {
      name: "IL",
      group: "18 to 24 labels",
      label: '2010',
      value: 2216400
    },
    {
      name: "IL",
      group: "25 to 44 labels",
      label: '1990',
      value: 3596343
    },
    {
      name: "IL",
      group: "25 to 44 labels",
      label: '2000',
      value: 4351575
    },
    {
      name: "IL",
      group: "25 to 44 labels",
      label: '2010',
      value: 5862039
    },
    {
      name: "IL",
      group: "45 to 64 labels",
      label: '1990',
      value: 3239173
    },
    {
      name: "IL",
      group: "45 to 64 labels",
      label: '2000',
      value: 2623730
    },
    {
      name: "IL",
      group: "45 to 64 labels",
      label: '2010',
      value: 1392844
    },
    {
      name: "IL",
      group: "65 labels and Over",
      label: '1990',
      value: 1575308
    },
    {
      name: "IL",
      group: "65 labels and Over",
      label: '2000',
      value: 1811604
    },
    {
      name: "IL",
      group: "65 labels and Over",
      label: '2010',
      value: 2284197
    },
    {
      name: "PA",
      group: "Under 5 labels",
      label: '1990',
      value: 737462
    },
    {
      name: "PA",
      group: "Under 5 labels",
      label: '2000',
      value: 781710
    },
    {
      name: "PA",
      group: "Under 5 labels",
      label: '2010',
      value: 870205
    },
    {
      name: "PA",
      group: "5 to 13 labels",
      label: '1990',
      value: 1345341
    },
    {
      name: "PA",
      group: "5 to 13 labels",
      label: '2000',
      value: 1641316
    },
    {
      name: "PA",
      group: "5 to 13 labels",
      label: '2010',
      value: 2233266
    },
    {
      name: "PA",
      group: "14 to 17 labels",
      label: '1990',
      value: 679201
    },
    {
      name: "PA",
      group: "14 to 17 labels",
      label: '2000',
      value: 624865
    },
    {
      name: "PA",
      group: "14 to 17 labels",
      label: '2010',
      value: 516193
    },
    {
      name: "PA",
      group: "18 to 24 labels",
      label: '1990',
      value: 1203944
    },
    {
      name: "PA",
      group: "18 to 24 labels",
      label: '2000',
      value: 1396575
    },
    {
      name: "PA",
      group: "18 to 24 labels",
      label: '2010',
      value: 1781837
    },
    {
      name: "PA",
      group: "25 to 44 labels",
      label: '1990',
      value: 3157759
    },
    {
      name: "PA",
      group: "25 to 44 labels",
      label: '2000',
      value: 3220914
    },
    {
      name: "PA",
      group: "25 to 44 labels",
      label: '2010',
      value: 3347225
    },
    {
      name: "PA",
      group: "45 to 64 labels",
      label: '1990',
      value: 3414001
    },
    {
      name: "PA",
      group: "45 to 64 labels",
      label: '2000',
      value: 3755401
    },
    {
      name: "PA",
      group: "45 to 64 labels",
      label: '2010',
      value: 4438201
    },
    {
      name: "PA",
      group: "65 labels and Over",
      label: '1990',
      value: 1910571
    },
    {
      name: "PA",
      group: "65 labels and Over",
      label: '2000',
      value: 1872360
    },
    {
      name: "PA",
      group: "65 labels and Over",
      label: '2010',
      value: 1795937
    }
  ]