import React from "react";
import Head from "next/head";
import {
  ConnectWallet,
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";

import Link from "../components/link";
import NavbarInteractive from "../components/nav";

const Home = (props) => {
  return (
    <>
      <NavbarInteractive />
      <div className="home-container">
        <Head>
          <title>₿WYC</title>
          <meta property="og:title" content="bwyc" />
        </Head>

        <header className="home-hero">
          <div className="home-header">
            <div className="home-container01">
              <div className="home-container02">
                <div className="home-container03">
                  <img
                    alt="image"
                    src="/z%20(30)-200w.png"
                    className="home-image1"
                  />
                  <img
                    alt="image"
                    src="/z%20(58)-300h.png"
                    className="home-image2"
                  />
                </div>
                <div className="home-container04">
                  <img
                    alt="image"
                    src="/z%20(68)-200h.png"
                    className="home-image3"
                  />
                  <img
                    alt="image"
                    src="/z%20(7)-200w.png"
                    className="home-image4"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="home-description">
            Cross-Chain NFT Community on EVM and BITCOIN as Ordinals. Members
            have access to Whaleverse. Mint Whalecards or #Whale NFT on
            Youngparrot to join the club. 
          </p>
        </header>

        <hr
          style={{
            background: "white",
            height: "1px",
            background: "orange",
            width: "80%",
          }}
        />
        <a
          href="https://bored-whales-yacht-club.gitbook.io/bwyc-whitepaper/"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            margin: "2%",
            borderBottom: "solid",
            borderColor: "white",
            borderWidth: "1px",
            padding: "1%",
            borderRadius: "8px",
            padding: "15px",
            background: "gray",
            fontFamily: "monospace",
          }}
        >
          <span
            className="home-text49"
            style={{
              alignSelf: "center",
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
            READ WHITEPAPER V1.1📜
          </span>
        </a>
        <hr
          style={{
            background: "white",
            height: "1px",
            background: "orange",
            width: "80%",
          }}
        />
        <a
          href="https://gallery.boredwhalesyachtclub.org"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            margin: "2%",
            borderBottom: "solid",
            borderColor: "white",
            borderWidth: "1px",
            padding: "1%",
            borderRadius: "8px",
            padding: "15px",
            background: "gray",
            fontFamily: "monospace",
          }}
        >
          <span
            className="home-text49"
            style={{
              alignItems: "center",
              display: "flex",
              width: "200px",
              flexDirection: "column",
            }}
          >
            VIEW GALLERY V1.1🖼️
          </span>
        </a>
        <hr
          style={{
            background: "white",
            height: "1px",
            background: "orange",
            width: "80%",
          }}
        />
        <a
          href="https://arcade.boredwhalesyachtclub.org"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            margin: "2%",
            borderBottom: "solid",
            borderColor: "white",
            borderWidth: "1px",
            padding: "1%",
            borderRadius: "8px",
            padding: "15px",
            background: "gray",
            fontFamily: "monospace",
          }}
        >
          <span
            className="home-text49"
            style={{
              alignItems: "center",
              display: "flex",
              width: "200px",
              flexDirection: "column",
            }}
          >
            PLAY TO EARN🕹️
          </span>
        </a>
        <hr
          style={{
            background: "white",
            height: "1px",
            background: "orange",
            width: "80%",
          }}
        />
        <a
          href="https://whaleverse.boredwhalesyachtclub.org"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            margin: "2%",
            borderBottom: "solid",
            borderColor: "white",
            borderWidth: "1px",
            padding: "1%",
            borderRadius: "8px",
            padding: "15px",
            background: "gray",
            fontFamily: "monospace",
          }}
        >
          <span
            className="home-text49"
            style={{
              alignItems: "center",
              display: "flex",
              width: "200px",
              flexDirection: "column",
            }}
          >
            BWYC DAO🌐
          </span>
        </a>
        <hr
          style={{
            background: "white",
            height: "1px",
            background: "orange",
            width: "80%",
          }}
        />
        <div className="home-video">
          <div className="home-container05">
            <button className="home-button3 start-button button">
              <a
                href="https://whaleverse.boredwhalesyachtclub.org"
                className="home-text09"
              >
                ENTER WHALEVERSE
              </a>
            </button>
          </div>
        </div>
        <div className="home-featured">
          <div className="home-header1">
            <h2 className="home-title1 heading">HOLDER PRIVILLAGES</h2>
            <div className="home-link03">
              <div className="link">
                <span className="home-caption">5+ Utilities</span>
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-list">
            <div className="home-work">
              <img
                alt="image"
                src="/sgiutryioduopsi-1500w.png"
                className="home-image5"
              />
              <div className="home-details">
                <div className="home-header2">
                  <div className="home-heading">
                    <a
                      href="https://stake.boredwhalesyachtclub.org/stake"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link05"
                    >
                      STAKE BWYC
                    </a>
                    <div className="link">
                      <span className="home-caption1">Claim a mutant</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="home-text10">
                    <span className="home-text11">
                      Each Whale has an equivalent value to the Utility Token.
                      Staking #Whale NFT Locks them thus reducing tradable
                      supply, while 
                    </span>
                    <br></br>
                    <span>still rewarding the owner.</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-tags">
                  <div className="home-container06">
                    <a
                      href="https://stake.boredwhalesyachtclub.org"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-tag tag"
                    >
                      About Staking
                    </a>
                  </div>
                  <div className="home-container07">
                    <a
                      href="https://app.youngparrotnft.com/core/launchpads/bwyc"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-tag1 tag"
                    >
                      MINT
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-work1">
              <img alt="image" src="/wsrd-400w.png" className="home-image6" />
              <div className="home-details01">
                <div className="home-header3">
                  <div className="home-heading1">
                    <a
                      href="https://stake.boredwhalesyachtclub.org/stake2"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link07"
                    >
                      Whalecard pass
                    </a>
                    <div className="link">
                      <span className="home-caption2">Claim Whalecard!</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="home-text15">
                    16 Locations across whaleverse, The pyramids, the Hot
                    Burning Lava from the past, Blazing sands of Egypt and The
                    Mutant City. Travel accros this mysterious locations and
                    cross-chains to worlds unkown
                  </span>
                </div>
                <div className="home-tags1">
                  <div className="home-container08">
                    <a
                      href="https://stake.boredwhalesyachtclub.org"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-tag2 tag"
                    >
                      About Cards
                    </a>
                  </div>
                  <div className="home-container09">
                    <a href="#mint" className="home-tag3 tag">
                      MINT
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-work2">
              <img
                alt="image"
                src="/z%20(109)-400w.png"
                className="home-image7"
              />
              <div className="home-details02">
                <div className="home-header4">
                  <div className="home-heading2">
                    <span className="home-text16">Whale mutants</span>
                    <Link rootClassName="link-root-class-name2"></Link>
                  </div>
                  <span className="home-text17">
                    5000 Whale Mutants cross-chains to BNB CHAIN. They are all
                    Epic, Unique and Helps Members navigate through the BNB
                    Network and interact with whale utilities built on BNB
                  </span>
                </div>
                <div className="home-tags2">
                  <div className="home-container10">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-tag4 tag"
                    >
                      About Mutants
                    </a>
                  </div>
                  <div className="home-container11">
                    <span className="home-tag5 tag">Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-about">
          <div className="home-header5">
            <h2 className="home-company2">10,000 WHALES</h2>
            <span className="home-description1">
              10,000 Collectibles will be minted by community members, Once
              Launchpad completes a new world will be born. The Ocean. An Epic
              World on Bitcoin Blockchain where Owners will be able to inscribe
              ordinal numbers on their NFT that they own and trade on Bitcoin
              Blockchain whilst increasing liquidity for whales token.
            </span>
          </div>
          <div className="home-statistics">
            <span className="home-text18">STATS | 10000</span>
            <div className="home-statistic-list">
              <div className="home-statistic">
                <span className="home-sta">MINTED WHALES</span>
                <span className="home-sta01">
                  4,516
                  <br />
                  ----- 10000
                </span>
              </div>
              <div className="home-statistic1">
                <span className="home-sta02">HOLDERS</span>
                <span className="home-sta03">
                  101
                  <br />
                  ----- 10000
                </span>
              </div>
              <div className="home-statistic2">
                <span className="home-sta04">TRANSFERS</span>
                <span className="home-sta05">
                  9,918 <br />
                  ----- 10000
                </span>
              </div>
              <div className="home-statistic3">
                <span className="home-sta06">CLAIMED CARDS</span>
                <span className="home-sta07">
                  808
                  <br />
                  ---- 10000
                </span>
              </div>
              <div className="home-statistic4">
                <span className="home-sta08">STAKED WHALES</span>
                <span className="home-sta09">
                  3,916
                  <br />
                  ---- 10000
                </span>
              </div>
              <div className="home-statistic5">
                <span className="home-sta10">$WHLS HOLDERS</span>
                <span className="home-sta11">
                  71
                  <br />
                  ---- 10000
                </span>
              </div>
            </div>
            <a
              href="https://scan.coredao.org/token/0x0c9d4b90771aca4b3e541924545e36104751dada"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                margin: "4%",
                borderBottom: "solid",
                borderColor: "white",
                borderWidth: "1px",
                padding: "1%",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <span
                className="home-text49"
                style={{ alignContent: "center", display: "flex" }}
              >
                VIEW ON CORESCAN🧾
              </span>
            </a>
            <hr
              style={{
                background: "gray",
                height: "1px",
                color: "white",
                width: "80%",
              }}
            />
            <h2 style={{ color: "white", marginBottom: "5%" }}>WHALECARDS</h2>
            <div className="home-container12">
              <iframe
                id="mint"
                src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x98E8B58c44e3c7f08171bb57aeD010fDF71B351E&amp;chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&amp;clientId=678d5b0199cde588796872ea22804505&amp;theme=dark&amp;primaryColor=orange"
                className="home-iframe"
              ></iframe>
            </div>
            <h6
              style={{
                color: "grey",
                gap: "5px",
                fontSize: "18px",
                fontFamily: "courier",
                width: "60%",
                marginTop: "1%",
                fontStyle: "italic",
                border: "solid",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Whalecards are pass to WHALEVERSE [A GATED SERVER WITH EXCLUSIVE
              FEATURES]. Members can also stake Cards to earn $WHLS or trade
              them on our own marketplace. Cards have a supply of 1000 and can
              only be claimed 50 per address.
            </h6>
            <hr />
            <a
              href="https://marketplace.boredwhalesyachtclub.org"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                margin: "1%",
                borderBottom: "solid",
                borderColor: "white",
                borderWidth: "1px",
                padding: "1.5%",
                borderRadius: "8px",
              }}
            >
              <span
                className="home-text49"
                style={{ alignContent: "center", display: "flex" }}
              >
                TRADE CARDS💎
              </span>
            </a>
            <hr />
            <a
              href="https://stake.boredwhalesyachtclub.org"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                margin: "1%",
                borderBottom: "solid",
                borderColor: "white",
                borderWidth: "1px",
                padding: "1.5%",
                borderRadius: "8px",
              }}
            >
              <span
                className="home-text49"
                style={{ alignContent: "center", display: "flex" }}
              >
                STAKE CARDS🪙
              </span>
            </a>
          </div>

          <div className="home-client-list">
            <div id="roadmap" className="home-header6">
              <h2 className="home-title2 heading">ROADMAP📌</h2>
            </div>
            <div className="home-row">
              <span className="home-text20">2023 JULY</span>
              <div className="home-list1">
                <div className="home-item service">
                  <div className="home-details03">
                    <span className="home-text21">Launchpad </span>
                    <span className="home-text22">
                      Community minting of 10000 whales on youngparrtot
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div className="home-item1 service">
                  <div className="home-details04">
                    <span className="home-text23">Chatroom</span>
                    <span className="home-text24">Decentralized chatroom</span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div className="home-item2 service">
                  <div className="home-details05">
                    <span className="home-text25">Discord Gate</span>
                    <span className="home-text26">
                      Only holders can access full discord server and utilities
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div className="home-item3 service">
                  <div className="home-details06">
                    <span className="home-text27">Staking Pool</span>
                    <span className="home-text28">
                      Community members can earn the utility token by staking
                      their whale NFT.
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-row1">
              <span className="home-text29">2023 SEPTEMBER</span>
              <div className="home-list2">
                <div className="home-item4 service">
                  <div className="home-details07">
                    <span className="home-text30">CARD MARKETPLACE</span>
                    <span className="home-text31">
                      A card marketplace where holders can trade cards for
                      profit
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div className="home-item5 service">
                  <div className="home-details08">
                    <span className="home-text32">CROSS-CHAINS</span>
                    <span className="home-text33">
                      5000 Whales will cross-chains to BNB chain, Holders on
                      CORE will be airdropped with burnable ERC115 token before
                      crossing chains. 
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div className="home-item6 service">
                  <div className="home-details09">
                    <span className="home-text34">Ordinals</span>
                    <span className="home-text35">
                      BWYC will also cross chains to Bitcoin and allow Holders
                      to Inscribe Ordinals Numbers to metadata of EVM NFT. Like
                      storing the same unique asset on different chains. How
                      Awesome is that?
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon28">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-row2">
              <span className="home-text36">2023 OCTOBER</span>
              <div className="home-list3">
                <div className="home-item7 service">
                  <div className="home-details10">
                    <span className="home-text37">DAO GOVERNANCE</span>
                    <span className="home-text38">
                      Members will be able to make proposals on the BWYC DAO By
                      delegating the utility token
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon30">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div className="home-item8 service">
                  <div className="home-details11">
                    <span className="home-text39">
                      <span>BLOCKCAIN</span>
                      <br></br>
                      <span>GAMING</span>
                      <br></br>
                    </span>
                    <span className="home-text44">
                      BWYC Devs are building EPIC Games for the project some
                      will include limited play to earn the Utility Token
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="home-icon32">
                    <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-information">
            <div className="home-details12">
              <div className="home-header7">
                <div className="home-branding2">
                  <img
                    alt="image"
                    src="/favicon-200h.png"
                    className="home-logo2"
                  />
                  <span className="home-company3">BWYC</span>
                </div>
                <div className="home-location">
                  <span className="home-caption3">Location</span>
                  <span className="home-value">
                    <span>DEEP! DEEP! DEEP! DEEP! DEEP! IN THE OCEAN </span>
                    <br></br>
                    <span>000-123</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-location1">
                <span className="home-caption4">Support</span>
                <span className="home-value1">
                  Support@boredwhalesyachtclub.org
                </span>
              </div>
              <button className="home-button4 start-button button">
                <a
                  href="whaleverse.boredwhalesyachtclub.org"
                  className="home-text49"
                >
                  ENTER WHALESVERSE
                </a>
              </button>
            </div>
            <div className="home-links2">
              <span className="home-social social">Discord</span>
              <span className="home-social1 social">Twitter</span>
            </div>
          </div>
          <img
            alt="image"
            src="/z%20(517)-1500w.png"
            loading="lazy"
            className="home-image8"
          />
        </footer>
      </div>
      <style jsx>
        {`
          .button-89 {
            --b: 3px; /* border thickness */
            --s: 0.45em; /* size of the corner */
            --color: #373b44;

            padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
            color: var(--color);
            --_p: var(--s);
            background: conic-gradient(
                from 90deg at var(--b) var(--b),
                #0000 90deg,
                var(--color) 0
              )
              var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
              calc(100% - var(--b) - 2 * var(--_p));
            transition:
              0.3s linear,
              color 0s,
              background-color 0s;
            outline: var(--b) solid #0000;
            outline-offset: 0.6em;
            font-size: 16px;

            border: 0;

            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }

          .button-89:hover,
          .button-89:focus-visible {
            --_p: 0px;
            outline-color: var(--color);
            outline-offset: 0.05em;
          }

          .button-89:active {
            background: var(--color);
            color: #fff;
          }
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            background-color: #151515;
          }
          .home-navbar-interactive {
            width: 1151px;
            height: 130px;
            display: flex;
            position: fixed;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            border-color: #ffffff;
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-oneandhalfunits);
            backdrop-filter: blur(10px);
            justify-content: space-between;
            background-color: rgba(6, 6, 6, 0.17);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-branding {
            gap: var(--dl-space-space-halfunit);
            width: 513px;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo {
            width: 134px;
            height: 90px;
            object-fit: cover;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-logo:hover {
            transform: rotate(360deg);
          }
          .home-company {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-items {
            gap: var(--dl-space-space-threeunits);
            width: 895px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-links {
            gap: var(--dl-space-space-threeunits);
            width: 508px;
            height: 27px;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .home-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .home-icon02 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text01 {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .home-icon04 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text02 {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .home-icon06 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text03 {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .home-button {
            width: 217px;
            height: 66px;
            border-color: #ff8500;
            border-width: 1px;
            background-color: rgba(0, 0, 0, 0.6);
          }
          .home-text04 {
            color: #ffffff;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 400;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-button1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            padding-top: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 20px;
            background-color: #235536;
          }
          .home-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-text05 {
            color: #ffffff;
            display: flex;
          }
          .home-mobile-menu {
            top: 204px;
            right: -1863px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #151515;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-branding1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo1 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .home-company1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          .home-menu-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon08 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-items1 {
            gap: var(--dl-space-space-threeunits);
          }
          .home-links1 {
            gap: var(--dl-space-space-threeunits);
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-text08 {
            color: #ffffff;
          }
          .home-hero {
            width: 100%;
            margin-top: 10%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-image: radial-gradient(
              circle at center,
              rgba(190, 10, 10, 5.592) 0%,
              rgba(0, 0, 0, 0.902) 42%
            );
          }
          .home-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 600px;
            display: flex;
            max-width: 1280px;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-title {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 128px;
            max-width: 895px;
            font-weight: normal;
            line-height: 115px;
            text-transform: uppercase;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: auto;
            height: 185px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 654px;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 345px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: 131px;
          }
          .home-image1 {
            width: 200px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image2 {
            width: 200px;
            height: 220px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 345px;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .home-image3 {
            width: 200px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image4 {
            width: 189px;
            height: 192px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-description {
            color: #bdbcbc;
            width: 795px;
            height: 185px;
            font-size: 24px;
            max-width: 800px;
            font-style: italic;
            margin-top: 38px;
            font-family: PT Mono;
            line-height: 36px;
          }
          .home-video {
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container05 {
            width: 100%;
            height: 398px;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url("/dtfcv-1500w.png");
            background-position: center;
          }
          .home-button3 {
            width: 416px;
            height: 77px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            backdrop-filter: blur(10px);
            background-color: rgba(162, 106, 69, 0.46);
          }
          .home-text09 {
            color: #ffffff;
            font-family: PT Mono;
          }
          .home-featured {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: #000000;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #151515;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-title1 {
            color: #c1bebe;
            margin-top: var(--dl-space-space-twounits);
            font-family: PT Mono;
          }
          .home-link03 {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-caption {
            color: #b7b5b5;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
          }
          .home-icon10 {
            fill: #d9d9d9;
            width: 24px;
          }
          .home-list {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-work {
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
          .home-image5 {
            width: 317px;
            height: 520px;
            object-fit: cover;
            border-color: #fefefe;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-details {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-header2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link05 {
            color: rgb(218, 218, 218);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .home-caption1 {
            color: #b7b5b5;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
          }
          .home-icon12 {
            fill: #d9d9d9;
            width: 24px;
          }
          .home-text10 {
            color: rgb(199, 199, 199);
            font-size: 24px;
            font-family: PT Mono;
            line-height: 36px;
          }
          .home-tags {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container06 {
            display: flex;
            position: relative;
          }
          .home-tag {
            color: #d0caca;
            transition: 0.3s;
            border-color: #afa8a8;
            text-decoration: none;
          }
          .home-tag:hover {
            color: #fff;
            background-color: #235536;
          }
          .home-container07 {
            display: flex;
            position: relative;
          }
          .home-tag1 {
            color: rgb(208, 202, 202);
            transition: 0.3s;
            border-color: #b9acac;
            text-decoration: none;
          }
          .home-tag1:hover {
            color: #fff;
            background-color: #235536;
          }
          .home-work1 {
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
          .home-image6 {
            width: 317px;
            height: 520px;
            object-fit: cover;
            border-color: #fefefe;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-details01 {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-header3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link07 {
            color: rgb(218, 218, 218);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-caption2 {
            color: rgb(183, 181, 181);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
          }
          .home-icon14 {
            fill: #d9d9d9;
            width: 24px;
          }
          .home-text15 {
            color: rgb(199, 199, 199);
            font-size: 24px;
            font-family: PT Mono;
            line-height: 36px;
          }
          .home-tags1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container08 {
            display: flex;
            position: relative;
          }
          .home-tag2 {
            color: rgb(208, 202, 202);
            transition: 0.3s;
            border-color: #949191;
            text-decoration: none;
          }
          .home-tag2:hover {
            color: #fff;
            background-color: #235536;
          }
          .home-container09 {
            display: flex;
            position: relative;
          }
          .home-tag3 {
            color: #d0caca;
            transition: 0.3s;
            border-color: #888686;
            text-decoration: none;
          }
          .home-tag3:hover {
            color: #fff;
            background-color: #235536;
          }
          .home-work2 {
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
          .home-image7 {
            width: 317px;
            height: 520px;
            object-fit: cover;
            border-color: #fefefe;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-details02 {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-header4 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text16 {
            color: rgb(218, 218, 218);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
          }
          .home-text17 {
            color: rgb(199, 199, 199);
            font-size: 24px;
            font-family: PT Mono;
            line-height: 36px;
          }
          .home-tags2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container10 {
            display: flex;
            position: relative;
          }
          .home-tag4 {
            color: rgb(208, 202, 202);
            transition: 0.3s;
            border-color: #696969;
            text-decoration: none;
          }
          .home-tag4:hover {
            color: #fff;
            background-color: #235536;
          }
          .home-container11 {
            display: flex;
            position: relative;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .home-tag5 {
            color: #d0caca;
            transition: 0.3s;
            border-color: #9c9a9a;
          }
          .home-tag5:hover {
            color: #fff;
            background-color: #235536;
          }
          .home-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #000000;
          }
          .home-header5 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-company2 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          .home-description1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            font-family: Courier New;
            line-height: 36px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 42px;
            justify-content: flex-start;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            border-color: #ffffff;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .home-statistic-list {
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto;
          }
          .home-statistic {
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
          .home-sta {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .home-sta01 {
            color: rgb(0, 4, 255);
            font-size: 60px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          .home-statistic1 {
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
          .home-sta02 {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .home-sta03 {
            color: rgb(2, 255, 71);
            font-size: 60px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          .home-statistic2 {
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
          .home-sta04 {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .home-sta05 {
            color: #ffbe00;
            font-size: 60px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          .home-statistic3 {
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
          .home-sta06 {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .home-sta07 {
            color: #ff0004;
            font-size: 60px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          .home-statistic4 {
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
          .home-sta08 {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .home-sta09 {
            color: #00ff29;
            font-size: 60px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          .home-statistic5 {
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
          .home-sta10 {
            color: rgb(153, 153, 153);
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 3%;
            text-transform: uppercase;
          }
          .home-sta11 {
            color: #00ff29;
            font-size: 60px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            line-height: 72px;
          }
          .home-link09 {
            width: 416px;
            height: 77px;
            margin-top: var(--dl-space-space-twounits);
            border-color: #f5f5f5;
            border-width: 1px;
            backdrop-filter: blur(10px);
            text-decoration: none;
            background-color: rgba(162, 106, 69, 0.46);
          }
          .home-text19 {
            color: #ffffff;
            font-family: PT Mono;
          }
          .home-container12 {
            width: 100%;
            height: 654px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: center;
            background-color: #000000;
          }
          .home-iframe {
            width: 898px;
            height: 597px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-client-list {
            gap: var(--dl-space-space-fiveunits);
            width: 1061px;
            display: flex;
            max-width: 1080px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title2 {
            color: rgb(255, 255, 255);
          }
          .home-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text20 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-item {
            position: relative;
          }
          .home-details03 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text21 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text22 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 21px;
            text-decoration: line-through;
          }
          .home-icon16 {
            fill: #00ff29;
            width: 30px;
            height: 30px;
          }
          .home-item1 {
            position: relative;
          }
          .home-details04 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text23 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text24 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
            text-decoration: line-through;
          }
          .home-icon18 {
            fill: #1aff00;
            width: 30px;
            height: 30px;
          }
          .home-item2 {
            position: relative;
          }
          .home-details05 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text25 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text26 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
            text-decoration: line-through;
          }
          .home-icon20 {
            fill: #00ff16;
            width: 30px;
            height: 30px;
          }
          .home-item3 {
            width: 863px;
            position: relative;
          }
          .home-details06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text27 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text28 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
            text-decoration: line-through;
          }
          .home-icon22 {
            fill: #4ff700;
            width: 30px;
            height: 30px;
          }
          .home-row1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text29 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-item4 {
            position: relative;
          }
          .home-details07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text30 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text31 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
            text-decoration: line-through;
          }
          .home-icon24 {
            fill: #ff7200;
            width: 30px;
            height: 30px;
          }
          .home-item5 {
            height: 161px;
            position: relative;
          }
          .home-details08 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 830px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text32 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text33 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-icon26 {
            fill: #ff0000;
            width: 30px;
            height: 30px;
          }
          .home-item6 {
            position: relative;
          }
          .home-details09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text34 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text35 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-icon28 {
            fill: #ff0101;
            width: 92px;
            height: 47px;
          }
          .home-row2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text36 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-list3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-item7 {
            position: relative;
          }
          .home-details10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text37 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text38 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-icon30 {
            fill: #f70505;
            width: 40px;
            height: 44px;
          }
          .home-item8 {
            height: 161px;
            position: relative;
          }
          .home-details11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 830px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text39 {
            color: rgb(255, 255, 255);
            width: 190px;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text44 {
            color: rgb(153, 153, 153);
            font-size: 24px;
            line-height: 36px;
          }
          .home-icon32 {
            fill: #ff0202;
            width: 27px;
            height: 33px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-information {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 60px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: rgba(0, 0, 0, 0.8);
          }
          .home-details12 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header7 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-branding2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo2 {
            width: 164px;
            height: 109px;
            object-fit: cover;
          }
          .home-company3 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 500;
            text-transform: uppercase;
          }
          .home-location {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption3 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-value {
            color: #e4e4e4;
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-location1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption4 {
            color: #738df3;
            font-size: 24px;
            line-height: 36px;
          }
          .home-value1 {
            color: #d6d2d2;
            font-size: 16px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-button4 {
            margin-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .home-text49 {
            color: rgb(255, 255, 255);
          }
          .home-links2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-social {
            color: #837f7f;
          }
          .home-social1 {
            color: #ceb9b9;
          }
          .home-image8 {
            width: 622px;
            height: 873px;
            object-fit: cover;
            border-radius: 100px;
            margin: 20px;
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              width: 928px;
              height: 100px;
              padding-top: var(--dl-space-space-unit);
            }
            .home-branding {
              width: 149px;
            }
            .home-logo {
              width: 79px;
              height: 54px;
            }
            .home-company {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-family: PT Mono;
              font-weight: 500;
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-items {
              width: 736px;
            }
            .home-button {
              width: 141px;
              height: 18px;
              font-size: 16px;
              text-align: center;
              border-color: #ffffff;
              border-width: 1px;
              padding-left: 5px;
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: 4px;
            }
            .home-text04 {
              color: rgb(0, 0, 0);
              font-style: normal;
              font-family: PT Mono;
              font-weight: 500;
              line-height: 16px;
            }
            .home-button1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-image {
              width: 18px;
              height: 18px;
              display: flex;
            }
            .home-text05 {
              display: none;
            }
            .home-mobile-menu {
              top: 5px;
              right: -1491px;
            }
            .home-logo1 {
              width: 115px;
              height: 80px;
            }
            .home-button2 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-text08 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-hero {
              height: 820px;
            }
            .home-header {
              width: 990px;
              height: 673px;
              padding-top: 3px;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: center;
            }
            .home-title {
              font-size: 40px;
              line-height: 36px;
            }
            .home-container02 {
              width: 558px;
            }
            .home-description {
              color: #969696;
              width: 544px;
              line-height: 24px;
            }
            .home-container05 {
              height: 352px;
            }
            .home-button3 {
              width: 526px;
              font-size: 16px;
              text-align: center;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-text09 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header1 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-link03 {
              display: none;
            }
            .home-caption {
              display: none;
            }
            .home-work {
              gap: 0px;
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .home-image5 {
              width: 311px;
              margin-right: 0px;
            }
            .home-details {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-header2 {
              gap: var(--dl-space-space-unit);
              width: 627px;
            }
            .home-heading {
              align-items: center;
            }
            .home-link05 {
              font-size: 24px;
              line-height: 21px;
            }
            .home-caption1 {
              display: none;
            }
            .home-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text11 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-tag {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 12px;
            }
            .home-tag1 {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 12px;
            }
            .home-work1 {
              gap: 0px;
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-image6 {
              width: 290px;
            }
            .home-details01 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 543px;
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-header3 {
              gap: var(--dl-space-space-unit);
            }
            .home-heading1 {
              align-items: center;
            }
            .home-link07 {
              font-size: 24px;
              line-height: 21px;
            }
            .home-caption2 {
              display: none;
            }
            .home-text15 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-tag2 {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 12px;
            }
            .home-tag3 {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 12px;
            }
            .home-work2 {
              gap: 0px;
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .home-image7 {
              width: 311px;
              margin-right: 0px;
            }
            .home-details02 {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-header4 {
              gap: var(--dl-space-space-unit);
              width: 627px;
            }
            .home-heading2 {
              align-items: center;
            }
            .home-text16 {
              font-size: 24px;
              line-height: 21px;
            }
            .home-text17 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-tag4 {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 12px;
            }
            .home-tag5 {
              font-size: 12px;
              padding-top: 12px;
              white-space: nowrap;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 12px;
            }
            .home-about {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header5 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-company2 {
              font-size: 30px;
              line-height: 27px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-statistics {
              gap: var(--dl-space-space-fourunits);
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-statistic-list {
              width: 100%;
              grid-gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-statistic {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-sta {
              font-size: 11px;
              line-height: 16.5px;
            }
            .home-sta01 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-statistic1 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-sta02 {
              font-size: 11px;
              line-height: 16.5px;
            }
            .home-sta03 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-statistic2 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-sta04 {
              font-size: 11px;
              line-height: 16.5px;
            }
            .home-sta05 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-statistic3 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-sta06 {
              font-size: 11px;
              line-height: 16.5px;
            }
            .home-sta07 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-statistic4 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-sta08 {
              font-size: 11px;
              line-height: 16.5px;
            }
            .home-sta09 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-statistic5 {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-sta10 {
              font-size: 11px;
              line-height: 16.5px;
            }
            .home-sta11 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-link09 {
              width: 526px;
              font-size: 16px;
              text-align: center;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-text19 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-client-list {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header6 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row {
              flex-direction: column;
            }
            .home-text20 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-list1 {
              width: 100%;
            }
            .home-item {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details03 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text21 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text22 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon16 {
              width: 12px;
              height: 12px;
            }
            .home-item1 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details04 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text23 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text24 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon18 {
              width: 12px;
              height: 12px;
            }
            .home-item2 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details05 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text25 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text26 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon20 {
              width: 12px;
              height: 12px;
            }
            .home-item3 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details06 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text27 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text28 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon22 {
              width: 12px;
              height: 12px;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-text29 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-list2 {
              width: 100%;
            }
            .home-item4 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details07 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text30 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text31 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon24 {
              width: 12px;
              height: 12px;
            }
            .home-item5 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details08 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text32 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text33 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon26 {
              width: 12px;
              height: 12px;
            }
            .home-item6 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details09 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text34 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text35 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon28 {
              width: 12px;
              height: 12px;
            }
            .home-row2 {
              flex-direction: column;
            }
            .home-text36 {
              font-size: 10px;
              line-height: 15px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-list3 {
              width: 100%;
            }
            .home-item7 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details10 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text37 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text38 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon30 {
              width: 12px;
              height: 12px;
            }
            .home-item8 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .home-details11 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-text39 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text44 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon32 {
              width: 12px;
              height: 12px;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-information {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: flex-start;
            }
            .home-details12 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-logo2 {
              width: 99px;
              height: 62px;
            }
            .home-company3 {
              font-size: 15px;
              line-height: 18px;
            }
            .home-caption3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-button4 {
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text49 {
              font-style: normal;
              font-weight: 500;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image8 {
              width: 100%;
              height: 1006px;
              display: none;
              border-radius: 100px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              width: 678px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              background-color: transparent;
            }
            .home-logo {
              width: 85px;
              height: 48px;
            }
            .home-company {
              font-size: 18px;
              line-height: 20px;
            }
            .home-items {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button1 {
              padding: 12px;
              background-color: #979a98;
            }
            .home-image {
              width: 14px;
              height: 14px;
            }
            .home-mobile-menu {
              top: -8px;
              right: -63px;
            }
            .home-header {
              width: 704px;
              height: 650px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-container02 {
              height: 320px;
            }
            .home-description {
              color: #6d6d6d;
              width: 629px;
            }
            .home-container05 {
              height: 256px;
            }
            .home-button3 {
              width: 348px;
            }
            .home-link09 {
              width: 348px;
            }
            .home-container12 {
              width: 766px;
            }
            .home-iframe {
              width: 766px;
              border-width: 0px;
            }
            .home-image8 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 325px;
              height: 72px;
            }
            .home-logo {
              width: 83px;
              height: 54px;
            }
            .home-company {
              font-family: Impact;
            }
            .home-button1 {
              background-color: #4e4e4e;
            }
            .home-mobile-menu {
              top: 20px;
              left: 5px;
              width: 387px;
              height: 679px;
              padding: 16px;
            }
            .home-logo1 {
              width: 91px;
              height: 55px;
            }
            .home-company1 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 500;
            }
            .home-link01 {
              text-decoration: none;
            }
            .home-link02 {
              text-decoration: none;
            }
            .home-button2 {
              color: var(--dl-color-gray-black);
              border-color: #ffffff;
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: rgba(208, 205, 203, 0.97);
            }
            .home-text08 {
              color: rgb(0, 0, 0);
            }
            .home-hero {
              height: 660px;
              padding-bottom: 0px;
            }
            .home-header {
              width: 478px;
              height: 408px;
              padding-bottom: 0px;
            }
            .home-container02 {
              width: 100%;
              height: 333px;
              align-self: flex-start;
              align-items: center;
            }
            .home-container03 {
              width: 346px;
              margin-bottom: 77px;
              justify-content: center;
            }
            .home-image1 {
              width: 126px;
              height: 144px;
            }
            .home-image2 {
              width: 125px;
              height: 145px;
            }
            .home-container04 {
              width: 290px;
            }
            .home-image3 {
              width: 131px;
              height: 123px;
            }
            .home-image4 {
              width: 127px;
              height: 120px;
            }
            .home-description {
              color: rgb(156, 156, 156);
              width: 322px;
              font-size: 18px;
              margin-top: 166px;
              font-family: PT Mono;
              line-height: inherit;
              padding-left: 1px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-video {
              background-color: #000000;
            }
            .home-container05 {
              height: 186px;
              margin-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-button3 {
              width: 247px;
              height: 63px;
              margin-left: 0px;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: rgba(119, 79, 55, 0.75);
            }
            .home-text09 {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-featured {
              background-color: #000000;
            }
            .home-header1 {
              padding-top: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .home-title1 {
              color: #a2a2a2;
              align-self: center;
            }
            .home-image5 {
              width: 286px;
              height: 447px;
              align-self: center;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-details {
              width: 264px;
              align-self: center;
            }
            .home-header2 {
              width: 100%;
            }
            .home-link05 {
              color: #c4bebe;
            }
            .home-text10 {
              color: rgb(199, 199, 199);
              font-size: 24px;
              font-family: PT Mono;
              line-height: 36px;
            }
            .home-tag {
              color: #a6a4a4;
            }
            .home-tag1 {
              color: #a6a4a4;
            }
            .home-image6 {
              width: 253px;
              height: 488px;
              align-self: center;
              border-color: #eae8e8;
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-details01 {
              width: 264px;
              align-self: center;
            }
            .home-link07 {
              color: #c4bebe;
            }
            .home-text15 {
              color: #b5b5b5;
            }
            .home-tag2 {
              color: #a6a4a4;
            }
            .home-tag3 {
              color: rgb(166, 164, 164);
            }
            .home-image7 {
              width: 286px;
              height: 447px;
              align-self: center;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .home-details02 {
              width: 264px;
              align-self: center;
            }
            .home-header4 {
              width: 100%;
            }
            .home-text16 {
              color: #c4bebe;
            }
            .home-text17 {
              color: #b5b5b5;
            }
            .home-tag4 {
              color: #a6a4a4;
            }
            .home-tag5 {
              color: #a6a4a4;
            }
            .home-about {
              background-color: #000000;
            }
            .home-header5 {
              width: 283px;
            }
            .home-statistics {
              width: 339px;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .home-text18 {
              color: rgb(255, 255, 255);
              font-size: 20px;
            }
            .home-statistic-list {
              width: 274px;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-statistic {
              width: 124px;
            }
            .home-sta01 {
              color: #000dff;
            }
            .home-statistic1 {
              width: 94px;
            }
            .home-sta03 {
              color: #10ff00;
            }
            .home-statistic2 {
              width: 119px;
            }
            .home-sta05 {
              color: #ff8500;
            }
            .home-statistic3 {
              width: 86px;
            }
            .home-sta07 {
              color: #ff0004;
            }
            .home-statistic4 {
              width: 143px;
            }
            .home-sta09 {
              color: #2cff00;
            }
            .home-statistic5 {
              width: 97px;
            }
            .home-sta11 {
              color: #ff7c00;
            }
            .home-link09 {
              width: 247px;
              height: 63px;
              margin-left: 0px;
              border-color: #ffffff;
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: rgba(119, 79, 55, 0.75);
            }
            .home-text19 {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-family: PT Mono;
              font-weight: 500;
              line-height: 16px;
            }
            .home-container12 {
              width: 478px;
              height: 979px;
              padding-left: 0px;
            }
            .home-iframe {
              width: 289px;
              height: 100%;
            }
            .home-client-list {
              width: 300px;
            }
            .home-icon16 {
              width: 28px;
              height: 23px;
            }
            .home-icon18 {
              width: 23px;
              height: 22px;
            }
            .home-icon20 {
              width: 23px;
              height: 21px;
            }
            .home-icon22 {
              width: 22px;
              height: 20px;
            }
            .home-icon24 {
              width: 20px;
              height: 21px;
            }
            .home-icon26 {
              width: 49px;
              height: 26px;
            }
            .home-icon28 {
              width: 67px;
              height: 24px;
            }
            .home-icon30 {
              width: 22px;
              height: 16px;
            }
            .home-icon32 {
              width: 31px;
              height: 17px;
            }
            .home-information {
              background-color: rgba(0, 0, 0, 0.8);
            }
            .home-button4 {
              background-color: rgba(232, 232, 232, 0.6);
            }
            .home-image8 {
              height: 495px;
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
