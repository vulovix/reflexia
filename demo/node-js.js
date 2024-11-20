const { fooModule } = require("../dist/foo.bundle.js");
const { barModule } = require("../dist/bar.bundle.js");
const { bazModule } = require("../dist/baz.bundle.js");
const { quxModule } = require("../dist/qux.bundle.js");

const fooService = fooModule.fooService;

fooService.fetchData().then(console.log);
fooService.sendData({ name: "Foo Data" }).then(console.log);
fooService.process();

//

const barService = barModule.barService;

barService.fetchData().then(console.log);
barService.sendData({ name: "Bar Data" }).then(console.log);
barService.process();

//

const bazService = bazModule.bazService;

bazService.fetchData().then(console.log);
bazService.sendData({ name: "Baz Data" }).then(console.log);
bazService.process();

//

const quxService = quxModule.quxService;

quxService.configure({
  q: 1,
  u: 2,
  x: 3,
});

quxService.getConfiguration();
