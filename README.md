# Create a Next.JS App with Prisma and TypeScript.

Simple Next.JS boilerplate for initializing a Next.JS project with Prisma ORM and TypeScript.

## Features

- Next.JS for hybrid rendering strategies, serverless function API routes, and page-based routing
- Prisma ORM for quick integration to an externally hosted database, migration, and seeding
- TypeScript for typing and Intellisense to reduce build-time errors
- ESLint + Prettier configured to work together nicely (ESLint to check for problems, Prettier to maintain styling)
- Sensible and flexible directory structure for any project
- Comes with all of the above already configured so that you can focus on building

## Getting started

1. Create your project:
```bash
npx create-nextpt-app [project name]
```

2. Configure Prisma and connect it to your database:

```bash
npx prisma init
```
- Point Prisma to your database by modifying the DATABASE_URL env variable.
- Set the provider of the datasource block in schema.prisma to match your database (PostGRES, etc.)
- if the database is not configured already, define your tables in the schema.prisma file

```bash
prisma db push
```
to create your tables in your database

```bash
npm install @prisma/client
```
to install the Prisma client for your application.

That's it! Simply import 'prisma' from /lib/prisma.ts anywhere you need to make a query to your database!

3. Enforce linting and styling
Simply set Prettier to be the default formatter in your IDE and you are all set! ESLint and Prettier are already configured to play nicely with each other, with ESLINT dedicated to detecting possible problems and Prettier dedicated to maintaining code quality with styling. (Recommended: set Prettier to format on each save).

4. Miscellaneous
All of the usual Next.JS scripts are ready to go: dev for starting the development server, build for making a production build, and start for checking out that build.

Enjoy!

# Feedback / Suggestions

Feel free to email me at nickfin2014@gmail.com or open an issue with any feedback or suggestions!
