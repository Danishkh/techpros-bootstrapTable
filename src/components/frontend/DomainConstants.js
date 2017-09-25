'use strict';

/**
 * This object list all the roles used int the front end solution. This mirrors what is
 * defined from the security context
 */
const providedRoles = {
    CONSULTANT : "CONSULTANT",
    HR : "HR"
}

/**
 * This object list the name of all the modules that shall be under security context.
 */
const providedModules = {
    ACT_CV_MODUL  : "ACT_CV_MODUL",
    ACT_MOTTAK_MODUL : "ACT_MOTTAK_MODUL"
}

export {
    providedModules,
    providedRoles
}