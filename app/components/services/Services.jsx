import ServicesSmall from "./ServicesSmall";

const Services = () => {
  return (
    <section className="pt-32">
		<div className="container relative h-full">
			<div className="bg-theme-blue-600 h-full absolute w-[1px] -left-3 "></div>
			<div className="py-32">
				<h2>
					Services
				</h2>
				<ServicesSmall />   
				<h2>
					Services
				</h2>
				
			</div>			
		</div>
	</section>
  )
}

export default Services