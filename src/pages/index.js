import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'components/layout';

export default class Index extends React.Component {
	componentDidMount() {
		Home.init();
	}
	componentWillUnmount() {
		Home.exit();
	}
	render() {
		const setting = this.props.data.setting.frontmatter;
		return (
			<Layout className="main">
				<div className="content">
					<div>
						Gema Semesta<br />
						Work In Progress<span className="dots">...</span>
					</div>
					<div>
						<Link to="/about">About</Link>
						<a
							href={setting.work.toggle ? `file` : `${setting.work.link}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							Works
						</a>
						<a href={`mailto:${setting.email}`} target="_blank" rel="noopener noreferrer ">
							Email
						</a>
					</div>
				</div>
				<div className="background">
				{setting.bg_img.map((team, id) => (
					<div key={id}>BACKGROUND</div>
					))}
				</div>
				<footer>&copy; 2019. Gema Semesta</footer>
			</Layout>
		);
	}
}

export const query = graphql`
	query {
		setting: markdownRemark(frontmatter: { issetting: { eq: true }, contenttype: { eq: "general_setting" } }) {
			frontmatter {
				title
				work {
					toggle
					link
					file
				}
				email
				bg_img {
					img {
						childImageSharp {
							fluid(maxWidth: 1920) {
								...GatsbyImageSharpFluid_noBase64
							}
						}
					}
					title
				}
			}
		}
	}
`;

const Home = {
	init: () => {
		Home.dotAnim();
	},
	exit: () => {
		clearInterval(Home.dotInterval);
		Home.dotInterval = null;
	},
	dotCount: 1,
	dotInterval: null,
	dotAnim: () => {
		const dots = document.querySelector('span.dots');
		dots.innerHTML = '';
		clearInterval(Home.dotInterval);
		Home.dotInterval = setInterval(() => {
			dots.innerHTML = '.'.repeat(Home.dotCount);
			Home.dotCount++;
			if (Home.dotCount > 3) Home.dotCount = 0;
		}, 600);
	}
};
