import React from 'react'

import PropTypes from 'prop-types'

const Tag = (props) => {
  return (
    <>
      <div className="tag-container">
        <span className="tag-tag tag">{props.Tag}</span>
      </div>
      <style jsx>
        {`
          .tag-container {
            display: flex;
            position: relative;
          }
          .tag-tag {
            color: #d0caca;
            transition: 0.3s;
          }
          .tag-tag:hover {
            color: #fff;
            background-color: #235536;
          }
          @media (max-width: 991px) {
            .tag-tag {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 12px;
            }
          }
          @media (max-width: 479px) {
            .tag-tag {
              color: #a6a4a4;
            }
          }
        `}
      </style>
    </>
  )
}

Tag.defaultProps = {
  Tag: 'About Staking',
}

Tag.propTypes = {
  Tag: PropTypes.string,
}

export default Tag
