import React from 'react';
import Layout from 'components/layout';
import { graphql, Link } from 'gatsby';

const About = ({ data }) => (
	<Layout titleText="About" className="about">
		<Link to="/" dangerouslySetInnerHTML={{ __html: data.setting.html }} >
    </Link>
	</Layout>
);

export default About;


export const query = graphql`
	query {
		setting: markdownRemark(frontmatter: { issetting: { eq: true }, contenttype: { eq: "general_setting" } }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
