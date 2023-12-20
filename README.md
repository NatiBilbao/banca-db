<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Proyecto de Base de Datos para Préstamos de Dinero
Este repositorio contiene la documentación y la implementación de una base de datos diseñada para una pequeña empresa dedicada a préstamos de dinero. La base de datos está documentada utilizando Swagger, lo que facilita la comprensión de la estructura y operaciones disponibles.

## Descripción del Proyecto
La empresa de préstamos de dinero necesita gestionar de manera eficiente la información relacionada con sus clientes, préstamos y transacciones financieras. La base de datos proporciona una solución centralizada para almacenar y recuperar estos datos, permitiendo una administración efectiva de la información.

## Estructura de la Base de Datos
La base de datos está diseñada con las siguientes entidades principales:

- Advisors: Almacena la información como, CI, nombre y apellido.
- Group Loans: Almacena la información como, grupo, importe del préstamo, tipo de interés, fecha de inicio, fecha de finalización, estado y asesor
- Individual Loans: Almacena la información como, miembro, préstamo colectivo, importe del préstamo individual, tipo de interés individual y saldo restante
- Individual Payment Plans: Almacena la información como,  préstamo individual, número de cuota, fecha de vencimiento, importe total, importe del capital, importe de los intereses, fecha de pago, importe pagado y si es puntual 
- Members: Almacena la información como, nombre, apellido, CI, ocupación, salario, estado civil, número de hijos, número de celular, dirección, email, cumpleaños, género y día de registro.
- Savings Group: Almacena la información como, nombre del grupo, fecha de creación, líder, secretario y el tesorero. 

## Documentación Swagger
La documentación incluye detalles sobre los endpoints, los métodos HTTP permitidos, los parámetros de entrada y salida, así como ejemplos de solicitudes y respuestas para cada una de las 6 entidades.

## Tecnologías Utilizadas
- Swagger: Utilizado para documentar la API de la base de datos.
- Nest: Para construir el programa.

## Documentación
- Manual de Usuario: https://docs.google.com/document/d/1zq4jRy52VsyA7mzfW7IJ6yingJkKFhE0mYUdRF9n5OI/edit?usp=sharing
- Video explicativo: https://www.youtube.com/watch?v=sGkYvSEo-RY)

## Sorte

Nest es un proyecto de código abierto con licencia MIT. Puede crecer gracias a los patrocinadores y al apoyo de los increíbles patrocinadores. Si quieres unirte a ellos, por favor [read more here](https://docs.nestjs.com/support).

## Licencias

Nest is [MIT licensed](LICENSE).

## Contribuciones
Las contribuciones son bienvenidas. Si encuentras problemas, tienes sugerencias de mejora o deseas agregar nuevas características, no dudes en abrir un problema o enviar una solicitud de extracción.
