import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../../redux/shop/shop-selector'
import WithSpinner from '../../components/WithSpinner/WithSpinner'
import Collection from './Collection'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default CollectionContainer;