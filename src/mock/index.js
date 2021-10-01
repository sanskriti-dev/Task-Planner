export const priority = [{
    value: "low",
    name : 'Low'
},
{
    value : 'medium',
    name : 'Medium'
},
 {
    value : 'high',
    name : 'High'
}
]

export const assignee = [
   {
    firstName: 'John',
    lastName : 'Doe',
    email : 'John.Doe@gmail.com'
  },
    {
    firstName: 'Anup',
    lastName : 'Singh',
    email : 'anup.singh@gmail.com'
    },
    {
        firstName: 'Rajat',
        lastName : 'Kumar',
        email : 'rajat.kumar@gmail.com'
        },
    {
        firstName: 'Anil',
        lastName : 'Dubey',
        email : 'anil.dubey@gmail.com'
    },
    {
        firstName: 'Gunjan',
        lastName : 'Saxena',
        email : 'gunjan.saxena@gmail.com'
    },
]

export const status = [
    {
    id: 0,
    name:'Backlog',
    value : 'backlog',
   },
   {
    id: 1,
    name: 'In Progress',
    value : 'inProgress',
   },
   {
    id: 2,
    name:'Review',
    value : 'review',
   },
   {
    id: 3,
    name: 'Complete',
    value : 'complete',
   }
]

export const boards = [{
        title : 'Backlog',
        key: 'backlog',
        list : []
    },
    {
        title : 'In Progress',
        key : 'inProgress',
        list : []
    },
    {
        title : 'Review',
        key : 'review',
        list : []
    },
    {
        title : 'Complete',
        key : 'complete',
        list : []
    }
    ]