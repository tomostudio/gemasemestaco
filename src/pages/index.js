import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'components/layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
						<div onClick={Home.backgroundInit}>Gema Semesta</div>
						<div>
							Work In Progress<span className="dots">...</span>
						</div>
					</div>
					<div>
						<Link to="/about">About</Link>
						<a
							href={setting.work.toggle ? `${setting.work.file.publicURL}` : `${setting.work.link}`}
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
				<div id="HomeBg" className="background">
					{setting.bg_img.map((each, id) => { 
						const image = getImage(each.img)
						return(
						<div key={id}>
							<GatsbyImage image={image} alt={each.title} />
						</div>
					)})}
				</div>
				<footer>&copy; 2019. Gema Semesta</footer>
			</Layout>
        );
	}
}

export const query = graphql`{
  setting: markdownRemark(
    frontmatter: {issetting: {eq: true}, contenttype: {eq: "general_setting"}}
  ) {
    frontmatter {
      title
      work {
        toggle
        link
        file {
          publicURL
        }
      }
      email
      bg_img {
        img {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
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
		Home.bgOn = -1;
		Home.backgroundInit();
	},
	exit: () => {
		clearInterval(Home.dotInterval);
		Home.dotInterval = null;
		clearInterval(Home.bgInterval);
		Home.bgInterval = null;
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
	},
	bgInterval: null,
	bgTiming: 5000,
	bgOn: 0,
	backgroundInit: () => {
		clearInterval(Home.bgInterval);
		Home.bgInterval = null;
		// RANDOMIZE FIRST IMAGE
		const allBg = document.querySelectorAll('div#HomeBg > div');
		let _r = Math.floor(Math.random() * allBg.length);
		if(_r === Home.bgOn){
			while(_r === Home.bgOn){
				_r = Math.floor(Math.random() * allBg.length);
			}
		}
		Home.bgOn = _r;
		//ADD SHOW TO FIRST IMAGE
		Home.changeBg();

		Home.bgInterval = setInterval(() => {
			Home.bgOn++;
			if (Home.bgOn >= allBg.length) Home.bgOn = 0;
			Home.changeBg();
		}, Home.bgTiming);
	},
	changeBg: () => {
		const allBg = document.querySelectorAll('div#HomeBg > div');
		if (allBg.length > 0) {
			allBg.forEach((bg) => {
				bg.classList.remove('show');
			});
			allBg[Home.bgOn].classList.add('show');
		}
	}
};
