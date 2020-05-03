# Lead Manager We Application

A web application were a user could add and delete leads.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

``` bash

git clone repository_url

```

### Prerequisites

``` bash

python 3.7 and newer - You can download python by visting their website 'https://www.python.org/'
pipenv - you can download pipenv by using the following command after installing python 'pip3 install pipenv'

```

### Installing

``` bash

You will need two comandline tabs open.

```

Start by creating you pipenv env using 'pipenv shell'

``` bash

On the first comandline tab run the following commands to start the backend 'cd leadmanager' and then './manage.py runserver'

```

``` bash

On the second commandline tab run the following command to compile the frontend file and watch for changes when
developing 'npm run dev' make sure you first install all npm dependincies using 'npm install'

```

``` bash

On the first comandline tab you should see something like this. Indicating that the backend is listening for requests:
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
May 03, 2020 - 02:25:45
Django version 3.0.5, using settings 'leadmanager.settings'
Starting development server at 'http://127.0.0.1:8000/'
Quit the server with CONTROL-C.

```

``` bash

On the second comandline tab you should see something like this. Indicating that the react frontend is listening for changes in the code to recompile:
> webpack --mode development --watch ./leadmanager/frontend/src/index.js --output ./leadmanager/frontend/static/frontend/main.js

webpack is watching the files…

Hash: ea0f394a99611c55ccd6
Version: webpack 4.43.0
Time: 2889ms
Built at: 05/03/2020 5:28:54 AM
  Asset      Size  Chunks             Chunk Names
main.js  1.45 MiB    main  [emitted]  main
Entrypoint main = main.js
[./leadmanager/frontend/src/actions/auth.js] 2.73 KiB {main} [built]
[./leadmanager/frontend/src/actions/leads.js] 1.4 KiB {main} [built]
[./leadmanager/frontend/src/actions/messages.js] 334 bytes {main} [built]
[./leadmanager/frontend/src/actions/types.js] 536 bytes {main} [built]
[./leadmanager/frontend/src/index.js] 35 bytes {main} [built]
[./leadmanager/frontend/src/reducers/auth.js] 2.42 KiB {main} [built]
[./leadmanager/frontend/src/reducers/errors.js] 467 bytes {main} [built]
[./leadmanager/frontend/src/reducers/index.js] 268 bytes {main} [built]
[./leadmanager/frontend/src/reducers/leads.js] 3.04 KiB {main} [built]
[./leadmanager/frontend/src/reducers/messages.js] 404 bytes {main} [built]
[./leadmanager/frontend/src/store.js] 375 bytes {main} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {main} [built]
    + 111 hidden modules

```

## Deployment

To deploy this application instead of running the command 'npm run dev' use 'npm build'

## Built With

* [Django](https://www.djangoproject.com/) - The backend used
* [ReactJs](https://reactjs.org/) - The frontend used
* [djangorestframework](https://www.django-rest-framework.org/) - library used
* [django-rest-knox](https://pypi.org/project/django-rest-knox/) - library used for authentication

## Authors

* **Saeed AlSarhi**
