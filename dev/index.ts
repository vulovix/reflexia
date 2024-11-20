import { fooModule } from "../src/main-foo";

const FooService = fooModule.fooService;

FooService.fetchData().then(console.log);
FooService.sendData({ name: "Foo Data" }).then(console.log);
FooService.process();

console.log("ABC");
