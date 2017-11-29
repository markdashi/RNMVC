/**
 * @providesModule CommonRowItem
 */

//ES5
function CommonRowItem(image,title,subTitle) {

    this.image = image;
    this.title = title;
    this.subTitle = subTitle

    this.RowItemClick = null
}

module.exports = CommonRowItem;
