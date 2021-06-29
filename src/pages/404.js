import React from 'react';
import Layout from 'components/layout';
import { Link } from 'gatsby';

const Error404 = () => (
	<Layout className="error">
		<Link to="/">
			<div>
				<div>Gema Semesta</div>404 Error
			</div>
			<footer>&copy; 2019. Gema Semesta</footer>
		</Link>
	</Layout>
);

export default Error404;
