/*
 * huangzongzhe
 * 2018.07.27
 */
import React, { Component } from 'react'
import { WhiteSpace, List, InputItem, Button } from 'antd-mobile'
import style from './Transfer.scss'
import { hashHistory } from 'react-router'
import moneyKeyboardWrapProps from '../../../utils/moneyKeyboardWrapProps'
import initAelf from '../../../utils/initAelf'

// React component
// TODO
// 1.function addressCheck() {}
// 2.insufficient funds
class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // console.log('this.props: ', this.props);
    }

    inputAmount(amount) {
        this.setState({amount: amount});
    }

    inputAddress(address) {
        this.setState({address: address});
    }

    inputPassword(password) {
        this.setState({
            password: password,
            passwordError: false
        });
    }

    transfer() {
        // TODO:
        // check amount
        // check address
        let password = this.state.password;
        if (!password) {
            this.setState({passwordError: 'wrong password'});
            return;
        }

        let aelf = initAelf(password);

        if (aelf.errormsg) {
            this.setState({passwordError: aelf.errormsg});
            return;
        }

        let amount = parseInt(this.state.amount);
        let address = this.state.address;

        let transfer = aelf.contractMethods.Transfer(address, amount);

        hashHistory.push(`/transactiondetail?txid=${transfer.hash}`);
    }
  
    render() {
        let passwordErrorText;
        if (this.state.passwordError) {
            passwordErrorText = <div className={style.error}>{this.state.passwordError}</div>
        }

        return (

            <div>
                <h3>Token Name</h3>

                <List>
                    <InputItem
                        value={this.state.amount}

                        onChange={amount => this.inputAmount(amount)}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >amount</InputItem>
                </List>

                <WhiteSpace/>
                <List>
                    <InputItem
                        value={this.state.address}

                        onChange={address => this.inputAddress(address)}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >address</InputItem>
                </List>

                <WhiteSpace/>
                <List>
                    <InputItem
                        value={this.state.password}
                        type="password"
                        placeholder="******"
                        onChange={password => this.inputPassword(password)}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >password</InputItem>
                </List>
                {passwordErrorText}

                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>

                <h3>转账地址目前是没有校验的，随便输入都行，所以，请好好确认。测试币丢了也是丢了的。。。</h3>
                <div className={style.transfer}>
                    <Button
                        onClick={() => this.transfer()}
                    >确认转账</Button>
                </div>
            </div>
        );
    }
}

export default Transfer