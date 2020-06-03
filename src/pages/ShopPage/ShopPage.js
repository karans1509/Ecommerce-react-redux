import React from 'react';
import './ShopPage.scss';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview-container'
import CollectionContainer from '../Collection/Collection-container'


class ShopPage extends React.Component {

    componentDidMount() {

        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {

        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);