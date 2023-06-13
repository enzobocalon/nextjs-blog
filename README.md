# NextJS Blog
This is a project built using NextJS and TypeScript with the main goal to create a Blog that allows admins and authors to create and manage their posts.
The project also includes a comment section in which users can reply, if the post has the comments enabled.

## Project Status
The project main structure is currently developed and can be used by users. However, the project still needs a refactor and some codes improvements - TODO. <br/>
It was a really good project to study Prisma and handle database relationships.


## Dependencies
- NextJS
- React
- Styled Components
- Next Auth
- BCrypt
- Prisma
- React Paginate
- React Markdown
- React SimpleMDE Editor
- Axios
- Framer Motion

## TODO
[ ] Add middlewares - remove repetitive verifications in each route <br/>
[ ] Improve error handling - especially in backend with prisma requests <br/>
[ ] Custom hooks to handle some repetitive logic <br/>
[ ] Create services - Mappers/HTTPClients etc <br/>
[ ] Improve and add new animations <br/>
[ ] Improve CSS - Styled Components styling <br/>

I'll be working in this project whenever I have free time to try to accomplish the TODO list.
## How to run the project
```bash
$ git clone https://github.com/enzobocalon/nextjs-blog
```

Then you have to install the project dependencies by using

```bash
$ yarn install
```
You can now create a .env file inside the project root folder with the following data

DATABASE_URL=`YOUR POSTGRES DATABASE URL/IP` <br/>
DB_PASSWORD = `YOUR DB PASSWORD` <br/>
NEXTAUTH_URL = `The URL that your project is running, by default is http://localhost:3000` <br/>
JWT_SECRET = `Your JWT secret` <br/>

And finally

```bash
$ yarn dev
```
The project should be running with no problems.
