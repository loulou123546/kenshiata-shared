# kenshiata-shared
Shared files between server and clients, like types or some pure function

### Adding to a project

You can run `git submodule add git@github.com:loulou123546/kenshiata-shared.git shared` to add it on route path, under shared/ folder

## Architecture

```
shared
 |- README.md    <- you are here
 |- .gitignore   <- avoid leaking node_modules everywhere
 |- package.json <- For local development, enable to import dependencies easily
 |- types/
 |   |- GameSession.ts
 |   |- User.ts
 |   `- many others.ts
 |- docs/
 |   |- source.yaml   <- Here you can add description of events passing on WebSocket
 |   |- main.mjs      <- Run `npm run doc` to open documentation !
 |   `- asyncapi.yaml <- Documentation file for WS events, following Async API
```
