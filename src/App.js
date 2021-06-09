import ProductCard from './components/ProductCard/ProductCard'
import Navbar from './components/Navbar/Navbar'
import { db } from './data/db'

const App = () => {
	return (
		<div className='flex'>
			React App
			<Navbar />
			<main>
			<img src="public/img/hero-section.jpeg" alt="" />
			<div className='flex'>
				{db.courses.map(course => <ProductCard name={course.name} image={course.image} description={course.description} price={course.price} />)}
			</div>
			</main>
		</div>
		
	)
}

export default App
