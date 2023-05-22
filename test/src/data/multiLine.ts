export interface IMultiLine {
  name: string
  color: string
  other: {
      label: string,
      value: number,
  }[]
}

export const label: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const data: IMultiLine[] = [
  {
      name: 'Chatcone',
      color: '#4410D5',
      other: [
        { label: 'Jan', value: 20},
        { label: 'Feb', value: 65},
        { label: 'Mar', value: 55},
        { label: 'Apr', value: 18}, 
        { label: 'May', value: 67},   
        { label: 'Jun', value: 13},   
        { label: 'July', value: 15},
        { label: 'Aug', value: 22},   
        { label: 'Sep', value: 58},   
        { label: 'Oct', value: 68},   
        { label: 'Nov', value: 58},   
        { label: 'Dec', value: 68},           
      ]
    },
    {
      name: 'CMS Enterprise Support',
      color: '#12A5F8',
      other: [
        { label: 'Jan', value: 36},
        { label: 'Feb', value: 55},
        { label: 'Mar', value: 60},
        { label: 'Apr', value: 23}, 
        { label: 'May', value: 28},   
        { label: 'Jun', value: 48},   
        { label: 'July', value: 58},
        { label: 'Aug', value: 42},   
        { label: 'Sep', value: 52},   
        { label: 'Oct', value: 12},   
        { label: 'Nov', value: 68},   
        { label: 'Dec', value: 78},     
      ]
    },
    {
      name: 'Domain Transfer',
      color: '#F2A244',
      other: [
        { label: 'Jan', value: 55},
        { label: 'Feb', value: 45},
        { label: 'Mar', value: 75},
        { label: 'Apr', value: 35}, 
        { label: 'May', value: 18},   
        { label: 'Jun', value: 18},   
        { label: 'July', value: 18},
        { label: 'Aug', value: 14},   
        { label: 'Sep', value: 58},   
        { label: 'Oct', value: 28},   
        { label: 'Nov', value: 18},   
        { label: 'Dec', value: 8},     
      ]
    },
    {
      name: 'Line Official',
      color: '#FF7182',
      other: [
        { label: 'Jan', value: 60},
        { label: 'Feb', value: 45},
        { label: 'Mar', value: 25},
        { label: 'Apr', value: 38},  
        { label: 'May', value: 18},   
        { label: 'Jun', value: 8},   
        { label: 'July', value: 68},
        { label: 'Aug', value: 88},   
        { label: 'Sep', value: 58},   
        { label: 'Oct', value: 28},   
        { label: 'Nov', value: 18},   
        { label: 'Dec', value: 48},    
      ]
    },
  ]