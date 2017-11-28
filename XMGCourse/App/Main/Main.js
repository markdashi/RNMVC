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

import CommonFlatView from 'CommonFlatView'

export default class App extends Component<{}> {

    _setupGroup0(groups){

        var item0 = new CommonRowItem('icon_mine_myAccount_address','小码哥','年薪100W');
        var item1 = new CommonRowItem('icon_mine_myAccount_livingCity','到过的公园','');
        var item2 = new CommonRowItem('icon_mine_myAccount_password','阅历','');


        var group = new CommonGroupItem([item0,item1,item2],0);
        groups.push(group)
    }

    _setupGroup1(groups){

        var item0 = new CommonRowItem('icon_mine_myAccount_address','小码哥','年薪100W');
        var item1 = new CommonRowItem('icon_mine_myAccount_livingCity','到过的公园','');
        var item2 = new CommonRowItem('icon_mine_myAccount_password','阅历','');
        
        var group = new CommonGroupItem([item0,item1],20);
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
          console.log(groups)
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