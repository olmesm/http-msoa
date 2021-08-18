# HTTP MSOA

Demonstration on a monorepo'd approad to http msoa optimized for local development.

## Features

- fallback to defined url (example.com/&lt;service name&gt;)
- automated config generator
- common function folder

## Requires

- [docker](https://docker.com)
- [asdf](https://asdf-vm.com) - node

```bash
# Install Dependencies
npm install

# Build the nginx configs
npm run build:config

# Run docker compose
#   docker-compose up --remove-orphans
docker compose up --remove-orphans
```

```bash
# Start all the services
npm start

# ...or start an individual service
npm run start:<service name>
```

## Todo

- [ ] default.conf
- [ ] database
- [ ] git diffing image builds
