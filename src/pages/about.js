import React from 'react';
import Layout from 'components/layout';
import { Link } from 'gatsby';

export default ({ location }) => (
	<Layout titleText="About" className="about">
		<Link to="/">About Content
    </Link>
	</Layout>
);
