# Datos reactivos

- Array de objetos beers

  - Contendra los objetos beer que lleguen de la API externa
  - Modificaciones
    - Se les añadiran las propiedades
      -userBeer : variable booleana, si la beer ha sido creada mediante el formulario Add
      -favourite : variable booleana, si el usuario ha hecho click en el icono corazon
      -puntuation : variable numerica, de 0 a 5 para puntuar, que sera introducida por el usuario en el formulario Edit

- Array de objetos myBeers
  - Contendra los objetos beer que tengan alguna de las propiedades userBeer o favourite en true
  - Tambien sera la array que se guardara en la API local
