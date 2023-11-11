export const validateUUIDWithoutHyphen = (uuid) => {
    const pattern = /^[0-9a-f]{8}[0-9a-f]{4}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i
    return pattern.test(uuid)
}

export const validateUUID = (uuid) => {
    const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return  pattern.test(uuid)
}

export const addHyphen = (uuid) => validateUUIDWithoutHyphen(uuid) ? `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}` : "Invalid UUID: should not contain hyphens";

export const removeHyphen = (uuid) => (validateUUID(uuid)) ? uuid.replaceAll('-', '') : "Invalid UUID"