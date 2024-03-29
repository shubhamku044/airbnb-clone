import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

const search = ({ searchResults }) => {
	const router = useRouter()
	const { location, startDate, endDate, noOfGuests } = router.query

	const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
	const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')

	const range = `${formattedStartDate} - ${formattedEndDate}`

	// console.log(searchResults);
	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						300+ stays {range} for {noOfGuests} guests
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-4">
						Stays in {location}
					</h1>

					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and beds</p>
						<p className="button">More filters</p>
					</div>
					<div className="flex flex-col space-y-6">
						{searchResults.map(
							({ img, location, title, description, star, price, total }) => (
								<InfoCard
									img={img}
									location={location}
									title={title}
									description={description}
									star={star}
									price={price}
									total={total}
								/>
							)
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default search

export async function getServerSideProps() {
	const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`).then(
		(res) => res.json()
	)
	return {
		props: {
			searchResults,
		},
	}
}
