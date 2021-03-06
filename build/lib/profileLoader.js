"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Profile Loader
 */
exports.ProfileLoader = (function (targetInfo) {
    var profileLoader = new utils_1.Base(targetInfo);
    // Default the properties
    profileLoader.targetInfo.defaultToWebFl = true;
    profileLoader.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
    profileLoader.targetInfo.method = "POST";
    // Add the methods
    utils_1.Request.addMethods(profileLoader, { __metadata: { type: "SP.UserProfiles.ProfileLoader" } });
    // Return the profile loader
    return profileLoader;
});
