/**
 * @providesModule CommonSwitchItem
 */


import CommonRowItem from 'CommonRowItem'

function CommonSwitchItem(image,title,subTitle) {

    CommonRowItem.call(this,image,title,subTitle)

    this.disabled = true
}
module.exports=CommonSwitchItem;