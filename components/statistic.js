import React from 'react'

import PropTypes from 'prop-types'

const Statistic = (props) => {
  return (
    <>
      <div className={`statistic-statistic ${props.rootClassName} `}>
        <span className="statistic-sta">{props.Caption}</span>
        <span className="statistic-sta1">{props.Value}</span>
      </div>
      <style jsx>
        {`
          .statistic-statistic {
            gap: var(--dl-space-space-threeunits);
            width: 346px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .statistic-sta {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .statistic-sta1 {
            color: rgb(255, 255, 255);
            font-size: 80px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          @media (max-width: 991px) {
            .statistic-statistic {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .statistic-sta {
              font-size: 11px;
              line-height: 16.5px;
            }
            .statistic-sta1 {
              font-size: 40px;
              line-height: 36px;
            }
          }
        `}
      </style>
    </>
  )
}

Statistic.defaultProps = {
  rootClassName: '',
  Value: '4,501',
  Caption: 'MINTED WHALES',
}

Statistic.propTypes = {
  rootClassName: PropTypes.string,
  Value: PropTypes.string,
  Caption: PropTypes.string,
}

export default Statistic
