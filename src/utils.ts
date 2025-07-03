import { Client, EnvironmentValue } from "../interfaces/client.interface";

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

const transformClientObject = (client: Client, environment: string): Client => {
  const clientId = getValueForEnvironment(environment, client.clientId);
  return {
    clientId,
    showInAccounts: client.showInAccounts,
    showInServices: client.showInServices,
    isOffboarded: client.isOffboarded,
    showDetailedCard: client.showDetailedCard,
    isAvailableInWelsh: client.isAvailableInWelsh,
    showInSearchableList: client.showInSearchableList,
    showInActivityHistory: client.showInActivityHistory,
    showInDeleteAccount: client.showInDeleteAccount,
  };
};

export { getEnvironmentType, getValueForEnvironment, transformClientObject };
