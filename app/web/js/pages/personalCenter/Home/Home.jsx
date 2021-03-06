/*
 * huangzongzhe
 * 2018.07.31
 */
import React, {
	Component
} from 'react'

import { List } from 'antd-mobile'
import { hashHistory } from 'react-router'

import style from './Home.scss'

import Svg from '../../../components/Svg/Svg'
import ListContent from '../../../components/ListContent/ListContent'

const Item = List.Item;

class personalCenterHome extends Component { 
	render() {
		return (
			<div className={style.container + ' ' + 'aelf-personal-pages aelf-solid'}>

	            <List className={'aelf-list'}>
	                <Item onClick={() => hashHistory.push('/personalcenter/walletmanage?title=WalletManagement')}>
                        <ListContent
                            icon="wallet16"
                            text="Wallet Record"
                        ></ListContent>
                    </Item>
	            </List>

                <List className={'aelf-list'}>
                    <Item onClick={() => hashHistory.push('/personalcenter/home')}>
                        <ListContent
                            icon="tx_history16"
                            text="Transaction List【TODO】"
                        ></ListContent>
                    </Item>
                </List>

                <div className={style.blank}></div>

                <List className={'aelf-list'}>
                    <Item onClick={() => hashHistory.push('/personalcenter/home')}>
                        <ListContent
                            type="small"
                            icon="contact16"
                            text="Address Book【TODO】"
                        ></ListContent>
                    </Item>
                </List>
                <List className={'aelf-list'}>
                    <Item onClick={() => hashHistory.push('/personalcenter/systemsetting')}>
                        <ListContent
                            type="small"
                            icon="setting16"
                            text="System Setting"
                        ></ListContent>
                    </Item>
                </List>
                <List className={'aelf-list'}>
                    <Item onClick={() => hashHistory.push('/personalcenter/help?title=HelpCenter')}>
                        <ListContent
                            type="small"
                            icon="help16"
                            text="Help Center"
                        ></ListContent>
                    </Item>
                </List>
                <List className={'aelf-list'}>
                    <Item onClick={() => hashHistory.push('/personalcenter/about?title=AboutELFWallet')}>
                        <ListContent
                            type="small"
                            icon="about16"
                            text="About ELF Official Wallet"
                        ></ListContent>
                    </Item>
                </List>

                {/*<List>*/}
	                {/*<Item onClick={() => hashHistory.push('/personalcenter/walletmanage?title=钱包管理')}>钱包管理</Item>*/}
	            {/*</List>*/}
	            {/*<List>*/}
	                {/*<Item onClick={() => hashHistory.push('/personalcenter/about?title=关于我们')}>关于我们</Item>*/}
	            {/*</List>*/}
	            {/*<List>*/}
	                {/*<Item onClick={() => hashHistory.push('/personalcenter/help?title=帮助中心')}>帮助中心</Item>*/}
	            {/*</List>*/}

			</div>
		);
	}
}

export default personalCenterHome