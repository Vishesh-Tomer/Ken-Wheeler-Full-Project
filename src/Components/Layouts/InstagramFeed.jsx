import React from 'react'

const InstagramFeed = () => {
  return (
    <>
        <div className="instagram">
		<div className="container-xl">
			
			<a href="#profile" className="btn btn-default btn-instagram">@Katen on Instagram</a>
		
			<div className="instagram-feed d-flex flex-wrap">
				<div className="insta-item col-sm-2 col-6 col-md-2">
					<a href="#profile">
						<img src="assests/images/insta/insta-1.jpg" alt="insta-title" />
					</a>
				</div>
				<div className="insta-item col-sm-2 col-6 col-md-2">
					<a href="#profile">
						<img src="assests/images/insta/insta-2.jpg" alt="insta-title" />
					</a>
				</div>
				<div className="insta-item col-sm-2 col-6 col-md-2">
					<a href="#profile">
						<img src="assests/images/insta/insta-3.jpg" alt="insta-title" />
					</a>
				</div>
				<div className="insta-item col-sm-2 col-6 col-md-2">
					<a href="#profile">
						<img src="assests/images/insta/insta-4.jpg" alt="insta-title" />
					</a>
				</div>
				<div className="insta-item col-sm-2 col-6 col-md-2">
					<a href="#profile">
						<img src="assests/images/insta/insta-5.jpg" alt="insta-title" />
					</a>
				</div>
				<div className="insta-item col-sm-2 col-6 col-md-2">
					<a href="#profile">
						<img src="assests/images/insta/insta-6.jpg" alt="insta-title" />
					</a>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default InstagramFeed