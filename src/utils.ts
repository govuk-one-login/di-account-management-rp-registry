import {
  BooleanOrDate,
  Client,
  EnvironmentValue,
} from "../interfaces/client.interface";
import { RegistryEntry } from "../interfaces/registry.interface";

const isEnvironmentObject = <T>(
  value: EnvironmentValue<T>
): value is { production: T; integration?: T; nonProduction: T } => {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.prototype.hasOwnProperty.call(value, "production")
  );
};

const getEnvironmentType = (
  environment: string
): "production" | "integration" | "nonProduction" => {
  if (environment === "production") {
    return "production";
  }

  if (environment === "integration") {
    return "integration";
  }

  return "nonProduction";
};

const getValueForEnvironment = <T>(
  environment: string,
  value: EnvironmentValue<T>
): T => {
  if (!isEnvironmentObject(value)) {
    return value as T;
  }
  const env = getEnvironmentType(environment);

  if (env === "integration") {
    return value.integration || value.production;
  }

  if (env === "production") {
    return value.production;
  }

  return value.nonProduction;
};

export const booleanOrDateToBoolean = (value: BooleanOrDate) => {
  return !(value instanceof Date) ? value : value <= new Date();
};

const transformClientObject = (
  client: Client,
  environment: string
): RegistryEntry => {
  return {
    clientId: getValueForEnvironment(environment, client.clientId),
    showInAccounts: booleanOrDateToBoolean(
      getValueForEnvironment(environment, client.showInAccounts)
    ),
    showInServices: booleanOrDateToBoolean(
      getValueForEnvironment(environment, client.showInServices)
    ),
    isOffboarded: booleanOrDateToBoolean(
      getValueForEnvironment(environment, client.isOffboarded)
    ),
    showDetailedCard: booleanOrDateToBoolean(
      getValueForEnvironment(environment, client.showDetailedCard)
    ),
    isAvailableInWelsh: getValueForEnvironment(
      environment,
      client.isAvailableInWelsh
    ),
    showInSearchableList: booleanOrDateToBoolean(
      getValueForEnvironment(environment, client.showInSearchableList)
    ),
    showInActivityHistory: booleanOrDateToBoolean(
      getValueForEnvironment(environment, client.showInActivityHistory)
    ),
    showInDeleteAccount: booleanOrDateToBoolean(
      getValueForEnvironment(environment, client.showInDeleteAccount)
    ),
  };
};

export { getEnvironmentType, getValueForEnvironment, transformClientObject };
