# Ejecutar ambiente de desarrollo

## Configuracion

Para iniciar el ambiente de desarrollo, se debe configurar un archivo `.env.development` con las siguiente variables de entorno:

```
POSTGRES_PASSWORD=<password>
POSTGRES_USER=<user>
POSTGRES_DB=<db>
DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@database/${POSTGRES_DB}

AUTH0_SECRET=<auth0 secret>
AUTH0_BASE_URL=<auth0 base url>
AUTH0_ISSUER_BASE_URL=<auth0 issuer base url>
AUTH0_CLIENT_ID=<auth0 client id>
AUTH0_CLIENT_SECRET=<auth0 client secret>

# openssl rand -hex 32
SECRET_KEY=<secret for hashing>
```

Puedes obtener credenciales de Auth0 en su [sitio web](https://auth0.com/)

## Docker

Finalmente inica los contendores

```bash
docker compose up
```

Y el servidor de `NextJS` estara disponible en [localhost:3000](http://localhost:3000)
