import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
  const match = useMatch('/shop/:collectionId');
  return (
    <div className='shop-page'>
      <Routes>
        <Route path='/' element={<CollectionOverview />} />
        <Route
          path='/:collecitonId'
          element={
            <CollectionPage
              collectionId={match ? match.params.collectionId : null}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default ShopPage;
