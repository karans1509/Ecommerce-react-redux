import React from 'react';
import './ShopPage.scss';
import { connect } from 'react-redux'
import { selectShopCollection } from '../../redux/shop/shop-selector'
import { createStructuredSelector } from 'reselect'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'
import { Route, Switch } from 'react-router-dom'
import Collection from '../Collection/Collection'
import { firestore, convertCollectionToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop-actions'
import WithSpinner from '../../components/WithSpinner/WithSpinner'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

class ShopPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {

        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {

            const collectionsMap = convertCollectionToMap(snapshot);
            updateCollections(collectionsMap);

            this.setState({ loading: false });
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot()
    }

    render() {

        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);