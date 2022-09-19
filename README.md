The repository represents the components of management plane for the MSB-Hub

This repo leverages docker, extensively, to avoid having to manage tool chains and environments during both development and automated builds. The published container images are:

- `api/` - An [Express](https://https://expressjs.com/) (NodeJS) application that provides the management information model and APIs for MSB-Hub.
  - Docker image available at [--link](--link--)
  - [`README.md`](api/README.md)
- `client/` - MSB-Hub Frontend: A [React](https://reactjs.org/) (JavaScript) application that provides the user interface for MSB-Hub. This component is served by an NGINX configuration 
  - Docker image available at [--link--](--link--)
  - [`README.md`](client/README.md)

--- information about continious integration ---

The docs in this README describe high-level concepts, see READMEs in sub-folders for more details on each component of the MSB-Hub poject.

## Prerequisites

To work through the following sections, we assume you have installed:

- Docker
- Kubernetes enabled
- Skaffold
- Nginx Ingress Controller

If you are running on a mac laptop, the easiest thing to do is to install [docker for mac](https://docs.docker.com/desktop/mac/install/) (intel chip only).

If you are running on a linux laptop, then you will have to install the above components yourself following the [docker server install docs](https://docs.docker.com/engine/install/#server).

If you are running on a windows laptop, you can install the Docker Desktop client [docker for windows](https://docs.docker.com/desktop/install/windows-install/)

Please make sure that u have enabled kubernetes [enable kubernetes](https://docs.docker.com/desktop/kubernetes/)

You also need to install Skaffold on your system [install skaffold](https://skaffold.dev/docs/install/)

Last but not least you need to install Nginx Ingress Controller that will handle the load balancing inside our cluster [install Nginx Ingress Controller](https://kubernetes.github.io/ingress-nginx/deploy/)

### Development Environment (hot reload)

Our environment is using kubernetes infrastructure, so we have a Skaffold setup for detecting changes in our code base
and authomatically re-build the docker images and configure our kubernetes files.

So if we make any changes, they will be authomatically reflected in our running pods.

This environment is provided the repo-level `./skaffold.yaml` file that provides:

- Express/Node hot-reload server running `./api` code.
- React/JavaScript hot-reload server running `./client` code.

You can bring up the development services

```bash
skaffold dev
```

You can then point your browser to the following. We are serving over HTTP and using port 80

- <https://localhost> - The root of the JavaScript application.
- <https://localhost/api> - If there is an /api Preffix, Ingress-Nginx Controller will redirect the request to the server

To shut everything down:

```bash
^C
```
