const person = {
  name: 'Benjamin',
  age: 60,
  alive: true,
  nationality: 'Mexican',
  adress: 'Magdalena Contreras, CDMX',
  favFoods: ['Pozole', 'Enchiladas', 'Pollo', 'Pastel']
}

const { favFoods } = person
console.log(favFoods)

const countries = [
  'Panama',
  'El Salvador',
  'Canada',
  'England',
  'Mexico',
  'Arabia',
  'Argentina'
]

const [ a ] = countries
console.log(a)

const [ ,,,,,,,p = '10' ] = countries
console.log(p)

