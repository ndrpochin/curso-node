# Todos los casos de test que se deberian testear en los endpoints (routes)
# https://curric.rithmschool.com/springboard/lectures/express-jest-testing/
- Codigos HTTP (200, 400, 500)
- GET que devuelvan el cuerpo correcto con todos los campos obligatorios
- GET que devuelvan el content-type que corresponda
- POST que guarde en la BBDD
- POST/PATCH que devuelva 40X cuando el body no es correcto
- POST/PATCH que devuelva mensaje de error cuando el body no es correcto
- DELETE mensaje de confirmacion de borrado
-

NOTAS: En caso de que aparezca este error: 
 ```import http from 'node:http'; ^^^^^^ SyntaxError: Cannot use import statement outside a module```
 la solucion es agregar en el script de test:  ```NODE_OPTIONS=--experimental-vm-modules```

Fuente:
https://stackoverflow.com/questions/74289336/jest-node-js-syntaxerror-cannot-use-import-statement-outside-a-module