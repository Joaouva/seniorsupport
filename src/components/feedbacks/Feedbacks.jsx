import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./feedbacks.styles.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper/core";

import Feedback1 from "../../assets/feedback/feedback1.png";
import Feedback2 from "../../assets/feedback/feedback2.png";
import Feedback3 from "../../assets/feedback/feedback3.png";

SwiperCore.use([Pagination]);

function Feedbacks() {
    return (
		<div className="feedbacks-main">
			<div className="feedbacks-top">
				<h2>Veja o que falam da Senior 😎</h2>
			</div>
			<div className="feedbacks-bottom">
				<Swiper
					slidesPerView={'auto'} spaceBetween={30}
			
					clickable={true}
					pagination={{
						clickable: true,
					}}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<div className="feedback-carousel-item">
							<div className="carousel-top">
								<div>
									<img
										src={Feedback1}
										alt="Cameron"
									/>
								</div>
								<div>
									<h5>Esther Howard</h5>
									<p>Nursing Assistant</p>
								</div>
							</div>
							<div className="carousel-text">
								<p>
									“Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quam
									varius cras dignissim ornare
									hendrerit morbi suspendisse lorem
									quam. Aliquam ipsum semper commodo
									tincidunt.”
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="feedback-carousel-item">
							<div className="carousel-top">
								<div>
									<img
										src={Feedback2}
										alt="Cameron"
									/>
								</div>
								<div>
									<h5>Esther Howard</h5>
									<p>Nursing Assistant</p>
								</div>
							</div>
							<div className="carousel-text">
								<p>
									“Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quam
									varius cras dignissim ornare
									hendrerit morbi suspendisse lorem
									quam. Aliquam ipsum semper commodo
									tincidunt.”
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="feedback-carousel-item">
							<div className="carousel-top">
								<div>
									<img
										src={Feedback3}
										alt="Cameron"
									/>
								</div>
								<div>
									<h5>Esther Howard</h5>
									<p>Nursing Assistant</p>
								</div>
							</div>
							<div className="carousel-text">
								<p>
									“Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quam
									varius cras dignissim ornare
									hendrerit morbi suspendisse lorem
									quam. Aliquam ipsum semper commodo
									tincidunt.”
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="feedback-carousel-item">
							<div className="carousel-top">
								<div>
									<img
										src={Feedback3}
										alt="Cameron"
									/>
								</div>
								<div>
									<h5>Esther Howard</h5>
									<p>Nursing Assistant</p>
								</div>
							</div>
							<div className="carousel-text">
								<p>
									“Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quam
									varius cras dignissim ornare
									hendrerit morbi suspendisse lorem
									quam. Aliquam ipsum semper commodo
									tincidunt.”
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="feedback-carousel-item">
							<div className="carousel-top">
								<div>
									<img
										src={Feedback3}
										alt="Cameron"
									/>
								</div>
								<div>
									<h5>Esther Howard</h5>
									<p>Nursing Assistant</p>
								</div>
							</div>
							<div className="carousel-text">
								<p>
									“Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quam
									varius cras dignissim ornare
									hendrerit morbi suspendisse lorem
									quam. Aliquam ipsum semper commodo
									tincidunt.”
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="feedback-carousel-item">
							<div className="carousel-top">
								<div>
									<img
										src={Feedback3}
										alt="Cameron"
									/>
								</div>
								<div>
									<h5>Esther Howard</h5>
									<p>Nursing Assistant</p>
								</div>
							</div>
							<div className="carousel-text">
								<p>
									“Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quam
									varius cras dignissim ornare
									hendrerit morbi suspendisse lorem
									quam. Aliquam ipsum semper commodo
									tincidunt.”
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="feedback-carousel-item">
							<div className="carousel-top">
								<div>
									<img
										src={Feedback3}
										alt="Cameron"
									/>
								</div>
								<div>
									<h5>Esther Howard</h5>
									<p>Nursing Assistant</p>
								</div>
							</div>
							<div className="carousel-text">
								<p>
									“Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Quam
									varius cras dignissim ornare
									hendrerit morbi suspendisse lorem
									quam. Aliquam ipsum semper commodo
									tincidunt.”
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
    );
}

export default Feedbacks;