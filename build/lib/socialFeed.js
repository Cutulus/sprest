"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Social Feed
 */
exports.SocialFeed = (function (targetInfo) {
    var base = new utils_1.Base(targetInfo);
    var socialFeed = base;
    // Default the properties
    base.targetInfo.defaultToWebFl = true;
    base.targetInfo.endpoint = "social.feed";
    // Add the methods
    utils_1.Request.addMethods(socialFeed, { __metadata: { type: "SP.Social.SocialRestFeedManager" } });
    // Return the social feed
    return socialFeed;
});
// Method to post to another user's feed
exports.SocialFeed.postToFeed = function (accountName, creationData) {
    var postInfo = { ID: null, creationData: creationData };
    // Set the post metadata
    postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
    postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
    // Execute the request
    return exports.SocialFeed().executeMethod("postToMyFeed", {
        argNames: ["restCreationData"],
        name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }, [postInfo]);
};
// Method to post to the current user's feed
exports.SocialFeed.postToMyFeed = function (creationData) {
    var postInfo = { ID: null, creationData: creationData };
    // Set the post metadata
    postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
    postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
    // Execute the request
    return exports.SocialFeed().executeMethod("postToMyFeed", {
        argNames: ["restCreationData"],
        name: "my/feed/post",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }, [postInfo]);
};
