Page({
  data: {
    "test": 0,
    "view": {
      "class": "red",
      "nodes": [
        {
          "type": 1,
          "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586097655064&di=86c41db8397d671d51d296df0cbe3713&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F29%2F20181229232103_KQwZC.jpeg"
        },
        {
          "type": 2,
          "text": "测试开发",
          "style": "font-size:20rpx;"
        },
        {
          "type": 0,
          "view": {
            "nodes": [
              {
                "class": "green",
                "type": 2,
                "text": "测试开发2",
                "style": "font-size:30rpx;"
              }
            ]
          }
        }
      ]
    }
  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({"test": 3})
      console.log(this.data)
    }, 500)
  }
})
