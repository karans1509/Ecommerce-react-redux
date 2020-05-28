import { createSelector } from 'reselect'

export const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectShopCollectionArray = createSelector(
    [selectShopCollection],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = (collectionName) => (
    createSelector(
        [selectShopCollection],
        (collections) => {
            console.log(collections);
            return collections ? collections[collectionName] : null
        } 
    )
)