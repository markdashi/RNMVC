/**
 * @providesModule Main
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


import CommonGroupItem from 'CommonGroupItem'
import CommonRowItem from 'CommonRowItem'

import CommonArrowItem from 'CommonArrowItem'
import CommonSwitchItem from 'CommonSwitchItem'

import CommonFlatView from 'CommonFlatView'

export default class App extends Component<{}> {

    _setupGroup0(groups){

        var item0 = new CommonArrowItem('icon_mine_member_instructions','小码哥','年薪100W');
        item0.RowItemClick = function () {
            alert('item0点击')
        }
        var item1 = new CommonArrowItem('icon_mine_myAccount_address','到过的公园','');
        var item2 = new CommonArrowItem('icon_mine_myAccount_livingCity','阅历','');


        var group = new CommonGroupItem([item0,item1,item2],20);
        groups.push(group)
    }

    _setupGroup1(groups){

        var item0 = new CommonSwitchItem('icon_mine_myAccount_password','小码哥','年薪100W');
        var item1 = new CommonSwitchItem('icon_mine_myAccount_phone','到过的公园','');
        var item2 = new CommonRowItem('icon_mine_myAccount_setBirthday','阅历','年薪100W年薪100W年薪100W年薪100W');
        
        var group = new CommonGroupItem([item0,item1,item2],50);
        groups.push(group)
    }
    
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          
          var groups = [];

          //加载第一组数据
          this._setupGroup0(groups)
          //加载第二组数据
          this._setupGroup1(groups)

          this.state = {
              groups:groups
          };
          // console.log(groups)
      }
    
    
    render() {
        return (
            <CommonFlatView groups={this.state.groups}/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});