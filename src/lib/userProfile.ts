module $REST {
    /*********************************************************************************************************************************/
    // User Profile
    /*********************************************************************************************************************************/
    export class UserProfile extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo?:Settings.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
            this.targetInfo.method = "POST";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "userprofile" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.userprofile = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        properties: [
            "PersonalSite|site"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        createPersonalSiteEnque: {
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        shareAllSocialData: {
            requestType: Types.RequestType.PostWithArgsValueOnly
        }
    }
}
