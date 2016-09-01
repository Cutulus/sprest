/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Field Link Collection
    // The SPFieldLinkCollection object.
    /*********************************************************************************************************************************/
    //export class FieldLinks extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.fieldlinks = {
        // Adds a content type to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.FieldLink",
            requestType: RequestType.PostWithArgsInBody
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },
    };
}