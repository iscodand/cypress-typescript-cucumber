import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require("@cypress/webpack-preprocessor");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  await allureWriter(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  env: {
    "BASE_URL": "https://demo.realworld.io/",
    "PROFILE_URL": "https://demo.realworld.io/#/settings",
    "allureResultsPath": "allure-results",
    allureReuseAfterSpec: true
  },
  e2e: {
    specPattern: "**/*.feature",
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents
  },
});