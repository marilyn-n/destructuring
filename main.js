const person = {
  name: 'Benjamin',
  age: 60,
  alive: true,
  nationality: 'Mexican',
  adress: 'Magdalena Contreras, CDMX',
  favFoods: ['Pozole', 'Enchiladas', 'Pollo', 'Pastel'],
  favBooks: ['The green house', 'Maneater', 'Frankenstain', 'Food and Wine', 'The Elephant'],
  data: [
    { latitude: -094853.1 ,longitude: 153982.90, size: 'M', color: 'Gray' },
    { latitude: -094853.1 ,longitude: 153982.90, size: 'S', color: 'Yellow' },
    { latitude: -094853.1 ,longitude: 153982.90, size: 'XL', color: 'Blue' },
    { latitude: -094853.1 ,longitude: 153982.90, size: 'L', color: 'Red' },
    { latitude: -094853.1 ,longitude: 153982.90, size: 'XS', color: 'White'}
  ]
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

// get color and latitude

const { data } = person

const formatedData = data.map(item => {
  return '* ' + item.color
})

console.log(formatedData)




