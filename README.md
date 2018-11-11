# blockchain-api

a [Sails v1](https://sailsjs.com) application


### How to Run
```
npm install
node app.js

# get block 0
curl http://localhost:8000/block/0

# create a new block
curl -H 'Content-Type: application/json' -d '{"data": 123}' -X POST http://localhost:8000/block
```

### API Endpoints
1. `GET /block/:id`
Get info about block `id`. `id` should be integer between 0 to current block height. Upon success, it'll return something like

```
{
"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3",
"height":0,
"body":"First block in the chain - Genesis block",
"time":"1530311457",
"previousBlockHash":""
}
```

Otherwise, it'll return error.

2. `POST /block`
Create block. The content type should be `application/json` and contains `body` field such as `{ body: "some data" }`. Upon success, it'll return
something like
```
{
  "body": "Testing block with test string data"
}
```

Otherwise, it'll return error.

### Version info

This app was originally generated on Sat Nov 10 2018 13:21:17 GMT+1100 (Australian Eastern Daylight Time) using Sails v1.0.2.

<!-- Internally, Sails used [`sails-generate@1.15.28`](https://github.com/balderdashy/sails-generate/tree/v1.15.28/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

