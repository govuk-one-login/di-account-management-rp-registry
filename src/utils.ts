import { EnvironmentValue } from "../interfaces/client.interface"

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

export { getEnvironmentType, getValueForEnvironment }