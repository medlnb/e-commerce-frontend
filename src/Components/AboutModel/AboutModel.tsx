import './AboutModel.css'

interface props {
  description: string
}

function AboutModel({ description }: props) {
  return (
    <div>
      <h4>QUALITY ASSURANCE</h4>
      <p>{description}</p>
    </div>
  )
}

export default AboutModel