import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collectionItem }) => {
  return (
    <div className='collection-page'>
      <h1 className='title'>{collectionItem.title}</h1>
      <div className='items'>
        {collectionItem.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collectionItem: selectCollection(ownProps.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
