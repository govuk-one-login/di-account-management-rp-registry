import {Client, EnvironmentValue} from "../interfaces/client.interface"
import {RegistryEntry} from "../interfaces/registry.interface";

const isEnvironmentObject = <T>(
    value: EnvironmentValue<T>
): value is { production: T; integration?: T; nonProduction: T } => {
    return typeof value === "object" &&
        value !== null &&
        Object.prototype.hasOwnProperty.call(value, "production");
}

const getEnvironmentType = (environment: string): 'production' | 'integration' | 'nonProduction' => {
    if (environment === 'production') {
        return 'production'
    }

    if (environment === 'integration') {
        return 'integration'
    }

    return 'nonProduction'
}

const getValueForEnvironment = <T>(environment: string, value: EnvironmentValue<T>): T => {
    if (!isEnvironmentObject(value)) {
        return value as T
    }
    const env = getEnvironmentType(environment)

    if (env === 'integration') {
        return value.integration || value.production;
    }

    if (env === "production") {
        return value.production;
    }

    return value.nonProduction;
}

const transformClientObject = (client: Client, environment: string): RegistryEntry => {
    const clientId = getValueForEnvironment(environment, client.clientId)
    return {
        clientId,
        clientType: client.clientType,
        isAllowed: client.isAllowed,
        isHmrc: client.isHmrc,
        isReportSuspiciousActivityEnabled: client.isReportSuspiciousActivityEnabled,
        isAvailableInWelsh: client.isAvailableInWelsh,
        showInClientSearch: getValueForEnvironment(environment, client.showInClientSearch),
    }
}


export { getEnvironmentType, getValueForEnvironment, transformClientObject }