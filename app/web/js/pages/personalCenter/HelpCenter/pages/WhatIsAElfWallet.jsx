/*
 * huangzongzhe
 * 2018.08.27
 */
import React, { Component } from 'react'
import NavNormal from '../../../NavNormal/NavNormal'
import style from './pages.scss'
// React component
class WhatIsAElfWallet extends Component {
	render() {
		return (
			<div>
				<NavNormal></NavNormal>
				<div className={style.textContainer}>
					{/*<h2>AElf钱包是什么？</h2>*/}
					{/*<p>AElf钱包是一款全新的数字货币钱包，为用户提供更安全、高效、便捷的服务。</p>*/}
					{/*<p>AElf钱包支持AElf智能合约数字货币。/!*后续将支持更多主流数字货币。*!/</p>*/}
					{/*<p>目前暂不支持BTC和ETH，但是符合AElf标准的代币我们都支持。</p>*/}
                    <h2>What is the AElf Wallet?</h2>
                    <p>AElf Wallet is a new digital money wallet, providing users with safer, more efficient and convenient services.</p>
                    <p>AElf Wallet supports AElf intelligent contract digital currency.{/*后续将支持更多主流数字货币。*/}</p>
                    <p>At present, BTC and ETH are not supported at the moment, but we are in support of the AElf standard token.</p>
				</div>
			</div>
		);
	}
}

export default WhatIsAElfWallet;