import Card from "../../components/Card"

const Testimonial = ({testimonial}) => {
  return (
    <Card className="light">
        <p>{testimonial.quote}</p>
        <div className="testimonial__client">
          
            <div className="testimonial__client-avatar">
                <img src={testimonial.avatar} alt="Testimonial Avatar" />
            </div>
            
            <h6 className="link_certificate"><a target="_blank" href={testimonial.link}>{testimonial.name}</a></h6>
        </div>
    </Card>
  )
}

export default Testimonial