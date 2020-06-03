import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../../redux/shop/shop-selector'
import WithSpinner from '../WithSpinner/WithSpinner'
import CollectionOverview from './CollectionOverview'
import { compose } from 'redux'


const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer