import {View, IdGenerator} from "../../model/View"
import { MyEvent } from "../../model/MyEvent"
var localView: View = {
  id: IdGenerator.NextId(),
  classNames: "red",
  tapCallback: function(_:MyEvent){
    console.log("top level node clicked")
  },
  nodes: [
    {
      id: IdGenerator.NextId(),
      type: 1,
      src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586097655064&di=86c41db8397d671d51d296df0cbe3713&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F29%2F20181229232103_KQwZC.jpeg"
    },
    {
      id: IdGenerator.NextId(),
      type: 2,
      text: "测试开发",
      style: "font-size:20rpx;"
    },
    {
      id: IdGenerator.NextId(),
      type: 0,
      view: {
        id: IdGenerator.NextId(),
        nodes: [
          {
            classNames: "green",
            type: 2,
            text: "测试开发2",
            style: "font-size:30rpx;",
            id: IdGenerator.NextId(),
            tapCallback: function(_: MyEvent){
              if (this.classNames == "green"){
                this.classNames = "red"
              }
              else {
                this.classNames = "green"
              }
            }
          }
        ]
      }
    }
  ]
}
Page({
  data: {
    view: localView
  },
  onLoad() {
  }
})
