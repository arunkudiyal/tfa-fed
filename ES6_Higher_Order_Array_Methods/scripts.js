console.log('Welcome to ES6 Higher Order Array Methods...');

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2001, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
const sumAges = [33 + 12 + 20 + 16 + 5 + 54 + 21 + 44 + 61 + 13 + 15 + 45 + 25 + 64 + 32]
console.log(sumAges);

const alphabets = ['Z', 'U', 'A', 'C', 'B', 'N', 'M', 'K']

// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

// forEach - Does not return anything 
// arrayName.method( function(parameter) { functionBody } )
// arrayName.method( (parameter) => { functionBody } )

// companies.forEach(function(company) {
//     console.log(company.name);
// })

// const index = 0
// companies.forEach( (company) => {
//     console.log(company.category)
// })

// let canDrink = []
// for(let i=0; i < ages.length; i++) {
//     if(ages[i] >= 18) {
//         canDrink.push(ages[i])
//     }
// }

// filter() -> return an array
// const canDrink = ages.filter(function(age) {
//     // condition
//     if(age >= 18) {
//         return true
//     }
// })

// const canDrink = ages.filter(age =>  age >= 18)

// const retailComapnies = companies.filter( company => company.category === 'Retail' )

// const nameOfRetailCompanies = companies
//             .filter(company => company.category === 'Retail')
//             .forEach(company.name)

// console.log(nameOfRetailCompanies);


// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
// console.log(eightiesCompanies)

// const nitiesCompanies = companies.filter(company => company.start >= 1990 && company.start < 2000)
// console.log(nitiesCompanies);


// map() -> returns you with an array
// print ComnapnyOne [start - end]

// const companyMap = companies.map(company => {return `${company.name} [${company.start} - ${company.end}] `})
// console.log(companyMap);

// const retailCompanyName = companies.filter(company => company.category === 'Retail').map(company.name)
// console.log(retailCompanyName);

// NAME OF THE COMPANY WHICH IS A RETIAL COMPANY
// const retailCompanyName = companies.map(company => company.name).filter(company => company.category === 'Retail')
// console.log(retailCompanyName)


// const companyName = companies.map(company => company.category)
// console.log(companyName);


// const combinedValues = ages.map(age => age * 1).filter(age => age >= 20)
// console.log(combinedValues);


// sort() ---> () -> return Array
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1)
// console.log(sortedCompanies);

// const sortedAges = ages.sort((a, b) => (a > b) ? 1 : -1)
// console.log(sortedAges);

// const sortedAlphabets = alphabets.sort((a, b) => (a < b) ? 1 : -1)
// console.log(sortedAlphabets);


// reduce() --> return single Value
// const sumOfAges = ages.reduce((total, age) => {
//     return total + age
// }, 0)
// console.log(sumOfAges);


// TOTAL YEARS OF EACH COMPANY
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// // console.log(totalYears);


// COMBINE METHODS
const ageOfEachCompany = companies.map(company => (company.end - company.start)).reduce( (a, b) =>  a+b, 0)
console.log(ageOfEachCompany);

const combined = ages.map(age => age*1).filter(age => age >= 21).sort((a,b) => a-b).reduce((a,b) => a+b, 0)
console.log(combined);