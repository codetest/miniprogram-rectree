import {View, ViewUtil} from "../model/View";
import { MyEvent } from "../model/MyEvent";
Component({
    properties: {
        view: Object
    },
    lifetimes: {
        attached: function() {
            var localView: View = <View>this.data.view
            console.log("component attached ", localView.id)
        },
        created: function() {
        }
    },
    options: {
        addGlobalClass: true
    },
    methods: {
        wholeClick: function(myevent: MyEvent) {
            var localView: View = <View>this.data.view
            if (localView.tapCallback){
                localView.tapCallback.apply(localView, [myevent])
                this.setData({view: localView})
            }
        },
        click: function(myevent: MyEvent){
            var localView: View = <View>this.data.view
            var id = myevent.target.dataset.nodeid
            console.log("click node id ", id)
            if (id) {
                var ret = ViewUtil.FindId(id, localView)
                if (ret && ret.tapCallback){
                    ret.tapCallback.apply(ret, [myevent])
                    var localView: View = <View>this.data.view
                    this.setData({view: localView})
                }
            }
        }
    }
})
