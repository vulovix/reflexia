# reflexia

Build the frontend libraries the way you always wanted. Simple and with no boring repetitions.

## Why?

Because I needed simple TypeScript layer entirely decoupled from the framework I was using. The layer that works in any JavaScript environment same way.

## Project Structure

### Module

Module acts as a wrapper or container for a specific set of functionalities. It's purpose is to group together related services and potentially other modules to encapsulate functionality. It's up to module to define the dependencies it needs and manages the lifecycle of its services (e.g., by injecting a shared container or individual services).

Example: An AuthModule might include services for user authentication, token management, and role checking.

### Service

Role is a reusable class that encapsulates specific functionality.

It's purpose is to provide methods that perform specific tasks or operations. Service should implement logic for a particular domain or functionality.

Example: A UserService might include methods like createUser, getUserById, or deleteUser, each handling a part of user-related operations.

## Core

### Container

Container class is a simple Dependency Injection (DI) container. It helps manage instances of classes and automatically inject their dependencies when they are created.

The DI container automatically resolves dependencies using @Injectable, making the code cleaner and easier to manage. We don’t need to worry about manually instantiating dependencies or passing them around.

```text
// LoggerService.ts
import { Injectable } from "../core/Injectable";

@Injectable
export class LoggerService {
  log(message: string) {
    console.log(`[Logger]: ${message}`);
  }
}

// UserService.ts
import { Injectable } from "../core/Injectable";
import { LoggerService } from "./LoggerService";

@Injectable
export class UserService {
  constructor(private logger: LoggerService) {} // LoggerService is injected

  createUser(name: string) {
    this.logger.log(`Creating user: ${name}`);
    // ... logic to create a user
  }
}
```

### Injectable

A simple decorator which marks class with "injectable" flag, later used in the Container class.
