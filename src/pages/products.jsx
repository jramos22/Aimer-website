//react
import React from 'react';
//components
import BackgroundContainer from '../components/BackgroundContainer';
import ProductsContent from '../components/ProductsContent';
export default function Products() {
	return (
		<>
			<BackgroundContainer props={<ProductsContent />} />
		</>
	);
}
