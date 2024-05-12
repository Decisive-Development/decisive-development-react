import ServicesSmall from "./ServicesSmall";

const Services = () => {
  return (
    <section className="pt-16 md:pt-32">
		<div className="container relative h-full">
			<div className="bg-theme-blue h-full absolute w-[1px] -left-3 "></div>
			<div className="py-16 md:py-32">
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