import {
    IBase,
    IListItem, IListItemMethods, IListItemQueryResults,
    IResults
} from "..";
/**
 * List Items
 */
export interface IListItems extends IResults<IListItem>, IBase<IResults<IListItem>, IResults<IListItemQueryResults>> {
    /**
     * Adds an item to the list item collection.
     * @param data - The item properties.
     */
    add(data): IBase<IListItem>;

    /**
     * Gets an item by the specified id.
     * @param id - The item id.
     */
    getById(id): IListItemMethods;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IListItems>;
}