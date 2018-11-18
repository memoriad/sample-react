import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ text }) => {
  
    return (
      <>
        <h3>
          <Link to={`/`}>
            back
          </Link>
        </h3>
        {text &&
          <p>{text}</p>
        }
      </>
    )
  }
  
  Home.propTypes = {
    text: PropTypes.string.isRequired
  }

  export default Home
