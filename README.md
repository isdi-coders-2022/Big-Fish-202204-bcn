# APP

-renderizar header
-renderizar un navigation (footer en mobile y header en desktop)
-renderizar BeerListPage, MyBeerListPage, BeerDetailPage, AddBeerPage, EditBeerPage segun la ruta

## BeerListPage

-Renderizar un header
-Renderizar un Search
-Renderizar un BeerList
-Renderizar Pagination
-Renderizar Nav

### Header

-Renderizar una imagen RECIBIDA en un div
-Renderizar un heading con un texto recibido

### Search

-Renderizar un input con el icono search <i class="fa-solid fa-magnifying-glass"></i>
-Renderizar un botón con el icono filter <i class="fa-solid fa-filter"></i>

### BeersList

-Renderizar tantos componentes Beer como beers RECIBA en un array

### Beer

- Renderizar un heading con un texto RECIBIDO
- Renderizar el icono de user si “userBeer”: true
- Renderizar un texto RECIBIDO
- Renderizar una imagen RECIBIDA
- Renderizar un boton con el icono de corazon vacío o relleno dependiendo del “favourite”: true o false
- Renderizar un boton con el icono de cruz para eliminar si el “userBeer”: true
- Renderizar un boton con el icono edit si “favourite”: true o “userBeer”: true

### Pagination

- Renderizar dos botones con iconos de cruces < > para pasar de pagina
- Renderizar un numero segun la pagina actual

### Navigation

- Renderizar tres botones con los iconos de user, home y add

## MyBeerListPage

-Renderizar un header
-Renderizar un Search
-Renderizar un BeerList
-Renderizar Pagination
-Renderizar Nav

## BeerDetailPage

-Renderizar un header
-Renderizar BeerDetails
-Renderizar SuggestedBeers
-Renderizar Nav

### BeerSuggestions

- Renderizar dos secciones "beer-detail**info" y "beer-detail**description"

#### beer-detail\_\_info:

- Renderizar nombre de la cerveza RECIBIDA
- Renderizar una lista que genere un titulo con un texto de la info RECIBIDA
- Renderiza una imagen RECIBIDA
- Renderizar un boton con el icono de corazon vacío o relleno dependiendo del “favourite”: true o false
- Renderizar Stars
- Renderizar Tags

#### beer-detail\_\_description:

- Renderizar una lista con el titulo y el texto de las descripciones RECIBIDAS

### SuggestedBeers

- Renderizar un titulo RECIBIDO
- Renderizar tantos SuggestedBeer como reciba;

### SuggestedBeer

- Renderizar el titulo de la cerveza RECIBIDO
- Renderizar una imagen RECIBIDA

## AddBeerPage

-Renderizar un header
-Renderizar AddBeerForm
-Renderizar Nav

## AddBeerForm

-Renderizar tantos inputs como RECIBA (Name, First Brewed, Alc, Bitterness, Color, Food Pairing, Image, Tags, Puntuation)

- Renderizar Stars para seleccionar
- Renderizar Tags para seleccionar
- Renderizar submit con el texto SAVE

## EditBeerForm

-Renderizar tantos inputs como RECIBA (Name, Food Pairing, Image, Tags, Puntuation)

- Renderizar Stars para seleccionar
- Renderizar Tags para seleccionar
- Renderizar submit con el texto SAVE

## Loading

- Renderizar texto, imagen de fondo transparente y spinner cuando se esté ejecutando la peticion a la API
