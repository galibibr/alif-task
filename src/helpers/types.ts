export interface User {
   id: number
   sex: 'male' | 'female'
   fullname: string
   email: string
   phone: string
   age: number
   languages: string[]
   major: string
   skills: string[]
   experience: 'no experience' | 'less than 1 year' | '1-3 years' | '3-5 years' | '5+ years'
}