"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Navigation
 */
exports.Navigation = (function (url, targetInfo) {
    var navigation = new utils_1.Base(targetInfo);
    // Default the properties
    navigation.targetInfo.defaultToWebFl = true;
    navigation.targetInfo.endpoint = "navigation";
    // See if the web url exists
    if (url) {
        // Set the settings
        navigation.targetInfo.url = url;
    }
    // Add the methods
    utils_1.Request.addMethods(navigation, { __metadata: { type: "Microsoft.SharePoint.Navigation.REST.NavigationServiceRest" } });
    // Return the navigation
    return navigation;
});
