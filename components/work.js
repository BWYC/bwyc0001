import React from 'react'

import PropTypes from 'prop-types'

import Link from './link'
import Tag from './tag'

const Work = (props) => {
  return (
    <>
      <div className="work-work">
        <img alt="image" src={props.Image} className="work-image" />
        <div className="work-details">
          <div className="work-header">
            <div className="work-heading">
              <span className="work-text">{props.Title}</span>
              <Link rootClassName="link-root-class-name1"></Link>
            </div>
            <span className="work-text1">{props.Description}</span>
          </div>
          <div className="work-tags">
            <Tag></Tag>
            <Tag Tag="Strategy"></Tag>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .work-work {
            gap: 140px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #151515;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            border-bottom-width: 1px;
          }
          .work-image {
            width: 317px;
            height: 520px;
            object-fit: cover;
            border-color: #fefefe;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .work-details {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .work-header {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .work-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .work-text {
            color: #dadada;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
          }
          .work-text1 {
            color: #c7c7c7;
            font-size: 24px;
            font-family: PT Mono;
            line-height: 36px;
          }
          .work-tags {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .work-work {
              gap: 0px;
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .work-image {
              width: 311px;
              margin-right: 0px;
            }
            .work-details {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .work-header {
              gap: var(--dl-space-space-unit);
              width: 627px;
            }
            .work-heading {
              align-items: center;
            }
            .work-text {
              font-size: 24px;
              line-height: 21px;
            }
            .work-text1 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .work-image {
              width: 286px;
              height: 447px;
              align-self: center;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .work-details {
              width: 264px;
              align-self: center;
            }
            .work-header {
              width: 100%;
            }
            .work-text {
              color: #c4bebe;
            }
            .work-text1 {
              color: #b5b5b5;
            }
          }
        `}
      </style>
    </>
  )
}

Work.defaultProps = {
  Image: '/sgiutryioduopsi-400w.png',
  Description:
    'Each Whale has an equivalent value to the Utility Token. Staking #Whale NFT Locks them thus reducing tradable supply',
  Title: 'STAKE BWYC',
}

Work.propTypes = {
  Image: PropTypes.string,
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Work
