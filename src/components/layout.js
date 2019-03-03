import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import 'stylesheet/main.scss';
import { Helmet } from 'react-helmet';

export default class Layout extends React.Component {
	render() {
		const props = this.props;

		const seo = {
			desc: '',
			keywords: '',
			image: '',
			url: 'https://gemasemesta.co'
		};
		return (
			<StaticQuery
				query={graphql`
					query {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={(data) => (
					// <PageTransition>
					<div style={{ margin: `3rem auto`, maxWidth: 600 }}>
						<Helmet>
							<Helmet>
								<title>{props.titleText ? `${props.titleText} | ${webname}` : webname}</title>
								<meta name="description" content={seo.desc} />
								<meta name="image" content={seo.image} />
								<meta name="keywords" content={seo.keywords} />
								{seo.url && <meta property="og:url" content={seo.url} />}

								{props.titleText ? (
									<meta property="og:title" content={`${props.titleText} | ${webname}`} />
								) : (
									<meta property="og:title" content={webname} />
								)}
								{seo.desc && <meta property="og:description" content={seo.desc} />}
								{seo.image && <meta property="og:image" content={seo.image} />}
								<meta name="twitter:card" content="summary_large_image" />

								{props.titleText ? (
									<meta property="twitter:title" content={`${props.titleText} | ${webname}`} />
								) : (
									<meta property="twitter:title" content={webname} />
								)}
								{seo.desc && <meta name="twitter:description" content={seo.desc} />}
								{seo.image && <meta name="twitter:image" content={seo.image} />}
							</Helmet>
						</Helmet>
						{data.site.siteMetadata.title}
						{props.children}
					</div>
					// </PageTransition>
				)}
			/>
		);
	}
}
