import 'reflect-metadata';

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

// ***********MODULE*IMPORTS**************** //
import { FooModule, FooService } from '@reflexia/foo';
import { BarModule, BarService } from '@reflexia/bar';
import { BazModule, BazService } from '@reflexia/baz';

import { useReflex, useRegisterDependencies } from '@reflexia/di';
import { services } from './services';

// Register app-specific services first
useRegisterDependencies(services, [
  'FooHttpService',
  'BarHttpService',
  'LoggerService',
]);

FooModule.register();
BarModule.register();
BazModule.register();

// **********MODULE*INSTANCES************** //

// Resolve services by their registration name
const fooService = useReflex<FooService>('FooService');
const barService = useReflex<BarService>('BarService');
const bazService = useReflex<BazService>('BazService');

// *********EXPRESS*APP******************** //

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

// Basic info endpoint
app.get('/api', (req, res) => {
  res.send({
    message: 'Welcome to Reflexia Express API!',
    config: {
      fooServiceUrl: process.env.FOO_SERVICE_URL,
      barServiceUrl: process.env.BAR_SERVICE_URL,
    },
  });
});

// Foo service endpoints
app.get('/api/foo', async (req, res) => {
  try {
    const data = await fooService.fetchData();
    res.json({ service: 'foo', data });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    res
      .status(500)
      .json({ error: 'Failed to fetch foo data', details: errorMessage });
  }
});

// Bar service endpoints
app.get('/api/bar', async (req, res) => {
  try {
    const data = await barService.fetchData();
    res.json({ service: 'bar', data });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    res
      .status(500)
      .json({ error: 'Failed to fetch bar data', details: errorMessage });
  }
});

// Baz service endpoints (uses both foo and bar)
app.get('/api/baz', async (req, res) => {
  try {
    const [fooData, barData] = await Promise.all([
      bazService.fetchFooData(),
      bazService.fetchBarData(),
    ]);
    res.json({
      service: 'baz',
      data: {
        fromFoo: fooData,
        fromBar: barData,
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    res
      .status(500)
      .json({ error: 'Failed to fetch baz data', details: errorMessage });
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`🚀 Reflexia Express API is running!`);
  console.log(`📍 Listening at http://localhost:${port}/api`);
  console.log(`🔧 Environment config:`);
  console.log(
    `   - FOO_SERVICE_URL: ${process.env.FOO_SERVICE_URL || 'not set'}`
  );
  console.log(
    `   - BAR_SERVICE_URL: ${process.env.BAR_SERVICE_URL || 'not set'}`
  );
  console.log(`📋 Available endpoints:`);
  console.log(`   - GET /api - API info`);
  console.log(`   - GET /api/foo - Foo service data`);
  console.log(`   - GET /api/bar - Bar service data`);
  console.log(`   - GET /api/baz - Baz service data (combines foo + bar)`);
});

server.on('error', console.error);
