/**
 * Validates a UUID without hyphens.
 *
 * @param {string} uuid - The UUID to validate.
 * @returns {boolean} - True if the UUID is valid, false otherwise.
 */
export const validateUUIDWithoutHyphen = (uuid) => {
    const pattern = /^[0-9a-f]{8}[0-9a-f]{4}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i
    return pattern.test(uuid)
}

/**
 * Validates a UUID with hyphens.
 *
 * @param {string} uuid - The UUID to validate.
 * @returns {boolean} - True if the UUID is valid, false otherwise.
 */
export const validateUUID = (uuid) => {
    const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return  pattern.test(uuid)
}

/**
 * Adds hyphens to a UUID if it doesn't have them.
 *
 * @param {string} uuid - The UUID to add hyphens to.
 * @returns {string} - The UUID with hyphens if it is valid, otherwise returns an error message.
 */
export const addHyphen = (uuid) => 
    validateUUID(uuid) 
        ? uuid 
        : validateUUIDWithoutHyphen(uuid) 
        ? `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}` 
        : "Invalid UUID: should not contain hyphens";

/**
 * Removes hyphens from a UUID if it has them.
 *
 * @param {string} uuid - The UUID to remove hyphens from.
 * @returns {string} - The UUID without hyphens if it is valid, otherwise returns an error message.
 */
export const removeHyphen = (uuid) => 
    validateUUIDWithoutHyphen(uuid) 
        ? uuid : validateUUID(uuid) 
        ? uuid.replaceAll('-', '') 
        : "Invalid UUID"