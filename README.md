# Proyecto para backend: CRUD basico de animes.

Este es un proyecto CRUD básico para gestionar datos de animes, como: titulo de serie, estado de visualizacion, autor, orden para ver una serie, etc.

## Descripción
Este proyecto es un ejemplo de cómo implementar las operaciones CRUD utilizando react para el frontend con javascript y express con MySQL en el backend. El objetivo es mostrar cómo crear, leer, actualizar y eliminar registros en una base de datos.

## Secciones y funcionalidades del frontend:

http://localhost:5173/ => pagina principal, se traen todas las series de animes.
Inicialmente los animes no tienen imagen.

Hay 2 botones para agregar datos: Gestionar imagenes y agregar un anime.
- Gestionar imagenes, hay 3 opciones: agregar, editar y borrar. 
    - Agregar: Se sube a cloudinary y luego se guarda la url en la bbdd mediante llamado a la api. 
    - Editar: Se puede cambiar el nombre de la imagen en la bbdd, cambiar la imagen subida a cloudinary o ambas. 
    - Borrar: Se borra la imagen de cloudinary y de la bbdd.
- agregar una serie de anime, se puede relacionarle una imagen o editarlo despues de crearlo.

En cada serie de anime hay 3 iconos:
- icono verde para editar en un anime en la pagina principal. Permite actualizar datos de la serie, incluyendo la imagen.
- icono azul para ver contenido de anime asociado a la serie. Hay tambien una opcion de agregar nuevo contenido, y cada contenido con la opcion de editarlo y borrarlo.
- icono rojo para borrar la serie de anime (y todo su contenido asociado)

## Instalacion

```
$ git clone https://github.com/Lucas123-m/frontendForBackProject.git
$ npm install
$ npm run dev
```

## Tecnologías Usadas
react con javascript: libreria para construir interfaces.
