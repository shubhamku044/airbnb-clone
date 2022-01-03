import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
	return (
		<div>
			<Head>
				<title>Airbnb clone</title>
				<link
					rel="apple-touch-icon"
					href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-120x120-52b1adb4fe3a8f825fc4b143de12ea4b.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-152x152-7b7c6444b63d8b6ebad9dae7169e5ed6.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-180x180-bcbe0e3960cd084eb8eaf1353cf3c730.png"
				/>
				<link
					rel="icon"
					sizes="192x192"
					href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
				/>
				<link
					rel="shortcut icon"
					sizes="76x76"
					type="image/x-icon"
					href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
				/>
			</Head>

			<Header />
			<Banner />
			<main className="max-w-7xl px-8 sm:px-16 mx-auto">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold">Explore Nearby</h2>
					{/* Pull data from a server: API endpoint */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map(({ img, distance, location }) => (
							<SmallCard
								key={img}
								img={img}
								location={location}
								distance={distance}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-semibold py-8">
						Live Anywhere
					</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{cardsData?.map(({ img, title }) => (
							<MediumCard key={img} img={img} title={title} />
						))}
					</div>
				</section>
				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoor"
					description="Wishlist curated by Airbnb."
					buttonText="Get Inspired"
				/>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then(
		(res) => res.json()
	);

	const cardsData = await fetch('https://links.papareact.com/zp1').then(
		(res) => res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
