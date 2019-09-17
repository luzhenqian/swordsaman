import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faAlipay, faAndroid, faApple, faApplePay } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faSpinner, faAd, faAddressBook, faAddressCard, faClock, faAngleDoubleDown, faAngleDoubleLeft, faAngleDoubleRight, faAngleDoubleUp, faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
/**
 * 保存、回复、返回、查看、下载、导入、打印、关闭、增加、上传、下一步、上一步
 */
library.add(fab, faCheckSquare, faCoffee, faSpinner, faAd, // 广告
faAddressBook, // 电话薄
faAddressCard, // 名片
faClock, // 时钟
faAlipay, // 支付宝
faApplePay, // 苹果支付
faAndroid, // 安卓
faApple, // 苹果
faArrowDown, // 下箭头
faArrowUp, // 上箭头
faArrowLeft, // 左箭头
faArrowRight, // 右箭头
faAngleDoubleDown, // 下双箭头
faAngleDoubleLeft, // 左双箭头
faAngleDoubleRight, // 右双箭头
faAngleDoubleUp // 上双箭头
);
class Icon extends React.Component {
    render() {
        const Icon = styled(FontAwesomeIcon) ``;
        return React.createElement(Icon, Object.assign({}, this.props));
    }
}
export default Icon;
