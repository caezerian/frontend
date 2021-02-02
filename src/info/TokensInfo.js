import React from 'react';
import debase from '../assets/debase.png';
import degov from '../assets/degov.png';

export default function TokensInfo({ isMobile }) {
	const Token = (tokenImg, name, tag, content, supply, distribution, extra, coingecko) => (
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<figure className="image is-48x48">
							<img src={tokenImg} alt="Placeholder" />
						</figure>
					</div>
					<div className="media-content is-clipped">
						<p className="title is-4 is-family-secondary">{name}</p>
						<p className="subtitle is-6">{tag}</p>
					</div>
				</div>

				<div className={isMobile ? 'content' : 'content is-medium'}>
					<p>{content}</p>
				</div>
				<nav className="level is-mobile">
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Total Supply</p>
							<p className="title is-4">{supply}</p>
						</div>
					</div>
					<div className="level-item has-text-centered">
						<div>
							<p className="heading">Initial Distribution</p>
							<p className="title is-4">{distribution}</p>
						</div>
					</div>
					<a
						href={coingecko}
						target="_blank"
						rel="noopener noreferrer"
						className="button is-edged is-medium is-primary"
						style={{ position: 'absolute', top: '40px', right: '50px' }}
					>
						Trade
					</a>
				</nav>
				<div className={isMobile ? 'content' : 'content is-medium'}>
					<p>{extra}</p>
				</div>
			</div>
		</div>
	);
	return (
		<div className="pl-0 pr-0 section">
			<div className="columns is-centered">
				<div className="column is-10">
					<div className="columns">
						<div className="column">
							{Token(
								debase,
								'Debase',
								'Flexible Supply Token',
								'DEBASE is an elastic supply token whose features (price target, price oracle(s), rebase lag, etc.) are parameterized  to be controlled through governance and whose value is stabilized through "stabilizer pools"',
								'1,000,00*',
								'100,000',
								'*Pre-rebase',
								'https://www.coingecko.com/en/coins/debase'
							)}
						</div>
						<div className="column">
							{Token(
								degov,
								'Degov',
								'Governance Token',
								'DEGOV is the governance token of Debaseonomics which is used to vote on the parameters of DEBASE, stabilizer pools as well as other parameters of governance (quorum threshold, execution delay, etc.)',
								'25,000',
								'25,000',
								'',
								'https://www.coingecko.com/en/coins/degov'
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
